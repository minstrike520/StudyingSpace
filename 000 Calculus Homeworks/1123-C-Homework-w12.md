# 6.2
4
$$
\begin{aligned}
V & = 2\pi \int ^{\sqrt{ 3 }}_{0} (\sqrt{ 3 } - y^{2})\cdot y\ dy \\
 & = 2\pi \int ^{\sqrt{ 3 }}_{0} -y^{3} + \sqrt{ 3 }y\ dy \\
 & = 2\pi\left( - \frac{1}{4}y^{4} + \frac{\sqrt{ 3 }}{2}y^{2} \right)^{\sqrt{ 3 }}_{0} \\
 & = 2\pi \left(  - \frac{3}{4} + \frac{3\sqrt{ 3 }}{2} \right) \\
 & = \frac{3(2\sqrt{ 3 } - 1)}{2} \pi\ \blacksquare
\end{aligned}
$$
5
$$
\begin{aligned}
 & \text{let}\ u = \sqrt{ x^{2} + 1 };\ du = x\ dx \\
 & x = \sqrt{ 3 },\ u = 2;\ x = 0,\ u = 1\\
 & \begin{aligned}
V & = 2\pi \int ^{\sqrt{ 3 }}_{0} x\cdot \sqrt{ x^{2} + 1 }\ dx \\
 & = 2\pi \int ^{2}_{1} u\ du \\
 & = 2\pi \cdot \frac{1}{2} u^{2} | ^{2}_{1} \\
 & = 2\pi\left( 2 - \frac{1}{2} \right) = 3\pi\ \blacksquare
\end{aligned}
\end{aligned}
$$
9
$$
\begin{aligned}
 & x^{2} = 2- x:\ x^{2} + x - 2 = 0,\ x = -1(\text{not sat.}) \lor x = 2 \\
 & \begin{aligned}
 V & = 2\pi \int ^{1}_{0} x\cdot [(2 - x) - x^{2}]\ dx \\
 & = 2\pi \int ^{1}_{0} (-x^{3} - x^{2} + 2x)\ dx \\
 & = 2\pi\left( - \frac{1}{4} x^{4} - \frac{1}{3} x^{3} + x^{2} \right)^{1}_{0} \\
 & = 2\pi \cdot \frac{-3 -4 + 12}{12} = \frac{5}{6}\ \blacksquare
\end{aligned}
\end{aligned}
$$
13
a
$$
\begin{aligned}
 & \text{for}\ 0 < x \le \pi: \\
 & xf(x) = x\cdot \frac{\sin x}{x} = \sin x \\
 & \text{for}\ x = 0: \\
 & xf(x) = 0 \cdot 1 = \sin x |_{x = 0}\ \blacksquare
\end{aligned}
$$
b
$$
\begin{aligned}
V & = 2\pi \int ^{\pi}_{0} xf(x)\ dx \\
 & = 2\pi \int ^{\pi}_{0} \sin x\ dx \\
 & = 2\pi(-\cos x)^{\pi}_{0} \\
 & = 2\pi \cdot 1 = 2\pi\ \blacksquare
\end{aligned}
$$
16
$$
\begin{aligned}
 & y^{2} = -y: y(y + 1) = 0,\ y = 0 \lor y = -1 \\
 & y = 2: y^{2} = 4,\ -y = -2 \\
 & \begin{aligned}
\text{let}\ V_{1} & = 2\pi \int ^{2}_{0} y\cdot [y^{2} - (-y)]\ dy \\
 & = 2\pi \int ^{2}_{0} (y^{3} + y^{2})\ dy \\
 & = 2\pi \left( \frac{1}{4}y^{4} + \frac{1}{3} y^{3} \right)^{2}_{0} \\
 & = \frac{40}{3}\pi
\end{aligned} \\
 & \begin{aligned}
\text{let}\ V_{2} & = 2\pi \int ^{0}_{-1} y\cdot (-y - y^{2})\ dy \\
 & = 2\pi \int ^{0}_{-1}(-y^{3} - y^{2})\ dy \\
 & = 2\pi\left( - \frac{1}{4} y^{4} - \frac{1}{3}y^{3} \right)^{0}_{-1} \\
 & = \frac{\pi}{6}
\end{aligned} \\
 & V = V_{1} + V_{2} = \frac{27}{2}\pi\ \blacksquare
\end{aligned}
$$
25
$$
x^{2} = x + 2: x^{2} - x - 2 = 0,\ x = 2 \lor x = -1
$$
a
$$
\begin{aligned}
V & = 2\pi \int ^{2}_{-1} (2 - x)\cdot (x + 2 - x^{2})\ dx \\
 & = 2\pi \int ^{2}_{-1} (x^{3} - 3x^{2} + 4)\ dx \\
 &= 2\pi \cdot \left( \frac{1}{4} x^{4} - x^{3} + 4x \right)^{2}_{-1} \\
 & = 2\pi \cdot \left[ 4 - \left(  - \frac{11}{4} \right) \right] \\
 & = 2\pi \cdot \frac{27}{4} = \frac{27}{2}\pi\ \blacksquare
\end{aligned}
$$
b
$$
\begin{aligned}
V & = 2\pi \int ^{2}_{0} (x + 1)\cdot (x + 2 - x^{2})\ dx \\
 & = 2\pi \int ^{2}_{0} (- x^{3} + 3x + 2)\ dx \\
 &= 2\pi \cdot \left( - \frac{1}{4} x^{4} + \frac{3}{2}x^{2} + 2x \right)^{2}_{0} \\
 & = 2\pi \cdot 6 = 12\pi\ \blacksquare
\end{aligned}
$$
c
$$
\begin{aligned}
 & y = x^{2},\ x = \pm \sqrt{ y } \\
 & y = x + 2,\ x = y - 2 \\
 & \sqrt{ y } = y - 2: y - \sqrt{ y } - 2 = 0,\ \sqrt{ y }= -1(\text{unsat})\lor \sqrt{ y } = 2 \\
 & \implies y = 4\\
 & -\sqrt{ y } = y - 2: y + \sqrt{ y } - 2 = 0, \sqrt{ y } = -2(\text{unsat})\lor \sqrt{ y } = 1  \\
 & \implies y = 1\\
 & \begin{aligned}
\text{let}\ V_{1}  & = 2\pi \int ^{1}_{0} y\cdot [\sqrt{ y } - (-\sqrt{ y })]\ dy \\
 & = 2\pi \int ^{1}_{0} 2y^{3/2}\ dy \\
 & = 2\pi \cdot 2\cdot \frac{2}{5} y^{5/2}|^{1}_{0} \\
 & = \frac{8}{5}\pi \\
\end{aligned} \\
 & \begin{aligned}
 \text{let}\ V_{2} & = 2\pi \int ^{4}_{1} y\cdot [\sqrt{ y } - (y - 2)]\ dy \\
 & = 2\pi \int ^{4}_{1}(-y^{2} + y^{3/2} + 2y)\ dy \\
 & = 2\pi \cdot \left( - \frac{1}{3}y^{3} + \frac{2}{5} y^{5/2} + y^{2} \right)^{4}_{1} \\
 & = 2\pi \cdot \frac{32}{5} = \frac{64}{5}\pi
\end{aligned} \\
 & V = V_{1} + V_{2} = \frac{72}{5}\pi\ \blacksquare
\end{aligned}
$$
# 6.3
2
4
15
16

# 6.4
4
7
9
11
19
29
