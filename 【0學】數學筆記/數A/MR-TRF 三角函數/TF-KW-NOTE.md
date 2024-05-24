# TF-2 圖形與週期

## 振幅與極值
*自行補充*
- 三角函數的**極值**出現在平衡點上下一個振幅（最大值、最小值）。
## 週期專論
*KW p14*
$$y = Af(Bx+C) +D$$
- 原函數 $f(x)$，基本週期$P$
	- 定義：$\forall x \in \mathbb R$，若存在$P \not = 0\ s.t.\ f(x+P) = f(x)$，則：
		1. $f$為週期函數
		2. $P$稱為$f$之基本週期，簡稱週期
- 想法：伸縮
	- $y = 2 \sin x$：「 2 」-> 振幅
	- $y = \sin 2x$：「 2 」 -> 壓縮量
- 整理
	- 週期 = $\frac{P}{|B|}$
	- 頻率 = $f \times |B| = \frac{|B|}{P}$
	- 相位 = $Bx + C$
- 絕對值
	- $|f(x)|$的週期必為$\pi$
- 函數和
	- $f(x)+g(x)$ -> 原函數週期的**最小公倍數**
- 結論
	1. $y = |Af(Bx+C)| +D$ -> $P' = \frac \pi {|B|}$
	2. $y = |Af(Bx+C)| +D$ -> $P' = \frac P {|B|}$
	3. ()的偶次方與()的絕對值效果相同。
	4. 本結論的例外：$y = |\text{正函數}| + |\text{餘函數}|$ -> $P = \frac \pi 2$
		- 實例：$f(x) = |\sin x| + |\cos x|$
			$\rightarrow f(x+\frac \pi 2) = |\sin (x + \frac \pi 2)| + |\cos (x + \frac \pi 2)| = |\sin x| + |\cos x| = f(x)$
			$\rightarrow f(x) \ \text{的週期為} \frac \pi 2 \blacksquare$

# TF-3 ~ TF-8 三角函數公式
- 和角 
	1. $\sin(\alpha \pm \beta) = \sin \alpha \cos \alpha \pm \cos \alpha \sin \beta$
	2. $\cos(\alpha \pm \beta) = \cos \alpha \cos \beta \mp \sin \alpha \sin \beta$
	3. $\tan (\alpha \pm \beta) = \frac{\tan \alpha \pm \tan \beta}{1 \mp \tan \alpha \tan \beta}$ ($\frac{和}{1-積}$、$\frac{差}{1+積}$)
- 二倍角
	1. $\sin 2\theta = 2\sin\theta\cos\theta$
	2. $\cos 2\theta = \cos^2\theta-\sin^2\theta = 1-2\sin^2\theta = 2\cos^2\theta - 1$
	3. $\tan 2\theta = \frac{2\tan\theta}{1-\tan^2\theta}$ ($\frac{2倍}{1-平方}$)
	- 公式共性：角度減半，次方增倍
- 半角
	1. $\sin\theta = \pm \sqrt{\frac{1-\cos 2\theta}{2}}$
	2. $\cos\theta = \pm \sqrt{\frac{1+\cos 2\theta}{2}}$
	3. $\tan\theta = \frac{\sin\theta}{\cos\theta} = \pm \sqrt{\frac{1-\cos 2\theta}{1+\cos 2\theta}}$
	- 公式共性：角度增倍，次方減半
- 以切表弦
	- $\tan 2\theta = \frac{2\tan\theta}{1-\tan^2\theta}$
	1. $\sin 2\theta = \frac{2\tan\theta}{1+\tan\theta}$
	2. $\cos 2\theta = \frac{1-\tan\theta}{1+\tan\theta}$
	- 示意圖 ![[TF-KW-NOTE-GRAPH]]
- 「四大天王」公式
	1. $1 + \sin\theta = (\sin\frac\theta 2 + \cos\frac\theta 2)^2$
	2. $1-\sin\theta = (\sin\frac\theta 2 - \cos\frac\theta 2)^2$
	3. $1+\cos\theta = 2\cos^2\frac\theta 2$
	4. $1 - \cos\theta = 2\sin^2\frac\theta 2$
	- 證明 ![[TF-KW-NOTE-GRAPH-1]]
# TF-9 疊合
- 疊合的前提：必為如是形式 $f(x) = a\sin x + b\cos x$
- 疊合 $$a\sin x +b\cos x = \sqrt{a^2+b^2}\sin (x+\phi),\ \left\{\begin{aligned}
& \cos \phi = \frac a {\sqrt{a^2+b^2}}  \\
& \sin \phi = \frac b {\sqrt{a^2+b^2}}
\end{aligned}\right.$$

- 推導 ![[TF-KW-NOTE-GRAPH-2]]