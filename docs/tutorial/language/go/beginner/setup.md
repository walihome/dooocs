---
title: 开发环境搭建
category: go
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 开发环境搭建

## 💡 为什么需要开发环境

你写的Go代码(Code)只是文本文件,计算机无法直接理解。需要安装Go开发工具包(Go SDK),它会把你的代码翻译成计算机能执行的指令。

## 下载Go安装包

### Windows系统

1. 访问Go官网下载页面:`https://go.dev/dl/`
2. 找到最新版本(例如 go1.23.x),点击 `go1.23.x.windows-amd64.msi` 下载
3. 下载完成后,双击`.msi`文件开始安装
4. 安装过程中保持默认选项,一直点击"Next"直到完成

::: tip 提示
安装程序会自动将Go添加到系统环境变量(Environment Variable)中,这样你才能在任何位置使用Go命令。
:::

### macOS系统

1. 访问Go官网下载页面:`https://go.dev/dl/`
2. 下载 `go1.23.x.darwin-amd64.pkg` (Intel芯片)或 `go1.23.x.darwin-arm64.pkg` (M系列芯片)
3. 双击`.pkg`文件,按照安装向导完成安装

### Linux系统

打开终端(Terminal),执行以下命令:

```bash
# 下载安装包(以1.23.0为例,请替换为最新版本号)
wget https://go.dev/dl/go1.23.0.linux-amd64.tar.gz

# 解压到/usr/local目录
sudo tar -C /usr/local -xzf go1.23.0.linux-amd64.tar.gz

# 添加到环境变量
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
```

## 验证安装

打开命令行工具:
- Windows: 按 `Win + R`,输入 `cmd`,回车
- macOS: 按 `Command + 空格`,输入 `Terminal`,回车
- Linux: 按 `Ctrl + Alt + T`

输入以下命令:

```bash
go version
```

如果看到类似 `go version go1.23.0 windows/amd64` 的输出,说明安装成功。

::: warning 注意
如果提示"命令未找到",需要重启命令行窗口或重启电脑后再试。
:::

## 选择代码编辑器

推荐使用 **Visual Studio Code**(简称VS Code),它是免费的专业代码编辑器。

### 安装VS Code

1. 访问 `https://code.visualstudio.com/`
2. 点击下载按钮,选择对应系统的版本
3. 安装完成后打开VS Code

### 安装Go扩展

1. 打开VS Code
2. 点击左侧的扩展图标(或按 `Ctrl + Shift + X`)
3. 搜索 `Go`
4. 找到由Google官方发布的Go扩展,点击"Install"

## 创建第一个Go程序

### 创建项目文件夹

```bash
# Windows在命令行中执行
mkdir C:\Users\你的用户名\go-projects
cd C:\Users\你的用户名\go-projects

# macOS/Linux在终端中执行
mkdir ~/go-projects
cd ~/go-projects
```

### 创建项目

```bash
# 创建项目文件夹
mkdir hello
cd hello

# 初始化Go模块
go mod init hello
```

::: tip 提示
`go mod init` 命令会创建一个 `go.mod` 文件,它用于管理项目依赖(Dependencies)。`hello` 是模块名称,你可以改成其他名字。
:::

### 编写代码

在 `hello` 文件夹中创建文件 `main.go`,输入以下代码:

```go{1,3,5}
package main

import "fmt"

func main() {
	fmt.Println("Hello, Go!")
}
```

### 运行程序

在命令行中执行:

```bash
go run main.go
```

你会看到输出:
```
Hello, Go!
```

恭喜!你已经成功运行了第一个Go程序。

## 💪 练习题

### 练习1:修改输出内容

将 `main.go` 中的 `"Hello, Go!"` 改成你的名字,重新运行程序,观察输出变化。

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, 张三!")
}
```

运行后输出:
```
Hello, 张三!
```

</details>

### 练习2:输出多行内容

尝试连续使用两次 `fmt.Println()`,让程序输出两行不同的内容。

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
	fmt.Println("第一行内容")
	fmt.Println("第二行内容")
}
```

运行后输出:
```
第一行内容
第二行内容
```

</details>

## 📌 小结

- **Go SDK**是执行Go代码的必备工具,通过 `go version` 命令可以验证是否安装成功
- **VS Code + Go扩展**是推荐的开发组合,提供代码高亮和智能提示
- **`go run`命令**可以快速运行Go程序,无需手动编译