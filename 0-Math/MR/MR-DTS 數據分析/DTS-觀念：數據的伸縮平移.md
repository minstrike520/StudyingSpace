---
page-type: 學科筆記
---
# 數據分析．伸縮與平移
【實例】有一數據 $X$ 的第k項為 $x_k$，平均數 $\mu_{x}$，標準差 $\sigma_{x}$。今對其做伸縮平移，得一新數據 $Y$ 可表示為 $y_{k}=ax_{k}+b$，則求新數據的平均數與標準差？
想法：依照定義代入公式推求即可
$$
\begin{aligned}
 & \begin{aligned}
\mu_{y}  & = \frac{{\sum y_{k}}}{n} \\
 & = \frac{{\sum ax_{k}+ b}}{n} \\
 & = \frac{{a\sum x_{k}}}{n} + b = \boxed{a\mu_{x} + b} \ \blacksquare_{1}
\end{aligned}  & \begin{aligned}
\sigma_{y}  & = \sqrt{ \frac{\sum(y_{k} - \mu_{y})^{2}}{n} } \\
 & = \sqrt{ \frac{\sum(ax_{k} + b - a\mu_{x} - b)^{2}}{n} } \\
 & = \sqrt{ \frac{a^{2}\sum(x_{k}-\mu_{x})^{2}}{n} } \\
 & = \boxed{|a| \sigma_{x}} \ \blacksquare_{2}
\end{aligned}
\end{aligned}
$$
