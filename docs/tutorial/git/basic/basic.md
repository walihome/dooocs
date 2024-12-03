---
title: git基础学习手册
colla: true
order: 1
head:
  - - meta
    - name: dooocs git
      content: git git学习
---
# Git基础学习手册


git 删除 本地多余的分支
```
git branch | grep -v "master" | xargs git branch -D
```
