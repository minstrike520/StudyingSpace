[reference](https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor)
Remove specified files
```bash
git rm --cached file1 file2 dir/file3
```

Remove all files marked in `.gitignore`
```bash
git rm --cached `git ls-files -i -c --exclude-from=.gitignore`
```