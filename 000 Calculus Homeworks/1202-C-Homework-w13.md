# 8.1
1
$$
\begin{aligned}
\int x \sin \frac{x}{2}\ dx & = -2 \int x\ d\cos  \frac{x}{2} \\
 & = -2x\cos \frac{x}{2} + 2 \int \cos \frac{x}{2}\ dx \\
 & = -2x\cos \frac{x}{2} + 4 \sin \frac{x}{2} + C\ \blacksquare
\end{aligned}
$$
4
$$
\begin{aligned}
\int x^{2} \sin x\ dx & = - \int x^{2}\ d\cos x\\
 & = - x^{2} \cos x + \int \cos x\ dx^{2} \\
 & = - x^{2} \cos x + 2 \int \cos x\ dx \\
 & = - x^{2} \cos x + 2\sin x + C\ \blacksquare
\end{aligned}
$$
5
$$
\begin{aligned}
\int ^{2}_{1} x \ln x\ dx & = \frac{1}{2}\int ^{2}_{1} \ln x\ dx^{2} \\
 & = \frac{1}{2}x^{2}\ln x|^{2}_{1} - \frac{1}{2} \int ^{2}_{1}x^{2}\ d\ln x \\
 & = \frac{1}{2}x^{2}\ln x|^{2}_{1} - \frac{1}{2} \int ^{2}_{1}x^{2}\cdot \frac{1}{x}\ dx \\
 & = \frac{1}{2}x^{2} \ln x|^{2}_{1} - \frac{1}{4} x^{2}|^{2}_{1} \\
 & = \left[ \frac{1}{2}x^{2}\left( \ln x - \frac{1}{2} \right) \right]^{2}_{1} \\
 & = - \frac{1}{4} - (2 \ln 2 - 1) \\
 & = \frac{3}{4} - 2\ln 2\ \blacksquare
\end{aligned}
$$
8
$$
\begin{aligned}
\int xe^{3x}\ dx & = \frac{1}{3} \int x\ de^{3x} \\
 & = \frac{1}{3} xe^{3x} - \frac{1}{3} \int e^{3x}\ dx \\
 & = \frac{1}{3}xe^{3x} - \frac{1}{9}e^{3x} + C\ \blacksquare
\end{aligned}
$$
15
$$
\begin{aligned}
\int x^{3} e^{x}\ dx & = \int x^{3}\ de^{x} \\
 & = x^{3}e^{x} - \int e^{x}\ dx^{3} \\
 & = x^{3}e^{x} - 3\int x^{2}e^{x}\ dx \\
 & = x^{3}e^{x} - 3\int x^{2}\ de^{x} \\
 & = x^{3}e^{x} - 3x^{2}e^{x} + 3\int e^{x}\ dx^{2} \\
 & = x^{3}e^{x} - 3x^{2}e^{x} + 6\int xe^{x}\ dx \\
 & = x^{3}e^{x} - 3x^{2}e^{x} + 6 \int x\ de^{x} \\
 & = x^{3}e^{x} - 3x^{2}e^{x} + 6 xe^{x} - 6\int e^{x}\ dx \\
 & = x^{3}e^{x} - 3x^{2}e^{x} + 6 xe^{x} - 6e^{x} + C\ \blacksquare
\end{aligned}
$$
21
$$
\begin{aligned}
 & \begin{aligned}
\int e^{\theta}\sin\theta\ d\theta & = \int \sin \theta\ de^{\theta} \\
 & = e^{\theta} \sin \theta - \int e^{\theta} \ d \sin \theta \\
 & = e^{\theta} \sin \theta - \int e^{\theta} \cos \theta\ d \theta \\
 & = e^{\theta} \sin \theta - \int \cos \theta \ de^{\theta} \\
 & = e^{\theta} \sin \theta - e^{\theta} \cos \theta + \int e^{\theta} \ d \cos \theta \\
 & = e^{\theta} \sin \theta - e^{\theta} \cos \theta - \int e^{\theta} \sin \theta\ d\theta  
\end{aligned} \\
 & 2 \int e^{\theta} \sin \theta\ d\theta = e^{\theta} (\sin \theta - \cos \theta) + C\\
 & \int e^{\theta} \sin \theta\ d\theta = \frac{1}{2} e^{\theta}(\sin \theta - \cos \theta) + C\ \blacksquare
\end{aligned}
$$
35
45
$$
\begin{aligned}
 & \text{let}\ u = \sqrt{ x },\ x = u^{2} \\
 & dx = du^{2} \\
 & \begin{aligned}
