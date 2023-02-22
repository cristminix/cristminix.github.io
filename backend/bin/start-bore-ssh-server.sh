#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

export PATH=$PATH:/content
# echo "Running bore local $PORT --to=bore.pub with log : $LOG_PATH"
echo "cd /content/cristminix.github.io/backend">>~/.bashrc
bore local 25 --to=bore.pub 