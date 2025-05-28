---
title: 配置SSH密钥
order: 6
---

# 配置SSH密钥

## 1. 在你的本地电脑上生成新的 SSH 密钥对
打开终端 (Terminal)。
运行命令生成新的密钥对（推荐使用 Ed25519，如果需要兼容旧系统，可以使用 RSA）：
```
ssh-keygen -t ed25519 -C "szqworking@gmail.com"
```

`-C "szqworking@gmail.com" `是一个注释，通常用你的邮箱，方便识别。

保存位置：它会提示你保存密钥文件的位置。
如果你没有其他密钥，或者想覆盖默认密钥，可以直接按回车键。

默认保存在 `~/.ssh/id_ed25519`。

设置密码 (Passphrase)：强烈建议为你的新私钥设置一个密码。这样即使私钥文件被盗，没有密码也无法使用。连续输入两次密码。

## 2. 删除 GitHub 上旧的公钥
登录你的 GitHub 账户。
点击右上角的头像，选择 "Settings"。
在左侧导航栏中，选择 "SSH and GPG keys"。
找到你想要删除的旧公钥（通常可以通过注释或添加日期来识别）。
点击对应公钥旁边的 "Delete" 按钮，并确认删除。

::: info
删除阿里云云效代码仓库 (Codeup) 上旧的公钥
登录你的阿里云账户，并进入云效 Codeup。
进入个人设置区域（通常点击右上角头像 -> "个人设置"）。
在左侧菜单找到 "SSH 公钥" 或类似条目。找到你想要删除的旧公钥。
点击删除按钮（通常是 "删除" 或一个垃圾桶图标），并确认。

:::

## 3. 将新的公钥添加到 GitHub
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

::: info
同样使用第 4 步中复制的新公钥内容。
回到阿里云效 Codeup 的 "SSH 公钥" 管理页面。
点击 "添加 SSH 公钥" 或类似的按钮。
给公钥起一个名称。
将复制的新公钥内容粘贴到相应的文本框中。
保存或添加公钥。
:::

## 4. 配置本地 SSH Agent (推荐)
启动 SSH agent (如果尚未运行)：
eval "$(ssh-agent -s)"
Use code with caution.
Bash
将你的新私钥添加到 agent (如果你使用了非默认文件名，请替换)：
ssh-add ~/.ssh/id_ed25519  # 或者 ~/.ssh/github_aliyun_new_key
Use code with caution.
Bash
输入你为私钥设置的密码。这样在当前会话中就不需要重复输入密码了。


## 5. 测试连接

::: code-group
```测试 GitHub
ssh -T git@github.com
```
```测试阿里云
ssh -T git@codeup.aliyun.com
```
::: 

如果一切配置正确，你会看到认证成功的消息。

重要提示：
备份你的新私钥！ 将其安全地存放在一个或多个外部存储设备上（例如加密的U盘）。
确保新私钥文件的权限正确：chmod 600 ~/.ssh/your_new_private_key_file。
在删除旧公钥之前，确保你已经成功生成并备份了新的密钥对，并且知道如何将新公钥添加到服务中，以避免暂时无法访问的情况。