\int \cos \sqrt{ x }\ dx & = \int \cos u\ du^{2} \\
 & = 2\int u\cos u\ du \\
 & = 2\int u\ d\sin u \\
 & = 2u \sin u - 2 \int \sin u \ du \\
 & = 2 u \sin u + 2 \cos u + C \\
 & = 2\sqrt{ x }\sin \sqrt{ x } + 2\cos \sqrt{ x } + C\ \blacksquare
\end{aligned}
\end{aligned}
$$
58
a
$$
\begin{aligned}
A & = -\int ^{3\pi/2}_{\pi / 2}x\cos x\ dx \\
 & = - \int ^{3\pi / 2}_{\pi / 2}x\ d\sin x \\
 & = - x \sin x|^{3\pi / 2}_{\pi / 2} + \int ^{3 \pi /2}_{\pi  / 2}\sin x\ dx \\
 & = (-x\sin x - \cos x)^{3\pi / 2}_{\pi / 2} \\
 & = - \frac{3\pi}{ 2}\cdot (-1) - 0 - \left[ - \frac{\pi}{2}\cdot 1 - 0 \right] \\
 & = 2\pi \ \blacksquare
\end{aligned}
$$
b
$$
\begin{aligned}
A & = \int ^{5\pi / 2}_{3\pi / 2}x \cos x\ dx \\
 & = \int ^{5\pi / 2}_{3\pi / 2}x\ d\sin x \\
 & = (x\sin x)^{5\pi /2}_{3\pi / 2}- \int ^{5\pi / 2}_{3\pi / 2}\sin x\ dx \\
 & = (x \sin x + \cos x)^{5\pi / 2}_{3\pi / 2} \\
 & = \frac{5\pi}{2}\cdot 1 + 0 - \left( - \frac{3\pi}{2}\cdot (-1) + 0 \right) \\
 & = 4\pi\ \blacksquare
\end{aligned}
$$
c
$$
\begin{aligned}
A & = -\int ^{7\pi / 2}_{5\pi / 2}x \cos x \ dx\\
 & = -\int ^{7\pi / 2}_{5\pi / 2} x\ d\sin x \\
 & = -(x \sin x)^{7 \pi / 2}_{5 \pi /2} + \int ^{7 \pi / 2}_{5 \pi / 2}\sin x\ dx \\
 & = -(x \sin x + \cos x)^{7\pi / 2}_{5\pi / 2} \\
 & = -\left( \frac{7\pi}{2}\cdot (-1) - \frac{5\pi}{2}\cdot 1 \right) \\
 & = 6\pi \ \blacksquare
\end{aligned}
$$
d
$$
\begin{aligned}
 & \text{The integral value of }\left| \int ^{(2n + 1)\pi / 2}_{(2n - 1)\pi / 2}x \cos x\ dx \right| \ \text{is } 2n\pi\text{, which is the area between} \\
 & \text{the curve and the x-axis for}\ \left( \frac{2n - 1}{2} \right)\pi \le x \le \left( \frac{2n + 1}{2} \right)\pi.\ \blacksquare
\end{aligned}
$$

# 8.2
3
$$
\begin{aligned}
\int \cos ^{3}x \sin x\ dx & = -\int \cos ^{3}x\ d \cos x \\
 & = - \frac{1}{4} \cos ^{4}x + C\ \blacksquare
\end{aligned}
$$
5
$$
\begin{aligned}
\int \sin ^{3}x\ dx & = \int (1 - \cos ^{2}x)\sin x\ dx \\
 & = - \int (1 - \cos ^{2}x)\ d\cos x \\
 & = - \cos x + \frac{1}{3} \cos ^{3}x + C\ \blacksquare
\end{aligned}
$$
11
$$
\begin{aligned}
\int \sin ^{3}x \cos ^{3}x\ dx & = \int (1 - \cos ^{2}x)\cos ^{3}x\cdot \sin x\ dx \\
 & = - \int (\cos ^{3}x - \cos ^{5}x)\ d \cos x \\
 & = - \frac{1}{4}\cos ^{4}x + \frac{1}{6} \cos ^{6}x + C\ \blacksquare
\end{aligned}
$$
14
$$
\begin{aligned}
\int ^{\pi / 2}_{0} \sin ^{2}x\ dx & = \frac{1}{2} \int ^{\pi / 2}_{0} (1 - \cos 2x)\ dx \\
 & = \frac{1}{4} \int ^{\pi / 2}_{0} (1 - \cos 2x)\ d(2x) \\
 & = \frac{1}{4}(2x - \sin 2x)^{\pi / 2}_{0} \\
 & = \frac{\pi}{4} \ \blacksquare
