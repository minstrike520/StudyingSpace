# 9.4
## Direct Comparison Test
**Key**
選取一個更好求極限值的數列，如$p$-series。選取與操作方式如下：
1. 大的都收斂，那我也收斂
2. 小的都發散，那我也發散

**Example**: 9.4 work 1
${\forall n \ge 1}$, ${\frac{1}{n^{2} + 30} < \frac{1}{n^{2}}}$
${\sum ^{\infty}_{n = 1} \frac{1}{n^{2}}}$ is a $p$-series with ${p = 2}$ $\implies$ it converges
$\therefore$ By the direct comparison test, ${\sum ^{\infty}_{n = 1} \frac{1}{n^{2}+30}}$ also converges $\blacksquare$

# 9.5
## The Root Test and The Ratio Test
Root test的形式如下：
$$
\rho = \lim_{ n \to \infty } \sqrt[ n ]{ \left| a_{n} \right|  } 
$$
Ratio test的形式如下：
$$
\rho = \lim_{ n \to \infty } \left| \frac{a_{n + 1}}{a_{n}} \right|
$$
$\rho$的值可以推得${\{ a_{n} \}}$的三種情形：
1. **絕對**收斂，${\rho < 1}$
2. 發散，${\rho > 1 \lor \rho = \infty}$
3. 無結論，${\rho = 1}$

# 9.6
## The Alternating Series Test
以下的式子被稱之為alternating series，交錯級數：
$$
\sum ^{\infty}_{n = 1} (-1)^{n + 1} u_{n} = u_{1} - u_{2} + u_{3} - u_{4} + \dots
$$
交錯級數若收斂（絕對或有條件），則必滿足三個條件：
1. $\forall n \in \mathbb{N}$, ${u_{n} > 0}$. (we sometimes write ${\forall n \ge 1, u_{n} > 0}$)
2. ${\exists N \forall n \ge N}$, ${u_{n} \ge u_{n + 1}}$
3. ${u_{n} \to 0}$
在這個條件下，若
- 去除交錯因子${(-1)^{n+1}}$則級數不收斂，便稱級數converges conditionally, 有條件地收斂；
- 反過來說，若去除後仍收斂，便稱級數converges absolutely, 絕對收斂。
> 註：「絕對」收斂，即特指交錯數列即使在開了**絕對值**的情況下也會收斂。

**Example** hw, 41
Let ${u_{n} = \sqrt{ n + 1 } - \sqrt{ n }}$, where ${(u_{n})' = \frac{1}{2\sqrt{ n + 1 } } - \frac{1}{2\sqrt{ n }} \forall n \ge 1}$.
Then ${u_{n} > 0}$, ${u_{n} \ge u_{n + 1} \forall n \ge 1}$, and ${\lim_{ n \to \infty }\sqrt{ n + 1 } - \sqrt{ n } = 0}$.
$\therefore$ By the alternating series test, ${\sum ^{\infty}_{n = 1}(-1)^{n}u_{n} = -\sum ^{\infty}_{n = 1} (-1)^{n + 1}u_{n} = \sum ^{\infty}_{n = 1}(\sqrt{ n + 1 } - \sqrt{ n })}$ converges.
Note that ${\sum ^{\infty}_{n = 1}\left| (-1)^{n}(\sqrt{ n +1 } - \sqrt{ n }) \right| = \sum ^{\infty}_{n = 1}(\sqrt{ n + 1 } - \sqrt{ n })}$.
Let ${s_{n} = \sum ^{n}_{k = 1} (\sqrt{ k + 1 } - \sqrt{ k }) = \sqrt{ 2 } - 1 + \sqrt{ 3 } - \sqrt{ 2 } + \dots + \sqrt{ n + 1 } - \sqrt{ n } = \sqrt{ n + 1 } - 1}$.
Then ${\sum ^{\infty}_{n = 1} (\sqrt{ n + 1 } - \sqrt{ n }) = \lim_{ n \to \infty }s_{n} = \lim_{ n \to \infty }\sqrt{ n + 1 } - 1 = \infty}$, which diverges.
$\therefore$ ${\sum ^{\infty}_{n = 1}(-1)^{n}(\sqrt{ n + 1 } - \sqrt{ n })}$ converges conditionally $\blacksquare$

