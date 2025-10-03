---
title: hello world
category: go
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # Hello World

## 💡 什么是 Hello World

Hello World 是编程世界的"你好"——这是一个传统,全世界的程序员学习新语言时都会先写这个程序。它的作用很简单:让程序在屏幕上显示一行文字。

通过这个小程序,你会验证:
- Go 语言环境安装成功
- 你能成功运行一个 Go 程序
- 你写出了人生第一行 Go 代码

## 📝 创建你的第一个 Go 程序

### 步骤 1: 创建项目文件夹

打开终端(Terminal),执行以下命令:

```bash
mkdir hello
cd hello
```

### 步骤 2: 初始化 Go 模块

```bash
go mod init hello
```

::: tip 提示
这一步会创建一个 `go.mod` 文件,Go 用它来管理项目。
:::

### 步骤 3: 创建代码文件

创建一个名为 `main.go` 的文件,写入以下代码:

```go{1,3,5}
package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}
```

::: warning 注意
- 文件名必须是 `main.go`
- 代码中的标点符号必须是英文符号
- 大小写要完全一致
:::

### 步骤 4: 运行程序

在终端执行:

```bash
go run main.go
```

你会看到屏幕上输出:

```
Hello World
```

恭喜!你刚刚运行了第一个 Go 程序!

## 💡 代码解释

让我们看看这 5 行代码分别是什么:

**第 1 行** - `package main`  
告诉 Go 这是一个可执行程序(Program)。

**第 3 行** - `import "fmt"`  
导入(Import)一个工具包,`fmt` 可以帮你打印文字。

**第 5 行** - `func main()`  
这是程序的入口(Entry Point),程序从这里开始执行。

**第 6 行** - `fmt.Println("Hello World")`  
调用 `fmt` 包的 `Println` 函数(Function),在屏幕上打印文字。

## 💪 动手练习

### 练习 1: 修改问候语

把 `"Hello World"` 改成你自己的名字,比如 `"你好,张三"`,然后重新运行程序。

::: details 查看答案
```go{6}
package main

import "fmt"

func main() {
    fmt.Println("你好,张三")
}
```

运行后会输出:
```
你好,张三
```
:::

### 练习 2: 多行输出

尝试输出两行文字:第一行是 `Hello`,第二行是 `World`。

::: details 查看答案
```go{6-7}
package main

import "fmt"

func main() {
    fmt.Println("Hello")
    fmt.Println("World")
}
```

运行后会输出:
```
Hello
World
```
:::

## 🎯 其他运行方式

除了 `go run`,你还可以先编译(Compile)再运行:

```bash
go build main.go
./main
```

这会生成一个可执行文件 `main`,直接运行它也能看到 `Hello World`。

::: tip 提示
`go run` 适合快速测试,`go build` 适合发布程序给别人使用。
:::

## 📌 小结

- `package main` + `func main()` 是 Go 程序的标准结构
- `import "fmt"` 导入打印工具包
- `fmt.Println()` 用于输出文字到屏幕
- `go run` 可以直接运行 Go 代码