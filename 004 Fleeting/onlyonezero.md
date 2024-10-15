$$
\text{prerequisite:}\ \forall x \in (a,b),\ f'(x) > 0\ \lor \forall x \in (a,b),\ f'(x) < 0
$$
$$
\begin{aligned}
 & f(x) \\
 & f(a) <0,\ f(b) > 0,\ a < b \\
 & \therefore f\ \text{is continuous in}\ (a,b),\ \text{differentiable in}\ (a,b) \\
 & \text{by M.V.T.},\ f\ \text{has at least one zero in}\ (a,b) \\
 & \text{Suppose there are 2 zeros}\ x_{1}, x_{2}\ \text{in}\ (a,b),\ \text{w.o.l.g.},\ x_{1}<x_{2},\ f(x_{1}) = f(x_{2}) = 0 \\
 & \therefore f\ \text{is continuous in}\ (x_{1},x_{2}),\ \text{differentiable in}\ (x_{1},x_{2}) \\
 & \text{by Rolle's Theorem},\ \exists c \in (x_{1},x_{2}) \ni f'(c) = 0,\ c > x_{1} > a \\
 & \forall x \in (a,b),\ f'(x) > 0 \lor \forall x \in (a,b),\ f'(x) < 0 \implies \bot \\
 & \therefore f\ \text{has exact one zero in}\ (a,b)\ \blacksquare
\end{aligned}
$$
$$
\begin{aligned}
 & y = \sec ^{-1}(\sqrt{ x^{2}+4 }) + \cot (3^{x}) \\
 & \frac{dy}{dx} = \frac{1}{| \sqrt{ x^{2}+4 } |\sqrt{ (x^{2}+4)-1 }} \cdot \frac{1}{2} \frac{2x}{\sqrt{ x^{2}+4 }} - \csc ^{2}(3^{x}) \cdot 3^{x} \cdot \ln 3 \left\{\begin{aligned}
 & x = e^{\ln x},\ x > 0 \\
 & x = \ln e^{x},\ x \in \mathbb{R}
\end{aligned}\right. \\
 & = \frac{x}{(x^{2}+4)\sqrt{ x^{2}+3 }} - 3^{x}\csc ^{2}(3^{x}) \cdot \ln 3 \\
\end{aligned}
$$