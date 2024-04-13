```bash
#(rooted)
#(改過terminal字體)
apt-get update
apt-get upgrade
apt-get install sudo
apt install curl
apt install gcc
apt install pip
pip install cmake
sudo apt-get install ninja-build gettext cmake unzip curl build-essential
apt install git
git clone https://github.com/neovim/neovim
cd neovim && make CMAKE_BUILD_TYPE=RelWithDebInfo
sudo make install
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
nvim
# 開起來給nvchad跑
```