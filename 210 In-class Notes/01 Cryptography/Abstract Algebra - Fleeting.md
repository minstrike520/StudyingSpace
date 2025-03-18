# Finite Fields
## Polynomials as Field


When $\text{gcd}(a, b)=1$, we observe
$$
au + b v \equiv 1
$$

and when $b$ is prime, $u$ will be $a$'s multiplicative inverse, namely $a^{-1}$.

Similarly, it can be applied on the structure of polynomial ring:
$$
a(x) u(x) + b(x) v(x) = 1
$$
(...) $u(x)=a(x)^{-1}$.

---

$$
GF_{256} \ne \mathbb{Z}_{256}
$$
$\mathbb{Z}_{256}$ is not even a field! Don't mess it!

---

Irreducibility
$f(x)=x^{2}+x+1$ is irreducible?
Over $GF_{2}$, yes, it is:
$$
f(0) = f(1) = 1 \ne 0
$$
What is inverse of $x$? It's $(x+1)$, because
$$
\begin{aligned}
 & x(x + 1) = x^{2} + x \\
 & x^{2} + x\ \text{mod}\ f(x) = -1 \equiv 1
\end{aligned}
$$

Another **important question**: for any $p(x)\in GF_{11}[x]$, what is $p(x)\text{mod}f(x)$?
$$
p(x)\ \text{mod} f(x) = \{ ax + b\ | \ a, b \in GF_{11} \}
$$
So there will be $11^{2} = 121$ possibilities.

If we take a look at $GF_{4}$'s multiplication table, we will notice that all elements other than zero have inverse -- therefore $GF_{4}$ is a **field**. (p13)
$f(x)$ as $x$ in $GF_{2}$ -> 2bit binary string -> number in $GF_{4}$
$$
f(x) = a_{1}+a_{2} \leftrightarrow (a_{1}a_{2})_{2} \leftrightarrow  2a_{1} + a_{2}
$$
which indicates that we can use binary string to represent polynomial $GF_{2}[x]$ with ease!
Therefore we can say
$$
GF_{4} \simeq GF_{2}[x] / <x^{2} + x + 1>
$$

---
We like to talk about $GF_{2^{n}}$, "binary field", and $GF_{p}$, "prime field".
	$GF_{2^{n}}[x]$ pronounces as "polynomials over $GF_{2}$ of degree n". 
$GF_{8}$ can be represented as $a_{2}x^{2} + a_{1}x+a_{0},\ a_{i}\in GF_{2}$.
Then we need to pick a irreducible polynomials to do modulo so that all multiplication product is in the field. For $GF_{2^{n}}$ we need to find an n-degree polynomial.
For $GF_{8}$, $x^{3} + x^{2}+1$ and $x^{3}+x+1$ are the only irreducible polynomials over $GF_{2}$ of degree 3.

And there's a magical polynomial that acts like a "irreducible polynomial generator":
$$
x^{8} - x \equiv x (x+1)(x^{3} + x + 1)(x^{3} + x^{2} + 1)(\text{mod}\ 2)
$$
Isomorphism
$$
GF_{8} \simeq GF_{2}[x] / <x^{3} + x^{2} + 1> ~\simeq GF_{2}[x] <x^{3} + x + 1>
$$
We can find a **isomorphic function** that maps to one  coset to another

---
p19
$$
GF_{8}^{*} = <\alpha>
$$
把$\alpha ^{0}$跟$\alpha ^{7}$扣掉，剩下的$\alpha ^{k}$會變成一個乘法循環群。
$\alpha$ is a root of $x^{3} + x + 1$ over $GF_{2}$; then different multiples of $\alpha$ will be all unique (except power of 0 and 7)
And then we will find all multiples roots of $x^{8} - x$.
So the isomorphic function we have a clue: the function maps all roots of one quotient to another.
## Group, Ring and Field
Group: Closure, Associativity, Identity, Inverse
Abelian Group: (GROUP) + Commutativity
Ring
- First operation: is an abelian group
- Second operation: closure, Associativity
Ring with Identity: (RING) + Identity
Commutative Ring: (RING) + Commutativity
Field: (RING) + Inverse
- First operation: Closure, Associatibity, Identity, Inverse, Commutativity
- Second operation: Closure, Associativity, Inverse