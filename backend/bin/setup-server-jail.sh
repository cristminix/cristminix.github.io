# git remote set-url origin git@github.com:cristminix/colab_client.git
LAST_IMAGE_TTS=124EnMs5t3ssfBwziVSZ5gq1vlbt3rS0N
LAST_IMAGE="1--m70NXRBUlU-C_uuk-9xa0h7krY0n8H"
wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=1--m70NXRBUlU-C_uuk-9xa0h7krY0n8H' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=1--m70NXRBUlU-C_uuk-9xa0h7krY0n8H" -O sid_amd64.7z && rm -rf /tmp/cookies.txt

!./gotty.sh& cd ./cristminix.github.io/backend/ && ./bin/start-server.sh --tunnel & /content/cristminix.github.io/backend/bin/start-bore-ssh-server.sh > /content/cristminix.github.io/backend/logs/bore.log


