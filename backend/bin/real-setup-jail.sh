JAIL_DIR=/content/jail 
CHROOT_DIR=$JAIL_DIR/sid_amd64
sudo mkdir -p $CHROOT_DIR 
apt install nano
sudo apt install --assume-yes debootstrap
sudo debootstrap --variant=buildd focal $CHROOT_DIR


sudo umount $CHROOT_DIR/proc  $CHROOT_DIR/sys $CHROOT_DIR/dev $CHROOT_DIR/tmp
sudo mkdir -p $CHROOT_DIR/proc 
sudo mkdir -p $CHROOT_DIR/sys 
sudo mkdir -p $CHROOT_DIR/dev
sudo mkdir -p $CHROOT_DIR/tmp
sudo mount -t proc /proc $CHROOT_DIR/proc
sudo mount --rbind /sys $CHROOT_DIR/sys
sudo mount --rbind /dev $CHROOT_DIR/dev
sudo mount --rbind /tmp $CHROOT_DIR/tmp

sudo chroot $CHROOT_DIR /bin/bash


# inside chroot
passwd
adduser damar
apt install sudo
chown root:root /usr/bin/sudo && chmod 4755 /usr/bin/sudo
usermod -aG sudo damar
su damar
sudo apt install curl wget nano
sudo apt install git
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> ~/.bashrc
source ~/.bashrc
brew install python@3.9
brew install node
echo "malinkcorp">/etc/hostname
apt install iputils-ping
echo "127.0.0.1    localhost">>/etc/hosts
brew install opam
opam init
opam install google-drive-ocamlfuse
brew install p7zip
sudo apt install default-jre
sudo apt install xvfb x11vnc blackbox xterm tightvncserver tightvncserver
sudo apt install tightvnc-java
sudo apt install tightvncserver

x11vnc -storepasswd