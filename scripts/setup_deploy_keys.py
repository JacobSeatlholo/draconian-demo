#!/usr/bin/env python3
"""Ensure an ed25519 deploy keypair exists for GitHub pushes (no ssh-keygen in sandbox).

Strategy:
  1. If keys are cached in PROJECT_DEPLOY_DIR (.deploy/, survives sandbox restarts),
     restore them to ~/.ssh.
  2. Otherwise generate a fresh ed25519 keypair in OpenSSH format (via cryptography)
     and cache it in .deploy/ so it survives restarts.
  3. Build ~/.ssh/known_hosts with GitHub's official host keys (fetched live from
     api.github.com/meta, with a hardcoded ed25519 fallback).

Prints the public key for GitHub registration.
"""
import json
import os
import stat
import urllib.request

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives.serialization import (
    Encoding,
    NoEncryption,
    PrivateFormat,
    PublicFormat,
)

SSH_DIR = os.path.expanduser("~/.ssh")
PROJECT_DEPLOY_DIR = "/home/z/my-project/.deploy"
KEY_PATH = os.path.join(SSH_DIR, "id_ed25519")
COMMENT = "draconian-demo-deploy"

# Official GitHub host key (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)
GITHUB_ED25519_FALLBACK = (
    "AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl"
)


def fetch_github_host_keys():
    """Fetch GitHub's current SSH host keys from the public meta API."""
    try:
        req = urllib.request.Request(
            "https://api.github.com/meta",
            headers={"Accept": "application/vnd.github+json", "User-Agent": "deploy-demo"},
        )
        with urllib.request.urlopen(req, timeout=15) as r:
            meta = json.load(r)
        keys = meta.get("ssh_keys") or []
        if keys:
            return keys
    except Exception as e:
        print(f"note: could not fetch api.github.com/meta ({e}); using fallback host key")
    return [GITHUB_ED25519_FALLBACK]


def write_known_hosts():
    lines = [f"github.com {k}" for k in fetch_github_host_keys()]
    data = "\n".join(lines) + "\n"
    for d in (SSH_DIR, PROJECT_DEPLOY_DIR):
        with open(os.path.join(d, "known_hosts"), "w") as f:
            f.write(data)
        os.chmod(os.path.join(d, "known_hosts"), 0o644)


def main():
    os.makedirs(SSH_DIR, exist_ok=True)
    os.chmod(SSH_DIR, stat.S_IRWXU)
    os.makedirs(PROJECT_DEPLOY_DIR, exist_ok=True)

    cached_priv = os.path.join(PROJECT_DEPLOY_DIR, "id_ed25519")
    cached_pub = cached_priv + ".pub"

    if os.path.exists(cached_priv) and os.path.exists(cached_pub):
        # restore from project cache (survives sandbox restarts)
        with open(cached_priv) as f:
            pem = f.read()
        with open(cached_pub) as f:
            pub = f.read().strip()
        source = "restored from project cache"
    else:
        key = Ed25519PrivateKey.generate()
        pem = key.private_bytes(
            Encoding.PEM, PrivateFormat.OpenSSH, NoEncryption()
        ).decode()
        pub = (
            key.public_key()
            .public_bytes(Encoding.OpenSSH, PublicFormat.OpenSSH)
            .decode()
            + f" {COMMENT}"
        )
        with open(cached_priv, "w") as f:
            f.write(pem)
        os.chmod(cached_priv, 0o600)
        with open(cached_pub, "w") as f:
            f.write(pub + "\n")
        os.chmod(cached_pub, 0o644)
        source = "newly generated"

    # install into ~/.ssh
    with open(KEY_PATH, "w") as f:
        f.write(pem)
    os.chmod(KEY_PATH, 0o600)
    with open(KEY_PATH + ".pub", "w") as f:
        f.write(pub + "\n")
    os.chmod(KEY_PATH + ".pub", 0o644)

    write_known_hosts()

    # fingerprint for verification
    try:
        loaded = serialization.load_ssh_private_key(pem.encode(), password=None)
        digest = loaded.public_key().public_bytes(
            Encoding.OpenSSH, PublicFormat.OpenSSH
        )
    except Exception:
        digest = pub.split()[0]

    print(f"Deploy key: {source}")
    print(f"Private key: {KEY_PATH}  (+ cached at {cached_priv})")
    print(f"Known hosts: {SSH_DIR}/known_hosts ({len(fetch_github_host_keys())} GitHub host keys)")
    print()
    print("=== PUBLIC KEY (add this to GitHub -> Settings -> SSH keys) ===")
    print(pub)


if __name__ == "__main__":
    main()
