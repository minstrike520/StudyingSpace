set -e
MY_DEVICE="$(head -1 ~/THIS_DEVICE)"
echo "Currently syncing on $MY_DEVICE"
echo -n "Name your update description (press ENTER to use default option): "
cd ~/shortcuts/TheVault/
set +e

git add .

read custom_description
if [[ $custom_description = "" ]]; then
  custom_description="untitled"
fi

git commit -m "update@$MY_DEVICE: $custom_description $(date +"%Y-%m-%d(%a), %H:%M")"
# update@my_device: afternoon T1 (2024-06-12, 17:26)

git pull
git push
