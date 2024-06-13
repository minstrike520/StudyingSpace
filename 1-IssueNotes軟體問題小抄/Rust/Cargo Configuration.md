[Reference](https://course.rs/cargo/reference/configuration.html)

> 总体原则是：`Cargo` 会顺着当前目录往上查找，直到找到目标配置文件。例如我们在目录 `/projects/foo/bar/baz` 下调用 Cargo 命令，那查找路径如下所示：
- `/projects/foo/bar/baz/.cargo/config.toml`
- `/projects/foo/bar/.cargo/config.toml`
- `/projects/foo/.cargo/config.toml`
- `/projects/.cargo/config.toml`
- `/.cargo/config.toml`
- `$CARGO_HOME/config.toml` 默认是 :
    - Windows: `%USERPROFILE%\.cargo\config.toml`
    - Unix: `$HOME/.cargo/config.toml`