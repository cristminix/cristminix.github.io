#!/usr/bin/env bash

apt install debootstrap schroot
cp /content/cristminix.github.io/colab/config/schroot/sid_amd64.conf /etc/schroot/chroot.d/
mkdir -p /srv/chroot/sid_amd64
sudo debootstrap --arch=amd64 sid /srv/chroot/sid_amd64 http://ftp.uk.debian.org/debian/


sudo apt install --assume-yes debootstrap

CHROOT_DIR=/srv/chroot/ubuntu 
sudo mkdir -p $CHROOT_DIR 
sudo debootstrap --variant=buildd focal $CHROOT_DIR

sudo mount -t proc /proc $CHROOT_DIR/proc
sudo mount --rbind /sys $CHROOT_DIR/sys
sudo mount --rbind /dev $CHROOT_DIR/dev

sudo chroot $CHROOT_DIR /bin/bash