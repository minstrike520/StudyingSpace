# 5.2
`33,35,39`
33
$$
\begin{aligned}
 & \sum ^{50}_{k=1} [(k+1)^{2} - k^{2}]  \\
 & = \sum ^{50}_{k=1} (2k+1) \\
 & = 2\cdot \left(\sum ^{50}_{k=1}k\right) + 50 \\
 & = 2\cdot \frac{50 \cdot 51}{2} + 50 \\
 & = 50\cdot 52 = 2600\ \blacksquare
\end{aligned}
$$

35
$$
\begin{aligned}
 & \sum ^{30}_{k=7} (\sqrt{ k - 4 } - \sqrt{ k - 3 }) \\
 & = \sum ^{30}_{k = 7} \sqrt{ k - 4 } - \sum ^{30}_{k = 7} \sqrt{ k - 3 } \\
 & = \sum ^{16}_{i = 3} \sqrt{ i } - \sum ^{17}_{j = 4} \sqrt{ j } \\
 & = -\sqrt{ 17 } + \sqrt{ 3 }\ \blacksquare
\end{aligned}
$$
39
**TODO!!!**
(GRAPH)
a
![[Pasted image 20241111002123.png]]
$$
\begin{aligned}
S_\text{a}  & = \sum ^{4}_{k = 1} \sin c_{k} \Delta x_{k} \\
 & = 0 + 1\cdot \frac{\pi}{2} + 1\cdot \frac{\pi}{2} + 0 \\
 & = \pi\ \blacksquare
\end{aligned}
$$
b
![[Pasted image 20241111002820.png]]
$$
\begin{aligned}
S_\text{b}  & = \sum ^{4}_{k = 1} \sin c_{k} \Delta x_{k} \\
 & = 1\cdot \frac{\pi}{2} + 0 + 0 + 1 \cdot \frac{\pi}{2} \\
 & = \pi\ \blacksquare
\end{aligned}
$$
c
![[Pasted image 20241111000954.png]]
$$
\begin{aligned}
S_\text{c}  & = \sum ^{4}_{k = 1}\sin c_{k}\Delta x_{k} \\
 & = \left( \frac{\sqrt{ 2 }}{2}\cdot \frac{\pi}{2} \right) \cdot 4 \\
 & = \pi \sqrt{ 2 }\ \blacksquare
\end{aligned}
$$
# 5.3
`3,6,10,16,18,41,49,55,61,65,69`
3
$$
\lim_{ | | P | | \to 0 } \sum ^{n}_{k = 1} ({c_{k}}^{2} - 3 c _{k})\ \Delta x_{k} = \int ^{5}_{-7} x ^{2} - 3x\ dx\ \blacksquare
$$
6
$$
\lim_{ | | P | | \to 0 } \sum ^{n}_{k=1}(\sec c_{k})\ \Delta x_{k} = \int ^{0}_{- \frac{\pi}{4}} \sec x\ dx\ \blacksquare
$$
10
$$
\int ^{9}_{1} f(x)\ dx = -1,\ \int ^{9}_{7} f(x)\ dx=5,\ \int ^{9}_{7} h(x)\ dx = 4
$$
a.
$$
\int ^{9}_{1} -2f(x)\ dx = -2\int ^{9}_{1}f(x)\ dx = 2\ \blacksquare
$$
b
$$
\begin{aligned}
\int ^{9}_{7}[f(x) + h(x)]\ dx  & = \int ^{9}_{7} f(x)\ dx + \int ^{9}_{7} h(x)\ dx  \\
 & = 5 + 4 = 9\ \blacksquare
\end{aligned}
$$
c
$$
\begin{aligned}
\int ^{9}_{7}[2f(x) - 3h(x)]\ dx  & = 2\int ^{9}_{7}f(x)\ dx - 3 \int ^{9}_{7} h(x)\ dx  \\
 & = 10 - 12 = -2\ \blacksquare
\end{aligned}
$$
d
$$
\int ^{1}_{9} f(x)\ dx = - \int ^{9}_{1}f(x)\ dx = 1
$$
e
$$
\begin{aligned}
\int ^{7}_{1}f(x)\ dx  & = \int ^{9}_{1}f(x)\ dx - \int ^{9}_{7}f(x)\ dx \\
 & = -1-5 = -6\ \blacksquare
\end{aligned}
$$
f
$$
\begin{aligned} \int ^{7}_{9}[h(x) - f(x)]\ dx  & = -\int ^{9}_{7}[h(x) -f(x)]\ dx \\
 & = -\int ^{9}_{7}h(x)\ dx - \int ^{9}_{7}f(x)\ dx \\
 & = -4 - 5 = -9\ \blacksquare
