# 數據分析．公式集
## 基礎
- 平均 $\mu = \frac{\sum x_k}n$
- 標準差 ${\sigma_x}^2 = \frac{\sum (x_k-\mu_x)^2}n$
- 離均差 $x_k - \mu_x$
- 離均差總和 $S_{xx} = \sum(x_k-\mu_x)^2$
	- ${\sigma_x}^2 = \frac{S_{xx}}n$
## 數據標準化
- 標準化數據 $X' = \frac{X-\mu_x}{\sigma_x}$
- 標準化數據的特性
	1. 平均為零、標準差為一： $\mu_{x'} = 0,\ \sigma_{x'} = 1$
	2. 斜率為相關係數： $m_{x'y'} = r_{x'y'} = r_{xy}$
		1. 【小心】注意，是「標準化」數據才有，別亂用！
## 最適直線
- 相關係數
	1. $r_{xy} = \frac{S_{xy}}{\sqrt{S_{xx}}\sqrt{S_{yy}}} = \frac{\sum(x_k-\mu_x)(y_k-\mu_y)}{n\sigma_x \sigma_y}$
		- 【提示】$\sqrt{S_{xx}} = \sqrt n \cdot \sqrt{\frac{S_{xx}}n} = \sqrt n\ \sigma_x$
	2. $r_{xy} = \frac{\sum x_k y_k}n$
- 最適直線斜率 $m_{xy} =  r_{xy} \frac{\sigma_y}{\sigma_x} = \frac{S_{xy}}{S_{xx}}$
- 