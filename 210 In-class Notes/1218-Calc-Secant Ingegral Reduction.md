# Secant Integral Power Reduction
準備一：積分表格
$$
\begin{aligned}
  &  &  D & &  I \\
  & + & \sec ^{n - 2}x &  & \sec ^{2}x \\
 & - & \sec ^{n - 3}x\cdot \sec x\tan x &  & \tan x
\end{aligned}
$$

準備二：三角函數性質
$$
\tan ^{2}x = \sec ^{2}x - 1
$$


$$
\begin{aligned}
\int \sec ^{n}x\ dx & = \int \sec ^{n - 2} d \sec ^{2}x \ dx \\
 & = \sec ^{n - 2} x \tan x - (n - 2) \int \tan ^{2}x\sec ^{n - 2}x\ dx \\
 & = \sec ^{n - 2}x \tan x - (n -2) \int \sec ^{n}x\ dx + (n - 2) \int \sec ^{n -  2}x\ dx
\end{aligned}
$$

$$
\begin{aligned}
\int \sec ^{n} x \ dx + (n - 2) \int \sec ^{n}x \ dx &  \\
= (n - 1) \int \sec ^{n} x \ dx & = \sec ^{n - 2}x \tan x + (n - 2) \int \sec ^{n - 2}x \ dx
\end{aligned}
$$