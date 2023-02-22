#!/usr/bin/env bash

apt install vsftpd

wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/vsftpd/etc/vsftpd.conf
cp vsftpd.conf /etc/
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/vsftpd/etc/ftpusers
cp ftpusers /etc/

sudo service vsftpd start