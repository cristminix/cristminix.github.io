#!/usr/bin/env bash

cd /content
wget https://github.com/cristminix/cristminix.github.io/raw/main/colab/config/localtonet.zip
unzip localtonet.zip
rm -rf localtonet.zip
mv localtonet ~/.local/share/
wget https://localtonet.com/download/localtonet-linux-x64.zip
unzip localtonet-linux-x64.zip && chmod +x localtonet
rm -rf localtonet-linux-x64.zip
