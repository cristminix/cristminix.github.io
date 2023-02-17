#!/usr/bin/env bash
cd /content
echo "00 Cloning Project"
echo "00 Configuring ssh"
mkdir -p ~/.ssh
cd ~/.ssh
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/git/.ssh/id_rsa
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/git/.ssh/id_rsa.pub
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/git/.ssh/known_hosts

# cp /content/cristminix.github.io/colab/config/git/.ssh/* ~/.ssh/
cd /content
rm -rf ./cristminix.github.io
git clone git@github.com:cristminix/cristminix.github.io.git
chmod +x ./cristminix.github.io/backend/bin/init-gce-server.sh

echo "cd /content/cristminix.github.io/backend">>~/.bashrc
chmod +x ./cristminix.github.io/backend/bin/start-bore-ssh-server.sh
chmod +x ./cristminix.github.io/backend/bin/start-server.sh



echo "00 Confiring git"
git config --global user.email "cristminix@gmail.com"
git config --global user.name "Putra Budiman"

