---
title: hello world
category: Java
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # Hello World

## 💡 概念说明(Concept)

**Hello World** 是编程世界的"第一句话"。就像学英语从"Hello"开始，学 Java 也从打印这句话开始。

**打印(Print)** = 让程序在屏幕上显示文字

## 📝 代码示例(Code Example)

创建一个名为 `HelloWorld.java` 的文件,输入以下代码:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

::: tip 提示
- 文件名必须和 `class` 后的名字完全一致
- 大小写必须一致:`HelloWorld.java` 不能写成 `helloworld.java`
:::

## 🚀 运行步骤(How to Run)

**步骤 1: 编译(Compile)**

```bash
javac HelloWorld.java
```

如果没有报错,会生成一个 `HelloWorld.class` 文件。

**步骤 2: 运行(Run)**

```bash
java HelloWorld
```

**运行结果:**

```
Hello World
```

::: warning 注意
运行时写 `java HelloWorld`,不要加 `.class` 后缀
:::

## ✅ 验证方法(Verification)

你应该看到:
- ✅ 屏幕上显示 `Hello World`
- ✅ 目录里多了 `HelloWorld.class` 文件

## 💪 练习题(Exercise)

**练习 1**: 修改输出内容

把 `"Hello World"` 改成你的名字,比如 `"Hello Zhang San"`,重新编译运行。

**练习 2**: 输出多行

在 `System.out.println("Hello World");` 下面再加一行:

```java
System.out.println("Welcome to Java");
```

看看会输出什么?

**练习 3**: 创建新程序

创建 `MyFirstProgram.java`,让它输出 `"I love programming"`:

```java
public class MyFirstProgram {
    public static void main(String[] args) {
        System.out.println("I love programming");
    }
}
```

::: danger 警告
文件名必须改成 `MyFirstProgram.java`,否则无法运行
:::

## 🔍 代码含义(Code Explanation)

你可能好奇这些代码是什么意思:

- `public class HelloWorld` - 定义一个名为 HelloWorld 的**类(Class)**
- `public static void main(String[] args)` - 程序的**入口(Entry Point)**,Java 从这里开始执行
- `System.out.println()` - **打印方法(Print Method)**,在屏幕显示内容
- `"Hello World"` - **字符串(String)**,用双引号包起来的文字

现在不用完全理解,只需记住:
1. 写代码要在 `main` 里
2. 用 `System.out.println()` 打印内容
3. 文字要放在双引号 `""` 里

## 📌 小结(Key Points)

1. Java 程序的文件名必须和类名完全一致
2. 用 `javac` 编译,用 `java` 运行
3. `System.out.println()` 可以在屏幕上显示内容