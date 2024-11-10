# 4.5
4.5: 5,16,21,30,35,37,53,58,59,71
5
Using L'Hospital's Rule:
$$
\lim_{ x \to 0 } \frac{1 - \cos x}{x^{2}} = \lim_{ x \to 0 } \frac{\sin x}{2x} = \frac{1}{2}\ \blacksquare
$$
Using a method in Chapter 2:
$$
\begin{aligned}
 & \lim_{ x \to 0 } \frac{1 - \cos x}{x^{2}}  \\
 & = \lim_{ x \to 0 } \frac{1 - \cos ^{2}x}{x^{2}(1 + \cos x)}  \\
 & = \lim_{ x \to 0 } \frac{\sin ^{2}x}{x^{2}(1 + \cos x)}  \\
 & = \frac{1}{1 + 1} = \frac{1}{2}\ \blacksquare
\end{aligned}
$$
16
$$
\begin{aligned}
 & \lim_{ x \to 0 } \frac{\sin x - x}{x^{3}}  \\
 & = \lim_{ x \to 0 } \frac{\cos x - 1}{3x^{2}}  \\
 & = \lim_{ x \to 0 } \frac{-\sin x}{6x}  \\
 & = - \frac{1}{6}\ \blacksquare
\end{aligned}
$$
21
$$
\begin{aligned}
 & \lim_{ x \to 0 } \frac{x^{2}}{\ln(\sec x)}  \\
 & = \lim_{ x \to 0 } \frac{2x}{\frac{1}{\sec x}\cdot \sec x\tan x}  \\
 & = \lim_{ x \to 0 }  \frac{2x}{\tan x}  \\
 & = 2\ \blacksquare
\end{aligned}
$$
30
$$
\begin{aligned}
 & \lim_{ x \to 0 } \frac{3^{x} - 1}{2^{x} - 1}  \\
 & = \lim_{ x \to 0 } \frac{3^{x}\ln 3}{2^{x}\ln 2}  \\
 & = \frac{\ln 3}{\ln 2}  \\
 & = \log_{2}3\ \blacksquare
\end{aligned}
$$
note:
$$
\begin{aligned}
 & a^{x} = e^{\ln a^{x}} = e^{x \cdot \ln a} \\
 & \boxed{\ \frac{d}{dx} a^{x} = a^{x} \ln a\ }:\ \frac{d}{dx} a^{x} = e^{x\cdot \ln a} \cdot \ln a = a^{x} \ln a
\end{aligned}$$
35
$$
\begin{aligned}
 & \lim_{ y \to 0 } \frac{\sqrt{ 5y + 25 } - 5}{y}  \\
 & = \lim_{ y \to 0 } \frac{\frac{1}{2(5y+25)}\cdot 5}{1}  \\
 & = \lim_{ y \to 0 } \frac{1}{2y + 10}  \\
 & = \frac{1}{10}\ \blacksquare
\end{aligned}
$$
37
$$
\begin{aligned}
 & \lim_{ x \to \infty } (\ln 2x - \ln(x + 1)) \\
 & = \lim_{ x \to \infty } \ln \frac{2x}{x + 1}  \\
 & = \ln \lim_{ x \to \infty } \frac{2x}{x+1}  \\
 & = \ln 2\ \blacksquare
\end{aligned}$$
53
$$
\begin{aligned}
 & \lim_{ x \to \infty } (\ln x)^{1/x}  \\
 & = \lim_{ x \to \infty } e^{(1/x)\cdot \ln \ln x}  \\
 & = \lim_{ x \to \infty } e^{\frac{\ln \ln x}{x}}  \\
 & = \lim_{ x \to \infty } e^{\frac{\frac{1}{\ln x}\cdot 1/x}{1}}  \\
 & = \lim_{ x \to \infty } e^{1/(x\ln x)}  \\
 & = 1\ \blacksquare
\end{aligned}$$
58
$$
\begin{aligned}
 & \lim_{ x \to 0 } (e^{x} + x)^{1/x}  \\
 & = \lim_{ x \to 0 } e^{\frac{1}{x}\ln(e^{x} + x)}  \\
 & = e^{\lim_{ x \to 0 } \frac{\ln(e^{x} + x)}{x}}  \\
 & = e^{\lim_{ x \to 0 } \frac{1}{e^{x} + x}\cdot (e^{x} + 1)}  \\
 & = e^{2}\ \blacksquare
\end{aligned}$$
59
$$
\begin{aligned}
 & \lim_{ x \to 0^{+} } x^{x}  \\
 & = \lim_{ x \to 0^{+} } e^{x\ln x}  \\
 & = \lim_{ x \to 0^{+} } e^{\frac{\ln x}{\frac{1}{x}}}  \\
 & = e^{\lim_{ x \to 0^{+}} \frac{\ln x}{\frac{1}{x}}}  \\
 & = e^{\lim_{ x \to 0^{+} } \frac{\frac{1}{x}}{-\frac{1}{x^{2}}}}  \\
 & = e^{\lim_{ x \to 0^{+} } -x}  \\
 & = e^{0} = 1\ \blacksquare
