假擬問題：一個長L的圓環跑道，跑了D距離後，在跑道上距離出發點還有多少距離？
$$
\begin{aligned}
\ell = D - L\cdot \left\lfloor  \frac{D}{L}  \right\rfloor &  & \ell  = D\  \mathrm{mod}\ L
\end{aligned}
$$
其中 $\left\lfloor  \frac{D}{L}  \right\rfloor$ 就代表著跑過的圈數。