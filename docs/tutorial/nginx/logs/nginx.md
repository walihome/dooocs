---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# nginx
## 检查nginx配置
在 /etc/nginx/conf.d/ 目录下，你应该有一个配置文件指向你的 NodeBB 实例，确认在 proxy_pass 指令中指定的地址和端口是正确的。
```
cd /etc/nginx/conf.d/
```

你还可以使用 nginx -t 命令检查 Nginx 配置文件的语法是否正确。
```
sudo nginx -t
``` 
正确的话，会返回如下内容
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```



## 查看nginx日志
在大多数系统中，你可以在 /var/log/nginx/ 目录下找到这些日志。
```
/var/log/nginx/
```

error.log 文件会包含任何导致 Nginx 错误的信息，包括 502 错误。
```
sudo tail -f /var/log/nginx/error.log
```

## 清理nginx日志

```
sudo truncate -s 0 /var/log/nginx/error.log
```


