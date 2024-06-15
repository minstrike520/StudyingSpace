---
page-type: 學科筆記
reference: "[[KW-VEC]]"
ref-index: p25
tags:
  - review/數學
---
# 外積
- 同向分配律：$\vec a \times (\vec b + \vec c) = \vec a \times \vec b + \vec a \times \vec c$
- 外積沒有交換律：$\vec b \times \vec a = -\vec a \times \vec b$
- 外積是兩向量的**無限組公垂向量**之一
- 外積的功能
	1. 求兩向量的公垂向量
	2. 求常數為0的方程組的變數比
	3. 求兩向量所張▱面積
## 外積公式
$$\begin{align}
  & \vec a = (x_1, y_1,z_1),\ \vec b = (x_2,y_2,z_2) \\
  \rightarrow \ & \vec a \times \vec b = 
    \left({
    \begin{vmatrix}y_1 & z_1 \\ y_2 & z_2\end{vmatrix},\
    \begin{vmatrix}z_1 & x_1 \\ z_2 & x_2\end{vmatrix},\
    \begin{vmatrix}x_1 & y_1 \\ x_2 & y_2\end{vmatrix} }\right)
\end{align}$$
更常見的列式方法：![[VEC-D-外積]]
## 補充：解方程組
*TIP: 「方程組」即聯立方程式。*
1. 克拉瑪
2. 高斯喬登消去法
3. 反矩陣乘法