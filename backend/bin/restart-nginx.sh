#!/usr/bin/env bash
CWD=`pwd`
nginx=`which nginx`
NGINX_DIR=`dirname $nginx`
# echo "/$nginx/"
cd $NGINX_DIR
PID=`ps -ef | awk '/nginx/{print $2}'`
if [[ $PID ]]; then
	echo $PID
	kill $PID
fi
nginx&

cd "$CWD"