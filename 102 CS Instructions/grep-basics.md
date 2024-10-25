---
id: grep-basics
aliases: []
tags: []
---

ref: https://phoenixnap.com/kb/grep-command-linux-unix-examples

basic grep: `grep <TEXT> <FILE>`

ignore case: flag `-i`

multiple files: `grep <TEXT> <FILE1> <FILE2> ... <FILE_N>`

under a directory: `grep <TEXT> <DIRECTORY>/*`

search in all subdirectories: `grep -r <TEXT> <DIRECTORY>` 

list matching file names: flag `-l`

show only the matched part: flag `-o`  

only whole words: flag `-w` 
