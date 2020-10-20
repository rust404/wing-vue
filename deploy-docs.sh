#!/usr/bin/env sh
## 当发生错误时中止脚本
set -e
#
## 构建
npm run docs:build
#
## cd 到构建输出的目录下
cd docs/.vuepress/dist
#
git init
git add -A
git commit -m 'deploy'
#
## 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:rust404/wing-vue-site.git master:gh-pages
## git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
#
cd -
