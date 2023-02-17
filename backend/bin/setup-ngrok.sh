#!/usr/bin/env bash

cd /content
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar -xvf ngrok-v3-stable-linux-amd64.tgz
./ngrok authtoken 2KRNVIf8yjdoth0L4hVPOC9VDbx_5hi5T3vy2N9xFcE77tWTu
rm -rf ngrok-v3-stable-linux-amd64.tgz