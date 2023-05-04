#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PORT=22
LOG_PATH="/tmp/bore.log"
PATH="/container/dist/sbin:/container/dist/bin:/sbin:/bin:/usr/sbin:/usr/bin"
echo "Running bore local $PORT --to=bore.pub with log : $LOG_PATH"
bore local $PORT --to=bore.pub > "$LOG_PATH"