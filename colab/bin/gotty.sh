#/bin/bash

export PATH=$PATH:/root/go/bin:/content
gotty -w --port 8089 bash & localtonet > /dev/null&
