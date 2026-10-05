#!/usr/bin/env python3
"""GIT_SSH wrapper using paramiko (sandbox has no openssh binary).

Usage (set via GIT_SSH env var):
    GIT_SSH=/home/z/my-project/scripts/git_ssh_paramiko.py git push origin main

Parses OpenSSH-style args git passes to a GIT_SSH helper:
    [-p port] [-i keyfile] [-o opt]... [-l user] [--] host command...
"""
import os
import sys
import threading

import paramiko

args = sys.argv[1:]

port = 22
user = "git"
host = None
remote_cmd = []
keyfile = os.environ.get("GIT_SSH_KEY", os.path.expanduser("~/.ssh/id_ed25519"))

i = 0
while i < len(args):
    a = args[i]
    if a == "-p" and i + 1 < len(args):
        port = int(args[i + 1])
        i += 2
    elif a == "-i" and i + 1 < len(args):
        keyfile = args[i + 1]
        i += 2
    elif a == "-l" and i + 1 < len(args):
        user = args[i + 1]
        i += 2
    elif a == "-o":
        i += 2  # skip option name + value
    elif a.startswith("-") and a != "--":
        i += 1  # skip boolean flags like -4, -6, -T, -N
    elif a == "--":
        i += 1
    else:
        host = a
        remote_cmd = args[i + 1 :]
        break

if remote_cmd and remote_cmd[0] == "--":
    remote_cmd = remote_cmd[1:]

# git passes user@host as a single arg — split it
if host and "@" in host:
    user, host = host.split("@", 1)

if host is None or not remote_cmd:
    sys.stderr.write("git_ssh_paramiko: missing host or command\n")
    sys.exit(255)

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.RejectPolicy())
try:
    client.load_system_host_keys(os.path.expanduser("~/.ssh/known_hosts"))
except Exception:
    pass

try:
    pkey = paramiko.Ed25519Key.from_private_key_file(keyfile)
except Exception as e:
    sys.stderr.write(f"git_ssh_paramiko: cannot load key {keyfile}: {e}\n")
    sys.exit(255)

try:
    client.connect(
        host,
        port=port,
        username=user,
        pkey=pkey,
        look_for_keys=False,
        allow_agent=False,
        timeout=20,
        banner_timeout=30,
    )
except Exception as e:
    sys.stderr.write(f"git_ssh_paramiko: connect failed: {e}\n")
    sys.exit(255)

chan = client.get_transport().open_session()
chan.exec_command(" ".join(remote_cmd))

stdin = sys.stdin.buffer
stdout = sys.stdout.buffer
stderr = sys.stderr.buffer


def stdin_reader():
    try:
        while True:
            data = stdin.read(32768)
            if not data:
                break
            chan.sendall(data)
        chan.shutdown_write()
    except Exception:
        pass


t = threading.Thread(target=stdin_reader, daemon=True)
t.start()

while True:
    got = False
    if chan.recv_ready():
        stdout.write(chan.recv(32768))
        stdout.flush()
        got = True
    if chan.recv_stderr_ready():
        stderr.write(chan.recv_stderr(32768))
        stderr.flush()
        got = True
    if chan.exit_status_ready() and not chan.recv_ready() and not chan.recv_stderr_ready():
        break
    if not got:
        import time

        time.sleep(0.01)

while chan.recv_ready():
    stdout.write(chan.recv(32768))
    stdout.flush()
while chan.recv_stderr_ready():
    stderr.write(chan.recv_stderr(32768))
    stderr.flush()

code = chan.recv_exit_status()
client.close()
sys.exit(code)
