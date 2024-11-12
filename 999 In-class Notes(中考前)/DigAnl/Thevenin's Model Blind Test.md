1. Use current meter to test $i = \frac{V}{R}$.
2. Attatch both the meter and the tunable resistor on A,B. Set the meter to the voltage mode, get a value $v$, and then remove the resistor and test it with resistance meter, get a value $r$. By voltage divider model, we can get $v = V\cdot \frac{r}{R+r}$. 
3. Using the value $\frac{V}{R}$ we get in first move, we can do the calculation: $$
\begin{aligned}
 & v = iR\cdot \frac{r}{R+r} \\
 & Rv + rv = irR \\
 & R(ir - v) = rv \\
 & R = \frac{rv}{ir - v}\
\end{aligned}
$$Therefore we got that $R = \frac{rv}{ir-v}$. $\blacksquare$