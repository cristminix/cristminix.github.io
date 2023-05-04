1NUChO4zbloZ0zdfqXfNQptT1oPjkJuIj

381263800540-tlvu38tbglo11pcs2nkmqbc4m57gkce7.apps.googleusercontent.com

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

	
rc34iai2hryj7fp
App secret
pco882jor4n50zx
sl.BZX0X6iwUldIH-E9i4CtNECfp2RBZ4LNg5F_b5RCGS4bTGSV7FM67dTA8I2Sde1LXk50wtRd2U3yazO1Fi_sMd2kc_SGYIU-kMUNsE-ktr6lTjnSNmQr6FXPTOxSJ8KZ1bNzeJA

rclone mount mydropbox: /mnt/dropbox/

ifconfig sit0 10.0.2.14 netmask 255.255.255.240 broadcast 10.0.2.15
  ubd0=./image.raw \


./linux \
  mem=2G \
  root=/dev/root \
  eth0=slirp,,./slirp \
  con1=fd:0,fd:1 con=pts

./linux \
  mem=2G \
  ubd0=./image.raw \
  root=/dev/ubda \
  eth0=slirp,,./slirp \
  con1=fd:0,fd:1 con=pts

  ./linux \
  root=/dev/root \
  rootfstype=hostfs \
  rootflags=$HOME/prefix/uml-demo \
  rw \
  mem=2G \
  eth0=slirp,,slirp \
  con1=fd:0,fd:1  init=/init.sh

  ./linux \
  root=/dev/root \
  rootfstype=hostfs \
  rootflags=$HOME/prefix/sid\
  rw \
  mem=2096M \
  eth0=slirp,,$HOME/prefix/slirp \
  init=/init.sh


  sudo make modules_install INSTALL_MOD_PATH=~/prefix/uml-demo/ ARCH=um
  sudo make modules_install INSTALL_MOD_PATH=../module_install-5.10.147 ARCH=um