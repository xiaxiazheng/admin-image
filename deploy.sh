npm run build

rm -rf ../zyb-cli/public

cp -r ./build ../zyb-cli/public

cd ../zyb-cli

git add .

git commit -m "feat: 更新前端代码"

git push