\end{aligned}
$$
19
$$
\begin{aligned}
\int 16 \sin ^{2}x\cos ^{2}x\ dx & = \int 4 \sin ^{2} 2x\ dx \\
 & = 2 \int \sin ^{2}2x\ d(2x) \\
 & = \int (1 - \cos 4x)\ d(2x) \\
 & = \frac{1}{2}\int (1 - \cos 4x)\ d(4x) \\
 & = \frac{1}{2}(4x - \sin 4x) + C \\
 & = 2x - \frac{1}{2} \sin 4x + C\ \blacksquare
\end{aligned}
$$
26
$$
\begin{aligned}
\int ^{\pi}_{0} \sqrt{ 1 - \cos ^{2}\theta }\ d\theta & = \int ^{\pi}_{0} \sin \theta\ d\theta \\
 & = - \cos\theta |^{\pi}_{0} \\
 & = - (- 1 - 1) = 2\ \blacksquare
\end{aligned}
$$
42
$$
\begin{aligned}
\int \tan ^{4}x\sec ^{3}x\ dx &= \int (\sec ^{2}x - 1)^{2}\sec ^{3}x\ dx \\
 & = \int (\sec ^{7}x - 2 \sec ^{5}x + \sec ^{3}x)\ dx \\
 & = \int \sec ^{7}x\ dx - 2\int \sec ^{5}x\ dx + \int \sec ^{3}x\ dx \\
 & = \int \sec ^{5}x\ d\tan x - 2 \int \sec ^{3}x\ d\tan x + \int \sec x\ d\tan x \\
 & = \tan x\sec ^{5}x - \int \tan x\cdot 5\sec ^{4}x\sec x\tan x\ dx \\
 & - 2\left( \tan x \sec ^{3}x - \int \tan x\cdot 3\sec ^{2}x\sec x\tan x\ dx \right) \\
 & + \tan x \sec x - \int \tan x\cdot \sec x\tan x\ dx \\
 & = \tan x\sec ^{5}x - 5 \int \tan ^{2}x\sec ^{5}x\ dx \\
 & - 2\left( \tan x \sec ^{3}x - 3 \int \tan ^{2}x \sec ^{3}x\ dx \right) \\
 & + \tan x \sec x - \int \tan ^{2} x\cdot \sec x\ dx\dots
\end{aligned}
$$
51
$$
\begin{aligned}
\int ^{\pi / 3}_{ \pi / 4} \tan ^{5}\theta \sec ^{4}\theta\ \ d \theta & = \int ^{\pi / 3}_{\pi / 4} \tan ^{5}\theta \ d\tan ^{2}\theta \\
 & = \int ^{\pi / 3}_{\pi / 4}2 \tan ^{6}\theta\ d\tan\theta \\
 & = \frac{2}{7}\tan ^{7}\theta|^{\pi / 3}_{\pi / 4} \\
 & = \frac{2}{7}(3^{7/2} - 1) \\
 & = \frac{54}{7} \sqrt{ 3 } - \frac{2}{7}\ \blacksquare
\end{aligned}
$$

# 8.3
1
$$
\begin{aligned}
 & \text{let}\ \theta = \tan ^{-1} \frac{x}{3},\ x=  3 \tan \theta \\
 & \implies dx = 3\sec ^{2}\theta \ d\theta \\
 & \implies \tan \theta = \frac{x}{3}, \sec \theta = \sqrt{ 1 + \tan ^{2}\theta } = \sqrt{ 1 + \frac{x^{2}}{9} }\\
 & \begin{aligned}
\int \frac{dx}{\sqrt{ 9 + x^{2} }} & = \int \frac{3\sec ^{2}\theta}{\sqrt{ 9 + 9 \tan ^{2}\theta }}\ d\theta \\
 & = \int \frac{3 \sec ^{2}\theta}{3 \sec\theta}\ d\theta \\
 & = \int \sec\theta\ d\theta = \ln \left| \sec \theta + \tan\theta \right| +C \\
 & = \ln \left| \frac{x}{3} + \sqrt{ 1 + \frac{x^{2}}{9} } \right| + C\ \blacksquare
\end{aligned}
\end{aligned}
$$
3
$$
\begin{aligned}
 & \text{let}\ \theta = \tan ^{-1} \frac{x}{2},\ x = 2 \tan \theta \\
 & \implies dx = 2 \sec ^{2}\theta\ d\theta \\
 & \implies \tan\theta = \frac{x}{2},\ \sec\theta = \sqrt{ 1 + \tan ^{2}\theta } = \sqrt{ 1 + \frac{x^{2}}{4} }  \\
 & \implies x = 2,\ \theta = \tan ^{-1}1 = \frac{\pi}{4} \\
 & \implies x = -2,\ \theta = \tan ^{-1} -1 = - \frac{\pi}{4}\\
 & \begin{aligned}
