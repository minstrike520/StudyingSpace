---
identifier: 202409251359
---
traits: [[neovim]] [[language server]] #approach
# Neovim 安裝 language server 流程
- 在 ~/.config/nvim/中修改參數設定
- 到init.lua中，新增nvim-lspconfig跟nvim-treesitter
```lua
--
-- ~/.config/nvim/init.lua
--

-- ...

--load plugins
require("lazy").setup({
  --...
  {
    "neovim/nvim-lspconfig",
    config = function()
      require("nvchad.configs.lspconfig").defaults()
      require "configs.lspconfig"
    end,
  },

  "nvim-treesitter/nvim-treesitter"
})
```
- 在nvim中用':Mason'搜尋需要的語言伺服器(LSP)**並安裝（提示：按下 i 就會開始安裝）**
- 到lua/configs/lspconfig.lua中把需要的語言**相對應的server**加上去（不要加成語言名稱！）
```lua
--
-- ~/.config/nvim/lua/configs/lspconfig.lua
--

-- ...

local servers = { "html", "cssls", "rust_analyzer", "pyright" }
```
- 在nvim中使用':TSInstall <對應語言>'
- 值得注意的一點是，不知道為何rust analyzer雖然在Mason中顯示是用橫槓，但是在server中卻得用底線，不然就會偵測不到。（我已經為了這卡兩次了...）