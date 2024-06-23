set -e
cd ~/shortcuts/TheVault/

git add .

/bin/bash ./custom_commit.sh
set +e
# update@my_device: afternoon T1 (2024-06-12, 17:26)

git pull
git push