\int ^{2}_{-2} \frac{dx}{4 + x^{2}} & = \int ^{\pi / 4}_{-\pi / 4} \frac{2\sec ^{2}\theta}{4 + 4\tan ^{2}\theta}\ d\theta \\
 & = \int ^{\pi / 4}_{-\pi / 4} \frac{2 \sec ^{2} \theta}{4 \sec ^{2}\theta}\ d\theta \\
 & = \int ^{\pi / 4}_{-\pi / 4} \frac{1}{2}\ d\theta \\
 & = \frac{1}{2}\theta | ^{\pi / 4}_{-\pi / 4} = \frac{\pi}{4}\ \blacksquare
\end{aligned}
\end{aligned}
$$
5
$$
\begin{aligned}
 & \text{let}\ \theta= \sin ^{-1} \frac{x}{3},\ x = 3 \sin \theta \\
 & \implies dx = 3\cos \theta\ d\theta \\
 & \implies \sin \theta = \frac{x}{3} \\
 & \implies x = \frac{3}{2},\ \theta = \sin ^{-1} \frac{1}{2} = \frac{\pi}{6} \\
 & \implies x = 0,\ \theta = \sin ^{-1} 0 = 0 \\
 & \begin{aligned}
\int ^{3/2}_{0} \frac{dx}{\sqrt{ 9 - x^{2} }} & = \int ^{\pi / 6}_{0} \frac{3 \cos \theta}{\sqrt{ 9 - 9 \sin ^{2}\theta }}\ d\theta \\
 & = \int ^{\pi / 6}_{0} \frac{3 \cos \theta}{3 \cos \theta}\ d\theta \\
 & = \int ^{\pi / 6}_{0} d\theta \\
 & = \theta |^{\pi / 6}_{0} = \frac{\pi}{6}\ \blacksquare
\end{aligned}
\end{aligned}
$$
11
$$
\begin{aligned}
 & \text{let}\ \theta = \sec ^{-1} \frac{y}{7},\ y = 7 \sec \theta \\
 & \implies dy =7\sec\theta \tan \theta \ d\theta \\
 & \begin{aligned}
\int \frac{\sqrt{ y^{2} - 49 }}{y}\ dy & = \int \frac{7\tan \theta}{7 \sec \theta}\cdot 7\sec\theta \tan\theta\ d\theta \\
 & = 7 \int \tan ^{2}\theta\ d\theta \\
 & = 7\int (\sec ^{2}\theta - 1)\ d\theta \\
 & = 7 \tan \theta - \theta + C \\
 & = 7\sqrt{ \sec ^{2}\theta - 1 } - \theta  + C \\
 & = 7 \sqrt{ \frac{y^{2}}{49} - 1 } - \sec ^{-1} \frac{y}{7} + C\ \blacksquare
\end{aligned}
\end{aligned}
$$
35
$$
\begin{aligned}
 & \text{let}\ \theta = \sec ^{-1} x,\ x = \sec\theta \\
 & \implies dx = \sec\theta \tan \theta \ d\theta  \\
 & \text{let}\ u = \tan \theta ,\ u = \sqrt{ \sec ^{2}\theta - 1 } = \sqrt{ x^{2} - 1 }\\
 & \begin{aligned}
\int \frac{x^{3}dx}{x^{2} - 1} & = \int \frac{\sec ^{3}\theta \cdot \sec\theta \tan \theta}{\tan ^{2}\theta}\ d\theta \\
 & = \int \frac{\sec ^{4}\theta}{\tan\theta}\ d\theta \\
 & = \int \frac{1 + \tan ^{2}\theta}{\tan\theta}\ d\tan \theta \\
 & = \int \left( \frac{1}{u} + u \right)\ du \\
 & = \ln \left| u \right| + \frac{1}{2}u^{2} + C \\
 & = \ln \sqrt{ x^{2} - 1 } + \frac{1}{2}x^{2} - \frac{1}{2} + C \\
 & = \frac{1}{2}\ln (x^{2} - 1) + \frac{1}{2}x^{2} - \frac{1}{2} + C\ \blacksquare
\end{aligned}
\end{aligned}
$$
38
$$
\begin{aligned}
 & \text{let}\ \theta = \sin ^{-1}r,\ r = \sin \theta \\
 & \implies dr = \cos\theta \ d\theta \\
 & \begin{aligned}
