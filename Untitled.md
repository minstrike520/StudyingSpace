$$
a_{ n }  = \left\{\begin{aligned}
 & \frac{n}{2^{n}},\ n\ \text{is odd};\ 1, 3, 5, 7, 9\dots \\
 & \frac{1}{2^{n}},\ n\ \text{is even}:\ 2, 4, 6, 8, 10\dots
\end{aligned}\right.
$$
$$
\frac{1}{2},\ \frac{1}{4},\ \frac{3}{8},\ \frac{1}{16},\ \frac{5}{32},\ \frac{1}{64},\ \frac{7}{128},\ \frac{1}{256},\ \dots
$$
$$
\left( \frac{n}{2^{n}} \right)^{1/n} = \frac{n^{1/n}}{2} \implies \lim_{ n \to \infty } \frac{n^{1/n}}{2} = 1
$$
$$
\lim_{ n \to \infty } \left( \frac{1}{2^{n}} \right)^{1/n} = \frac{1}{2}
$$
$$
\lim_{ n \to \infty } \sqrt[n]{ n } = 1
$$

## THEOREM 14 - The Root Test
Let $\sum a_{n}$ be any series and suppose that
$$
\lim_{ n \to \infty } \sqrt{ \left| a_{n} \right|  } = \rho.
$$
Then (a) the series *converges absolutely* if $\rho < 1$. (b) the series *diverges* if $\rho > 1$ or $\rho$ is infinity, and (c) the test is *inconclusive* if $\rho = 1$.
### Proof
#### (a)
$\rho < 1$. Choose an $\varepsilon > 0$ so small that $\rho + \varepsilon < 1$. Since $\sqrt[ n ]{ \left| a_{n} \right| } \to \rho$, the terms $\sqrt[ n ]{ \left| a_{n} \right| }$ eventually get to within $\varepsilon$ to $\rho$. So there exists and index $M$ such that
$$
\sqrt[ n ]{ \left| a_{n} \right|  } < \rho + \varepsilon\ \text{when}\ n \ge M.
$$
