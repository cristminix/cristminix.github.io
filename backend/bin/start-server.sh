#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
echo "Checking service map"
MAP=`node $SCRIPT_DIR/getServiceMap.js`
START_SCRIPT="$SCRIPT_DIR/$MAP"
export PATH=$PATH:/content
bash $START_SCRIPT & npm run dev