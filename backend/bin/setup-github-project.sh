#!/usr/bin/env bash
cd /content
echo "00 Cloning Project"
echo "00 Configuring ssh"
echo "cd /content/cristminix.github.io/backend">>~/.bashrc

mkdir -p ~/.ssh
cd ~/.ssh
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/git/.ssh/id_rsa
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/git/.ssh/id_rsa.pub
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/git/.ssh/known_hosts
chmod 400 ~/.ssh/id_rsa
chmod 400 ~/.ssh/id_rsa.pub

# cp /content/cristminix.github.io/colab/config/git/.ssh/* ~/.ssh/
cd /content
rm -rf ./cristminix.github.io
git clone https://github.com/cristminix/cristminix.github.io.git

cd ./cristminix.github.io
git remote set-url origin git@github.com:cristminix/cristminix.github.io.git 
ssh -vT git@github.com
chmod +x ./backend/bin/init-gce-server.sh

chmod +x ./backend/bin/start-bore-ssh-server.sh
chmod +x ./backend/bin/start-server.sh



echo "00 Confiring git"
git config --global user.email "cristminix@gmail.com"
git config --global user.name "Putra Budiman"

