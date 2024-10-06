---
identifier: 202409251114
---
traits: [[pandoc]] [[obsidian]] [[proot system]] #approach 
refs: [tar.gz install](https://bbs.archlinux.org/viewtopic.php?id=66845)
# Obsidian Pandoc on Proot Arch Linux
*Note: This Installation is based on proot archlinux on termux.*
## Pandoc Install 
- Download pandoc arm64 tar.gz from release page
- Extract, get a folder with 'bin' and 'share' inside
- Read pandoc official install instuction
- move folder to ~/Applications

## Obsidian Install
- Download arm64 AppImage
- Extract it
- Move folder to ~/Applications
- Edit AppRun: replace line 45
- To excecute it by terminal, use 'bash AppRun --no-sandbox' 

## Unzipping tarball
unzipping: `tar -xvzf <target>.tar.gz`

## Dealing with AppImage

![[Proot-Arch How to Deal With AppImage]]