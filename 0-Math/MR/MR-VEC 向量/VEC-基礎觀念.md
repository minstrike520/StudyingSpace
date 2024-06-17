*以建中學資第三冊為本*
# 3-1 平面向量的運算
## 3-1-1 向量的基礎
- 反向量：$\vec{AB} = -\vec{BA}$
- 向量分解
	- 對於平面上任一點$P$，皆符合(1) $\vec{AB} = \vec{AP}+\vec{PB}$ (2) $\vec{AB}=\vec{PB}-\vec{PA}$
	1. $\vec{(\ )P} + \vec{PQ} = \vec{(\ )Q}$
	2. $\vec{PQ} = \vec{(\ )Q} - \vec{(\ )P}$ (終點 - 始點)

## 3-1-2 座標表示法
- 位置向量：設原點為$O$，則可稱任一$P$點的位置向量為$\vec{OP}$。
- 座標表示：$\vec a = (a_1, a_2)$
- 極坐標表示：設向量$\vec a$與x軸的夾角為$\theta$，則可表示$\vec a = (|\vec a| \cos\theta, |\vec a| \sin\theta)$。

## 3-1-3 向量運算與線性組合
- 單位向量：某向量的單位向量，即與其方向相同，且長度為一的向量。習慣將任一向量$\vec a$的單位向量寫作$\hat a$，並且可表示其關係$\hat a = \frac{\vec a}{|a|}$。
- 分點公式
	- 三點共線：給$A$、$B$、$P$以及在 $\overleftrightarrow{AB}$ 之外的$O$點，設$\vec{OP} = x\vec{OA}+y\vec{OB}$， $x, y \in \mathbb{R}$，則$$A,B,P\text{三點共線} \longleftrightarrow x+y=1$$
		- 注意$x,y$的範圍，它們可以不是正數。
		- 證明： ![[V-KW-N-WRITING-1|V-KW-N-WRITING-1]]
	- 分點$$\bar{AB}:\bar{PB} =m:n \longleftrightarrow \vec{OP} = \frac{n}{m+n}\vec{OA}+\frac{m}{m+n}\vec{OB}$$
## 3-1-4 向量與三角形
### 孟氏定理與西瓦定理

![[孟與西]]
## 角平分向量
*KW p10*
欲以 $\vec v$ 表示$\vec a, \ \vec b$的角平分向量...
1. 若$|\vec a| = |\vec b|$，則可設$\vec v = \vec a + \vec b$。（前提：$\vec a + \vec b \not = \vec 0$）
2. 若$|\vec a| \not = |\vec b|$，則角平分向量的表示法有以下三種，視情況使用：
	1. $\vec v = \frac{\vec a}{|\vec a|} + \frac{\vec b}{|\vec b|}$
	2. $\vec v = \vec a + \frac{|\vec a|}{|\vec b|} \cdot \vec b$
	3. $\vec v = |\vec b|\vec a + |\vec a| \vec b$