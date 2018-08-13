# 03 git 分支
create 2018-08-12 22:55 by tinalim

## git branch 示意图
![images](https://github.com/Tinalst/Tina-s-Javascript-note/blob/master/images/git/03-1.png)

## 命令
```
// 创建并且换到分支
git chechout -b branch-name

// 查看分支
git branch

// 当前分支
* branch-name

// 切换分支
git checkout branch-name | master

// 提交到分支
git commit -m "message"（不需要push）


// 合并分支
git merge branch-name （将某分支和master进行合并）

// 删除分支
git branch -d branch-name

// 查看分支合并图
git log --graph

// 已普通模式合并分支，可以看到合并后的历史有分支
git  merge --no-ff -m "messafe" branch-name

// 储藏当前工作区
git stash

// 创建bug分支

 // 1. 要基于哪个分支上的bug分支
 git checkout branch-name
 
 // 2. 创建bug分支
 git checkout -b issue-101

 // 3. 提交bug分支代码
 git add ...
 git commit -m "message"

 // 4. 切换到稳定版本发布分支
 git checkout branch-name

 // 5. 合并分支
 git merge --no-ff -m "message" issue-101

 // 6. 切换到工作一半的分支

// 查看被储藏的工作现场
git stash list

// 切换到储藏的工作现场
git stash apply (恢复后，stash内容仍旧存在)
或
git stash pop (恢复后，stash内容被删除)

// 删除stash内容
git stash drop

// 删除没有被合并过的分支
git branch -D branch-name
```
# [04 多人协作]()
