We don't use it anymore, computers are wicked fast.

The basis of the algorithm is to convert to convert log2(x), multiply by -1/2 (log2 x-1/2 == -1/2 log2(x)), then raise 2 to that number to get back x-1/2.

The trick is there's a hack using how numbers are represented to approximate log2(x) and 2x , so you don't actually need to use expensive operations like logarithm/exponentiation.

The final step is to recognize these are approximations so the answer is wrong, so you use it as an initial value to something called "Newton's Method" (named after Isaac Newton) which iteratively solves for an approximation of a function. Since the initial value is pretty close, you only need to do it once.

It's not commonly used anymore directly by programmers. Like I said, computers are extremely fast now. The key reason this was used was because floating point division was very expensive, nowadays it's not the cheapest operation but it's also not the bottleneck.

1. 我們先求得convser