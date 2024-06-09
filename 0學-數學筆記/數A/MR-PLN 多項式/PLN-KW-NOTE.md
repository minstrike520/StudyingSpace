# PLN-2 綜合除法
*KW p10*
## 多項式的變形
1. 計算小數代入求近似值
2. 消除帶入值的多餘常數（如$1 + \sqrt{2}$）
# PLN-3 多項式求值
*KW p15*
## 變數有根數
- 想法：設一個相關的方程式
**示例**
$$
x = 1+\sqrt{2} \rightarrow x - 1 = \sqrt{2},\ x^2-2x-1 = 0
$$
# PLN-4 商與餘式
*KW p17*
$$f(x) = (ax-b) Q(x) + R,\ R \ \text{is const.}$$
1. $f(x) = (x-\frac b a)\cdot aQ(x) + R$
2. $f(\frac x a) = (x-b) \cdot Q(\frac x a) + R$
3. $af(\frac x a) = (x-b)\cdot aQ(\frac x a) + aR$
4. $f(bx) = (x-\frac 1 a)\cdot ab Q(bx) + R$
-  $x^2f(x)$ 的商式 $\not = x^2R(x)$ ，而是還要再做$Rx^2\div{z(x)}$　。
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
[[M-KW5 分模第五回]] 3.
 #TODO/筆記 


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
*KW p30*
$$\begin{aligned}
1.\ &  x -a\ | \ f(x) & \implies & f(a) = 0 \ \text{(一次因式：代入為零)}\\
2. \ &  ax^2 + bx + c\ | \ f(x) & \implies & f(x) \div {ax^2 + bx + c} = 0\ \text{(高次因式：整除，餘為零)} \\
3. \ & (x-a)^3\ | \ f(x) & \implies & \left\{\begin{aligned}
   f(x) & = (x-a)^3Q(x) \ \land \ f(a) = 0 \\
   f'(x) & = (x-a)^2Q_2(x) \ \land \ f'(a) = 0 \\
   f''(x) & = (x-a)Q_3(x) \ \land \ f''(a) = 0 
\end{aligned}\right.\ \text{(重因式：微分代入都是零)}
\end{aligned}$$
# PLN-9 求多項式
*KW p34*
$$\text{deg}f(x) = 3,\ f(1) = f(2) = f(-1) = 2,\ f(3) = 10,\ f(x) = ?$$
- 想法：有三個$f(\alpha) = 2$的模式，這提示我們可以用「$\alpha$為 $f(x) - 2 = 0$方程式的根」來重設關係式。
- 注意，重設方程式時，要注意最後求原函數的時候要把修改過的式子變回來，如本題：$f(x) - 2 = X \rightarrow f(x) = X + 2$

$$\begin{aligned}
& f(x) - 2 = a(x+1)(x-1)(x-2) \\
x \text{代} 3 \ \rightarrow \ & f(3) - 2 = 8a = 10-2 = 8,\ a = 1 \\
\therefore \ & f(x) = (x+1)(x-1)(x-2) - 2 \ \blacksquare
\end{aligned}$$
# PLN-10 多項式係數
*KW p40*
$$f(x) = a_{0}+ a_{1}x + a_{2}x^{2}+a_{3}x^{3}+...+a_{n}x^{n}$$
1. 常數項：x代0$\rightarrow$ $a_{0} = ()\big|_{x=0}$
2. 係數和：x代1$\rightarrow$ $a_{0}+a_{1}+a_{2}+...+a_{n}= ()\big|_{x=1}$
3. 係數正負和差：x代-1$\rightarrow$ $a_{0}-a_{1}+a_{2}-a_{3}+...+(-1)^{n}a_{n}= ()\big|_{x=-1}$
4. 偶次項係數：「相加除以2」$\rightarrow$ $a_{0}+a_{2}+a_{4}+... = \frac{()|_{x=1}+()|_{x=-1}}2$
5. 奇次項係數：「相減除以2」$\rightarrow$ $a_{1}+ a_{3}+ a_{5}+ ... = \frac{()|_{x=1}-()|_{x=-1}}2$
- 注意，本處的佔位符使用$()\big|_{x=a}$而不是$f(a)$的原因是，有時函數需要變形，如果只記住「代入$f(x)$」，那很有可能就會代錯。
# PLN-11 二次函數與三次函數
*KW p45*
## 平衡點
$$f(x) = ax^{2}+bx+c\ \rightarrow f(x) = y = a(x - (- \frac b {2a})^{2})+ \frac{4ac-b^{2}}{4a}\ \land \text{有頂點}P(- \frac b {2a},\ \frac{4ac-b^{2}}{4a})$$
$$\begin{aligned}
f(x) = ax^{3}+ bx^{2}+cx+d \ & \rightarrow f(x) = y = a(x-h)^{3}+ p(x-h) + k \ \land \ \text{有對稱中心}\ P(h,\ k)\ \\
&\text{where}\ h = -\frac{b}{3a},\ p = \frac{3ac-b^2}{3a}\\
\end{aligned}
$$
## 二次函數的根與係數
$$ax^{2}+bx+c = 0,\ x = \alpha \lor \beta \longleftrightarrow \left\{\begin{aligned}
  & \alpha + \beta = - \frac{b}{a} \\
  & \alpha \beta = \frac{c}{a}
\end{aligned}\right.$$
# PLN-14 分式不等式
*KW p71*
1. $\frac A B \lt 0 \longleftrightarrow AB \lt 0$
2. $\frac A B \le 0 \longleftrightarrow AB \le 0 \ \land B \not = 0$
3. $\frac A B \le C \longrightarrow \frac{A-BC}B \le 0 \longrightarrow (A-BC)B \le 0 \ \land \ B \not = 0$
# PLN-15 根式不等式
*KW p74*
## 一、雙邊根式
$$\sqrt{f(x)} \lt \sqrt{g(x)} \implies \left\{\begin{aligned}
  f(x) & \ge 0 \\
  g(x) & \gt 0 \\
  f(x) & \lt g(x)
\end{aligned}\right.$$
## 二、小邊有根式
$$\sqrt{f(x)} \lt g(x) \implies \left\{\begin{aligned}
  f(x) & \ge 0 \\
  g(x) & \gt 0 \\
  f(x) & \lt \big[g(x)\big]^{2}
\end{aligned}\right.$$
## 三、大邊有根式
$$\begin{aligned}
 \sqrt{f(x)} \gt g(x) \implies & \\
 \text{(1) } & \left\{\begin{aligned}
  f(x) & \gt 0 \\ 
  g(x) & \ge 0 \\
  f(x) & \gt \big[g(x)\big]^2
\end{aligned}\right. \\
  \lor \  \text{(2) } & \left\{\begin{aligned}
    f(x) & \ge 0 \\
    g(x) & \lt 0
\end{aligned}\right.
\end{aligned}$$
