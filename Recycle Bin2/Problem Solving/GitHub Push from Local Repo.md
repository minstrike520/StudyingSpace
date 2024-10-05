---
identifier: 202409261251
---
traits: [[git]] [[GitHub]]
# GitHub Push from Local Repo
首先要先在GitHub開啟一個空的repo，名稱隨意，不過建議使用跟本地repo差不多的名字。

接著，如果近期都沒用過的話，要使用GitHub CLI來做授權登入：
```bash
gh auth login
```
接著就會有互動式選項了。**記得要在圖形環境開**，這樣redirect去瀏覽器要登入的時候比較方便。

下一步就是在本地的commit & push：
```bash
cd LOCAL_REPO_DIR/
git init .
git config --global --add safe.directory $(pwd -P)
git add .
git commit -m "init"
git remote add origin ORIGIN_URL
git push --set-upstream origin master
```
