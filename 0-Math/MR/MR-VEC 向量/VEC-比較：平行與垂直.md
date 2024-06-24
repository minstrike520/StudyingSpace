---
page-type: 學科筆記/比較
tags:
  - review_數/重點觀念
sr-due: 2024-07-03
sr-interval: 9
sr-ease: 200
---
# 平行假設法
已知b向量。假如a向量平行b向量，則可如此描述：
$$
\vec{a} \parallel \vec{b} \Longleftrightarrow \vec{a} = k\vec{b},\ k \in \mathbb{R}
$$
已知b向量的各項分量，則還可以直接定義a向量：
$$
\vec{a} = (k x_{1}, ky_{1})
$$
另外， 依照斜率的定義可知，a與b的斜率相等：
$$
m_{a} = m_{b}
$$
## 【總結】平行
1. 倍數關係，分量成比例
2. 斜率相等
3. 向量假設：$(kx_{1},ky_{1})$

# 垂直
已知d向量。假如c向量垂直b向量，則依照內積定義可知：
$$
\vec{c} \perp \vec{d} \implies \vec{c} \cdot \vec{d} = |\vec{c}||\vec{d}|\cos (\vec{c} \angle \vec{d}) = 0\ (\because \vec{c} \angle \vec{d} = 0\degree)
$$
假設兩向量的分量，則可得一組關係式：
$$
\begin{aligned}
 & \vec{c} = (x_{1}, y_{1}),\ \vec{d} = (x_{2}, y_{2})  \\
  \implies  & x_{1}x_{2} + y_{1}y_{2} = 0,\  \\
 & x_{1}x_{2} = -y_{1}y_{2},\  \\
 & \frac{y_{1}}{x_{1}} \cdot \frac{y_{2}}{x_{2}} = -1
\end{aligned}
$$
再依照斜率的定義，便可得到：
$$
m_{c} \cdot m_{d} = -1
$$
最後，若c已知，d未知，則可以如此表示d：
$$
\vec{c} = (x_{1},y_{1}) \implies \vec{d} = (k y_{1}, -kx_{1})\ (\exists \vec{d} \ \text{s.t.} \vec{c} \cdot \vec{d} = 0)
$$
## 【總結】垂直
1. 內積為零
2. 斜率相乘 = -1
3. 向量假設：$(ky_{1}, -kx_{1})$