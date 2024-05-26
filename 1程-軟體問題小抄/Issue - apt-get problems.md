```
W: [http://ftp.debian.org/debian/dists/buster/InRelease](http://ftp.debian.org/debian/dists/buster/InRelease): Key is stored in legacy [trusted.gpg](http://trusted.gpg) keyring (/etc/apt/[trusted.gpg](http://trusted.gpg)), see the DEPRECATION section in apt-key(8) for details.  
      W: Target Packages (main/binary-arm64/Packages) is configured multiple times in /etc/apt/[sources.list:43](http://sources.list:43) and /etc/apt/[sources.list:45](http://sources.list:45)  
W: Target Packages (main/binary-all/Packages) is configured multiple times in /etc/apt/[sources.list:43](http://sources.list:43) and /etc/apt/[sources.list:45](http://sources.list:45)  
W: Target Translations (main/i18n/Translation-en) is configured multiple times in /etc/apt/[sources.list:43](http://sources.list:43) and /etc/apt/[sources.list:45](http://sources.list:45)  
W: [http://ftp.debian.org/debian/dists/buster-updates/InRelease](http://ftp.debian.org/debian/dists/buster-updates/InRelease): Key is stored in legacy [trusted.gpg](http://trusted.gpg) keyring (/etc/apt/[trusted.gpg](http://trusted.gpg)), see the DEPRECATION section in apt-key(8) for details.  
W: Target Packages (main/binary-arm64/Packages) is configured multiple times in /etc/apt/[sources.list:44](http://sources.list:44) and /etc/apt/[sources.list:46](http://sources.list:46)  
W: Target Packages (main/binary-all/Packages) is configured multiple times in /etc/apt/[sources.list:44](http://sources.list:44) and /etc/apt/[sources.list:46](http://sources.list:46)  
W: Target Translations (main/i18n/Translation-en) is configured multiple times in /etc/apt/[sources.list:44](http://sources.list:44) and /etc/apt/[sources.list:46](http://sources.list:46)  
W: Target Packages (main/binary-arm64/Packages) is configured multiple times in /etc/apt/[sources.list:43](http://sources.list:43) and /etc/apt/[sources.list:45](http://sources.list:45)  
W: Target Packages (main/binary-all/Packages) is configured multiple times in /etc/apt/[sources.list:43](http://sources.list:43) and /etc/apt/[sources.list:45](http://sources.list:45)  
W: Target Translations (main/i18n/Translation-en) is configured multiple times in /etc/apt/[sources.list:43](http://sources.list:43) and /etc/apt/[sources.list:45](http://sources.list:45)  
W: Target Packages (main/binary-arm64/Packages) is configured multiple times in /etc/apt/[sources.list:44](http://sources.list:44) and /etc/apt/[sources.list:46](http://sources.list:46)  
W: Target Packages (main/binary-all/Packages) is configured multiple times in /etc/apt/[sources.list:44](http://sources.list:44) and /etc/apt/[sources.list:46](http://sources.list:46)  
W: Target Translations (main/i18n/Translation-en) is configured multiple times in /etc/apt/[sources.list:44](http://sources.list:44) and /etc/apt/[sources.list:46](http://sources.list:46)  
```

# 1. Target packages is configured multiple times
This one is relatively easy to solve. I just went to the specified `/etc/apt/sources.list` and deleted the repeated lines and tried `sudo apt-get update` one more time, then the corresponding errors didn't show again. However, there are still 2 lines that endured.

```
W: [http://ftp.debian.org/debian/dists/buster-updates/InRelease](http://ftp.debian.org/debian/dists/buster-updates/InRelease): Key is stored in legacy [trusted.gpg](http://trusted.gpg) keyring (/etc/apt/[trusted.gpg](http://trusted.gpg)), see the DEPRECATION section in apt-key(8) for details.  
W: [http://ftp.debian.org/debian/dists/buster/InRelease](http://ftp.debian.org/debian/dists/buster/InRelease): Key is stored in legacy [trusted.gpg](http://trusted.gpg) keyring (/etc/apt/[trusted.gpg](http://trusted.gpg)), see the DEPRECATION section in apt-key(8) for details.  
```
[reference 2](https://blog.csdn.net/lsw13/article/details/132752486)
According to this article, these messages are actually warnings, so for normal use cases, it won't bother me to update, so I've found that this