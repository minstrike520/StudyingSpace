https://youtu.be/B3y0RsVCyrw?si=4Nn7Juv-byRCtnR8

# Huffman Codes: An Information Theory Perspective
## Modeling Data Compression Problems
### Requirements
1. Single symbol -> unique binary code
2. Source message = received message; Compression must be **lossless**
3. Unique decodability

1: The unit of the mapping must be a character rather than a string, e.g. "abc".
2: No information loss.
3: A set of code can only have one "solution" (received message).

## Finding Optimal Solution / Compression
Information Theory: "What is the theoretical limit on compression?"
-> How much can we compess?
-> How much information is contained?
### Key Properties of Information
1. Information $I(x)$ and probability $P(x)$ are inversely related.
2. $I(x) \ge 0$, observing event $x$ never causes a loss of information.
3. $P(x) = 1 \implies I(x) = 0$.
4. $P(x \cap y) = P(x) \cdot P(y) \implies I(x \cap y) = I(x) + I(y)$
**Self Information**
$$
I(x) = \log_{b} \left( \frac{1}{P(x)} \right) = -\log_{b} P(x)
$$
We can use $b = 2$, meaning that measure in unit "bit".
### Information Entropy
