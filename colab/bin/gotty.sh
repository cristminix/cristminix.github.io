#/bin/bash

export PATH=$PATH:/root/go/bin
gotty -w --port 8088 bash & ./bore local 8088 --to bore.pub
