#!/usr/bin/env bash

apt install debootstrap schroot
cp /content/cristminix.github.io/colab/config/schroot/schroot.conf /etc/schroot/
cd /
schroot -c debian_sid -u root
groupadd crontab