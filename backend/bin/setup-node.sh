#!/usr/bin/env bash
apt update
apt install build-essential checkinstall libssl-dev
curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
bash /tmp/nodesource_setup.sh && apt-get install -y nodejs
node --version && npm --version && npm install -g npm@latest