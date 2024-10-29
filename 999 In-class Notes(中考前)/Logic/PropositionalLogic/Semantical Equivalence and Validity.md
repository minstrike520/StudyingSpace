---
identifier: 202409241625
---
traits: [[semantics]] [[term - Conjunctive Normal Form]]
refs: [[course - 計算邏輯導論]] w2課間
# Semantical Equivalence and Validity
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

## From Truth Tables to Conjunctive Normal Form
[[book - 計算邏輯導論簡報]] ..p83..
「等價」可以透過真值表代入來逐一檢查。

## From Formula to CNF
[[book - 計算邏輯導論簡報]] ..p88..
有辦法可以不用畫真值表就得出CNF。
$$
\phi \implies \psi \equiv \lnot \phi \lor \psi
$$

這種轉換跟 [[compiler]] 所做的事情其實有點像：compiler一樣不用管程式最後究竟算出什麼結果，只需要把所有 code 轉換成 asm 就好了。