## Recall: Formulae for Trignomometric Functions
二倍角公式
$$
\cos 2x = 2 \cos ^{2} x - 1 = 1 - 2 \sin ^{2} x = \cos ^{2}x - \sin ^{2} x
$$
半角公式
$$
\sin ^{2}\phi = \frac{1 - \cos 2\phi}{2}
$$
$$
\cos ^{2} \phi = \frac{1 + \cos 2\phi}{2}
$$
## Most-used Taylor Series
*本處皆使用*$k$*作為變數*
$$
\cos x = \sum_{k=0}^{\infty} \frac{(-1)^{k}x^{2k}}{(2k)!} = 1 - \frac{x^{2}}{2!} + \frac{x^{4}}{4!} + \dots
$$
$$
\sin x = \sum_{k=0}^{\infty} \frac{(-1)^{k}x^{2k+1}}{(2k+1)!} = x - \frac{x^{3}}{3!} + \frac{x^{5}}{5!} + \dots
$$
$$
\arctan x = \sum_{k=0}^{\infty} \frac{(-1)^{k}x^{(2k + 1)}}{2k + 1} = x - \frac{x^{3}}{3} + \frac{x^{5}}{5} + \dots
$$
正弦跟餘弦第一項都是從正數開始，所以使用$(-1)^{k}$。
$$
e^{x} = \sum_{k=0}^{\infty} \frac{x^{k}}{k!} = 1 + x + \frac{x^{2}}{2!} + \frac{x^{3}}{3!} + \dots
$$
$$
\ln (1 + x) = \sum_{k=1}^{\infty} (-1)^{k+1} \frac{x^{k}}{k} =  x - \frac{x^{2}}{2} + \frac{x^{3}}{3} - \dots
$$
$$
\ln (1 - x) = - \sum ^{\infty}_{k = 1} \frac{x^{k}}{k} = -x - \frac{x^{2}}{2} - \frac{x^{3}}{3} - \dots
$$
## Partial Fractions' Special Cases
$$
\frac{1}{n(n + 1)} = \frac{1}{n} - \frac{1}{n + 1}
$$
## Natural Number Definition
$$
e = \lim_{ n \to \infty } \left(  1 + \frac{1}{n} \right)^{n}
$$
${e^{-1} = \lim_{ n \to \infty }\left( \frac{n}{n+1} \right)^{n}}$:
$$
e ^{-1} = \lim_{ n \to \infty } \left( \frac{1}{1 + \frac{1}{n}} \right)^{n} = \lim_{ n \to \infty } \frac{1}{\frac{n + 1}{n}}^{n} = \lim_{ n \to \infty } \left( \frac{n}{n+1} \right)^{n}
$$
${e^{k} = \lim_{ n \to \infty }\left( 1 + \frac{k}{n} \right)^{n}}$:
$$
e^{k} = \lim_{ n' \to \infty } \left( 1 + \frac{1}{n'} \right)^{n'k} = \lim_{ n'k \to \infty } \left(  1 + \frac{1}{\frac{n'k}{k}} \right)^{n'k} = \lim_{ n \to \infty } \left( 1 + \frac{k}{n} \right)^{n}
$$
