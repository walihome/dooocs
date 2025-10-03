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

## 💡 变量(Variable)

**变量(Variable)** 是用来存储数据的容器。你可以把它想象成一个带标签的盒子,盒子里可以装不同的东西。

在 Java 中,变量由三部分组成:
- **数据类型(Data Type)** - 规定盒子能装什么类型的东西
- **变量名(Variable Name)** - 给盒子贴上标签
- **值(Value)** - 盒子里装的具体内容

常用的数据类型:
- `int` - 整数,如 10, -5, 0
- `double` - 小数,如 3.14, -0.5
- `String` - 文本,如 "Hello"
- `boolean` - 真假值,只有 true 或 false

## 📝 定义和输出变量

```java{3-6,9}
public class BasicSyntax {
    public static void main(String[] args) {
        // 定义变量
        int age = 25;
        double price = 19.99;
        String name = "Alice";
        
        // 输出变量
        System.out.println(age);
        System.out.println(price);
        System.out.println(name);
    }
}
```

**运行结果:**
```
25
19.99
Alice
```

::: tip 变量命名建议
变量名要有意义,看到名字就知道存的是什么。比如 `age` 比 `a` 更容易理解。
:::

## 💡 基本运算(Basic Operations)

Java 支持常见的数学运算:
- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法

```java{3-4,7-10}
public class Calculate {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        // 四则运算
        System.out.println(a + b);  // 加法
        System.out.println(a - b);  // 减法
        System.out.println(a * b);  // 乘法
        System.out.println(a / b);  // 除法
    }
}
```

**运行结果:**
```
13
7
30
3
```

::: warning 除法的特殊情况
两个整数相除,结果也是整数,小数部分会被舍弃。`10 / 3` 的结果是 `3` 而不是 `3.333...`
:::

如果需要保留小数,至少有一个数要是 `double` 类型:

```java{3}
public class Division {
    public static void main(String[] args) {
        System.out.println(10.0 / 3);  // 结果: 3.3333333333333335
    }
}
```

## 💡 注释(Comment)

**注释(Comment)** 是写给人看的说明文字,程序运行时会被忽略。

两种注释方式:
- **单行注释** - 用 `//` 开头
- **多行注释** - 用 `/*` 开始,`*/` 结束

```java{3,6-9}
public class Comments {
    public static void main(String[] args) {
        // 这是单行注释,用来解释下面这行代码的作用
        int score = 95;
        
        /*
         * 这是多行注释
         * 可以写很多行说明
         */
        System.out.println(score);
    }
}
```

::: tip 什么时候需要注释
当代码的目的不够明显时,就需要注释。但不要为显而易见的代码写注释。
:::

## 💡 日志打印(Print Output)

`System.out.println()` 用来在控制台输出内容。

两种常用的输出方法:
- `println` - 输出后换行
- `print` - 输出后不换行

```java{3-4,7-8}
public class PrintDemo {
    public static void main(String[] args) {
        System.out.println("Hello");  // 输出后换行
        System.out.println("World");
        
        // print 不换行
        System.out.print("Hello");
        System.out.print("World");
    }
}
```

**运行结果:**
```
Hello
World
HelloWorld
```

你还可以在一行中组合文本和变量:

```java{3-4}
public class PrintVariable {
    public static void main(String[] args) {
        String fruit = "apple";
        System.out.println("I like " + fruit);  // 用 + 连接文本和变量
    }
}
```

**运行结果:**
```
I like apple
```

## 💪 练习题

**练习 1**: 定义你的个人信息并输出
```java
// 定义你的姓名、年龄、身高(米)
// 分别输出这三个变量
```

**练习 2**: 计算商品总价
```java
// 一个苹果 5 元,买 3 个
// 一瓶水 3 元,买 2 瓶
// 计算并输出总价
```

**练习 3**: 格式化输出
```java
// 定义变量 city = "Beijing", temperature = 25
// 输出: "今天北京的温度是25度"
```

## 📌 小结

- 变量由 **类型 + 名称 + 值** 组成,用来存储数据
- 使用 `+`、`-`、`*`、`/` 进行基本运算
- 用 `//` 或 `/* */` 添加注释说明代码
- 用 `System.out.println()` 输出内容到控制台