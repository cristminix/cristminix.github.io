#!/usr/bin/env bash

apt install debootstrap schroot
cp /content/cristminix.github.io/colab/config/schroot/schroot.conf /etc/schroot/

 sudo debootstrap --variant=buildd --arch amd64 debian_sid /content/gdrive/LINUX/debian_sid http://ftp.uk.debian.org/debian/

 

