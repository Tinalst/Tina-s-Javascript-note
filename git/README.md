# git 常用命令列表
created 2018-08-12 20:53 tinalim

> 本章记录git常用命令以备查看

```
// 设置git账户名称和邮箱
git config --global user.name "your name"
git config --global user.email "your email"

// 创建本地git仓库
md | mkdir file-name (文件路径最好不要有中文)
cd file-name
git init

// 把文件添加到stage（暂存库）
git add . (注意. 添加所有文件)
git add file-name (指定添加某个文件)

// 把暂存库中的文件提交到当前分支
git commit -m "message"

// 查看仓库当前状态（比如是否有文件上传，或者修改等）
git status

// 查看当前文件相比较于在仓库中的最新一个版本里的文件有什么变化
git diff file-name

// 查看历史提交记录
git log (打印出来的信息会从最近的一次开始往回显示)

// git版本表示
1. git 中  HEAD  表示当前版本
2. git 中查看当前版本的上一个版本用  HEAD^  表示
3. ^^ 两个就是当前版本的上上个版本一次类推，当然，可以使用 HEAD-数字表示

// 版本回退
git reset --hard HEAD^  (这里以退回当前版本的上一个版本为例)
注意： 从当前版本回退到第X个版本中，那么第X版本后提交的版本就不能在git log 中被查看到了，但是如果几个版本号（那串很长的数字）的前几位的话，可以通过 git reset --hard 版本号 进行穿越

// 查看每次操作命令
git reflog (比较常用语回退历史版本前查看版本ID编号)

// 撤销还没有提交的在工作区的修改
git checkout -- file-name

// 撤销添加到暂存区的修改
git reset HEAD file-name
git checkout -- file-name

// 切换分支
git checkout -b branch-name


// 删除文件
git rm file-name
```

## git示意图
![images](https://github.com/Tinalst/Tina-s-Javascript-note/blob/master/images/git/01-1.png)