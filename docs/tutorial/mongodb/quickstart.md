---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---

# 阿里云ECS安装MongoDB

## 下载实例

1. 创建文件内容
```
/etc/yum.repos.d/mongodb-org-6.0.repo
```
2. 把下面的内容复制进去
```
vim /etc/yum.repos.d/mongodb-org-6.0.repo
```

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```
3. 执行下载
```
sudo yum install -y mongodb-org
```

4. 执行结果
出现 Complete! 则为安装完成！



