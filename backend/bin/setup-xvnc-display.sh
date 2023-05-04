# oracle-java7-installer
# sudo add-apt-repository ppa:webupd8team/java
# sudo apt-get update
apt install p7zip-full p7zip-rar
apt install default-jre

apt install xvfb x11vnc blackbox xterm  tightvnc-java tightvncserver

x11vnc -storepasswd

echo "Killing all existing instances of java, Xvfb, and x11vnc." >> $log
for i in {1..3} ; do
        killall -q java
        killall -q x11vnc
        killall -q Xvfb
        echo "Iteration $i of kill cycle complete." >> $log
        sleep 2
done

Xvfb :1 -screen 0 1280x800x24+32 -ac &
echo "Fake X launched."
x11vnc -display :1 --nocursor --httpdir /opt --httpport 6789 --usepw --forever --quiet --shared &
echo "VNC launched." 
DISPLAY=:1 blackbox &
echo "BlackBok launched." >> $log
