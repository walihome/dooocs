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

## 💡 概念说明

**Hello World** 是编程世界的第一个程序，它的作用很简单：在屏幕上显示一行文字。

通过这个程序，你将学会：
- 如何编写 Java 代码
- 如何运行 Java 程序
- 如何在屏幕上输出内容

## 📝 代码示例

创建一个名为 `HelloWorld.java` 的文件，输入以下代码：

```java{1,3}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

::: tip 文件名规则
文件名必须与 `class` 后面的名称完全一致，包括大小写。这里 class 名是 `HelloWorld`，所以文件名必须是 `HelloWorld.java`
:::

**运行步骤**：

1. 打开命令行工具(Terminal/CMD)
2. 进入代码文件所在目录
3. 执行编译命令(Compile)：

```bash
javac HelloWorld.java
```

4. 执行运行命令：

```bash
java HelloWorld
```

**运行结果**：

```
Hello World
```

::: warning 注意
如果提示 `javac` 命令找不到，说明 Java 开发环境(JDK)还未安装。你需要先安装 JDK 并配置环境变量。
:::

## 💪 练习题

### 练习 1：修改输出内容
将 `"Hello World"` 改成 `"你好，Java"`，运行看看结果。

### 练习 2：输出多行内容
尝试添加更多 `System.out.println()` 语句，输出 3 行不同的文字。

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("第一行");
        // 在这里添加第二行
        // 在这里添加第三行
    }
}
```

### 练习 3：观察错误
故意把第 1 行的 `HelloWorld` 改成 `Helloworld`（注意大小写），编译看看会发生什么。

::: tip 小提示
错误是学习的一部分，不要害怕尝试。通过观察错误信息，你能更快理解 Java 的规则。
:::

## 📌 小结

- Java 程序的文件名必须与 **类名(Class Name)** 完全一致
- `System.out.println()` 用于在屏幕上输出内容
- 运行 Java 程序需要两步：先 **编译(javac)**，再 **运行(java)**