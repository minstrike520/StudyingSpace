Prove that $\lim_{ x \to 1 }x^{2}+x-3=-1$ by $\varepsilon-\delta$ definition of limit.
*what i did:*
$$
\begin{aligned}  & (\forall \delta > 0) [(| x-1 |< \delta) \implies ( \\
 & \ \ 1 - \delta < x < 1 + \delta, \\
 & \ \ 3 - \delta < x + 2 < 3 + \delta,\  \\
 & \ \ (\because \delta > 0)\ |  x + 2 | < 3 + \delta\\
 & )] \\
 & (\forall \delta > 0)(\varepsilon : = \delta ^{2} + 3 \delta) \implies (\varepsilon > 0)(\delta = \frac{-3 + \sqrt{ 9 + 4\varepsilon }}{2})\\
 & (\forall \varepsilon > 0 )\left( \exists \delta = \boxed{\ \frac{-3 + \sqrt{ 9 + 4\varepsilon }}{2}\ } \right)(\exists x \in \mathbb{R}) \\
 & [(0<| x - 1 |<\delta) \implies ( \\
 & \ \ | x^{2}+x-3-(-1) |  \\
 & \ \ = | x^{2}+x-2 |  \\
 & \ \ = | x-1 || x+2 | < \delta (3 + \delta) = \varepsilon  \\)
 & ] \blacksquare \\
\end{aligned}
$$
*what is possibly a better solution:*
$$
\begin{aligned}
 & \forall \delta > 0,\ 0 < | x - 1 | < \delta \implies \\
 & 1 - \delta < x < 1 + \delta \to \\
 & (\delta = 1 \implies x < 2 \to |  x + 2 | < 4)\\ \\
 & \forall(\delta>0,\ \varepsilon > 0),\ \varepsilon > 4\delta \implies  \\
 & \delta < \frac{\varepsilon}{4}\\\\
 & \forall \varepsilon > 0,\ \exists \delta = \min\left( \frac{\varepsilon}{4},\ 1 \right)\ \text{s.t.}\ 0 < | x - 1 | < \delta \implies  \\
 & | x^{2}+x-3 - (-1) | \\
 & = | x^{2} + x - 2 | \\
 & = | x-1 || x+2 | < 4 \cdot \delta \le \varepsilon
\end{aligned}
$$

$$

$$
$$
(p \land q \land r \implies s), p, \lnot r 
$$
