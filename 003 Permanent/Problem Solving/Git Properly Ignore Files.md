---
identifier: 202409262349
---
traits: [[git]] [[filesystem]]
refs: https://gitbook.tw/chapters/using-git/ignore
# Git Properly Ignore Files
```sh
vi .gitignore
git rm --cached <IGNORED FILES>
git add .
git commit
```

其中，`git rm --cached`是很重要的一步，做了之後，才能使這些要被忽略的檔案正式脫離git的控管。=