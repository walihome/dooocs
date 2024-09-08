---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# 快速开始

下面是在 macOS 上配置 Maven 的快速入门指南：

## 安装 Homebrew
- 打开终端应用程序（Terminal.app）。
- 在终端中输入以下命令并按下回车键：
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
- 等待安装完成。

## 安装 Maven
- 在终端中输入以下命令并按下回车键：
```
brew install maven
```
- 等待安装完成。

## 验证安装
- 在终端中输入以下命令并按下回车键：
```
mvn -version
```
- 如果安装成功，你将看到 Maven 的版本信息。

## 配置环境变量
- 打开终端中的配置文件 `~/.bash_profile`（如果不存在，请创建一个新的文件）：
```
nano ~/.bash_profile
```
- 在文件中添加以下行：
```
export M2_HOME=/usr/local/Cellar/maven/{maven_version}/libexec
export PATH=$PATH:$M2_HOME/bin
```
- 将 `{maven_version}` 替换为你安装的 Maven 的版本号。例如，如果你安装的是 Maven 3.8.1，那么将 `{maven_version}` 替换为 `3.8.1`。
- 按下 `Ctrl + X` 保存并退出 nano 编辑器。

## 使环境变量生效
- 在终端中输入以下命令并按下回车键：
```
source ~/.bash_profile
```
- 这将使刚才添加的环境变量生效。

现在，你已经成功在 macOS 上安装和配置了 Maven。你可以在终端中使用 Maven 命令来构建和管理项目了。

希望这个快速入门指南对你有帮助！如果你有任何其他问题，请随时提问。