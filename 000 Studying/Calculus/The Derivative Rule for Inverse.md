---
identifier: 202409231612
---
traits:
refs:
# The Derivative Rule for Inverse
## Derivative of Inverse Function
Slope at $(a,b)$ of $f$ is $f'(a)$
Slope at $(b,a)$ of $f^{-1}$ is $\frac{1}{f'(a)}$

$$
(f^{-1})' (b) = \frac{1}{f'(a)} = \frac{1}{f'(f^{-1}(b))}
$$

## Inverse Derivative Rule
$f'(x) \ne 0$ on domaind $I$ of $f$, then $f^{-1}$ is differentiable at every point in its domain ( the range of $f$) and
$$
(f^{-1}) (b) = \frac{1}{f'(f^{-1}(b))}\ \text{or}\ \frac{df^{-1}}{dx} |_{x=b} = \frac{1}{\frac{df}{dx} |_{x = f^{-1}(b)}}
$$
$$
\begin{aligned}
 & f(f^{-1}(x)) = x \\
 & f'(f^{-1}(x)) \cdot (f^{-1})' (x) = 1 \\
 & \implies (f^{-1})' (x) = \frac{1}{f'(f^{-1}(x))}
\end{aligned}
$$

## Implemention: Derivative of the Natural Logarithm Function
Proving that $\frac{d}{dx} \ln x = \frac{1}{x}$
**using the formula described above**
$$
\begin{aligned}
 & \text{let}\ f(x) = e^{x} \implies f^{-1}(x) = \ln x \\
 & \frac{df^{-1}(x)}{dx} = \frac{1}{f'(f^{-1}(x))} = \frac{1}{e^{\ln x}}  = \frac{1}{x} \ \blacksquare
\end{aligned}
$$
**using traits of natural logarithm**
$$
e^{\ln x} = x \implies e^{\ln x} \cdot \frac{d\ln x}{dx} = 1 \implies \frac{d\ln x}{dx} = \frac{1}{x}
$$