\end{aligned}
$$
16
**TODO**
18
**TODO**
41
5.6, eq 2 to 4
$$
\int ^{1}_{3}7\ dx = 7\cdot (1 - 3)\ = -14\ \blacksquare
$$
49
$$
\begin{aligned}
\int ^{2}_{0} (3x^{2}+x-5)\ dx  & = 3 \int ^{2}_{0} x^{2}\ dx + \int ^{2}_{0}x\ dx + \int ^{2}_{0} -5\ dx \\
 & = 3\cdot \left( \frac{8}{3} - 0 \right) +  \left( \frac{4}{2} - 0 \right) - 5( 2 - 0) \\
 & = 0\ \blacksquare
\end{aligned}
$$
55
**TODO**
61
**TODO**
65
$$
\begin{aligned}
\int ^{b}_{a}x^{2}\ dx & = \lim_{ n \to \infty } \sum ^{n}_{k=1}\left( a + k\cdot \frac{b - a}{n} \right)^{2} \left( \frac{b - a}{n} \right) \\
 & = \lim_{ n \to \infty } \frac{ b - a}{n}\sum ^{n}_{k=1}a^{2} + 2ak\cdot \frac{b - a}{n} + k^{2}\cdot \left( \frac{b - a}{n} \right)^{2} \\
 & = \lim_{ n \to \infty } \frac{b - a}{n} \cdot na^{2}  + \left( \frac{b - a}{n} \right)^{2}\cdot 2a\cdot \frac{n(n-1)}{2} + \left( \frac{b - a}{n} \right)^{3}\cdot \frac{n(n-1)(2n-1)}{6} \\
 & = a^{2}(b - a) + a(b - a)^{2}\cdot \lim_{ n \to \infty } \left( 1\cdot  \left( 1 - \frac{1}{n} \right) \right) +\frac{1}{6} ( b - a)^{3}\cdot \lim_{ n \to \infty } \left( 1\cdot \left( 1 - \frac{1}{n} \right)\cdot \left( 2 - \frac{1}{n} \right) \right) \\
 & = a^{2}(b - a) + a(b - a)^{2} + \frac{1}{3}(b - a)^{3} \\
 & = a^{2}b - a^{3} + ab^{2} - 2a^{2}b + a^{3} + \frac{1}{3}b^{3} - ab^{2} + a^{2}b - \frac{1}{3}a^{3} \\
 & = - \frac{1}{3}a^{3} + \frac{1}{3}b^{3}\ \blacksquare
\end{aligned}
$$

# 5.4
`1,6,7,10,17,22,29,39,43,47,78,83`
1
$$
\int ^{2}_{0}x(x-3)\ dx = \int ^{2}_{0}(x^{2} - 3x)\ dx = \left( \frac{1}{3}x^{3} - \frac{3}{2}x^{2} \right)^{2}_{0} = \frac{8}{3} - 6 = - \frac{10}{3}\ \blacksquare
$$
6
$$
\int ^{3}_{-2} (x^{3} - 2x + 3)\ dx = \left( \frac{1}{4} x ^{4} - x^{2} + 3x \right)^{3}_{-2} = \frac{81}{4} - 9 + 9 - (4 - 4 - 6) = \frac{105}{4}\ \blacksquare
$$
7
$$
\int ^{1}_{0}(x^{2} + \sqrt{ x })\ dx = \left( \frac{1}{3} x^{3} + \frac{2}{3} x^{\frac{2}{3}} \right)^{1}_{0} = 1\ \blacksquare
$$
10
$$
\int ^{\pi}_{0} (1 + \cos x)\ dx = (x + \sin x) ^{\pi}_{0} = \pi + 0 - (0 + 0) = \pi\ \blacksquare
$$
17
$$
\int ^{\pi/8}_{0} \sin 2x\ dx = - \left.{\frac{1}{2} \cos 2x }\right|^{\pi/8}_{0} = - \frac{\sqrt{ 2 }}{4} - \left( -\frac{1}{2} \right) = \frac{1}{2}\left( 1 - \frac{1}{\sqrt{ 2 }} \right)\ \blacksquare
$$
22
$$
\int ^{-1}_{-3} \frac{y^{5}- 2y}{y^{3}}\ dy = \int ^{-1}_{-3} y^{2} - 2y^{-2}\ dy =\left. \frac{1}{3}y^{3} + 2y^{-1}\right|^{-1}_{-3} = -\frac{1}{3} - 2 -\left( -9 - \frac{2}{3} \right) = \frac{22}{3}\ \blacksquare
$$
29
$$
\int ^{\ln 2}_{0} e^{3x}\ dx =\left. \frac{1}{3}e^{3x}\right|^{\ln 2}_{0} = \frac{1}{3} e^{3\ln 2} = \frac{8}{3}\ \blacksquare
$$
39
a
$$
\begin{aligned}
 & \int ^{\sqrt{ x }}_{0} \cos t\ dt = \left. \sin t \right |^{\sqrt{ x }} _{ 0} = \sin \sqrt{ x } \\
 & \frac{d}{dx}\int ^{\sqrt{ x }}_{0} \cos t\ dt = \frac{d}{dx} \sin \sqrt{ x } = \cos \sqrt{ x } \cdot \frac{1}{2\sqrt{ x }}\ \blacksquare
