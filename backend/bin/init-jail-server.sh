#!/usr/bin/env bash


#change hostname
echo malinkcorp>/etc/hostname

# create equivalent environment of gce

mkdir /projects
ln -ns /projects /content

#clone github project backend

cd /content

wget https://github.com/cristminix/cristminix.github.io/raw/main/backend/bin/setup-github-project.sh
chmod +x setup-github-project.sh
./setup-github-project.sh