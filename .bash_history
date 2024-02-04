sudo apt install./<file>.deb
sudo apt install ./<file>.deb
sudo dpkg -i <file>.deb
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
sudo apt install apt-transport-https
sudo apt update
sudo apt install code
# apt-get install git
apt-get install git
[200~# apt-get install git~
# apt-get install git
sudo apt-get install git-all
sudo apt install git
ssh username@address
ssh simgabrob@gmail.com
$ sudo apt-get install git
sudo apt-get install git
sudo apt-get update
sudo apt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev asciidoc xmlto docbook2x
git clone https://git.kernel.org/pub/scm/git/git.git
make all doc info prefix=/usr
sudo make install install-doc install-html install-info install-man prefix=/usr
apt-get install git
add-apt-repository ppa:git-core/ppa
apt update; apt install git
apt-get install git
