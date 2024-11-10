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
$$
\begin{aligned}
S_\text{a}  & = \sum ^{4}_{k = 1} \sin c_{k} \Delta x_{k} \\
 & = 0 + 1\cdot \frac{\pi}{2} + 1\cdot \frac{\pi}{2} + 0 \\
 & = \pi\ \blacksquare
\end{aligned}
$$
b
$$
\begin{aligned}
S_\text{b}  & = \sum ^{4}_{k = 1} \sin c_{k} \Delta x_{k} \\
 & = 1\cdot \frac{\pi}{2} + 0 + 0 + 1 \cdot \frac{\pi}{2} \\
 & = \pi\ \blacksquare
\end{aligned}
$$
c
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
ex4a eq1

# 5.4
`1,6,7,10,17,22,29,39,43,47,78,83`