#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
sudo pkill vsftpd
sudo service ssh start
sudo service vsftpd start

/opt/bin/gotty.sh & $SCRIPT_DIR/start-server.sh --tunnel& bore local 25 --to=bore.pub > /tmp/bore.log