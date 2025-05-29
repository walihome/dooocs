---
title: 配置SSH密钥
meta: ssh 配置ssh ssh秘钥
order: 6
---

# 配置SSH密钥

## 1. 生成SSH密钥对
打开终端 (Terminal)。
运行命令生成新的密钥对（推荐使用 Ed25519，如果需要兼容旧系统，可以使用 RSA）：
```
ssh-keygen -t ed25519 -C "szqworking@gmail.com"
```

`-C "szqworking@gmail.com" `是一个注释，通常用你的邮箱，方便识别。

保存位置：它会提示你保存密钥文件的位置。
如果你没有其他密钥，或者想覆盖默认密钥，可以直接按回车键。

默认保存在 `~/.ssh/id_ed25519`。

设置密码 (Passphrase)：默认需要输入密码，连续输入两次，可以直接回车；


## 2. 添加公钥到GitHub
获取你新生成的公钥内容。如果你的密钥保存在默认位置：
```
cat ~/.ssh/id_ed25519.pub
```
复制输出的全部内容（以 ssh-ed25519 或 ssh-rsa 开头）。
回到 GitHub 的 "SSH and GPG keys" 设置页面。
点击 "New SSH key" 或 "Add SSH key"。
给你的新密钥起一个标题 (Title)，例如 "My New MacBook Key" 或 "Primary Key [YYYY-MM-DD]"。
将复制的新公钥内容粘贴到 "Key" 字段中。
点击 "Add SSH key"。



## 3. 本地验证

::: code-group
```验证GitHub
ssh -T git@github.com
```
```验证阿里云云效
ssh -T git@codeup.aliyun.com
```
::: 

如果一切配置正确，你会看到认证成功的消息。

重要提示：
备份你的新私钥！ 将其安全地存放在一个或多个外部存储设备上（例如加密的U盘）。
确保新私钥文件的权限正确：chmod 600 ~/.ssh/your_new_private_key_file。
在删除旧公钥之前，确保你已经成功生成并备份了新的密钥对，并且知道如何将新公钥添加到服务中，以避免暂时无法访问的情况。
