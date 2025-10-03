---
title: 基本语法
category: Java
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 基本语法

## 💡 第一个程序

让我们从最简单的程序开始。创建一个名为 `Hello.java` 的文件：

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

**运行方式**：
```bash
javac Hello.java
java Hello
```

你会看到输出：
```
Hello World
```

::: tip 提示
`System.out.println()` 会输出内容并换行，这是你最常用的输出方式。
:::

## 💡 变量(Variable)

**变量(Variable)** 就是给数据起个名字,方便后续使用。

```java
public class Variable {
    public static void main(String[] args) {
        int age = 25;
        String name = "Tom";
        double price = 99.99;
        
        System.out.println(age);
        System.out.println(name);
        System.out.println(price);
    }
}
```

**运行结果**：
```
25
Tom
99.99
```

::: warning 注意
变量名只能包含字母、数字、下划线，且不能以数字开头。
:::

## 💡 基本运算

Java 支持常见的数学运算：

```java
public class Calculate {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println(a + b);  // 加法
        System.out.println(a - b);  // 减法
        System.out.println(a * b);  // 乘法
        System.out.println(a / b);  // 除法
    }
}
```

**运行结果**：
```
13
7
30
3
```

你有没有想过为什么 `10 / 3` 的结果是 `3` 而不是 `3.333...`？因为两个整数相除，结果也是整数，小数部分会被舍弃。

如果需要小数结果：

```java
public class Calculate2 {
    public static void main(String[] args) {
        double a = 10.0;
        double b = 3.0;
        
        System.out.println(a / b);  // 3.3333333333333335
    }
}
```

## 💡 注释(Comment)

**注释(Comment)** 是写给人看的说明，程序运行时会被忽略。

```java
public class Comment {
    public static void main(String[] args) {
        // 这是单行注释,可以写在代码上方
        int age = 25;
        
        String name = "Tom";  // 也可以写在代码后面
        
        /*
         * 这是多行注释
         * 可以写很多行
         * 用于详细说明
         */
        double price = 99.99;
    }
}
```

::: tip 提示
养成写注释的习惯，未来的你会感谢现在的自己。
:::

## 💡 日志打印

除了 `System.out.println()`，你还可以这样输出：

```java
public class Print {
    public static void main(String[] args) {
        // println 会自动换行
        System.out.println("第一行");
        System.out.println("第二行");
        
        // print 不换行
        System.out.print("Hello ");
        System.out.print("World");
    }
}
```

**运行结果**：
```
第一行
第二行
Hello World
```

**组合输出**：

```java
public class Print2 {
    public static void main(String[] args) {
        String name = "Tom";
        int age = 25;
        
        // 使用 + 连接文本和变量
        System.out.println("我叫" + name + ",今年" + age + "岁");
        
        // 使用占位符 %s(字符串) %d(整数)
        System.out.printf("我叫%s,今年%d岁\n", name, age);
    }
}
```

**运行结果**：
```
我叫Tom,今年25岁
我叫Tom,今年25岁
```

## ✅ 验证方法

创建 `Practice.java` 文件并运行：

```java
public class Practice {
    public static void main(String[] args) {
        // 定义变量
        int x = 8;
        int y = 5;
        
        // 输出计算结果
        System.out.println("加法: " + (x + y));
        System.out.println("减法: " + (x - y));
        System.out.println("乘法: " + (x * y));
        System.out.println("除法: " + (x / y));
    }
}
```

如果看到正确的计算结果，说明你已经掌握了基本语法。

## 💪 练习题

**练习 1**：定义你的个人信息并输出
```java
// 定义 name、age、height 三个变量
// 输出: 我叫xxx,今年xx岁,身高xx米
```

**练习 2**：计算商品总价
```java
// 定义 price = 49.9, quantity = 3
// 计算并输出总价
```

**练习 3**：温度转换
```java
// 定义 celsius = 25(摄氏度)
// 转换为华氏度: fahrenheit = celsius * 9 / 5 + 32
// 输出结果
```

## 📌 小结

- 使用 `类型 变量名 = 值;` 定义变量
- 使用 `System.out.println()` 输出内容
- 四则运算使用 `+ - * /` 符号
- 使用 `//` 或 `/* */` 添加注释