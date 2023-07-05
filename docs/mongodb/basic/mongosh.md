

# mongosh 介绍

## 基础配置
```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/8/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```


## 创建对于的MongoDB数据库

```
mongo
use nodeBB_database
db.createUser({ user: 'nodeBB', pwd: 'loveqiao77', roles: [{ role: 'readWrite', db: 'nodeBB_database' }] })
```


## 给nodeBB的参数值

```
mongodb://nodeBB:loveqiao77@localhost:27017/nodeBB_database?authSource=nodeBB_database
```
