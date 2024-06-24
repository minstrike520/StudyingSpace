---
page-type: 學科筆記
tags:
  - review_數
sr-due: 2024-06-26
sr-interval: 2
sr-ease: 250
---

# 逆時針旋轉矩陣
$$
R_{\theta}\vec{v} = \begin{bmatrix}
\cos \theta  & -\sin \theta \\
\sin \theta & \cos \theta
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}
$$
# 順時針旋轉矩陣
若以逆時針旋轉為基礎，則在運算的觀點，順時針旋轉可以說是逆時針旋轉的**反運算**。 
若以角度的觀點而言，則可以直接把角度代入負值，再根據正餘弦函數的特性，得到如下關係式：
$$
{R_{\theta}}^{-1}\vec{v} = R_{(-\theta)}\vec{v} = \begin{bmatrix}
\cos \theta  & \sin \theta \\
-\sin \theta & \cos \theta
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}
$$
# 複數與二次方陣
$$
a + bi = \begin{bmatrix}
a & -b \\
b & a
\end{bmatrix}
$$
這個敘述暫不展開證明，但可以用一些複數的特性來檢驗：
$$
\begin{aligned}
 & 1.\ (a+bi)(c+di) = ac-bd+(ad+bc)i,\ \ \begin{bmatrix}
a & -b \\
b & a
\end{bmatrix} \begin{bmatrix}
c & -d \\
d & c
\end{bmatrix} = \begin{bmatrix}
ac-bd & -(ad+bc) \\
ad+bc & ac-bd
\end{bmatrix} \\
\end{aligned}
$$
$$
2.\ r(\cos \theta + i \sin \theta) = r\begin{bmatrix}
\cos \theta  & -\sin\theta  \\
\sin \theta  & \cos\theta
\end{bmatrix},\ \ (x+yi)\cdot r(\cos\theta + i\sin\theta) = r\begin{bmatrix}
x & -y \\
y & x 
\end{bmatrix} \begin{bmatrix}
\cos\theta & -\sin\theta  \\
\sin\theta & \cos\theta 
\end{bmatrix}
$$


$$
3.\ i = \begin{bmatrix}
0 & -1 \\
1 & 0
\end{bmatrix} = \begin{bmatrix}
\cos 90\degree & -\sin 90\degree \\
\sin 90\degree & \cos 90\degree
\end{bmatrix} = R(90\degree)
$$
$$
4.\ a + 0i = \begin{bmatrix}
a & 0 \\
0 & a
\end{bmatrix} = aI
$$

