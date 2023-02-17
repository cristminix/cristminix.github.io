#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# 00
# echo "00 Clone Project"
# bash "$SCRIPT_DIR/setup-github-project.sh"

# 00
echo "00 Install Text Editor"
apt install nano

# 00
echo "00 Setup Dropbear"
bash "$SCRIPT_DIR/setup-dropbear.sh"

# 01
echo "01 Setup Passwd"
bash "$SCRIPT_DIR/setup-passwd.sh"

# 03
echo "00 Setup bore"
bash "$SCRIPT_DIR/setup-bore.sh"

# 04
echo "00 Setup ngrok"
bash "$SCRIPT_DIR/setup-ngrok.sh"


# 05
echo "05 Setup localtonet"
bash "$SCRIPT_DIR/setup-localtonet.sh"

# 06
echo "00 Setup node"
bash "$SCRIPT_DIR/setup-node.sh"
# 06
echo "00 Setup vsftpd"
bash "$SCRIPT_DIR/setup-vsftpd.sh"
# 07
echo "00 Setup backend-node-modules"
bash "$SCRIPT_DIR/setup-backend-node-modules.sh"