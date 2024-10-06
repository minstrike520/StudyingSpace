---
identifier: 202409251116
---
traits: [[appimage]] [[proot system]] #approach
# How to deal with AppImage on Proot Arch

[AppImage Install](https://zhuanlan.zhihu.com/p/389052463)
- run: `sudo pacman -S fuse2`
- `chmod u+x` the app image
- just execute it!
- Error occurred.
- Installing AppImage requires FUSE
- I found that "FUSE on Android requires that device be rooted"
- Just extract the files by using `--appimage-extract`
[Arch Desktop Entry](https://wiki.archlinux.org/title/Desktop_entries)
- Open `/usr/share/applications/` and create `<my_app>.desktop` and edit as the format provided in the doc
