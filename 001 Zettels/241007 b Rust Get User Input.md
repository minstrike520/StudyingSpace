ref: https://users.rust-lang.org/t/how-to-get-user-input/5176

```rust
use std::io::{stdin,stdout,Write}; 

fn main() { 
	let mut s = String::new(); 
	print!("Please enter some text: "); 
	let _ = stdout().flush(); // 相當於「重新整理」
	stdin().read_line(&mut s).expect("Did not enter a correct string"); 
	if let Some('\n')=s.chars().next_back() { s.pop(); } 
	if let Some('\r')=s.chars().next_back() { s.pop(); } 
	println!("You typed: {}",s); 
}
```