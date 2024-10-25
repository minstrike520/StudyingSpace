# Only-one-root
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
