---
title: hello world
category: c
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # Hello World

学习编程的第一步，就是让计算机对你说"你好"。全世界的程序员开始学习一门新语言时，都会先写一个 Hello World 程序。这是一个传统，也是一个测试——确认你的开发环境可以正常工作。

## 💡 什么是 Hello World

Hello World 程序只做一件事：在屏幕上显示 "Hello World"。虽然简单，但它包含了编程的基本流程：
- 写代码
- 运行代码
- 看到结果

## 📝 第一个 Python 程序

创建一个新文件，命名为 `hello.py`，输入以下代码：

```python
print("Hello World")
```

就这么简单！只需要一行代码。

### 运行程序

打开终端(Terminal)或命令提示符(Command Prompt)，进入文件所在目录，输入：

```bash
python hello.py
```

你会看到屏幕上输出：

```
Hello World
```

::: tip 提示
`print()` 是 Python 的内置函数(Built-in Function)，用于在屏幕上显示内容。括号里的内容就是你想显示的东西。
:::

## 📝 显示更多内容

你可以显示任何你想说的话：

```python{1-3}
print("Hello World")
print("我是一名程序员")
print("Python 很有趣")
```

运行结果：

```
Hello World
我是一名程序员
Python 很有趣
```

每个 `print()` 会在新的一行显示内容。

## 📝 显示数字和计算结果

`print()` 不仅可以显示文字，还可以显示数字和计算结果：

```python{1-3}
print(2025)
print(10 + 5)
print(100 - 20)
```

运行结果：

```
2025
15
80
```

::: warning 注意
文字需要用引号 `""` 包起来，数字和计算式不需要引号。
:::

## 💪 练习题

### 练习 1：个人介绍
编写一个程序，依次输出你的名字、年龄和爱好。

::: details 参考答案
```python
print("我叫小明")
print("今年 20 岁")
print("喜欢打篮球")
```
:::

### 练习 2：简单计算器
编写一个程序，计算并显示：
- 123 + 456
- 1000 - 234
- 50 × 8（Python 中乘法用 `*`）

::: details 参考答案
```python
print(123 + 456)
print(1000 - 234)
print(50 * 8)
```

运行结果：
```
579
766
400
```
:::

## 📌 小结

- `print()` 函数用于在屏幕上显示内容
- 文字需要用引号 `""` 包起来，数字不需要
- 一个 `print()` 语句会在新的一行显示内容
- Python 可以直接进行数学计算