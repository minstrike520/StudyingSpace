$$
\begin{aligned}
 & \forall n \ge 1, \frac{1}{n^{2} + 30} < \frac{1}{n^{2}} \\
 & \sum ^{\infty}_{n = 1} \frac{1}{n^{2}} \text{is a p-series with}\ p = 2\ \text{which converges} \\
 & \therefore \text{By the direct comparison test,}\ \sum ^{\infty}_{n = 1} \frac{1}{n^{2} + 30}\text{also converges} \ \blacksquare
\end{aligned}
$$
$$
\begin{aligned}
 & \forall n \ge 1, \frac{n + 2}{n^{2}-n} > \frac{n + 2}{n^{2}} > \frac{n}{n^{2}} = \frac{1}{n} \\
 & \sum ^{\infty}_{n = 1} \frac{1}{n} \text{is a p-series with}\ p = 1,\ \text{which diverges} \\
 & \therefore \text{By the direct comparison test, } \sum ^{\infty}_{n = 1} \frac{n + 2}{n^{2} - n}\text{diverges}\ \blacksquare
\end{aligned}
$$

Claim: ${\exists N \in \mathbb{N}}$ such that ${\forall n \ge N}$, ${\ln n < n^{1/8}}$
Reason:
$\lim_{ n \to \infty } \frac{\ln n}{n^{1/8}} = \lim_{ n \to \infty } \frac{(\ln n)'}{(n ^{1/8})'} = \lim_{ n \to \infty } \frac{n^{-1}}{\frac{1}{8}n^{-7/8}}=\lim_{ n \to \infty } \frac{2}{n^{1/8}} = 0$
${\therefore \exists N \in \mathbb{N}}$ such that ${\forall n \ge N, \ln n < n^{1/8}}$.
${\forall n \ge N}$, ${\frac{(\ln n)^{2}}{n^{3/2}} \le \frac{(n^{1/8})^{2}}{n^{3/2}} = \frac{n^{1/4}}{n^{3/2}} = \frac{1}{n^{1/4}}}$
${\sum ^{\infty}_{n = 1} \frac{1}{n^{5/4}}}$ is a $p$-series with ${p = \frac{5}{4}}$, which converges
$\therefore$ By the direct comparison test, ${\sum ^{\infty}_{n = N} \frac{(\ln n)^{2}}{n^{3/2}}}$ converges, then ${\sum ^{\infty}_{n = 1} \frac{(\ln n )^{2}}{n^{3/2}}}$ converges too $\blacksquare$
真的麻？The problem is, $p$ is not profitable enouth to make all of us satisfied. LMAO