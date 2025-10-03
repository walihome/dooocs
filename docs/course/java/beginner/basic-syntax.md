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

**变量(Variable)** 就像一个贴了标签的盒子,用来存储数据。你需要先告诉 Java 这个盒子能装什么类型的东西,然后给它起个名字。

Java 中常用的数据类型:
- `int` - 整数(Integer),如 10, -5, 0
- `double` - 小数(Double),如 3.14, -0.5
- `String` - 文本(String),如 "Hello", "你好"
- `boolean` - 布尔值(Boolean),只有 `true` 或 `false`

## 📝 定义和输出变量

```java{3-6,9-12}
public class BasicSyntax {
    public static void main(String[] args) {
        // 定义变量
        int age = 25;
        double price = 19.99;
        String name = "张三";
        boolean isStudent = true;
        
        // 输出变量
        System.out.println(age);
        System.out.println(price);
        System.out.println(name);
        System.out.println(isStudent);
    }
}
```

**运行结果:**
```
25
19.99
张三
true
```

::: tip 变量命名规则
- 只能包含字母、数字、下划线、美元符号
- 不能以数字开头
- 建议使用有意义的英文单词,如 `userName` 而不是 `a`
:::

## 💡 注释(Comment)

**注释(Comment)** 是写给人看的说明文字,程序运行时会被忽略。

```java{2,5-8,11}
public class CommentDemo {
    // 这是单行注释,用两个斜杠开头
    
    public static void main(String[] args) {
        /*
         * 这是多行注释
         * 可以写很多行说明
         */
        int score = 95;  // 也可以在代码后面加注释
        
        System.out.println(score);  // 输出: 95
    }
}
```

::: warning 注意
注释不要写太多,代码本身应该足够清晰。注释应该解释"为什么这样做",而不是重复代码在做什么。
:::

## 💡 日志打印(Print)

Java 提供了三种常用的输出方式:

```java{3,6,9}
public class PrintDemo {
    public static void main(String[] args) {
        System.out.println("Hello");  // 输出后换行
        System.out.println("World");
        
        System.out.print("Hello");    // 输出后不换行
        System.out.print("World");
        
        System.out.printf("我是 %s, 今年 %d 岁", "李四", 20);  // 格式化输出
    }
}
```

**运行结果:**
```
Hello
World
HelloWorld
我是 李四, 今年 20 岁
```

### 格式化输出占位符

`printf` 中的占位符:
- `%s` - 字符串(String)
- `%d` - 整数(Decimal)
- `%f` - 小数(Float)
- `%.2f` - 保留 2 位小数

```java{4}
public class FormatDemo {
    public static void main(String[] args) {
        double total = 123.456;
        System.out.printf("总价: %.2f 元", total);  // 输出: 总价: 123.46 元
    }
}
```

## 💪 练习题

### 练习 1: 个人信息卡

定义变量存储你的姓名、年龄、身高(米),然后输出这些信息。

::: details 查看答案
```java
public class Exercise1 {
    public static void main(String[] args) {
        String name = "王五";
        int age = 22;
        double height = 1.75;
        
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age);
        System.out.println("身高: " + height + " 米");
    }
}
```
:::

### 练习 2: 购物小票

使用 `printf` 输出一个商品的信息:商品名称、数量、单价、总价(保留 2 位小数)。

::: details 查看答案
```java
public class Exercise2 {
    public static void main(String[] args) {
        String product = "苹果";
        int quantity = 5;
        double unitPrice = 3.5;
        double total = quantity * unitPrice;
        
        System.out.printf("商品: %s\n", product);
        System.out.printf("数量: %d\n", quantity);
        System.out.printf("单价: %.2f 元\n", unitPrice);
        System.out.printf("总价: %.2f 元\n", total);
    }
}
```
:::

## 📌 小结

- **变量** = 类型 + 名称 + 值,如 `int age = 25;`
- 使用 `//` 或 `/* */` 添加**注释**说明代码
- `println` 输出后换行,`print` 不换行,`printf` 用于格式化输出