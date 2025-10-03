---
title: hello world
category: python
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # Hello World

## 💡 什么是 Hello World

**Hello World** 是程序员学习新语言时写的第一个程序。它的作用很简单:让程序在屏幕上显示一句话。

为什么要从这个开始?
- 验证你的 Python 环境是否正常
- 体验"写代码 → 运行 → 看结果"的完整流程
- 建立信心:原来编程就是这么回事!

## 📝 你的第一个 Python 程序

### 代码示例

```python{1}
print("Hello World")
```

就这一行!现在让我们运行它。

### 如何运行

::: tip 运行方式
- **方式一**: 在命令行/终端输入 `python` 进入交互模式,直接输入代码
- **方式二**: 创建文件 `hello.py`,写入代码后运行 `python hello.py`
:::

**运行结果**:
```
Hello World
```

你会在屏幕上看到这行字!

### 代码说明

这行代码做了什么:
- `print()` 是 Python 的**内置函数(Built-in Function)**,作用是"打印"内容到屏幕
- 括号里的 `"Hello World"` 是**字符串(String)**,表示一段文本
- 双引号告诉 Python:"这是要显示的内容"

## 💪 动手练习

### 练习 1:修改问候语

把 `Hello World` 改成你的名字,比如 `Hello 小明`。

::: details 查看答案
```python
print("Hello 小明")
```
运行后会显示:
```
Hello 小明
```
:::

### 练习 2:多行输出

让程序分两行显示:
```
Hello
World
```

::: details 查看答案
```python
print("Hello")
print("World")
```
每个 `print()` 会输出一行内容。
:::

## 🎯 让输出更有趣

### 使用中文

```python{1}
print("你好,世界!")
```

Python 完美支持中文!

### 输出数字

```python{1}
print(2025)
```

::: warning 注意区别
- `print("2025")` - 输出文本"2025"
- `print(2025)` - 输出数字 2025

数字不需要引号!
:::

### 输出多个内容

```python{1}
print("我今年", 18, "岁")
```

用逗号分隔,Python 会自动用空格连接它们:
```
我今年 18 岁
```

## 📌 小结

- `print()` 函数用于在屏幕上显示内容
- 文本内容需要用引号包裹:`"文本"` 或 `'文本'`
- 可以用逗号在一个 `print()` 中输出多个内容

恭喜!你已经完成了第一个 Python 程序 🎉