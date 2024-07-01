---
page-type: 學科筆記/例題
reference: "[[KW-LIM]]"
ref-index: "28."
---
# 題文
設正項數列 $<a_{n}>$ 滿足 $a_{1} = 4,\ a_{n} = a_{n+1} = \frac{1}{2}\left( a_{n}+\frac{4}{a_{n}} \right)$：
1. 證明 $<a_{n}>$ 為收斂數列。
2. 試求 $<a_{n}>$ 的極限值。

# 解法
2.
想法：$\forall n \in \mathbb{N},\ a_{n} > 0$ ，因為正+正必為正
$$
\begin{aligned}
 & \text{assume}\ <a_{n}> \text{converges} \\
 & \text{let}\ x:= \lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } a_{n+1} \\
 & \to\ x = \frac{1}{2}\left( x + \frac{4}{x} \right),\ x = \pm 2 \\
 & \because \forall n \in \mathbb{N},a_{n} > 0 \therefore \lim_{ n \to \infty } a_{n} = 2\ \blacksquare_{2}
\end{aligned}
$$
解根過程
$$
\begin{aligned}
 & 2x = x + \frac{4}{x} \\
 & x = \frac{4}{x},\ x^{2} = 4,\ x = \pm 2
\end{aligned}
$$
1.(1)
$$
\begin{aligned}
 & \text{Proving}\ \forall n \in \mathbb{N},\ a_{n} \ge 2 \\
 & a_{n} = \frac{1}{2}\left( a_{n-1} + \frac{4}{a_{n-1}} \right) \ge \sqrt{ a_{n-1} \cdot \frac{4}{a_{n-1}} } = 2\ (\text{by 算幾}) \\
 & \therefore a_{n} \ge 2\ \blacksquare_{1-1}
\end{aligned}
$$
1.(2)
$$
\begin{aligned}
 & \text{Proving}\ \forall n \in \mathbb{N},\ a_{n} \le a_{n-1} \\
 & a_{n} - a_{n-1} = \frac{1}{2}\left( a_{n-1}+\frac{4}{a_{n-1}} \right)-a_{n-1} \\
 & \to\ a_{n} - a_{n-1} = \frac{1}{2a_{n-1}}\cdot (2+a_{n-1})(2-a_{n-1}) \le 0 \\
 & (\because a_{n-1}\ge2,\ 2-a_{n-1} \le 0) \\
 & \to\ a_{n} \le a_{n-1}\ \blacksquare_{1-2}
\end{aligned}
$$
1.(3)
$$
\text{由(1), (2) 依數列完備性公設得} <a_{n}> \text{為收斂數列}\ \blacksquare_{1}
$$