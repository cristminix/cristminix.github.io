#/usr/bin/env bash
apt update
apt install slirp
mkdir ~/prefix
cd ~/prefix && 7z x /content/gdrive/uml-demo.7z
cp /content/gdrive/linux-5.10.147 ~/prefix/linux
cp /content/gdrive/slirp-working /usr/bin/slirp
cp /content/gdrive/slirp-working ~/prefix/slirp
chmod +x ~/prefix/linux

