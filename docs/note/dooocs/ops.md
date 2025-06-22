---
title: 运维ops
order: 3
--- 
# 运维问题记录

## 服务器磁盘满

阿里云控制台报错：
<img width="1264" alt="image" src="https://github.com/user-attachments/assets/79ade11a-47de-4ab3-99da-f119512d5aca" />
<img width="1410" alt="image" src="https://github.com/user-attachments/assets/9314694a-8b38-459d-9bbf-326182fc95b4" />

```
ExecutePluginOnlineOrLocal LOCKING_ERR.NoSpaceLeftOnDevice: Failed to execute plugin[ecsgo-helper ]: Failed to open or create plugin-wise lock file: open /usr/local/share/aliyun-assist/cache/plugin-manager/ecsgo-helper.lock: no space left on device
```

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


## 阿里云ecs升级中间件版本
> 阿里云ecs升级基础中间件时访问某些网站慢，导致升级超时失败，这里有一些稳定的升级地址

1. 升级nvm
```shell
curl -o- https://gitee.com/mirrors/nvm/raw/master/install.sh | bash
```
nvm安装成功之后，需要让当前ssh会话生效，否则刚安装好在终端输入`nvm -v`时提示不认识这个命令

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

2. 升级nodejs 版本
```
nvm install --lts
```

3. 升级npm版本
如果nodejs版本很低时，npm也无法升级到lts版本，原因是npm也是需要node环境来执行的
```
npm install -g npm@latest
```



