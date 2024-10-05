---
identifier: 202409251427
---
traits: [[neovim]] 
refs: https://neovim.discourse.group/t/highlighting-code-blocks-in-markdown/4936/2
# Neovim Syntax Highlighting in Markdown Is Not Working
Go to `~/.config/nvim/lua/plugins/init.lua`, 如果沒有改過設定，則應該會有幾行被註解掉的程式，內容應該是：
```lua
{
	"nvim-treesitter/nvim-treesitter",
	opts = {
		ensure_installed = {
			"rust", "markdown", "bash", "python" -- Add your desired languages
		},
	},
  },
```
把他uncomment，並且重開neovim，在markdown中的code block就都會正常運作了。

## 題外話
[[search engineering]]
我剛遇到這個問題時，其實沒有意識到這是neovim顯示markdown的問題。
我是剛在一個新環境寫rust時，按`SHIFT + K`使用浮窗提示的時候，document的顯示有點不對勁：凡是裡面有example code的，語法標註全部都沒出來，整片code都是同個顏色。明明code block的語言也有標記為rust，卻沒有顏色標註，看了非常不舒服。但是我一開始的關鍵字叫做：
> nvim hint only shows one color

查出來的結果就是在隔靴搔癢，文不對題。後來，我突然靈機一現，想到要實驗看看**語法標註在markdown裡面是不是也掛了**，發現確實如此，便馬上改了關鍵字：
> nvim markdown code color

於是就在第5篇找到了本篇reference，成功解決問題。