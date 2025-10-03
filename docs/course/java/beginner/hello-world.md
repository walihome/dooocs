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

**Hello World** 是程序员学习新语言时编写的第一个程序。它的作用很简单：让计算机在屏幕上显示一句话。通过这个程序，你可以验证：
- 你的开发环境配置正确
- 你能成功运行 Java 程序
- 你迈出了编程的第一步

## 📝 编写你的第一个程序

### 创建文件

1. 打开你的代码编辑器（记事本、VS Code 等都可以）
2. 新建一个文件，命名为 `HelloWorld.java`

::: warning 注意
文件名必须和代码中的类名完全一致，包括大小写！
:::

### 输入代码

```java{1,3}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

::: tip 代码说明
- 第 1 行：创建一个名为 `HelloWorld` 的**类(Class)**
- 第 2 行：程序的入口，Java 程序从这里开始运行
- 第 3 行：打印输出 `Hello World` 到屏幕
:::

### 运行程序

打开命令行，进入文件所在目录，执行：

```bash
# 编译
javac HelloWorld.java

# 运行
java HelloWorld
```

**运行结果：**
```
Hello World
```

## 💪 动手练习

### 练习 1：修改输出内容
把 `Hello World` 改成你的名字，比如 `Hello 张三`，运行看看效果。

<details>
<summary>点击查看答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello 张三");
    }
}
```

运行结果：
```
Hello 张三
```

</details>

### 练习 2：输出多行内容
尝试连续输出三行不同的内容。

<details>
<summary>点击查看答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("第一行");
        System.out.println("第二行");
        System.out.println("第三行");
    }
}
```

运行结果：
```
第一行
第二行
第三行
```

</details>

## 📌 小结

- 每个 Java 程序都需要一个 `main` **方法(Method)** 作为入口
- 使用 `System.out.println()` 可以在屏幕上显示内容
- 文件名必须与类名一致