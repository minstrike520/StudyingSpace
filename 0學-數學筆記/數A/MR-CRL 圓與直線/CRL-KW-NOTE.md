# CRL-1 平面上的直線
## 直線方程式
*KW p5*
### 方程式列舉
$$\begin{aligned}
  1. \ \text{點斜式} \ & y - y_0 = m(x-x_0) \\
  2. \ \text{兩點式} \ & y - y_1 = \frac{y_2-y_1}{x_2-x_1}(x-x_1) \\
  3. \ \text{斜截式} \ & y - k = m(x-x_0) \\
  4. \ \text{截距式} \ & \frac x a + \frac y b = 1 \\
  5. \ \text{參數式} \ & \left\{\begin{aligned}
    x & = x_0 + at \\
    y & = y_0 + bt \\
\end{aligned}\right. \\
  6. \ \text{一般式} \ & ax+by+c=0 \\
\end{aligned}$$
### 使用時機
1. 點斜式：一般使用 or 給切點求切線
2. 兩點式：給兩點求直線
3. 斜截式：給y軸截距
4. 截距式
	- 適用
		1. 給與軸交點
		2. 判斷象限
		3. 專解「與兩軸圍三角形」問題
	- 不適用
		1. 鉛直線
		2. 水平線
		3. 過原點直線
5. 參數式
	1. 假設「線上任一點」的點座標
	2. 表示「線段」
## 角平分線定理
*KW p10*
- 邊長比＝底邊端點到分點的距離比
## 中點公式
*KW p11*
$$$中(A,B) = \frac{A+B}2$$
## 三點共線
*KW p12*
1. 面積為0: $\left| ^{\vec{AB}}_{\vec{AC}} \right| = 0$
2. 任兩點斜率相同: $\frac{y_2-y_1}{x_2-x_1} = \frac{y_3-y_2}{x_3-x_2}$
3. 任兩點形成向量的分量成比例 (==三維也成立！==)
## 求點座標
*KW p22*
1. 解聯立 - 如：求交點
2. 找比例 - 如：求分點
3. 設參數式 - 如：求直線上的點
# CRL-2 絕對值與極值
## 絕對值
### 絕對值的含意/處理方法
1. 平方: $\sqrt{a^2} = |a|$ (可能錯誤：$\cancel{\sqrt{a^2} = a}$)
2. 距離: $d(a,b) = |a-b|\ \text{(for 一維)}$
3. 分段討論
4. 三角不等式: $|a| + |b| \ge |a+b|$
	- 等號成立的必要條件：$ab\gt 0$
## 折線圖與極值問題
### 一、中位數法則
1. $y = |x-1| + |x-2| + |x-3| \rightarrow$ 極值點出現在$x = 2$處
2. $y = |x-1| + |x-2| + |x-3| + |x-4| \rightarrow$ 極值點出現在$2 \le x \le 3$之間
### 二、平均數法則
- $f(x) = (x-x_1)^2 + (x-x_2)^2 + (x-x_3)^2 \rightarrow$ 最小值為$f(\frac{x_1+x_2+x_3} 3)$ 

# CRL-3 直線的應用
## 點與直線的相對位置（左、右）
- 當把點代入直線標準式
	- 如果所得值為正，則**點在直線右方**；所得值為負，則**點在直線左方**。
## 點到直線距離
$$\begin{aligned}
  & P(x_0,y_0),\ L: ax+by+c=0 \\
  \rightarrow \ & d(P,L) = \frac{|ax_0+by_0 + c|}{\sqrt{a^2+b^2}} 
\end{aligned}$$
## 兩平行線間距
$$\begin{aligned}
  & L_1: \underline{ax+by} +c_1 = 0,\ L_2: \underline{ax+by} + c_2 = 0 \\
  \rightarrow \ & d(L_1, L_2) = \frac{|c_1-c_2}{\sqrt{a^2+b^2}}
\end{aligned}$$
## 兩直線的角平分線
$$\begin{aligned}
  & L_1: a_1x+b_1y +c_1 = 0,\ L_2: a_2x+b_2y + c_2 = 0 \\
  \rightarrow \ & L_平: \frac{a_1x+b_1y +c_1}{\sqrt{{a_1}^2 + {b_1}^2}} = \pm \frac{a_2x+b_2y +c_2}{\sqrt{{a_2}^2 + {b_2}^2}} \\ 
\end{aligned}$$
- 原理： $P(x,\ y)$到兩直線距離相等，代入 $d(P,L_1) = d(P, L_2)$
- 兩個角平分線的分別方法： $\pm$號的取正負
	- 據[[#點與直線的相對位置（左、右）|前述判斷點與直線相對位置的方法]]，假如角平分線上動點$P(x,y)$跟兩個直線的相對關係都一樣（比如都在右邊），那麼$\pm$就要取正；反之則要取負。
## 點對直線的投影點與對稱點
$$\begin{aligned}
  & P(x_0,y_0),\ L: ax+by+c=0 \\
  \rightarrow \ & \text{投影點} Q(x_0 - ak, y_0-bk) \\
  \land & \text{對稱點} R(x_0 - 2ak, y_0-2bk) \\
  & \text{where} \ k = \frac{ax_0+by_0 + c}{a^2+b^2} \ 
\end{aligned}$$
- \Say it out: k = **點代入/係數平方和**
## 幾何極值

