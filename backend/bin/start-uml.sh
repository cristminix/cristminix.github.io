
mkdir /dev/uml
sudo mount -t tmpfs -o size=8096m tmpfs /dev/uml


cd ~/prefix
#con1=fd:0,fd:1
./linux root=/dev/root rootfstype=hostfs rootflags=$HOME/prefix/uml-demo rw mem=2G eth0=slirp,,slirp init=/init.sh


# dl ubuntu server
 wget https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso