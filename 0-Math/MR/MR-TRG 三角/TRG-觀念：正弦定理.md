---
page-type: 學科筆記
tags:
  - review_數
sr-due: 2024-07-08
sr-interval: 14
sr-ease: 210
---
# 正弦定理
已知三角形的三邊長為a,b,c及其對角 $\angle A, \angle B, \angle C$，若其外接圓直徑為2R，則可得以下關係式：
$$
\frac{a}{\sin \angle A} = \frac{b}{\sin \angle B} = \frac{c}{\sin \angle C} = 2R
$$
因此，可以用外接圓直徑與各邊來表示對角的正弦值：
$$
\sin \angle {A} = \frac{a}{2R},\ \sin \angle {B} = \frac{b}{2R},\ \sin \angle {C} = \frac{c}{2R}
$$
## 解唯一三角形
知三角形兩邊長a,b及外接圓直徑2R，則可以解得唯一三角形：
$$
\begin{aligned}
 & \sin \angle {A} = \frac{a}{2R},\ \sin \angle {B} = \frac{b}{2R} \\
 & 2R = \frac{c}{\sin \angle C} = \frac{c}{\sin (180\degree - (\angle A + \angle B))} = \frac{c}{\sin (\angle A +  \angle B)} \\
 & c = 2R\cdot \sin (\angle A + \angle B) \\
 & \because \text{知三邊長}\ a,b,c \ \therefore \text{必解得唯一三角形}\ \blacksquare 
\end{aligned}
$$
（繼續展開）
$$
\begin{aligned}
c & = 2R\cdot \sin(\angle {A}+\angle {B}) \\
 & = 2R\cdot(\sin \angle {A}\cos \angle {B} + \sin \angle {B}\cos \angle {A}) \\
 & = 2R\cdot\left( \frac{a}{2R}\cdot \frac{\sqrt{ 4R^{2}-b^{2} }}{2R} + \frac{b}{2R}\cdot \frac{\sqrt{ 4R^{2}-a^{2} }}{2R} \right) \\
 & =\frac{{a\cdot \sqrt{ 4R^{2}-b^{2} } + b\cdot \sqrt{ 4R^{2}-a^{2} }}}{2R}
\end{aligned}
$$