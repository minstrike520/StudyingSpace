set -e
MY_DEVICE="$(head -1 ~/THIS_DEVICE)"
echo "Currently syncing on $MY_DEVICE"
cd ~/shortcuts/TheVault/
git add .
git commit -m "$MY_DEVICE update $(date)"
git pull
git push
