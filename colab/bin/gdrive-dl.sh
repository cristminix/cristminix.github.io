#!/usr/bin/env bash

COOKIE_FILE=/tmp/cookies.txt
FILE_0="11ooFNgAeOwgyDQxVuIvKM-6SX_DzG3Sc"

wget --load-cookies $COOKIE_FILE "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate "https://docs.google.com/uc?export=download&id=$FILE_0" -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=$FILE_0" -O sid_amd64.7z && rm -rf $COOKIE_FILE
