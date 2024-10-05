---
identifier: 202409241411
---
traits: [[termux]] [[font]] [[neovim]]
refs: [Reference(Youtube vid)](https://youtu.be/yfAtL6Ji684?si=37HHouwYfZDkBw5b)
# Termux 改字型(改成JetBrainsMono) (For NVChad)
```bash
# at ~/ or Downloads/ or wherever
mkdir JetBrainsMono # as download dir
cd JetBrainsMono
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.0/JetBrainsMono.zip
unzip JetBrainsMono.zip
cp <the ttf chosen> ~/.termux/font.ttf
# Restart Termux
# Then you have it!
```