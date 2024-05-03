[reference (StackOverflow)](https://stackoverflow.com/questions/77816301/git-error-rpc-failed-http-400-curl-22-the-requested-url-returned-error-400)
# Solution
```bash
git config --global http.postBuffer 524288000
```
問題解決！

# 事後諸葛

這一次的push包含了三次的push，加上我這兩天狂用Obsidian，寫了一堆筆記，可能是這樣導致檔案太大吧！