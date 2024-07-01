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
-> 相速度
頻率： $P_{1} = \frac{P}{| a |}$
- 想法：伸縮
	- $y = 2 \sin x$：「 2 」-> 振幅
	- $y = \sin 2x$：「 2 」 -> 壓縮量
- 整理
	- 週期 = $\frac{P}{|B|}$
	- 頻率 = $f \times |B| = \frac{|B|}{P}$
	- 相位 = $Bx + C$
- 絕對值
	- $|f(x)|$的週期必為$\pi$
- 函數和
	- $f(x)+g(x)$ -> 原函數週期的**最小公倍數**
- 結論
	1. $y = |Af(Bx+C)| +D$ -> $P' = \frac \pi {|B|}$
	2. $y = |Af(Bx+C)| +D$ -> $P' = \frac P {|B|}$
	3. ()的偶次方與()的絕對值效果相同。
	4. 本結論的例外：$y = |\text{正函數}| + |\text{餘函數}|$ -> $P = \frac \pi 2$
		- 實例：$f(x) = |\sin x| + |\cos x|$
			$\rightarrow f(x+\frac \pi 2) = |\sin (x + \frac \pi 2)| + |\cos (x + \frac \pi 2)| = |\sin x| + |\cos x| = f(x)$
			$\rightarrow f(x) \ \text{的週期為} \frac \pi 2 \blacksquare$
