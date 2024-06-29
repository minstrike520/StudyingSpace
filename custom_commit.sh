set -e
MY_DEVICE="$(head -1 ~/THIS_DEVICE)"
echo "Making commit on $MY_DEVICE"
echo "Auto executing 'git status'"
git status
echo -n "Name your update description (press ENTER to use default option): "
cd ~/shortcuts/TheVault/

set +
read custom_description
if [[ $custom_description = "" ]]; then
  git commit -m "update@$MY_DEVICE $(date +"%H:%M %Y-%m-%d(%a)")"
else
  git commit -m "update@$MY_DEVICE: $custom_description $(date +"%Y-%m-%d(%a)")"
fi
