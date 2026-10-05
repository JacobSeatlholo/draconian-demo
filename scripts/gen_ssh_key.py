#!/usr/bin/env python3
"""Generate an ed25519 SSH keypair in OpenSSH format (no ssh-keygen available)."""
import os
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.serialization import (
    Encoding,
    NoEncryption,
    PrivateFormat,
    PublicFormat,
)

SSH_DIR = os.path.expanduser("~/.ssh")
KEY_PATH = os.path.join(SSH_DIR, "id_ed25519")
COMMENT = "draconian-demo-deploy"

os.makedirs(SSH_DIR, exist_ok=True)
os.chmod(SSH_DIR, 0o700)

key = Ed25519PrivateKey.generate()

pem = key.private_bytes(
    Encoding.PEM,
    PrivateFormat.OpenSSH,
    NoEncryption(),
).decode()

pub = key.public_key().public_bytes(
    Encoding.OpenSSH,
    PublicFormat.OpenSSH,
).decode() + f" {COMMENT}"

with open(KEY_PATH, "w") as f:
    f.write(pem)
os.chmod(KEY_PATH, 0o600)

with open(KEY_PATH + ".pub", "w") as f:
    f.write(pub)
os.chmod(KEY_PATH + ".pub", 0o644)

print("Private key:", KEY_PATH)
print("Public key :", KEY_PATH + ".pub")
print()
print("=== PUBLIC KEY (add this to GitHub) ===")
print(pub)
