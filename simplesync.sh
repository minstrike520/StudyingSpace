set -e
cd ~/shortcuts/TheVault/
echo "Executing simplesync.sh"
echo "Auto staging every change..."
git add .

echo ""

bash ./custom_commit.sh
set +e
# update@my_device: afternoon T1 (2024-06-12, 17:26)

git pull
git push
