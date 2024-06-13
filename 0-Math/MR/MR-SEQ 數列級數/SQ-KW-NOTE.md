# SQ-1 等差數列與級數
## 數列第n項與總和的關係
*KW p5*
- $a_n = S_n - S_{n-1}$
- 當關於級數的資訊很多，卻要求數列的項時，就要想起這個關係式！

# SQ-2 等比數列
*KW p15*
## 三數等比、等差
1. 若$a,\ b,\ c$三數**成等比**，可設此三數為$a,\ ar,\ ar^2 \lor \frac a r,\ a,\ ar$
2. 若$a,\ b,\ c$三數**成等差**，可設此三數為$a-d,\ a,\ a+d$
## 等差、等比的轉換
- 原理：透過**指對數函數**進行轉換
1. $<a_n>$成等比 -> $<\log_k a_n>$成等差，$d = \log_k r$
2. $<a_n>$成等差 -> $<2^{a_n}>$成等比，$r = 2^d$

# SQ-3 總和問題$\sum$
## 基礎總和公式 $\sum$
1. $\sum^n_{k=1}k = \frac{n(n+1)}2$
2. $\sum^n_{k=1}k^2 = \frac{n(n+1)(2n+1)}6$
3. $\sum^n_{k=1}k^3 = \left[\sum^n_{k=1}k\right]^2$
## 特別規則I：多項連乘
- 原理：只是乘開、分配並代回基礎公式
1. $\sum^n_{k=1}k(k+1) = \frac{n(n+1)(n+2)}3$
2. $\sum^n_{k=1}k(k+1)(k+2) = \frac{n(n+1)(n+2)(n+3)}4$
## 特別規則II：分項對消
1. $\sum^n_{k=1}\frac 1 {k(k+1)} = \sum^n_{k=1}(\frac 1 k - \frac 1 {k+1})$
2. $\sum^n_{k=1}\frac 1 {k(k+2)} = \frac 1 2 \sum^n_{k=1}(\frac 1 k - \frac 1 {k+2})$
3. $\sum^n_{k=1}\frac 1 {k(k+3)} = \frac 1 3 \sum^n_{k=1}(\frac 1 k - \frac 1 {k+3})$
- 注意：請不要漏了$\sum$前的分數！
## 特別規則III：多項連除
1. $\sum^n_{k+1}\frac 1 {k(k+1)} = \sum^n_{k = 1} (\frac 1 k - \frac 1 {k+1})$
2. $\sum^n_{k+1}\frac 1 {k(k+1)(k+2)} = \frac 1 2 \sum^n_{k=1}(\frac 1 {k(k+1)} - \frac 1 {(k+1)(k+2)})$
3. $\sum^n_{k+1} \frac 1 {k(k+1)(k+2)(k+3)} = \frac 1 3 \sum^n_{k=1} (\frac 1 {k(k+1)(k+2)} - \frac 1 {(k+1)(k+2)(k+3)})$

# SQ-4 群數列
$<1, \frac 1 2, \frac 1 3, \frac 1 4, \frac 1 5, \frac 1 6 ...>$
$\rightarrow <1, \frac 1 2, (\frac 1 3, \frac 1 4), (\frac 1 5, \frac 1 6, \frac 1 7, \frac 1 8) ...>$
$\rightarrow$ $\frac 1 6$ 是第四群第二個

# SQ-5 遞迴數列
1. 等差型：$a_n = a_{n-1}+d$
2. 等比型：$a_n = a_{n-1}\cdot r$
3. 累加型：$a_n = a_{n-1} + f(n)$
4. 累乘型：$a_n = a_{n-1} \cdot f(n)$
5. 綜合型：$a_n = p\cdot a_{n-1} + q$
## 累加型
**【示例】**
$$\left\{\begin{aligned}
& a_1 = 3  \\
& a_n = a_{n-1} + 3n,\ n\ge 2
\end{aligned}\right.\ , \ \text{求}\ a_n \text{的一般式？}$$
$$
\begin{align}
&a_1 = 3 \\
&a_2 = a_1+3\times 2 \\
&a_3 = a_2 +3 \times 3 \\
& ... \\
& a_n =a_{n-1} + 3\times n\\
&\text{以上加總}
\end{align}
$$
$$
\begin{align}
a_n & = a_1 + 3(1+2+3+...+n) \\
& = a_1 + \frac 3 2 n(n+1) \\
& = \underline{\frac 3 2n^2 + \frac 3 2 n + 3} \ \blacksquare
\end{align}
$$
## 累乘型
**【示例】**
$$
\left\{\begin{aligned}
& a_1 = 1 \\
& a_{n+1} = a_n \cdot (\frac{2n+1}{2n-1})\\
\end{aligned}\right.\ ,\ \text{求} a_n \text{的一般式？}
$$
$$
\begin{align}
& a_1 = 1 \\
& a_2 = a_1 \cdot \frac 3 1 \\
& a_3 = a_2 \cdot \frac 5 3 \\
& ... \\
& a_{n+1} = a_n \cdot \frac {2n+1}{2n-1} \\
& \text{以上累乘}
\end{align}
$$
$$
\begin{align}
a_n+1 & = a_1 \cdot (\frac 3 1 \times \frac 5 3 \times ... \times \frac{2n+1}{2n-1}) \\
& = a_1 \cdot \frac{2n+1}{1} \\
& = \underline{2n+1} \ \blacksquare
\end{align}
$$
## 綜合型
**【示例】**
$$
\left\{\begin{aligned}
& a_1 = 1 \\
& a_n = 2 \cdot a_{n-1} + 1\ ,\ n\ge 2\\
\end{aligned}\right.\ ,\ \text{求} a_n \text{的一般式？}
$$
- Key: 配成等比
$$
\begin{align}
& a_n + k = 2(a_{n-1} + k) \\
\rightarrow \ & a_n = 2 a_{n-1} + k \\
& \text{比較係數得} \ k = 1,\ \text{代回得}\ a_n + 1 = 2(a_{n-1} + 1)\\
\end{align}$$
$$\begin{align}
& \text{let} \ b_n = a_n + 1,\ \text{則} \left\{\begin{aligned} & b_1 = 2 \\ & b_n = b_{n-1} \times 2\end{aligned}\right . \\
&\therefore \ <b_n> \ \text{為等比數列}\ ,\ b_n = 2 \cdot 2^{n-1} = 2^n \\
\rightarrow \ & a_n = b_n -1 = \underline{2^n -1} \ \blacksquare
\end{align}$$
## 變形型
**【示例】** [[LIM002]]
$$\left\{\begin{aligned}
& a_1 = 2  \\
& \sqrt{a_n} = \sqrt{a_{n-1}} + \sqrt{2},\ n\ge 2
\end{aligned}\right.\ , \ \text{求}\ a_n \text{的一般式？}$$
- Key: 視 $\sqrt{a_n}$ 為一個新的數列
$$\begin{aligned}
& \sqrt{a_1} = \sqrt 2 \\
 & \sqrt{a_n} = \sqrt{a_{n-1}} + \sqrt 2 \to \sqrt{a_n} \ \text{為等差數列},\ d = \sqrt 2 \\
 & \sqrt{a_n} = \sqrt{a_1} + d(n-1) = \sqrt{2} + \sqrt{2} (n-1) = \sqrt 2 n \\
 \to \ & a_n = (\sqrt{a_n})^2 = (\sqrt{2}n)^2 = \underline{2n^2} \ \blacksquare
\end{aligned}$$
