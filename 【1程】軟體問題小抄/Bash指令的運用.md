## Situation
為了讓我的這些筆記可以在手機跟筆電之間同步，我設定好了git；而為了使相關操作更加簡便，我還設定了bash script，使得push跟pull都能一鍵執行。

## Solution
### REF [Bash Scripting Tutorial – Linux Shell Script and Command Line for Beginners](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/)
這篇文章有點長，有些不是我需要的重點，我節錄一下最重要的部分：
```bash
chmod u+x <My script>.sh
```
> Here,
> - `chmod` modifies the ownership of a file for the current user :`u`.
> - `+x` adds the execution rights to the current user. This means that the user who is the owner can now run the script.
> - `run_all.sh` is the file we wish to run.

這個指令的用意在給予自己(使用者)執行這個特定腳本的權限，否則直接執行會跳出`bash: ./<My script>.sh: Permission denied`。

> You can run the script using any of the mentioned methods:
> - `sh run_all.sh`
> - `bash run_all.sh`
> - `./run_all.sh`

上述文章也提供了三種跑腳本的方法。

總之，在腳本寫好之後，用上面的方法就可以執行指令了。
