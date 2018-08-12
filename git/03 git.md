# 03 git 分支
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
```