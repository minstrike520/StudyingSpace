```bash
# LOCAL_REPO_DIR=...
# ORIGIN_URL=...
cd LOCAL_REPO_DIR/
git init .
git config --global --add safe.directory $(pwd -P)
# Make some change
git add .
git commit -m "init"
git remote add origin ORIGIN_URL
git push --set-upstream origin master
```