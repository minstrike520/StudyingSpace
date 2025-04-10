## 12.1

keyword: "EXAMPLE 2 - As in Example 1, we integrate each component."
...
EXAMPLE 3：給出加速度還原出速度、位置函數。即不定積分。

(位置?) Ideal Projectile Motion Equation 拋物運動的位置方程式（**不考**！）

## 考前準備

Hint: 常見函數的泰勒級數要背起來，比如$\sin$, $\cos$, $\tan$, $\tan ^{-1}$, $\ln$, ...。在「看起來好像要羅必達的場合，可能會需要用泰勒展開。詳見**Table 9.1**。
EXAMPLE 3, 4, 6, 7需要會！

**112下期中考**
3. ${\sum ^{\infty}_{n = 2} \frac{(2x-1)^{n}}{n \ln n}}$

$$
a_{0} + a_{1}(2x - 1) + a_{2}(2x-1)^{2} + \dots + a_{n} (2x - 1)^{n}

$$

$$
\left| \frac{a_{n+1}}{a_{n}} \right| = \left|  \frac{ a_{n+1}(2x + 1)^{n+1}}{a_{n}(2x+1)^{n}} \right|

$$

$$
\left| \frac{a_{n+1}}{a_{n}} \right| \cdot \left| 2x+1 \right|  < 1

$$

在考試時，先在一旁**提前**把前式算出來，會得出他們收斂於$1$。接著只需要推導$\left| 2x+1 \right|<1$，得出x的不等式就好。
5. Find length: ${x=4\cos t+4t\sin t,\ y = 4\sin t-4t\cos t,\ -\frac{\pi}{2} \le t \le \frac{\pi}{2}}$
最簡單的記憶方式：

$$
\int^{\pi/2}_{-\pi /2} \sqrt{ x'(t)^{2} + y'(t)^{2} }\ dt

$$

這些東西就可以推導出我們常用的曲線計算方式。即畢氏定理的衍生計算。
6 (a)
交錯級數：${\frac{\cos n\pi}{\sqrt{ n }}}$
6 (c)

$$
\frac{\sqrt{ n } \cdot \sin \frac{1}{\sqrt{ n }}}{\infty \cdot 0} = \frac{\sin \frac{1}{\sqrt{ n }}}{\frac{1}{\sqrt{ n }}}

$$

簡單把趨近無限大代換為趨近為零：

$$
x = \frac{1}{\sqrt{ n }};\ \lim_{ n \to \infty } \frac{\sin \frac{1}{\sqrt{ n }}}{\frac{1}{\sqrt{ n }}} = \lim_{ x \to 0 } \frac{\sin x}{x} = 1

$$

6 (e) 用Limit Comparison Test

**110下其中考**
6
觀察

$$
\cos 3\theta = 0

$$

的時候，而不會是在$\theta = \pi$的時候！他在$\theta = 30\degree$就回來第一次了。所以，有的比較刁鑽的圖形，形成完整的圖形很有可能並不需要轉一整圈($360\degree$)。
2
差分

$$
\frac{1}{(n+1)(n+2)(n+3)} = \frac{\frac{1}{2}}{(n+1)(n+2)} - \frac{\frac{1}{2}}{(n+2)(n+3)}

$$

要去整理一下常見**差分**，也是很容易考的；推導得出來，不過要嘛事前先練習，要嘛乾脆背起來，畢竟還是稍微有點難處理的。

$$
\frac{10 n + 10}{(n^{2}+2n)^{2}} = \frac{\frac{5}{2}}{n^{2}} - \frac{\frac{5}{2}}{(n+2)^{2}}

$$

$$
(n^{2}+2n)^{2} = n^{2}(n+2)^{2};

$$

$$
\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}

$$

$$
\frac{1}{n} - \frac{1}{n+1} = \frac{(n+1)-n}{n(n+1)} = \frac{1}{n(n+1)}\ \blacksquare

$$
$C: r = 1 + \cos\theta$. Find the area enclosed by it.
Note that
$$
\int \cos ^{2}\theta\ d\theta = \int \frac{1 + \cos 2\theta}{2}\ d\theta = \frac{\theta}{2} + \frac{\sin 2\theta}{4} + C.
$$
Knowing that $C$ is symmetric by $y$-axis, then
$$
\begin{aligned}
A & = 2 \int ^{\pi / 2}_{- \pi / 2} \frac{1}{2} r^{2} d\theta = \int ^{\pi/2}_{- \pi / 2} (1 + \cos \theta)^{2}  \ d\theta\\
 & = \int ^{\pi / 2}_{- \pi / 2} (\cos ^{2} \theta + 2 \cos \theta + 1)\ d\theta  \\
 & = \left( \frac{\theta}{2} + \frac{\sin 2\theta}{4} + 2 \sin \theta  + \theta\right) \biggr|^{\pi / 2}_{- \pi / 2} \\
 & = 2 \left( \frac{3}{2} \theta  + 2 \sin \theta\right) \biggr|^{ \pi / 2}_{0} = \frac{3\pi}{2} + 4.\ \blacksquare
\end{aligned}
$$