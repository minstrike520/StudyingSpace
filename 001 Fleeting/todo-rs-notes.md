---
- reference: "tsoding/todo-rs"
---

# Rust Notes

`eprintln!()`
Prints error message. Will not panic nor stop the program.


# ncurse Notes

`initscr()`
Initializes screen.

`stdscr() -> WINDOW`
Returns current screen/window.

`curs_set()`
Sets cursor state.

`erase()`
Clears screen.

`getmaxyx(window: WINDOW, &mut y: i32, &mut x: i32)`
Gets max coordinate of current screen.


`mv(y: i32, x: i32)`
Sets cursor coordinate.

`addstr(s: &str)`
Prints string on screen. Notice that the string starts at cursor coordinate (as what addstr() actually does is make cursor print characters one by one.)

`getch() -> i32`
Gets pressed key.

`endwin()`
Stops screen.

`refresh()`
``

# Snippets

## Taking Arguments

```rs
let mut args = std::env::args();
args.next().unwrap();
let arg_1 = args.next();
```

## Reading Files

```rs
fn manipulate_line(line: &str) { todo!() }
fn open_file(file_path: &str) -> io::Result<()> {
    let file = std::fs::File::open(filepath);
    for (index, line) in io::BufReader::new(file).lines().enumerate() {
        // line: Result<String, Error>
        manipulate_line(&line?);
    }
}
```
