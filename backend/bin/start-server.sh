#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
if [ "$1" = "--local" ]; then
  export DISABLE_TUNNEL=1		
  npm run dev
elif [ "$1" = "--tunnel" ]; then
	echo "Checking service map"
	MAP=`node $SCRIPT_DIR/getServiceMap.js`
	START_SCRIPT="$SCRIPT_DIR/$MAP"
	export PATH=$PATH:/content
	bash $START_SCRIPT & npm run dev 
else
	echo "$0 --local  # local only"	 
	echo "$0 --tunnel # enable tunnel"	 
fi

