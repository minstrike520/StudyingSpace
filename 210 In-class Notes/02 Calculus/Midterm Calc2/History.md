# 112年
## 對數極限
第三題中因為使用the root test，過程中需要求${\lim_{ n \to \infty } \sqrt[ n ]{ \frac{1}{n \ln n} }}$。

---
設${y = \sqrt[ n ]{ \frac{1}{n \ln n} } = (n \ln n)^{-1/n}}$，則所求可寫作${\lim_{ n \to \infty }y}$。
取對數，${\ln y = - \frac{1}{n} \ln (n \ln n) = - \frac{\ln n}{n} - \frac{\ln \ln n}{n}}$。
求對數極限，${\lim_{ n \to \infty }\ln y = -\lim_{ n \to \infty } \frac{\ln n}{n} - \lim_{ n \to \infty } \frac{\ln \ln n}{n} = 0 + 0 = 0}$
代回，所求＝
$$
\lim_{ n \to \infty }y = \lim_{ n \to \infty }e^{\ln y} = e^{\lim_{ n \to \infty }\ln y} = e ^{0} = 1
$$

## 積分檢定實作
檢測級數${\sum_{n=2}^{\infty} \frac{1}{n \ln n}}$是否收斂。

---
1. 設${f(x) = \frac{1}{x \ln x}}$，則此函數在${(2, \infty)}$上連續且正。
2. 微分，${f'(x) = \frac{- \ln x - 1}{(x \ln x)^{2}}}$，恆小於〇，則此函數在${[2,\infty)}$上遞減。
檢查：
$$
\int ^{\infty}_{2} f(x)\ dx = \int ^{\infty}_{2} \frac{dx}{x \ln x} = \lim_{ n \to \infty } \int ^{n}_{2} \frac{dx}{x \ln x} =  \lim_{ n \to \infty } \ln \ln x \biggr|^{n}_{2} =  \infty
$$
$\therefore$ By the integral test, it converges.
## 第N項檢定應用
檢測${\sqrt{ n }\sin \frac{1}{\sqrt{ n }}}$的級數收斂。

---
 注意兩個乘法項有相同的term，${\frac{1}{\sqrt{ n }}}$。
 將$x$形式翻轉作為分母（${\frac{1}{\frac{1}{x}}}$）是經常出現的作法。
 直接求數列極限：
 $$
\lim_{ n \to \infty } \sqrt{ n } \sin \frac{1}{\sqrt{ n }} = \lim_{ n \to \infty } \frac{\sin \frac{1}{\sqrt{ n }}}{\frac{1}{\sqrt{ n }}} \underset{L'H}{=} \lim_{ n \to \infty }  \frac{- \frac{1}{2n\sqrt{ n }} \cos \frac{1}{\sqrt{ n }}}{- \frac{1}{2n \sqrt{ n }}} = \lim_{ n \to \infty } \cos \frac{1}{\sqrt{ n }} = \cos 0 = 1
$$
＊計算提示：${\frac{d}{dn} \frac{1}{\sqrt{ n }} = \frac{d}{dn} n^{-1/2} = -\frac{1}{2} n^{-3/2} = - \frac{1}{2n \sqrt{ n }}}$
