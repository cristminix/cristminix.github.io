git remote set-url origin git@github.com:cristminix/colab_client.git

https://drive.google.com/file/d//view?usp=sharing
wget --no-check-certificate 'https://docs.google.com/uc?export=download&id=11ooFNgAeOwgyDQxVuIvKM-6SX_DzG3Sc' -O sid_amd64.7z

wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=11ooFNgAeOwgyDQxVuIvKM-6SX_DzG3Sc' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=11ooFNgAeOwgyDQxVuIvKM-6SX_DzG3Sc" -O sid_amd64.7z && rm -rf /tmp/cookies.txt