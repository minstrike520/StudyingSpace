# Generating function
## Solving Linear Recurrence by Generating Function
數列 $\{ a_{n} \}$ 之生成函數乃其Formal power series:
$$
\sum ^{n}_{i=0} a_{i} x^{i} = a_{0} + a_{1}x + a_{2}x^{2} + \dots + a_{n}x^{n} + \dots
$$

例：給予一數列之遞迴關係 ${a_{n} = 8 a_{n - 1} + 10^{n}, a_{0} = 6}$，求數列之一般式。
$$
\begin{aligned}
A(x) & = a_{0} + a_{1}x + \dots \\
 & = a_{0} + \sum ^{\infty}_{i = 1} (8a_{i - 1} + 10^{i}) x_{i} \\
 & = a_{0} + 8\sum ^{\infty}_{i = 1} a_{i-1} x^{i} + \sum ^{\infty}_{i = 1} 10^{i}x^{i} \\
\end{aligned}
$$
前式的 $a_{i-1}x^{i}$ 可以寫為 ${x\cdot a_{i-1}x^{i-1}}$，可提出 $x$；後式的 $10^{i}x^{i}$ 則可寫為 ${(10x)^{i}}$，而變成無窮等比級數。
$$
\begin{aligned}
A(x) & = \dots \\
 & = 6 + 8xA(x) + \frac{10x}{1 - 10x}.
\end{aligned}
$$
等式兩邊消除了所有的無窮級數，而兩邊都有 $A(x)$。只消移項整理即可得 $A(x)$。
$$
\begin{aligned}
 & (1 - 8x) A(x) = 6 + \frac{10x}{1 -10x} \\
 & A(x) = \frac{6 - 50x}{(1 - 8x)(1 - 10x)} \underset{\text{(1)}}{=} \frac{1}{1-8x} + \frac{5}{1 - 10x}
\end{aligned}
$$
## Infinite Sum vs. Closed Form
1. Infinite sum: ${1 + x + x^{2} + \dots + x^{n} + \dots}$
2. Closed form: $\frac{1}{1 - x}$

例：自然數數列 $1,2,3,4,5,\dots$
列出生成函數 $A(x)= 1 + 2x + 3x^{2} + 4x^{3} + \dots$
**法一**，轉換為closed form:
$$
\begin{aligned}
= 1 + x + x^{2} + x^{3} + \dots &  \left( \frac{1}{1-x} \right)\\
+ x + x^{2} + x^{3} + \dots &  \left( \frac{x}{1 - x} \right)\\
+x^{2} + x^{3} + \dots &  \left( \frac{x^{2}}{1 - x} \right) \\
+\dots
\end{aligned}
$$
**法二**，兩邊微分：
$$
\begin{aligned}
 & (1 + x + x^{2} + x^{3} + x^{4}+ \dots)' \\
 = & 1 + 2x + 3x^{2} + 4x^{3}+ \dots
\end{aligned}
$$
將另一邊微分：
$$
\left( \frac{1}{1 - x} \right)' = \frac{1}{(1 - x)^{2}}
$$
