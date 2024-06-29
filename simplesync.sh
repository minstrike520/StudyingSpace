set -e
cd ~/shortcuts/TheVault/
echo "Executing simplesync.sh"
echo "Auto staging every change..."
git add .

echo ""

set +e
bash ./custom_commit.sh
# update@my_device: afternoon T1 (2024-06-12, 17:26)

git pull
git push
