他本來預設的ESC 是對應成android預設的返回鍵 我一開始以為這又是設計不良 但還好查到了解方
```bash
edit ~/.termux/termux.properties
# Search for "# Back Key" session
# Uncomment `back-key=escape`
# Save and quit Termux
# Reopen Termux and it shall work!
```
# 同場加映：Equivalant of esc
Do you know? `^[` can be the same effect as `ESC`! Quite interesting, huh?
