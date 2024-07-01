---
page-type: 學科筆記
reference: "[[KW-TRF]]"
ref-index: p14
---
# 三角函數的週期
## 周期函數的定義
原函數 $f(x)$，基本週期$P$
$$
\begin{aligned}
\text{<def>}\ & \forall x \in \mathbb{R},\ \exists P \ne 0\ \text{s.t.}\ f(x+P) = f(x) \\
 & \implies f\ \text{is periodic function whose basic period} = P 
\end{aligned}
$$
## 函數的伸縮
ref: https://zh.wikipedia.org/zh-tw/%E7%9B%B8%E4%BD%8D
橫向伸縮平移過的函數 $f_{1}(x)$，可以表達成以下關係式：
$$
f_{1}(x) = f(ax+b)
$$
而將全部的細節都表達出來的「標準式」則寫作如下：
$$
f_{1}(x) = f\left( \frac{2\pi}{P} x + \phi_{0} \right)
$$
相位： $\phi(x) = x \to \phi_{1}(x) = \frac{2\pi}{P}x + \phi_{0}$
-> 相速度 $\phi'(x) =  \frac{2\pi}{P} =a$

## 函數的絕對值
$$
f_{2}(x) = | f_{1}(x) | \implies P_{2} = \frac{1}{2}P_{1}
$$
值得注意：平方**對週期的影響**與絕對值相同！
$$
f_{2-1}(x) = [f_{1}(x)]^{2} \implies P_{2-1} = \frac{1}{2}P_{1}
$$
簡單情況：判斷 $| \cos x |,\ | \sin x |$ -> 週期為 $\pi$
### 通式總結
$$
y = | Af(Bx+C)+D | \implies P' = \frac{P}{| B |}
$$
### 例外
$$
y = | 正函數 | + | 餘函數 | \implies P = \frac{\pi}{2}
$$
實例：$f(x) = |\sin x| + |\cos x|$
$\rightarrow f(x+\frac \pi 2) = |\sin (x + \frac \pi 2)| + |\cos (x + \frac \pi 2)| = |\sin x| + |\cos x| = f(x)$
$\rightarrow f(x) \ \text{的週期為} \frac \pi 2 \blacksquare$

## 函數和
$$
f_{3}(x) = f(x) + g(x) \implies P_{3} = \text{lcm}(P_{f},\ P_{g})
$$
註釋：lcm=最小公倍數

