#!/usr/bin/env bash


cd /content
apt install openssh-server
cp /content/cristminix.github.io/colab/config/ssh/sshd_config /etc/ssh/

sudo service ssh start