---
title: 运维ops
order: 3
--- 
# 运维问题记录

## 服务器磁盘满
先查看服务器磁盘具体情况
```shell
df -h
```
返回结果如下
```shell
[root@logan ~]# df -h
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        1.8G     0  1.8G   0% /dev
tmpfs           1.8G     0  1.8G   0% /dev/shm
tmpfs           1.8G   39M  1.8G   3% /run
tmpfs           1.8G     0  1.8G   0% /sys/fs/cgroup
/dev/vda1        40G   39G     0 100% /
tmpfs           359M     0  359M   0% /run/user/0
```
`/dev/vda1`用了39G，几乎用满了，需要排查具体原因
```shell
sudo du -sh /*
```
返回结果如下：
```shell
12G     /root
39M     /run
0       /sbin
4.0K    /srv
20K     /ssl
0       /sys
6.0M    /tmp
4.7G    /usr
1.8G    /var
```

继续查看是哪个目录导致的
```shell
[root@logan ~]# sudo du -sh /opt/*
42M     /opt/backend
763M    /opt/backend_backup
12K     /opt/containerd
245M    /opt/frontend
20G     /opt/frontend_backup
```
`/opt/frontend_backup`占了大头，这个是前端部署的冗余代码，说明部署脚本设计不合理，长期下来会把磁盘占满，需要优化。
