# Linux參考資料與教案
Linux 初學者入門：[https://linux.vbird.org/somepaper/20030501-Lost-Angel-Linux00-Newusers.pdf](https://linux.vbird.org/somepaper/20030501-Lost-Angel-Linux00-Newusers.pdf)
## ---教案參考---  
Linux 台中一中 簡報 [https://docs.google.com/presentation/d/1VGfQYG0xHcKtODSl-ZeGc2lPbHEpMC5dEP-I5elq1iQ/edit#slide=id.gf363748c16_0_71](https://docs.google.com/presentation/d/1VGfQYG0xHcKtODSl-ZeGc2lPbHEpMC5dEP-I5elq1iQ/edit?authuser=0#slide=id.gf363748c16_0_71)  
Linus Torvalds & Linux [https://www.youtube.com/watch?v=QxMojTT5ahw](https://www.youtube.com/watch?v=QxMojTT5ahw)  
操作系統歷史沿革 [https://www.youtube.com/watch?v=Qw89ZlNprpc](https://www.youtube.com/watch?v=Qw89ZlNprpc)  
操作系統簡介 [https://youtu.be/b8rP0RhN59k?si=6drij4lyGCoY2e8F](https://youtu.be/b8rP0RhN59k?si=6drij4lyGCoY2e8F)  
What is an operating system? [https://youtu.be/ACsLvXuaKxw?si=lnWu8gzgu2TOe5OW](https://youtu.be/ACsLvXuaKxw?si=lnWu8gzgu2TOe5OW)  
[https://gocifer.github.io/LinuxPre/03_before_birth_Unix/#_1969%E5%89%8D-%E7%8B%AE%E5%BF%83%E4%B9%8B%E7%81%AB-multics](https://gocifer.github.io/LinuxPre/03_before_birth_Unix/#_1969%E5%89%8D-%E7%8B%AE%E5%BF%83%E4%B9%8B%E7%81%AB-multics)  
  
## ---經驗談---  
從windows 轉換到 linux 的經驗 [https://www.youtube.com/watch?v=wCQv7rfv69Q](https://www.youtube.com/watch?v=wCQv7rfv69Q)  
  
## ---細項教學---  
Kernel [https://medium.com/bucketing/linux-x01-bios-kernel-os-image-b5026566ce01](https://medium.com/bucketing/linux-x01-bios-kernel-os-image-b5026566ce01)  
FHS [https://hackmd.io/@ncnu-opensource/Hktz9Tlzo](https://hackmd.io/@ncnu-opensource/Hktz9Tlzo)  
shell [https://hackmd.io/@tienyulin/linux-shell-b=asic-concept](https://hackmd.io/@tienyulin/linux-shell-b=asic-concept)  
/dev/ [https://blog.csdn.net/maopig/article/details/7195048](https://blog.csdn.net/maopig/article/details/7195048)



# 通識構思
Linux basic  
邏輯  
Rust introduction  
-> Linux & bash  
基礎  
1. linux的歷史與特點  
2. linux基礎指令 (+實)  
2a. ls, cd, cat, touch, mkdir  
2b. zip, unzip  
3. 將日常的開發使用CLI來完成  
3a. 使用???來撰寫並執行python程式 !(怎麼寫？vim、emac？可能太冗長)  
進階  
4. bash  
5. pipeline  

# 1/16 Linux實作練習版本一
簡介：在Linux系統中利用檔案系統佈置一個解謎遊戲，讓學生運用指令完成指定任務。  
參與方式：每個人獨自完成自己的遊戲  
執行時間：25分鐘  
核心工具：cd, ls, cat, grep, touch, mkdir, rm, echo, zip, unzip  
遊戲機制：利用cd, ls, cat來探索「環境」並得知「重要線索」；利用touch, mkdir, echo來寫入指定檔案；利用unzip來「打開寶箱」  
完成條件：得到指定檔案並cat之。  
【**想法**】  
利用加密zip的方式可以實現上鎖的寶箱。  
(?) 如何防止使用grep暴力尋找關鍵線索？  
**參考**  
[https://medium.com/@mikes_hacks/games-to-learn-linux-dbb9220b2a9a](https://medium.com/@mikes_hacks/games-to-learn-linux-dbb9220b2a9a)  
[https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)  
[https://linuxconfig.org/how-to-zip-file-with-password-on-linux](https://linuxconfig.org/how-to-zip-file-with-password-on-linux)