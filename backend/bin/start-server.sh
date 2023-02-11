#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
echo "Checking service map"
MAP=`node $SCRIPT_DIR/getServiceMap.js`
START_SCRIPT="$SCRIPT_DIR/$MAP"
bash $START_SCRIPT
# PORT=8088
# LOG_PATH="$SCRIPT_DIR/../logs/bore.log"
# echo $SCRIPT_DIR
# echo $LOG_PATH
# echo "Hello Logs" >> "$LOG_PATH/hello.log"
# export PATH=$PATH:/content
# echo "Running bore local $PORT --to=bore.pub with log : $LOG_PATH"
# bore local $PORT --to=bore.pub > "$LOG_PATH"