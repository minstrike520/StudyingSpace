(25/3/18)
當前的分類方法參考：[This Simple File Management System Changed My Life!](https://youtu.be/MM-MPS57qKA)
我需要斟酌參考，因為他的資料很多是業務文件，而我這邊的資料都是筆記頁面，重要性跟分類邏輯可能(？)會有點不一樣。

簡單教訓：不要在不熟悉前後文的情況下就直接用電子化整理。這裡一來可以用來記下文字型態的筆記，二來可以把在其他地方的學習筆記都記錄起來。但是直接一開始就在這裡的話，就會很沒有效率。我是做了一個縮時攝影錄影自己記Abstract Algebra才知道，我在Principal Ideal跟Quotient Ring整整花了三十分鐘，如果直接果斷用筆記本的話，時間起碼縮短為三分之二。

這說明了如果覺得自己使用筆記拖拖拉拉一直分心，也許之後應該更常嘗試錄影自己的足跡。

另外，我想到說，之前在上課作筆記的時候，有時候如果比較圖像化，都不知道要怎麼處理。我看情況吧！還是應該可以重新考慮用一下Excalidraw，雖然之前覺得手感還是沒那麼好，不過如果能得到方便與表達性，那這點麻煩應該是可以省略的。

最後一點大概最重要，就是不要「過早重構」。我太常犯這個錯了，程式設計也是。在結構仍在早期發展階段時，不要去分類他。比如微積分的資料根本就很少很瑣碎，我還要硬給他按照章節分，屬實是沒必要；而當內容一多，**資料自然就更好分類了**。其實本篇筆記也是有點過早去敘述我的狀況了，應該等做了多一點再來分析會更好，而不是打高空。大概算是我的壞習慣吧。

```txt

head dm align x sr + y sr = cos sr 2t + sin sr 2t = 1 \\
head x = cos 2t impl -1 le x le 1 \\
head y = sin 2t impl -1 le y le 1 \\
therefore "Ans": sp x sr + y sr = 1 qed
endal enddl

dm.
L = int(a,b) sq ( dx over d@t ) sr + ( dy over d@t ) sr endsq d@t.
enddm.

into.

dm.
L = int(@a, @b) sq r sr + ( dr over d@t ) sr endsq d@t..
enddm.

dm.
r_"av" = 1 over {@b - @a} int(@b, @a) f ( @t ) d@t..

```

$$
r_{\text{av}} = \frac{1}{\beta - \alpha} \int^{\beta}_{\alpha} f(\theta) d\theta.
$$
$$
\frac{1}{2} \int^{2\pi}_{0} [(\cos \theta + 1)^{2} - \cos ^{2} \theta] d\theta = \pi.
$$
21. The spiral ${r = \theta ^{2}}$, ${0 \le \theta \le \sqrt{ 5 }}$
22. The spiral ${r = e^{\theta} / \sqrt{ 2 }}$, ${0 \le \theta \le \pi}$
23. The cardioid ${r = 1 + \cos \theta}$
24. $\begin{pmatrix}1&2&3\\3&4&5\\6&7&8\end{pmatrix}$ is also cool! lmao
