#/bin/bash
echo "mkdir -p ~/go/bin"
!mkdir -p ~/go/bin
!chmod +x ./cristminix.github.io/colab/bin/bore
!cp -v ./cristminix.github.io/colab/bin/bore .
!chmod +x ./cristminix.github.io/colab/bin/gotty
!cp -v ./cristminix.github.io/colab/bin/gotty ~/go/bin/
!chmod +x ./cristminix.github.io/colab/bin/gotty.sh
!cp -v ./cristminix.github.io/colab/bin/gotty.sh .

# add-apt-repository ppa:alessandro-strada/ppa
# sudo apt update
# sudo apt install google-drive-ocamlfuse