# 軟體安裝
1. Obsidian
	- Play Store上就有
2. Termux
	- 詳見Termux官方Repo

# Termux設置
1. 允許存取內部空間
	- `termux-mount`
2. 設置Obsidian存取位置
	- 在隨意位置`mkdir`(我選擇在Documents裡面創一個Obsidian資料夾)
	- 先不要開Obsidian
1. Git安裝
	- > `pkg install git`
	- 跳出錯誤訊息:
		- ```CANNOT LINK EXECUTABLE ssh library libcrypto so 3 not found needed by main executable```
	- 解法：參考[stackoverflow](https://stackoverflow.com/questions/71337612/cannot-link-executable-node-library-libcrypto-so-3-not-found/72033697#72033697)
		- > `apt upgrade && apt update`

# git clone
1. 用`git config --global credential.helper store`儲存之後登錄的帳號密碼(optional)
2. 在開好的vault位置使用`git clone <網址> .`
	1. 注意，後面那個點很重要，不然會出現`..Obsidian/<Vault>/<Vault>/`這種糟糕的情況。
	2. 第一次git會問你帳號密碼。因為我曾經設過[[Git Authentication failed#REF_1]]，所以密碼是用之前存好的token。