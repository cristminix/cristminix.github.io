#!/usr/bin/env bash

cd /content
mkdir -p ~/.go/bin
cp /content/cristminix.github.io/colab/bin/gotty ~/.go/bin
cp /content/cristminix.github.io/colab/bin/gotty.sh /content
chmod +x ~/.go/bin/gotty
chmod +x /content/gotty.sh
