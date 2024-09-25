---
identifier: 202409251357
---
traits: [[rust]] [[rustup]] [[cargo]] [[rust -- std]] #solution
refs: 
- AIMING: https://stackoverflow.com/questions/70792872/rust-cant-find-crate-for-std
- Difference between `rust` and `rustup`: https://www.reddit.com/r/archlinux/comments/a73s5c/difference_between_rust_and_rustup_provider_for/
# Cargo Cannot Find Crate std
問題描述：在使用LSP的時候，發現凡是跟 `std` 有關的關鍵字都沒辦法自動補全。
解決方式：把 `rust` 解除安裝，轉而安裝 `rustup` ，上述情況就會解決。
後續：這個問題好像只有 Arch Linux 才有。=