#/bin/bash
echo "mkdir -p ~/go/bin"
mkdir -p ~/go/bin
chmod +x ./cristminix.github.io/colab/bin/bore
cp -v ./cristminix.github.io/colab/bin/bore .
chmod +x ./cristminix.github.io/colab/bin/gotty
cp -v ./cristminix.github.io/colab/bin/gotty ~/go/bin/
chmod +x ./cristminix.github.io/colab/bin/gotty.sh
cp -v ./cristminix.github.io/colab/bin/gotty.sh .


apt update
apt install dropbear
sudo service dropbear start
apt install build-essential checkinstall libssl-dev
curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
bash /tmp/nodesource_setup.sh && apt-get install -y nodejs
node --version && npm --version && npm install -g npm@latest
apt install nginx

cp -v ./cristminix.github.io/colab/config/nginx/default /etc/nginx/sites-available/default
cp -rfv ./cristminix.github.io/colab/www .
sudo service nginx restart

# add-apt-repository ppa:alessandro-strada/ppa
# sudo apt update
# sudo apt install google-drive-ocamlfuse