\int \frac{(1 - r^{2})^{5/2}}{r^{8}}\ dr & = \int \frac{\cos ^{5}\theta}{\sin ^{8}\theta} \cdot \cos\theta\ d\theta \\
 & = \int \cot ^{6}\theta \cdot \csc ^{2}\theta\ d\theta \\
 & = - \int \cot ^{6}\theta \ d\cot \theta \\
 & = -  \frac{1}{7}\cot ^{7}\theta + C \\
 & = - \frac{1}{7} \cot ^{7}\sin ^{-1}r + C\ \blacksquare
\end{aligned}
\end{aligned}
$$
43
$$
\begin{aligned}
 & \text{let}\ \theta = \tan ^{-1}x^{2},\ \tan\theta = x^{2},\ x = \pm \sqrt{ \tan \theta }  \\
 & \implies \sec\theta = \sqrt{  1 + \tan ^{2}\theta } = \sqrt{ 1 + x^{4} }\\
 & \begin{aligned}
\int \frac{x\ dx}{\sqrt{ 1 + x^{4} }}  & = \frac{1}{2}\int \frac{dx^{2}}{\sec\theta} \\
 & = \frac{1}{2} \int \frac{d \tan \theta}{\sec\theta} \\
 & = \frac{1}{2}\int \frac{\sec ^{2}\theta}{\sec\theta}\ d\theta \\
 &= \frac{1}{2}\int \sec\theta\ d\theta \\
 & = \frac{1}{2}\ln \left| \sec\theta + \tan \theta \right| +C \\
 & = \frac{1}{2} \ln \left| \sqrt{ 1 + x^{4} } + x^{2} \right| + C\ \blacksquare
\end{aligned}
\end{aligned}
$$
54
$$
\begin{aligned}
 & \text{let}\ \theta = \sec ^{-1} \frac{x}{3},\ x = 3\sec\theta \\
 & \implies dx = 3\sec\theta \tan \theta \ d\theta \\
 & \implies \sec\theta = \frac{x}{3},\ \tan\theta = \sqrt{ \sec ^{2}\theta - 1 } = \sqrt{ \frac{x^{2}}{9} - 1 }\\
 & \sqrt{ x^{2} - 9 } \cdot \frac{dy}{dx} = 1 \implies \frac{dy}{dx} = \frac{1}{\sqrt{ x^{2} - 9 }} = \frac{1}{3\tan\theta} \\
 & \begin{aligned}
 y &  = \int \frac{dy}{dx}\cdot dx \\
 & = \int \frac{1}{3 \tan\theta}\ \cdot 3\sec\theta \tan \theta\ d\theta \\
 & = \int \sec\theta\ d\theta \\
 & = \ln \left|  \sec\theta + \tan \theta \right| +C \\
 & = \ln \left| \frac{x}{3} + \sqrt{ \frac{x^{2}}{9} - 1 }  \right| +C
\end{aligned} \\
 & y|_{x = 5} = \ln 3 \\
 & \implies \begin{aligned}
\ln \left| \frac{5}{3}+ \sqrt{ \frac{25}{9} - 1 } \right| +C & = \ln \left| \frac{5}{3} + \frac{4}{3} \right| +C \\
 & = \ln 3 + C
\end{aligned} \\
 & \implies C = 0,\ y = \ln \left|  \frac{x}{3} + \sqrt{ \frac{x^{2}}{9} -1 } \right| \ \blacksquare
\end{aligned}
$$
57
$$
\begin{aligned}
 & \text{let}\ \Gamma: y = \frac{\sqrt{ 9 - x^{2} }}{3},\ \left| x \right| < 3  \\
 & y = 0: \sqrt{ 9 - x^{2} } = 0,\ x = 3 \lor x = -3 \\
 & x \in [0,\ 3]: y|_{x = \sqrt{ 5 }} = \frac{2}{3} \implies \forall x \in [0, 3],\ y > 0\\
 & \text{let}\ \theta = \sin ^{-1} \frac{x}{3},\ x = 3 \sin \theta   \\
 & dx = 3 \cos \theta\ d\theta \\
 & x = 3,\ \theta = \frac{\pi}{2};\ x = 0,\ \theta = 0\\
 & \begin{aligned}
A & = \int ^{3}_{0} y\ dx \\
 & = \int ^{\pi / 2}_{0} \frac{3 \cos \theta}{3}\ d\theta \\
 & = \sin \theta | ^{\pi / 2}_{0} = 1\ \blacksquare
\end{aligned}
\end{aligned}
$$