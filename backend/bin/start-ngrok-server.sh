#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PORT=8088
LOG_PATH="/tmp/ngrok.log"
# echo $SCRIPT_DIR
# echo $LOG_PATH
# echo "Hello Logs" >> "$LOG_PATH/hello.log"
export PATH=$PATH:/content
echo "Running ngrok http $PORT --log stdout with log : $LOG_PATH"
ngrok http $PORT --log stdout > "$LOG_PATH"