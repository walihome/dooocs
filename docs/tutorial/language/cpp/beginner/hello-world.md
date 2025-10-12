---
title: hello world
category: c++
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # Hello World

## 💡 什么是 Hello World

Hello World 是全世界程序员学习任何编程语言时写的第一个程序。它的作用很简单：让程序在屏幕上显示一行文字 "Hello World"。

通过这个程序，你会学到：
- 如何创建一个 C++ 程序文件
- 如何编译(Compile)并运行程序
- 程序的基本结构是什么样的

## 📝 第一个 C++ 程序

### 创建程序文件

1. 打开任意文本编辑器（记事本、VS Code、Notepad++ 都可以）
2. 创建一个新文件，命名为 `hello.cpp`（`.cpp` 是 C++ 程序文件的扩展名）
3. 输入以下代码：

```cpp{1,5,6}
#include <iostream>

int main()
{
    std::cout << "Hello World" << std::endl;
    return 0;
}
```

::: tip 提示
确保代码的每个字符都输入正确，包括标点符号和空格。C++ 对大小写敏感，`main` 和 `Main` 是不同的。
:::

### 编译并运行

**Windows 系统：**
```bash
# 打开命令提示符，进入文件所在目录
g++ hello.cpp -o hello
hello.exe
```

**Mac/Linux 系统：**
```bash
# 打开终端，进入文件所在目录
g++ hello.cpp -o hello
./hello
```

**运行结果：**
```
Hello World
```

::: warning 注意
如果提示 `g++` 命令不存在，说明你还没有安装 C++ 编译器(Compiler)。Windows 用户可以安装 MinGW，Mac 用户可以安装 Xcode Command Line Tools，Linux 用户可以用包管理器安装 `g++`。
:::

## 💡 程序结构说明

```cpp{1}
#include <iostream>
```
这一行告诉程序需要使用输入输出功能。

```cpp{3}
int main()
```
这是程序的入口点(Entry Point)，程序从这里开始执行。

```cpp{5}
std::cout << "Hello World" << std::endl;
```
这一行的作用是在屏幕上输出文字。`std::cout` 表示输出，`<<` 用来传送要输出的内容。

```cpp{6}
return 0;
```
这一行表示程序正常结束。

## 💪 动手练习

### 练习 1：修改输出内容
把程序中的 "Hello World" 改成你的名字，重新编译运行。

::: details 查看答案
```cpp{5}
#include <iostream>

int main()
{
    std::cout << "My name is Zhang San" << std::endl;
    return 0;
}
```
:::

### 练习 2：输出多行文字
尝试让程序输出两行不同的文字。

::: details 查看答案
```cpp{5,6}
#include <iostream>

int main()
{
    std::cout << "Hello World" << std::endl;
    std::cout << "Welcome to C++" << std::endl;
    return 0;
}
```

**运行结果：**
```
Hello World
Welcome to C++
```
:::

## 📌 本章小结

- C++ 程序文件以 `.cpp` 为扩展名
- 每个程序都需要一个 `main()` 函数作为入口点
- 使用 `std::cout` 可以在屏幕上输出内容
- 程序需要先编译(Compile)才能运行