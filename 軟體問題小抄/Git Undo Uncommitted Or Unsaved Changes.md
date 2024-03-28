[StackOverflow Discussion](https://stackoverflow.com/questions/14075581/git-undo-all-uncommitted-or-unsaved-changes)

- This will unstage all files you might have staged with `git add`:
    ```
      git reset
    ```
    
- This will revert all local uncommitted changes (should be executed in repo root):
    ```
      git checkout .
    ```
    
    You can also revert uncommitted changes only to particular file or directory:
    ```
      git checkout [some_dir|file.txt]
    ```