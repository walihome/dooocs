---
title: git基础命令
colla: true
order: 1
head:
  - - meta
    - name: dooocs git 基础 命令 基础命令 删除 分支
      content: git 
---
# Git基础命令


git 删除 本地多余的分支
```
git branch | grep -v "master" | xargs git branch -D
```
