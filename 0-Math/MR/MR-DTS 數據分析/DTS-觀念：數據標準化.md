---
page-type: 學科筆記
---
# 數據分析．數據標準化
先說結論：標準化所得之「標準化數據」，其**平均必為零**、**標準差必為一**。
$$
\begin{aligned}
 & \text{let}\ x_{k},\ \mu_{x}, \sigma_{x}\ \\

 & \text{define}\ z_{k} = \frac{{x_{k} - \mu_{x}}}{\sigma_{x}} = \frac{1}{\sigma_{x}}x_{k} - \frac{\mu_{x}}{\sigma_{x}}
\end{aligned}

$$
$$
\begin{aligned}
\begin{aligned} 
\mu_{z} = \frac{1}{\sigma_{x}}(\mu_{x}) - \frac{\mu_{x}}{\sigma_{x}} = \boxed{\ 0\ } \ \blacksquare_{1}
\end{aligned}  &  & 
\sigma_{z} = \frac{1}{\sigma_{x}} (\sigma_{x}) = \boxed{\ 1\ }\ \blacksquare_{2}
\end{aligned}
$$