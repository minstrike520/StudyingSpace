
「語意上應該是對的」：semantically equivalent(等價) -> $\equiv$
語意上，formula的意義是真值表決定的。因此，語意等價的意義，可以說是真值表輸出相等。

為了parser撰寫的容易，需要一個簡單的語法，因此有了CNF, Conjunctive Normal Form.

L: literal; either an atom or its negation
D: clause; disjunction($\lor$) of literals
C: formula; a conjunction($\land$) of clauses
$$
\begin{aligned}
 & L ::= p | \lnot p \\
 & D ::= L | L \lor D \\
 & C ::= D | D \land C
\end{aligned}
$$