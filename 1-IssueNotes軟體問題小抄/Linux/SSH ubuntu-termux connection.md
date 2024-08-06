# Ubuntu連接Termux
[reference](https://ivonblog.com/posts/termux-openssh/)
前提:要連到同一個網路
## Ubuntu端
沒有甚麼特別的要求，只需要ssh。
## Termux端
```bash
passwd #termux的密碼設定
pkg install openssh
sshd #啟動服務
```
得到位址:
```bash
$ ifconfig
...
...
wlan0: ...
		inet <IPADDR> netmask ...
```

## 連接
Termux的port號固定是8022。
```bash
ssh minstrike520@<IPADDR> -p 8022
```