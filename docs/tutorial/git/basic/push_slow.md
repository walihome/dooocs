---
title: git网络问题
colla: true
order: 5
head:
  - - meta
    - name: git push很慢
      content: 设置代理解决这问题
  - - meta
    - name: git push报错
      content: 设置代理解决这问题
---
# Git网络问题


## push github很慢问题解决
### 方案
通过设置代理地址来解决这个问题，根据自己的代理软件，设置不同的代理地址和端口
> 如果代理软件是clash，那么代理地址就是127.0.0.1:7890


```
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890
```

