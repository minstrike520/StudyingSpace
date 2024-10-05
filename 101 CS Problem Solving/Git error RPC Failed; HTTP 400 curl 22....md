---
identifier: 202409181743
---
traits: [[git]] #trial_and_error 
refs: https://stackoverflow.com/questions/77816301/git-error-rpc-failed-http-400-curl-22-the-requested-url-returned-error-400
# Git error RPC Failed; HTTP 400 curl 22...
# Solution
```bash
git config --global http.postBuffer 524288000
```

^68d6f2

問題解決！

# 事後諸葛

這一次的push包含了三次的push，加上我這兩天狂用Obsidian，寫了一堆筆記，可能是這樣導致檔案太大吧！