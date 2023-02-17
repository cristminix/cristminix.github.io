#!/usr/bin/env bash

apt install vsftpd

#
cp /content/cristminix.github.io/colab/config/vsftpd/etc/vsftpd.conf /etc/
cp /content/cristminix.github.io/colab/config/vsftpd/etc/ftpusers /etc/

sudo service vsftpd start