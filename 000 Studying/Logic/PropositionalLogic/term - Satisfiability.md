---
identifier: 202409250959
---
traits: [[proposition]]
refs: [[course - 計算邏輯導論]] w3課程
# term - Satisfiability
[[TODO]]

$$
P = P_{1} \land P_{2} \land P_{3} \land \dots \land P_{n}
$$
$P$ is satisfiable when there is a line in truth table that makes $P$ to be true.

## Horn Clauses and Satisfiability
```pseudocode
Input: phi: phi is a Horn formula
Output: "unsatisfiable" if phi is unsatisfiable; otheriwse "satisfiable".
mark all occurrences of \true in phi;
while there is a Horn clause P_1 \land P_2 \land ... \land P_n implies Q in phi such that P_j are all mark but Q is not do
	mark Q;
if \false is marked then return "unsatisfiable";
else return "satisfiable"
```