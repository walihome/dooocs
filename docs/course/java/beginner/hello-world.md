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

## 💡 什么是 Hello World

**Hello World** 是程序员编写的第一个程序,用来验证编程环境是否正常工作。它会在屏幕上显示 "Hello World" 这句话。

## 📝 完整代码示例

创建一个名为 `HelloWorld.java` 的文件,输入以下代码:

```java{1,3}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

::: tip 提示
文件名 `HelloWorld.java` 必须和代码中的 `class HelloWorld` 名称完全一致,包括大小写。
:::

### 运行代码

在命令行中执行:

```bash
# 编译代码
javac HelloWorld.java

# 运行程序
java HelloWorld
```

**运行结果:**

```
Hello World
```

## 🔍 代码说明

让我们看看这 4 行代码分别做了什么:

**第 1 行**: `public class HelloWorld` 
- 定义了一个**类(Class)**,名字叫 `HelloWorld`

**第 2 行**: `public static void main(String[] args)`
- 这是程序的**入口方法(Main Method)**
- Java 程序从这里开始执行

**第 3 行**: `System.out.println("Hello World")`
- 在屏幕上打印输出内容
- `println` 表示打印后换行

::: warning 注意
- 每条语句结尾需要加分号 `;`
- 大括号 `{}` 必须成对出现
- 字符串内容需要用双引号 `""` 包裹
:::

## 💪 练习题

### 练习 1:修改输出内容

把 "Hello World" 改成你的名字,比如 "Hello 张三"。

::: details 查看答案
```java{3}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello 张三");
    }
}
```
:::

### 练习 2:输出多行内容

尝试输出两行内容:
- 第一行:Hello World
- 第二行:Welcome to Java

::: details 查看答案
```java{3-4}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println("Welcome to Java");
    }
}
```
:::

## 📌 小结

- Java 程序必须包含 `main` 方法作为入口
- 使用 `System.out.println()` 可以在屏幕上输出内容
- 文件名必须和类名一致