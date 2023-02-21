#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

sudo service ssh start
sudo service vsftpd start

/opt/bin/gotty.sh & $SCRIPT_DIR/start-server.ssh --tunnel& bore local 25 --to=bore.pub