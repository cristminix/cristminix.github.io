#!/usr/bin/env bash

apt install passwd dropbear wget curl iputils-ping rclone php nano php-pgsql
echo "root:sejati86"|sudo chpasswd

cd /content


sudo service dropbear start
cp ~/.bashrc bashrc.backup
mkdir -p /session
echo "# RClone Config file">>./bashrc
echo "export SESSION_DIR=/session">>./bashrc
echo "RCLONE_CONFIG=/deploy/rclone/rclone.conf">>./bashrc
echo "export RCLONE_CONFIG">>~/.bashrc

rm -rf bore
rm -rf gotty

# download bore tunnel
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/bin/bore
chmod +x ./bore

# download gotty
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/bin/gotty
chmod +x ./gotty

#setup apache
cd /var/www/html
git clone https://github.com/notstupidbot/colab-admin-php
mv colab-admin-php/* .
mv colab-admin-php/.git .
#rm -rf colab-admin-php
rm -rf index.html

cp apache.conf /etc/apache2/sites-available/000-default.conf
sudo a2enmod rewrite
sudo service apache2 restart