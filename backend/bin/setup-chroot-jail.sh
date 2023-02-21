#!/usr/bin/env bash

apt install debootstrap schroot
cp /content/cristminix.github.io/colab/config/schroot/sid_amd64.conf /etc/schroot/chroot.d/
mkdir -p /srv/chroot/sid_amd64
sudo debootstrap --arch=amd64 sid /srv/chroot/sid_amd64 http://ftp.uk.debian.org/debian/


sudo apt install --assume-yes debootstrap

JAIL_DIR=/content/jail 
CHROOT_DIR=$JAIL_DIR/sid_amd64
sudo mkdir -p $CHROOT_DIR 
cd $JAIL_DIR
wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=11ooFNgAeOwgyDQxVuIvKM-6SX_DzG3Sc' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=11ooFNgAeOwgyDQxVuIvKM-6SX_DzG3Sc" -O sid_amd64.7z && rm -rf /tmp/cookies.txt
7z x -aoa sid_amd64.7z
sudo mkdir -p $CHROOT_DIR/proc 
sudo mkdir -p $CHROOT_DIR/sys 
sudo mkdir -p $CHROOT_DIR/dev
sudo mount -t proc /proc $CHROOT_DIR/proc
sudo mount --rbind /sys $CHROOT_DIR/sys
sudo mount --rbind /dev $CHROOT_DIR/dev

sudo chroot $CHROOT_DIR /bin/bash

sudo debootstrap --variant=buildd focal $CHROOT_DIR

sudo umount $CHROOT_DIR/proc  $CHROOT_DIR/sys $CHROOT_DIR/dev