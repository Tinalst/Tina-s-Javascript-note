# 04 多人协作

## 命令
```
// 查看远程仓库信息
git remote

// 查看远程仓库详情
git remote -v

// 推送分支
git push origin branch-name

// 拉取远程其他分支
git checkout -b branch-name origin/branch-name

// 拉取分支
git pull

// 设置本地分支与远程分支关联
git branch --set-upstream-to=origin/branch-name branch-name

// 给版本上标签
git tag v1.0

// 查看所有标签
git tag (标签顺序是按照字母排序的)

// 为指定版本上标签
git tag v1.0.0 版本号

// 查看标签信息
git show v1.0.0

// 创建带有说明的标签
git tag -a v1.0.0 -m "message"

// 删除标签
git tag -d v1.0.0

// 推送某个标签到远程
git push origin v1.0.0

// 一次性推送所有尚未推送的标签
git push origin --tags

// 删除已经推送到远程的标签
git tag -d v.1.0.0
git push origin :refs/tags/v1.0.0

// 删除已有的关联的仓库
git remote rm origin

// 本地仓库关联不同远程仓库
git remote rm origin // 先删掉关联
git remote add github xxxxx // 关联某远程仓库的名称叫github
git remote add gitee xxxx // 关联某远程仓库的名称叫gitee
```