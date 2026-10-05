#!/usr/bin/env python3
"""Probe GitHub SSH auth with the deploy key (equivalent of `ssh -T git@github.com`)."""
import sys

import paramiko

KEY = "/home/z/.ssh/id_ed25519"

key = paramiko.Ed25519Key.from_private_key_file(KEY)
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.RejectPolicy())
client.load_host_keys("/home/z/.ssh/known_hosts")

try:
    client.connect(
        "github.com", port=22, username="git", pkey=key,
        look_for_keys=False, allow_agent=False, timeout=20, banner_timeout=30,
    )
except paramiko.ssh_exception.AuthenticationException as e:
    print(f"AUTH-FAIL: {e}")
    print("=> Transport OK, but this public key is NOT registered on GitHub yet.")
    sys.exit(2)
except Exception as e:
    print(f"TRANSPORT-FAIL: {e}")
    sys.exit(3)

chan = client.get_transport().open_session()
chan.exec_command("")
import time
deadline = time.time() + 15
out = b""
while time.time() < deadline and not chan.exit_status_ready():
    if chan.recv_stderr_ready():
        out += chan.recv_stderr(4096)
    time.sleep(0.05)
while chan.recv_stderr_ready():
    out += chan.recv_stderr(4096)
code = chan.recv_exit_status()
client.close()

msg = out.decode(errors="replace").strip()
print(f"github.com reply (exit {code}): {msg}")
if "successfully authenticated" in msg:
    print("=> SUCCESS: key registered on GitHub. Push is possible once remote URL is set.")
    sys.exit(0)
else:
    print("=> Key not accepted for repo access.")
    sys.exit(1)
