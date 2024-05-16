*Note: This Installation is based on proot archlinux on termux.*


[tar.gz install](https://bbs.archlinux.org/viewtopic.php?id=66845)

# Pandoc Install 
- Download pandoc arm64 tar.gz from release page
- Extract, get a folder with 'bin' and 'share' inside
- Read pandoc official install instuction
- move folder to ~/Applications

# Obsidian Install
- Download arm64 AppImage
- Extract it
- Move folder to ~/Applications
- Edit AppRun: replace line 45
- To excecute it by terminal, use 'bash AppRun --no-sandbox' 

# How to deal with tar.gz
unzipping: tar -xvzf <target>.tar.gz
# How to deal with AppImage
[AppImage Install](https://zhuanlan.zhihu.com/p/389052463)
- run: 'sudo pacman -S fuse2'
- 'chmod u+x' the app image
- just execute it!
- Error occurred.
- Installing AppImage requires FUSE
- I found that "FUSE on Android requires that device be rooted"
- Just extract the files by using '--appimage-extract'
[Arch Desktop Entry](https://wiki.archlinux.org/title/Desktop_entries)
- Open /usr/share/applications/ and create '<my_app>.desktop' and edit as the format provided in the doc
