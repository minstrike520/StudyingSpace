## nth-Term Test for Divergence
極限不存在或極限不為〇，都可推知級數發散：

$$
\lim_{ n \to \infty } a_{n}\ne 0 \lor \lim_{ n \to \infty } a_{n}\ \text{does not exist} \implies \sum_{n=1}^{\infty} a_{n} \ \text{diverges}
$$

## The Intergral Test
若
- $\{ a_{n} \}$內的元素全都為正數
- ${a_{n} = f(n)}$
- $f(x)$在${x \ge N}$時為一連續、正、遞減函數
則，積分式收斂使得級數收斂：
$$
\sum^{\infty}_{n = N} a_{n} = S \impliedby \int ^{\infty}_{N} f(x)\ dx = S', a_{n} = f(n) \forall n \ge N
$$