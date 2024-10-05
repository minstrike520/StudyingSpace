---
identifier: 202409291343
---
traits: [[ssh]]
refs: 
- https://www.alibabacloud.com/help/tc/simple-application-server/support/how-to-solve-the-error-of-permission-denied-please-try-again-when-using-root-user-to-log-in-to-linux-instance-through-ssh
- https://blog.csdn.net/lyndon_li/article/details/120387260
# ssh Permission Denied
```sh
cd /etc/ssh/
	nvim==
```

> 因为 sshd 默认禁止 root 账户登录,所以需要使能 PermitRootLogin 选项,`PermitRootLogin prohibit-password` 表示允许 root 账户登录,但是不能以密码的方式登录,所以只能以公私钥的方式登录,为了简便,我们不采用这种方式,而是采用 PermitRootLogin yes,这样,直接使用密码 就可以登录了。

	