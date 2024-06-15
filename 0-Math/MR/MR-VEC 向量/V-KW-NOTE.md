*只記錄課本裡找不到的重點整理跟解法*
# V-1 向量基礎
## 向量的基本運算
%%------ 略 ------%%
## 換始點公式
*KW p4*
1. $\vec{(\ )P} + \vec{PQ} = \vec{(\ )Q}$
2. $\vec{PQ} = \vec{(\ )Q} - \vec{(\ )P}$ (終點 - 始點)

## 向量的共線原理
*KW p7*
共線原理：$A$、$B$、$P$共線且$O \not \in \overleftrightarrow{AB} \Leftrightarrow \vec{OP} = \alpha \vec{OA} + \beta \vec{OB},\ \alpha + \beta = 1$
證明： ![[V-KW-N-WRITING-1|V-KW-N-WRITING-1]]
## 角平分向量
*KW p10*
欲以 $\vec v$ 表示$\vec a, \ \vec b$的角平分向量...
1. 若$|\vec a| = |\vec b|$，則可設$\vec v = \vec a + \vec b$。（前提：$\vec a + \vec b \not = \vec 0$）
2. 若$|\vec a| \not = |\vec b|$，則角平分向量的表示法有以下三種，視情況使用：
	1. $\vec v = \frac{\vec a}{|\vec a|} + \frac{\vec b}{|\vec b|}$
	2. $\vec v = \vec a + \frac{|\vec a|}{|\vec b|} \cdot \vec b$
	3. $\vec v = |\vec b|\vec a + |\vec a| \vec b$



# V-2 向量的內積與外積
*KW p25*

## 外積
- 同向分配律：$\vec a \times (\vec b + \vec c) = \vec a \times \vec b + \vec a \times \vec c$
- 外積沒有交換律：$\vec b \times \vec a = -\vec a \times \vec b$
- 外積是兩向量的**無限組公垂向量**之一
- 外積的功能
	1. 求兩向量的公垂向量
	2. 求常數為0的方程組的變數比
	3. 求兩向量所張▱面積
### 外積公式
$$\begin{align}
  & \vec a = (x_1, y_1,z_1),\ \vec b = (x_2,y_2,z_2) \\
  \rightarrow \ & \vec a \times \vec b = 
    \left({
    \begin{vmatrix}y_1 & z_1 \\ y_2 & z_2\end{vmatrix},\
    \begin{vmatrix}z_1 & x_1 \\ z_2 & x_2\end{vmatrix},\
    \begin{vmatrix}x_1 & y_1 \\ x_2 & y_2\end{vmatrix} }\right)
\end{align}$$
### 補充：解方程組
*TIP: 「方程組」即聯立方程式。*
1. 克拉瑪
2. 高斯喬登消去法
3. 反矩陣乘法