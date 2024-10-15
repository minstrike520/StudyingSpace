$$
\text{prerequisite:}\ f\ \text{is monotonic}\ \equiv\forall x \in (a,b),\ f'(x) > 0\ \lor \forall x \in (a,b),\ f'(x) < 0
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
\text{prerequisite:}\ \left\{\begin{aligned}
 & \text{monotonic}(f,\ (a,b)\ )\ (strict,\ f'(x) \ne 0) \\
 & \text{sign}(f(a)) \ne \text{sign}(f(b))
\end{aligned}\right.
$$
$$
\begin{aligned}
 & \text{monotonic}(f,\ (a,b)) \implies \text{continuous}(f,\ (a,b)) \land \text{differentiable}(f,\ (a,b)) \\
 & \text{by I.V.T.},\ f\ \text{has at least one zero in}\ (a,b) \\
 & \text{let assumption}\ A = \text{Suppose that}\ \exists\ x_{1},x_{2} \in (a,b),\ \text{w.o.l.g.}\ x_{1}<x_{2},\ \ni f(x_{1}) = f(x_{2}) = 0 \\
 & \because a<x_{1}<x_{2}<b \therefore \text{continuous}(f,\ (x_{1},x_{2}))\land \text{differentiable}(f,\ (x_{1},x_{2})) \\
 & \text{by Rolle's Theorem},\ \exists\ c \in (x_{1},x_{2}) \ni f'(c) = 0,\ x_{1}<c<x_{2} \\
 & \text{conflict with the prerequisite},\ \bot,\ A\ \text{is false} \\
 & \therefore f\ \text{has exact one zero in}\ (a,b)\ \blacksquare 
\end{aligned}
$$