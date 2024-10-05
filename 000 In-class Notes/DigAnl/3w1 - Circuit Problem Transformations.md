---
identifier: 202409241200
---
traits: [[diganl]]
ref: ![](https://youtu.be/pxfHygwAdhM?si=fcik3Wq6QzPm9xAF)
first part ends at 41:47
# Circuit Problem Transformations
We already have [[3w1 - Basic Circuit Problem Solving Skills]], but the initial problem may be too complex to solve directly.

## Thevenin's Theorem
- General settings of both configurations and **observations**
- Simplifies a set of basic elements(resistors, voltage sources and current sources) to a circuit with ONLY one voltage source and one resistor chained.
![[illustration - Devenin Theorem]]

## Norton's Theorem
- Similar to [[#Thevenin's Theorem]], Norton's theorem also simplifies a set of basic elements, but the different part is that it turns the set into a circuit with one **current source** and one resistor in parallel.
![[illust - Norton's Theorem]]

To get the equivalent resistance, just turn all the power sources off as we do in Thevenin's theorem; to get $I_\text{No}$, just connect $A$ and $B$ with short circuit, then the current flowing through is exactly equal to $I_\text{No}$.

