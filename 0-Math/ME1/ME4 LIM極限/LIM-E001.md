---
page-type: 學科筆記/例題
reference: "[[KW-LIM]]"
ref-index: "28."
---
# 題文
設正項數列 $<a_{n}>$ 滿足 $a_{1} = 4,\ a_{n} = \sqrt{ 3a_{n-1} +10 }\ (n = 2,3,4,\dots)$：
1. 證明 $<a_{n}>$ 為收斂數列。
2. 試求 $<a_{n}>$ 的極限值。

# 解法
就本題而言，先假設數列收斂做第二題，再回頭做第一題，反而會比較合理！
2.
$$
\begin{aligned}
 & \text{assume} <a_{n}> \text{converges}\\
 & a_{n} = \sqrt{ 3a_{n-1} +10 } \\
 & \lim_{ n \to \infty } a_{n} = \sqrt{ 3\lim_{ n \to \infty } a_{n-1} +10 } \\
 & \text{let}\ x:= \lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } a_{n-1} \\
 & \to\ x = \sqrt{ 3x + 10 } \\
 & x^{2} = 3x + 10, \dots, x = 5 \lor -2 \\
 & \therefore 所求 = \lim_{ n \to \infty } a_{n} = 5\ \blacksquare_{2}
\end{aligned}
$$
1.
$$
\begin{aligned}  & \text{Proving}\ \forall n \in \mathbb{N},\ a_{n} \le 5\\
 & n = 1: a_{1} = 4 \le 5\ \text{(satisfies)}  \\
 & \text{let}\ k:n=k\ \text{satisfies} \to\ a_{k} \le 5 \\
 & \text{then}\ n = k+1: \\
 & a_{k+1} = \sqrt{ 3a_{k}+10 } \\
 & \text{when}\ a_{k} = 5,\ a_{k+1} = \sqrt{ 3\times 5 + 10 } = 5 \le 5 \text{(satisfies)} \\
 & \therefore\ \text{by M.I.,}\ \forall n \in \mathbb{N},\ a_{n} \le 5\ \blacksquare
\end{aligned}
$$