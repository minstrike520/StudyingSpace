# Discrete Math
## RSA
### Preprocessing
1. Choose 2 big prime numbers $p$ and $q$.
2. Choose a pair of numbers $e$ and $d$ such that
	1. $d\cdot 1 = 1(\text{mod}\ (p - 1)(q-1)$, when $e$ is public and $d$ is private.
3. Announce $(pq, e)$; keep $(p, q, d)$.

### Encryption and Decryption
Encrypting message $m$ as code $c$:
$$
c \equiv m^{e} (\text{mod}\ pq),\ m< pq, c < pq.
$$
Decrypting $c$ as $m$:
$$
m \equiv c^{d} (\text{mod}\ pq).
$$
### Verification
We set a symbol for the modulo:
$$
r := (p-1)(q - 1);
$$
also, for the product of two big primes:
$$
n:= p\cdot q,
$$
then we can describe the decrypting equations as $m \equiv c^{d}(\text{mod}\ n)$.

For the convenience of the proof, we set an arbitary number $k$ such that
$$
e \cdot d \equiv 1 (\text{mod}\ r) \implies r | (e\cdot d - 1) \implies  ed = 1 + kr.
$$
So that according to the proccess of encryption and decryption, we can say that
$$
c^{d} \equiv (m^{e})^{d} \equiv m^{(e\cdot d)} \equiv m^{1 + kr} (\text{mod}\ n),
$$
and then to prove that this process really lead us to transfer the correct message, we need to check if
$$
c^{d} \equiv m^{ed} \equiv m^{1+kr} \equiv m (\text{mod}\ n).
$$