\end{aligned}
$$
b
$$
\begin{aligned}
 & \text{let}\ u = \sqrt{ x } \\
 & \frac{d}{dx} \int ^{\sqrt{ x }}_{0} \cos t\ dt = \frac{d}{du} \int ^{u}_{0} \cos t\ dt \cdot \frac{du}{dx} = \cos u \cdot \frac{1}{2\sqrt{ x }} = \cos \sqrt{ x }\cdot \frac{1}{2\sqrt{ x }}\ \blacksquare
\end{aligned}
$$
43
a
$$
\begin{aligned}
 & \int ^{x^{3}}_{0} e^{-t}\ dt = \left.- e^{-t}\right|^{x^{3}}_{0} = - e ^{-x^{3}} - ( - e^{0}) = - e ^{-x^{3}} + 1 \\
 & \frac{d}{dx}\int ^{x^{3}}_{0} e^{-t}\ dt = \frac{d}{dx}(-e^{-x^{3}} + 1) = 3x^{2}e^{-x^{3}}\ \blacksquare
\end{aligned}
$$
b
$$
\begin{aligned}
 & \text{let}\ u = x^{3} \\
 & \frac{d}{dx} \int ^{x^{3}}_{0}e^{-t}\ dt = \frac{d}{du}\int ^{u}_{0}e^{-t}\ dt\cdot \frac{du}{dx} = e^{-u}\cdot 3x^{2} = 3x^{2}e^{-x^{3}}\ \blacksquare
\end{aligned}
$$
47
$$
\begin{aligned}
 & y = \int ^{0}_{\sqrt{ x }} \sin (t^{2})\ dt = - \int ^{\sqrt{ x }}_{0} \sin(t^{2})\ dt \\
 & \frac{dy}{dx} = - \frac{d}{dx} \int ^{\sqrt{ x }}_{0} \sin(t^{2})\ dt = - \frac{1}{2\sqrt{ x }} \sin x\ \blacksquare
\end{aligned}
$$
78
$$
H = f(t) = 0.3\cdot \sqrt{ t + 1 } + 1.5t^{1/3},\ 0 \le t \le 8
$$
a
$$
\begin{aligned}
 & H_{0} = f(0) = 0.3 + 1.5 = 1.8(\pu{m}) \\
 & H_{4} = f(4) = 0.3\sqrt{ 5 } + 1.5 \cdot \sqrt[3]{ 4 }(\pu{m}) \\
 & H_{8} = f(8) = 0.3\cdot 3 + 1.5 \cdot 2 = 3.9(\pu{m})\ \blacksquare
\end{aligned}
$$
b
$$
\begin{aligned}
\overline{H}_{0,8}  & = \frac{1}{8 - 0} \int ^{8}_{0}f(t)\ dt  \\
 & = \frac{1}{8} \left( 0.3\cdot \frac{2}{3}\cdot (t+1)^{3/2} + 1.5\cdot \frac{3}{4}\cdot t^{4/3} \right)^{8}_{0} \\
 & = \frac{1}{8}\left( 0.2\cdot 9^{3/2} + \frac{4.5}{4}\cdot 8^{4/3} \right) - \frac{1}{8}(0.2\cdot 1 + 0) \\
 & = \frac{0.1}{4}\cdot 27 + \frac{9}{4} - \frac{0.1}{4} \\
 & = \frac{11.6}{4} = 2.9\ \blacksquare
\end{aligned}
$$
83
$$
\forall x \in \mathbb{R},\ \frac{df}{dx}(x) > 0;\ f(1) = 0;\ g(x) = \int ^{x}_{0} f(t)\ dt
$$
a
$$
\begin{aligned}
 & \begin{aligned}
g'(x) = \lim_{ h \to 0 } \frac{g(x + h) - g(x)}{h}  & = \lim_{ h \to 0 } \frac{1}{h}\left[ \int ^{x +h}_{0} f(t)\ dt - \int ^{x}_{0}f(t)\ dt   \right] \\
 & = \lim_{ h \to 0 } \frac{1}{h}\int ^{x + h}_{x} f(t)\ dt \\
\end{aligned}\\
	 & \because g\ \text{is continuous on}\ [x, x + h] \\
	 & \therefore \text{by M.V.T. for definite integral},\ \exists c \in [x, x + h] \ni f(c) = \frac{1}{h}\int ^{x + h}_{x} f(t)\ dt \\
	 & \ \ \ \ \ g'(x) = \lim_{ h \to 0 } \frac{1}{h} \int ^{x + h}_{x} f(t)\ dt = 

  
\end{aligned}
$$