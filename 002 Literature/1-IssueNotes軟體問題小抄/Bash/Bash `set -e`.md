trait: [[bash]]
ref: https://stackoverflow.com/questions/22009364/is-there-a-try-catch-command-in-bash

# Bash: set -e

```bash
set -e
```
> It stops your script if any simple command fails.

# 後續問題
查到這份資料之後，我在我的auto sync腳本裡面，第一行加了這個指令，以在沒有找到對應變數或路徑時就結束，避免git在不該在的地方做操作：
```bash
set -e
MY_DEVICE="$(head -1 ~/THIS_DEVICE)"
echo "Currently syncing on $MY_DEVICE"
cd ~/shortcuts/TheVault/
# set +e <-- 一開始沒有加
git add .
git commit -m "$MY_DEVICE update $(date)"
git pull
git push
```
但我隨即發現，這樣在本地沒有新內容（沒有東西commit）的時候，git就會回傳1，他是**非零值**，而`set -e`會在任何一行出現非零回傳值時都結束。
但是，「本地沒有新內容時仍然進行pull」卻是有意義且合理的操作啊！該怎麼讓他執行呢？

於是我就又查到：
[CSDN](https://blog.csdn.net/xiaofei125145/article/details/39345331)
原來，這個指令是一個ON/OFF！那麼，我只要在跟路徑有關的地方做錯誤跳脫，而git有關的地方有什麼錯誤就手動除錯，這樣就達成預期的結果了！