---
title: 配置maven
order: 2
---

# 配置maven

## 下载maven

点击链接，下载maven对应版本；
[maven下载链接](https://maven.apache.org/download.cgi)


## 配置环境变量
查看终端类型，`zsh` or `bash`
```shell
echo $SHELL
```
终端返回 `/bin/zsh` 则说明是zsh，接着修改环境变量

::: code-group
```shell [zsh]
vim ~/.zshrc
```
```shell [bash]
vim ~/.bash_profile
```
:::

增加以下内容：
```
# Maven Environment Variables
export M2_HOME="/Users/logan/box/4_config/idea_setting/apache-maven-3.9.9"
export PATH="$M2_HOME/bin:$PATH"
```
保存 ~/.zshrc之后，source生效

::: code-group

```zsh
source ~/.zshrc
```
```bash
source ~/.bash_profile
```

::: 

## 验证配置

```
mvn -version
```
终端返回结果如下，说明了maven的位置以及java的位置
```
Maven home: /Users/logan/box/4_config/idea_setting/apache-maven-3.9.9
Java version: 21.0.7, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home
Default locale: zh_CN_#Hans, platform encoding: UTF-8
OS name: "mac os x", version: "14.2.1", arch: "aarch64", family: "mac"

```


