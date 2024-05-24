# PLN-5 餘式定理
*KW p18*
## 一次式形式

$$f(x) = (x-a)Q(x) + R(x) \rightarrow f(a) = R(x)$$
## 高次式形式
$$f(x) = p(x) Q(x) + R(x) \rightarrow \big(\ p(\alpha) = 0 \rightarrow f(\alpha) = R(\alpha)\ \big)$$
- 換個說法：將$p(x) = 0$這個方程式代入$f(x)$，就可以求得$R(x)$。
**【示例】**
*KW p22 2.(2)*
$$
(x^5 + x^2 + 2x + 3)^3 \text{除以}(x^4 + x + 1)\text{的餘式？}
$$
$$\begin{align}
& \text{let}\ x^4+x+1 = 0 \rightarrow \ x^4 = -x -1 \rightarrow \ x^5 = -x^2 - x \\
\text{代入} f(x) \rightarrow & R(x) = (x + 3)^3\ \blacksquare
\end{align}$$
# PLN-6 階梯假設
*KW p25*
## 示例
$$\begin{align}
\text{let}\ & f(x) \in R(x),\ \text{deg}\ f(x) \ge 3,\ \text{以}\ x-1,\ x-2,\ x-3\ \text{除之餘式分別為}\ 3,\ 7,\ 13, \text{則：} \\
& \text{1. 以} (x-1)(x-2) \text{除} f(x) \text{之餘式為何？}\\
& \text{2. 以} (x-1)(x-2)(x-3) \text{除} f(x) \text{之餘式為何？}
\end{align}$$
*初步處理：* $f(1) = 3,\ f(2) = 7,\ f(3) = 13$
**1. 使用「一般假設」: $ax+b$**
$$\begin{align} 
\text{let}\ & f(x) = (x-1)(x-2)(x-3)Q(x) + \underline{ax+b} \ \leftarrow \text{一般假設} \\
& \left\{\begin{aligned}
  & f(1) = a+ b = 3 \\ 
  & f(2) = 2a + b = 7 \\
\end{aligned}\right. \
\rightarrow a = 4,\ b = -1,\ (\text{所求}) = 4x-1\ \blacksquare 
\end{align}$$
**2. 使用「階梯假設」$z_1(x)Q(x) + az_2(x) + bz_3(x) + C$**
$$\begin{aligned}
\text{let}\ & f(x) = (x-1)(x-2)(x-3) + \underline{a} (x-1)(x-2) + \underline{b} (x-1) + \underline{C} \ \leftarrow \text{階梯假設} \\
& \left\{\begin{aligned}
  & f(1) = C = 3 \\
  & f(2) = b + 3 = 7,\ b = 4 \\
  & f(3) = 2a + 2\times 4 + 3 = 13,\ a = 1 \\
\end{aligned}\right.
\ \rightarrow (\text{所求}) = (x^2-3x+2) + 4(x-1) + 3 = x^2 + x + 1 \ \blacksquare
\end{aligned}$$
## 類題
*KW p36*
$$\text{deg}f(x) = 3,\ f(0) = 1,\ f(1) = 9,\ f(2) = 8,\ f(3) = 4,\ \text{求}\ f(x)\text{？}$$
$$\begin{aligned}
\text{let}\ & f(x) = ax(x-1)(x-2) + bx(x-1) + cx + d \\ 
& \cancel{f(0) = d = 1,\ d = 1} \ \leftarrow \text{心算} \\
& \left\{\begin{aligned}
& f(1) = c + 1 = 9,\ c = 8 \\
& f(2) = 2b + 2\times 8 + 1 = 8,\ b = -\frac 9 2\\
& f(3) = 6a + 6 \times (-\frac 9 2) + 3\times 8 + 1 = 4,\ a = 1
\end{aligned}\right.\ \\ 
&\rightarrow f(x) = x(x-1)(x-2) - \frac 9 2 x(x-1) +8x + 1 \ \blacksquare
\end{aligned}$$
# PLN-7 二項式定理與重因式
**【示例】**
$$f(x) = (x^2 - 2x + 2)^{10}\text{被} (x-1)^3 \text{除之餘式為？}$$
- 想法：==將所給多項式配出除式的「底數項」==（本題：$x-1$）
$$\begin{aligned}
(x^2-2x+2)^{10} & = \big[(x-1)^2 + 1\big]^{10} \\
& = C^{10}_0 (x-1)^{20} + C^{10}_1 (x-1)^{18} + ... + C^{10}_9 (x-1)^2 + 1 \\
& = (x-1)^3\big[C^{10}_0 (x-1)^{17} + C^{10}_1 (x-1)^{15} + ... + C^{10}_8 (x-1)\big] + 10(x-1)^2 + 1\\
& \therefore (\text{所求}) = 10x^2 - 20x + 11 \ \blacksquare
\end{aligned}0
$$
# PLN-8 因式定理
$$\begin{aligned}
1.\ &  x -a\ | \ f(x) & \implies & f(a) = 0 \ \text{(一次因式：代入為零)}\\
2. \ &  ax^2 + bx + c\ | \ f(x) & \implies & f(x) \div {ax^2 + bx + c} = 0\ \text{(高次因式：整除，餘為零)} \\
3. \ & (x-a)^3
\end{aligned}$$