\end{aligned}$$
71
Trying L'Hospital's Rule:
$$
\lim_{ x \to \infty } \frac{2^{x} - 3^{x}}{3^{x} + 4^{x}} = \lim_{ x \to \infty } \frac{2^{x} \ln 2 - 3^{x} \ln 3}{3^{x} \ln 3+4^{x} \ln 4} = \dots
$$
Trying the other way:
$$
\begin{aligned}
 & \lim_{ x \to \infty }  \frac{2^{x} - 3^{x}}{3^{x} + 4^{x}}  \\
 & = \lim_{ x \to \infty }  \frac{\left( \frac{2}{4} \right)^{x} - \left( \frac{3}{4} \right)^{x}}{\left( \frac{3}{4} \right)^{x} + 1}  \\
 & = \frac{0}{1} = 0\ \blacksquare
\end{aligned}
$$
# 4.8
4.8: 26,29,39,46,52,67,76,78

26
$$
\begin{aligned}
 & \int (5 - 6x) \ dx = 5x - 3x^{2} + C\ \blacksquare
\end{aligned}
$$
29
$$
\int (2x^{3} - 5x + 7)\ dx = \frac{1}{2} x^{4} - \frac{5}{2} x^{2} + 7x + C\ \blacksquare
$$
39
$$
\begin{aligned}
 & \int 2x(1 - x^{-3})\ dx  \\
 & = \int (2x - 2x^{-1})\ dx  \\
 & = x^{2} - 2\ln | x | + C\ \blacksquare
\end{aligned}$$
46
$$
\int 3 \cos 5\theta\ d\theta = \frac{3}{5} \sin 5\theta + C\ \blacksquare
$$
52
$$
\int (2e^{x} - 3e^{-2x})\ dx = 2e^{x} + \frac{3}{2x} e^{-2x} \ \blacksquare
$$
67 **TODO**
$$
\int \cot ^{2} x\ dx = 
$$
76
$$
\begin{aligned}
 & \frac{d}{dx} \left( \frac{x}{x+1} + C \right) \\
 & = \frac{d}{dx} \frac{x}{x+1} \\
 & = \frac{x + 1 - x\cdot 1}{(x + 1)^{2}} \\
 & = \frac{1}{(x+1)^{2}} \\
 & \frac{d}{dx} \int \frac{1}{(x+1)^{2}}\ dx = \frac{1}{(x+1)^{2}}\ \blacksquare
\end{aligned}
$$
78
$$
\begin{aligned}
 & \frac{d}{dx} (xe^{x} - e^{x} + C) \\
 & = \frac{d}{dx}(xe^{x} - e^{x}) \\
 & = e^{x} + xe^{x} - e^{x} \\
 & = xe^{x} \\
 & \frac{d}{dx}\int xe^{x}\ dx = xe^{x}\ \blacksquare
\end{aligned}
$$
# 5.1
5.1: 2,3

2
a.
$$
\begin{aligned} 
 & S_\text{a} = L_{2} = 0 + \left( \frac{1}{2} \right)^{3} \cdot \frac{1}{2} = \frac{1}{16}\ \blacksquare
\end{aligned}
$$
b.
$$
\begin{aligned}
 S_\text{b} &  = L_{4} \\
 & = \sum ^{4}_{k = 1} \left( \frac{k - 1}{4} \right)^{3} \cdot \frac{1}{4}  \\
 & = \frac{1}{256}\cdot \left( \sum ^{4}_{k=1} k^{3} - 3 \sum ^{4}_{k = 1} k^{2} + 3 \sum ^{4}_{k = 1} k - 1 \right)  \\
 & = \frac{1}{256}\cdot (100 - 3\cdot 30 + 3\cdot 10 - 1) \\
 & = \frac{39}{256} \blacksquare
\end{aligned}
$$
c.
$$
\begin{aligned}
S_\text{c}  & = U_{2} \\
 & = \left( \frac{1}{2} \right)^{3}\cdot \frac{1}{2} + 1^{3}\cdot \frac{1}{2} = \frac{5}{8}\ \blacksquare
\end{aligned}
$$
d.
$$
\begin{aligned}
S_\text{d} & = U_{4} \\
 & = \sum ^{4}_{k = 1}\left( \frac{k}{4} \right)^{3}\cdot \frac{1}{4} \\
 & = \frac{1}{256}\cdot \sum ^{4}_{k=1} k^{3} \\
 & = \frac{100}{256} = \frac{25}{64}\ \blacksquare
\end{aligned}
$$

3.
$f(x) = \frac{1}{x},\ a = 1,\ b = 5$

a.
$$
\begin{aligned}
S_\text{a} = L_{2} = \frac{1}{3}\cdot 2 + \frac{1}{5}\cdot 2 = \frac{16}{15}\ \blacksquare
\end{aligned}
$$
b.
$$
\begin{aligned} S_\text{b}  & = L_{4} \\
 & = \sum ^{4}_{k = 1} \frac{1}{1 + k} \cdot 1 \\
 & = \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} \\
 & = \frac{30 + 20 + 15 + 12}{60} \\
 & = \frac{77}{60}\ \blacksquare
\end{aligned}
$$
c.
$$
\begin{aligned}
S_\text{c} & = U_{2} = 1\cdot 2 + \frac{1}{3}\cdot 2 = \frac{8}{3}
\end{aligned}
$$
d.
$$
\begin{aligned}
S_\text{d} & = U_{4} \\
 & = \sum ^{4}_{k=1} \frac{1}{1 + (k - 1)}\cdot 1 \\
 & = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} \\
 & = \frac{12 + 6 + 4 + 3}{12} \\
 & = \frac{25}{12}\ \blacksquare
\end{aligned}
$$