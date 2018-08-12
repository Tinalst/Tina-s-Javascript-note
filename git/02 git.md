# 02 远程仓库
create 2018-08-12 by tinalim

## 与远程仓库建立关联前的必要条件
1. 创建SSH Key
```
ssh_keyen -t rsa -C "your email"
```

2. 添加SSH Key 
找到user/.ssh/ id_rsa.pub
复制该文件内容到GitHub的SSH Kyes设置

3. 创建远程仓库
<br/>
这里采用github远程仓库

=== 可选方式 ===

4. 本地仓库关联远程仓库
```
git remote add xxxxxxxx (从新建的仓库中自动提示生成的复制过来即可)


5. 以克隆远程仓库方式新建仓库
git clone XXXXXX

=== end ===

// 推送内容至远程仓库
git push -u rigin master // 推送到远程仓库
```

# [ 03 git 分支](https://github.com/Tinalst/Tina-s-Javascript-note/blob/master/git/03%20git.md)