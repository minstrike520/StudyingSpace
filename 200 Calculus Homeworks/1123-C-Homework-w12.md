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
d
$$
\begin{aligned}
V & = 2\pi \int ^{2}_{-1} (x + 2 - x^{2}) \cdot x\ dx \\
 & = 2\pi \int ^{2}_{-1} -x^{3} + x^{2} + 2x\ dx \\
 & = 2\pi \cdot \left( - \frac{1}{4}x^{4} + \frac{1}{3}x^{3} + x^{2} \right)^{2}_{-1} \\
 & = 2\pi \cdot \left[ -4 + \frac{8}{3} + 4 - \left( -\frac{1}{4} - \frac{1}{3} + 1 \right) \right] \\
 & = 2\pi \cdot \frac{9}{4} = \frac{9}{2} \pi \ \blacksquare
\end{aligned}
$$
# 6.3
2
$$
\begin{aligned}
 & \frac{d}{dx} x^{3/2} = \frac{3}{2}\cdot x^{1/2} = \frac{3}{2}\sqrt{ x } \\
 & \begin{aligned}
L & = \int ^{4}_{0} [1 + (f'(x))^{2}]\ dx \\
 & = \int ^{4}_{0} \left( 1 + \frac{9}{4}x \right)\ dx \\
 & = \left( \frac{9}{8}x^{2} + x \right)^{4}_{0} = 18 + 4 = 22\ \blacksquare
\end{aligned}
\end{aligned}
$$
4
$$
\begin{aligned}
 & \frac{d}{dy}\left[ \frac{1}{3}y^{3/2} - y^{1/2} \right] = \frac{1}{2}y - \frac{1}{2}y^{-1/2} \\
 & \begin{aligned}
L  & = \int ^{9}_{1} (1 + (x')^{2})\ dy \\
 & = \int ^{9}_{1} \left[ 1 + \left( \frac{1}{2}y - \frac{1}{2}y^{-1/2} \right)^{2} \right]\ dy \\
 & = \int ^{9}_{1}\left( \frac{1}{4}y^{2} - \frac{1}{2}y^{1/2}+ \frac{1}{4}y^{-1} + 1 \right)\ dy \\
 & = \left( \frac{1}{12}y^{3} - \frac{1}{3}y^{3/2} + \frac{1}{4}\ln y + y \right)^{9}_{1} \\
 & = \frac{243}{4} - 9 + \frac{1}{2}\ln 3 + 9 - \left( \frac{1}{12} - \frac{1}{3} + 0 + 1 \right) \\
 & = 60 + \frac{1}{2} \ln 3\ \blacksquare
\end{aligned}
\end{aligned}
$$
15
$$
\begin{aligned}
 & \begin{aligned}
\frac{dx}{dy} &  = \frac{d}{dy} \int ^{y}_{0} \sqrt{ \sec ^{4} t - 1 }\ dt \\
 & = \sqrt{ \sec ^{4}y - 1 }
\end{aligned} \\
 & \begin{aligned}
L & = \int ^{\pi / 4}_{-\pi / 4}\sqrt{ 1 + (\sec ^{4}y - 1) }\ dy \\
 & = \int ^{\pi / 4}_{-\pi / 4}\sec ^{2}y\ dy \\
 & = \tan y |^{\pi / 4}_{-\pi / 4} \\
 & = 1 - (-1) = 2\ \blacksquare
\end{aligned}
\end{aligned}
$$
16
$$
\begin{aligned}
 & \begin{aligned}
\frac{dy}{dx} & = \frac{d}{dx} \int ^{x}_{-2}\sqrt{ 3t^{4} - 1 }\ dt \\
 & = \sqrt{ 3x^{4} - 1 }
\end{aligned} \\
 & \begin{aligned}
 L & = \int ^{-1}_{-2}\sqrt{ 1 + (3x^{4} - 1) }\ dx \\
 & = \int ^{-1}_{-2}\sqrt{ 3 x ^{4} } \ dx \\
 & = \int ^{-1}_{-2}\sqrt{ 3 }x^{2}\ dx \\
 & = \frac{1}{\sqrt{ 3 }}x^{3}|^{-1}_{-2} = \frac{7\sqrt{ 3 }}{3}\ \blacksquare
\end{aligned}
\end{aligned}
$$
# 6.4
4
$$
\begin{aligned}
 & \begin{aligned}
\frac{dx}{dy} = \frac{d}{dy}\sin y  = \cos y \\
\end{aligned} \\
 & \begin{aligned}
A & = 2\pi \int ^{\pi}_{0}x\cdot \sqrt{ 1 + (x')^{2} }\ dy \\
 & = 2\pi \int ^{\pi}_{0}\sin y\cdot \sqrt{ 1 + \cos ^{2}y }\ dy \\
\end{aligned}
\end{aligned}
$$
![[Screenshot_2024-11-25-20-19-26-736_com.android.chrome-edit.jpg]]
7
$$
\begin{aligned}
 & \frac{dx}{dy} = \frac{d}{dy} \int ^{y}_{0}\tan t\ dt = \tan y \\
 & \begin{aligned}
A & = 2\pi \int ^{\pi / 3}_{0} x\cdot \sqrt{ 1 + (x')^{2} }\ dy \\
 & = 2\pi \int ^{\pi / 3}_{0} \left( \int ^{y}_{0} \tan t\ dt \right)\cdot \sec y\ dy \\
\end{aligned}
\end{aligned}
$$
![[Screenshot_2024-11-25-20-13-32-774_com.android.chrome-edit.jpg]]
9
$$
\begin{aligned}
 & \frac{dy}{dx}= \frac{d}{dx} \frac{x}{2} = \frac{1}{2} \\
 & \begin{aligned}
A & = 2\pi\int ^{4}_{0}y\cdot \sqrt{ 1 + (y')^{2} }\ dx \\
 & = 2\pi\int ^{4}_{0} \frac{x}{2}\cdot \sqrt{ \frac{5}{4} }\ dx \\
 & = 2\pi\frac{\sqrt{ 5 }}{4}\cdot \frac{1}{2}x^{2}|^{4}_{0} \\
 & = 4\sqrt{ 5 }\pi
\end{aligned} \\
 & \text{Verification:} \\
 & A = \frac{1}{2}\cdot 2\pi \cdot \sqrt{ 2^{2} + 4^{2} }\cdot 2 = 4\sqrt{ 5 }\pi
\end{aligned}
$$
11
$$
\begin{aligned}
 & y = \frac{x}{2} + \frac{1}{2},\ 1\le x \le 3  \\
 & \frac{dy}{dx} = \frac{1}{2}\\
 & \begin{aligned}
A & = 2\pi \int ^{3}_{1}y\cdot \sqrt{ 1 + (y')^{2} }\ dy \\
 & = 2\pi \int ^{3}_{1}\left( \frac{x}{2} + \frac{1}{2} \right)\cdot \frac{\sqrt{ 5 }}{2}\ dy \\
 & = \frac{\sqrt{ 5 }}{2}\pi \int ^{3}_{1}(x + 1)^{3}_{1} \\
 & = \frac{\sqrt{ 5 }}{2}\pi\left( \frac{1}{2}x^{2} + x \right)^{3}_{1} \\
 & = \frac{\sqrt{ 5 }}{2}\pi \left( \frac{9}{2} + \frac{3}{2} \right) = 3\sqrt{ 5 }\pi
\end{aligned} \\
 & \text{Verification:} \\
 & H = \pi(1 + 2)\cdot \sqrt{ 1^{2} + 2^{2} } = 3\sqrt{ 5 }\pi
\end{aligned}
$$
19
$$
\begin{aligned}
 & \frac{dx}{dy} = \frac{d}{dy} 2\sqrt{ 4 - y } = -\frac{1}{\sqrt{ 4 - y }} \\
 & \begin{aligned}
A & = 2\pi \int ^{15/4}_{0}x\cdot \sqrt{ 1 + (x')^{2} }\ dy \\
 & = 2\pi \int ^{15/4}_{0}2\sqrt{ 4 - y } \cdot \sqrt{ 1 + \frac{1}{4 - y} }\ dy \\
 & = 2\pi \int ^{15/4}_{0} 2\sqrt{ 4 - y + 1 }\ dy \\
 & = 2\pi \int ^{15/4}_{0} 2\sqrt{ 5 - y }\ dy = 2\pi\int ^{15/4}_{0}- 2\sqrt{ 5 -y }\ d(5- y) \\
 & = - 2\pi\frac{4}{3}(5- y)^{3/2}|^{15/4}_{0} \\
 & = - 2\pi \cdot \frac{4}{3}\left[ \left( \frac{5}{4} \right)^{3/2} - 5^{3/2} \right] \\
 & = -\frac{8}{3}\pi \cdot \left( \frac{5\sqrt{ 5 }}{8} - 5\sqrt{ 5 } \right) = \frac{8}{3}\pi \cdot \frac{35\sqrt{ 5 }}{8} = \frac{35\sqrt{ 5 }}{3}\pi
\end{aligned}
\end{aligned}
$$
	29
$$
\begin{aligned}
 & \text{let}\ y= \sqrt{ R^{2} - x^{2} },\ \frac{dy}{dx} = -x \cdot \frac{1}{\sqrt{ R^{2} -x^{2} }} \\
 & \begin{aligned}
 A & = 2\pi \int ^{h}_{0}y\cdot \sqrt{ 1 + \left( \frac{dy}{dx} \right)^{2} }\ dx \\
 & = 2\pi \int ^{h}_{0} \sqrt{ R^{2} - x^{2} }\cdot \sqrt{ 1 + \frac{x^{2}}{R^{2} - x^{2}} }\ dx \\
 & = 2\pi \int ^{h}_{0} \sqrt{ R^{2} -x^{2} + x^{2} }\ dx \\
 & = 2\pi \int ^{h}_{0} R\ dx \\
 & = 2\pi Rh\ \blacksquare
\end{aligned}
\end{aligned}
$$