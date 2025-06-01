---
title: git网络提速方案
colla: true
order: 5
head:
  - - meta
    - name: git push很慢
      content: git网络提速方案
  - - meta
    - name: git push提速
      content: git网络提速方案
---
# Git网络问题


## v2rayN
查看实际代理的端口
``` shell
sudo lsof -i -P -n | grep LISTEN | grep -i 'xray'
```
返回结果如下，说明端口值为：`10808`
```shell
`xray      71772          logan    4u  IPv4 0x2bf510ccac63d37b      0t0    TCP 127.0.0.1:10808 (LISTEN)`
```

基于这个端口配置git代理，访问git方式不同，对应的配置也不同
::: code-group

```shell [ssh]
vim ~/.ssh/config
```
:::

增加如下配置：
```shell
Host github.com gitlab.com bitbucket.org
    User git
    ProxyCommand nc -X 5 -x 127.0.0.1:10808 %h %p
```

验证：
```shell
ssh -T git@github.com
```





### 方案

通过设置代理地址来解决这个问题，根据自己的代理软件，设置不同的代理地址和端口
> 如果代理软件是clash，那么代理地址就是127.0.0.1:7890

::: code-group
```shell [clash代理配置]
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890
```
:::
