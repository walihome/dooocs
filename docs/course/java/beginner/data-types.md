---
title: 数据类型
category: Java
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 数据类型

## 💡 概念说明(Concept)

在 Java 中，**数据类型(Data Type)** 告诉计算机如何存储和处理数据。就像现实生活中，我们用不同的容器装不同的东西——用杯子装水,用盒子装糖果。

Java 有四种最常用的基本数据类型:

- **int** - 存储整数(没有小数点的数字)
- **double** - 存储浮点数(带小数点的数字)
- **String** - 存储文本(字符串)
- **boolean** - 存储真/假值

## 📝 整数类型(Integer)

整数类型用 `int` 表示,可以存储正数、负数和零。

```java{1,2,3,5}
public class IntegerDemo {
    public static void main(String[] args) {
        int age = 18;
        int temperature = -5;
        int score = 0;
        
        System.out.println("年龄: " + age);
        System.out.println("温度: " + temperature);
        System.out.println("分数: " + score);
    }
}
```

**运行结果:**
```
年龄: 18
温度: -5
分数: 0
```

::: tip 提示
`int` 可以存储的数字范围是 -2,147,483,648 到 2,147,483,647
:::

## 📝 浮点数类型(Floating Point)

浮点数类型用 `double` 表示,用于存储带小数的数字。

```java{3,4,5}
public class DoubleDemo {
    public static void main(String[] args) {
        double price = 19.99;
        double pi = 3.14159;
        double temperature = -5.5;
        
        System.out.println("价格: " + price);
        System.out.println("圆周率: " + pi);
        System.out.println("温度: " + temperature);
    }
}
```

**运行结果:**
```
价格: 19.99
圆周率: 3.14159
温度: -5.5
```

::: warning 注意
小数点用英文的点 `.` 而不是中文的点 `。`
:::

## 📝 字符串类型(String)

字符串用 `String` 表示,用于存储文本内容。文本内容必须用双引号 `"` 包裹。

```java{3,4,5}
public class StringDemo {
    public static void main(String[] args) {
        String name = "张三";
        String greeting = "Hello World";
        String empty = "";
        
        System.out.println(name);
        System.out.println(greeting);
        System.out.println("空字符串长度: " + empty.length());
    }
}
```

**运行结果:**
```
张三
Hello World
空字符串长度: 0
```

::: tip 提示
- `String` 的首字母是大写的 `S`
- 字符串可以包含中文、英文、数字、符号
- 空字符串 `""` 表示没有任何内容
:::

## 📝 布尔类型(Boolean)

布尔类型用 `boolean` 表示,只有两个值: `true`(真) 或 `false`(假)。

```java{3,4}
public class BooleanDemo {
    public static void main(String[] args) {
        boolean isStudent = true;
        boolean hasLicense = false;
        
        System.out.println("是学生: " + isStudent);
        System.out.println("有驾照: " + hasLicense);
    }
}
```

**运行结果:**
```
是学生: true
有驾照: false
```

::: tip 提示
`true` 和 `false` 是关键字,不需要加引号
:::

## 💪 练习题(Exercise)

### 练习 1: 个人信息卡
创建一个程序,存储并打印你的个人信息:

```java
public class PersonalInfo {
    public static void main(String[] args) {
        // 在这里定义变量
        // String name = ?
        // int age = ?
        // double height = ?
        // boolean isStudent = ?
        
        // 打印信息
    }
}
```

### 练习 2: 简单计算
创建一个程序,计算两个数字的和:

```java
public class Calculator {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        // 计算 num1 + num2 的和,存储在变量 sum 中
        // 打印结果
    }
}
}
```

### 练习 3: 价格计算
一件商品原价 99.9 元,打 8 折后是多少钱?

```java
public class PriceCalculator {
    public static void main(String[] args) {
        double originalPrice = 99.9;
        // 计算打折后的价格
        // 提示: 8折 = 0.8
    }
}
```

## 📌 小结(Key Points)

1. **int** 用于存储整数,如: `int age = 18;`
2. **double** 用于存储小数,如: `double price = 19.99;`
3. **String** 用于存储文本,记得用双引号,如: `String name = "张三";`
4. **boolean** 只有 `true` 和 `false` 两个值