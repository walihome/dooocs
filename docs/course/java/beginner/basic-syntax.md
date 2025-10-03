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

你好!欢迎来到 Java 编程的世界。这一章,我们将学习 Java 编程最基础的语法。就像学习一门外语需要先掌握基本的单词和句式,学习编程也需要先了解如何"说话"——如何让计算机理解你的意图。

::: tip 学习目标
读完本章后,你将能够:
- 创建和使用**变量(Variable)** 来存储数据
- 使用 `System.out.println()` 输出内容到控制台
- 进行基本的数学运算
- 为代码添加注释,让代码更易读
- 使用日志打印来调试程序
:::

## 💡 什么是变量(Variable)

想象一下,你的书桌上有很多抽屉,每个抽屉上都贴着标签(比如"文具"、"书本"、"零食"),你可以把东西放进去,也可以随时拿出来查看或更换。

在编程中,**变量(Variable)** 就像这些带标签的抽屉:
- **变量名**就是抽屉上的标签
- **变量的值**就是抽屉里存放的东西
- **数据类型(Data Type)** 规定了这个抽屉能放什么类型的东西

### 📝 定义变量的基本语法

在 Java 中,定义一个变量的格式是:

```
数据类型 变量名 = 值;
```

让我们看几个实际的例子:

```java
public class BasicSyntax {
    public static void main(String[] args) {
        // 定义一个整数变量 define an integer variable
        int age = 25;
        
        // 定义一个小数变量 define a decimal variable
        double price = 19.99;
        
        // 定义一个文本变量 define a text variable
        String name = "张三";
        
        // 定义一个布尔变量(真或假) define a boolean variable
        boolean isStudent = true;
    }
}
```

::: warning 注意
- 每行代码结束时必须有分号 `;`
- 变量名要有意义,比如 `age` 比 `a` 更容易理解
- Java 区分大小写,`Age` 和 `age` 是两个不同的变量
:::

### 🔢 常用的数据类型

| 数据类型(Data Type) | 中文说明 | 示例 | 用途 |
|-------------------|---------|------|------|
| `int` | 整数 | `100`, `-50` | 存储年龄、数量等整数 |
| `double` | 小数 | `3.14`, `99.99` | 存储价格、成绩等带小数的数字 |
| `String` | 字符串 | `"Hello"`, `"张三"` | 存储文字、姓名等 |
| `boolean` | 布尔值 | `true`, `false` | 存储是/否、真/假 |

::: tip 为什么需要不同的数据类型?
就像抽屉有大小之分,不同类型的数据占用的内存空间不同。使用合适的类型可以让程序运行更高效。比如存储年龄用 `int` 就够了,不需要用 `double`。
:::

## 📺 输出变量到控制台

定义了变量后,我们需要能看到它们的值。这就要用到 **输出语句(Output Statement)**。

### 📝 使用 System.out.println()

`System.out.println()` 就像一个"显示器",可以把内容显示在控制台上:

```java
public class OutputExample {
    public static void main(String[] args) {
        // 定义变量 define variables
        int age = 25;
        double height = 175.5;
        String name = "李明";
        boolean isAdult = true;
        
        // 输出变量 output variables
        System.out.println(age);      // 输出: 25
        System.out.println(height);   // 输出: 175.5
        System.out.println(name);     // 输出: 李明
        System.out.println(isAdult);  // 输出: true
        
        // 输出带说明的内容 output with description
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age + " 岁");
        System.out.println("身高: " + height + " cm");
    }
}
```

### ✅ 验证方法

1. 将上面的代码保存为 `OutputExample.java`
2. 在命令行中编译和运行:

```bash
javac OutputExample.java
java OutputExample
```

3. 如果成功,你会看到:

```
25
175.5
李明
true
姓名: 李明
年龄: 25 岁
身高: 175.5 cm
```

::: tip println 和 print 的区别
- `System.out.println()` - 输出后会换行
- `System.out.print()` - 输出后不换行

试试把上面代码中的 `println` 改成 `print`,看看有什么不同!
:::

## 🧮 基本运算操作

编程中经常需要进行计算。Java 支持所有基本的数学运算。

### 📝 算术运算符(Arithmetic Operators)

```java
public class Calculator {
    public static void main(String[] args) {
        // 定义两个数字 define two numbers
        int a = 10;
        int b = 3;
        
        // 加法 addition
        int sum = a + b;
        System.out.println("加法: " + a + " + " + b + " = " + sum);
        
        // 减法 subtraction
        int difference = a - b;
        System.out.println("减法: " + a + " - " + b + " = " + difference);
        
        // 乘法 multiplication
        int product = a * b;
        System.out.println("乘法: " + a + " * " + b + " = " + product);
        
        // 除法 division
        int quotient = a / b;
        System.out.println("除法: " + a + " / " + b + " = " + quotient);
        
        // 取余(求余数) modulus
        int remainder = a % b;
        System.out.println("取余: " + a + " % " + b + " = " + remainder);
    }
}
```

**运行结果:**
```
加法: 10 + 3 = 13
减法: 10 - 3 = 7
乘法: 10 * 3 = 30
除法: 10 / 3 = 3
取余: 10 % 3 = 1
```

::: warning 整数除法的陷阱
你有没有注意到,`10 / 3` 的结果是 `3` 而不是 `3.333...`? 

这是因为两个 `int` 类型相除,结果也是 `int`,会**舍弃小数部分(Truncation)**。

如果想得到精确的小数结果,要使用 `double` 类型:

```java
double a = 10.0;
double b = 3.0;
double result = a / b;  // 结果是 3.3333333333333335
```
:::

### 📝 更实用的计算示例

让我们做一个简单的购物计算器:

```java
public class ShoppingCart {
    public static void main(String[] args) {
        // 商品价格 product prices
        double applePrice = 5.5;
        double bananaPrice = 3.2;
        
        // 购买数量 quantities
        int appleCount = 3;
        int bananaCount = 5;
        
        // 计算小计 calculate subtotals
        double appleTotal = applePrice * appleCount;
        double bananaTotal = bananaPrice * bananaCount;
        
        // 计算总价 calculate total
        double total = appleTotal + bananaTotal;
        
        // 输出结果 output results
        System.out.println("苹果: " + appleCount + " 个 × " + applePrice + " 元 = " + appleTotal + " 元");
        System.out.println("香蕉: " + bananaCount + " 个 × " + bananaPrice + " 元 = " + bananaTotal + " 元");
        System.out.println("总价: " + total + " 元");
    }
}
```

## 💬 添加注释(Comments)

你有没有想过,一个月后重新看自己写的代码,还能记得每行是做什么的吗?**注释(Comment)** 就是给代码写"说明书"。

### 📝 三种注释方式

```java
public class CommentExample {
    public static void main(String[] args) {
        // 1. 单行注释 single-line comment
        // 这是一条单行注释,用于简短的说明
        int age = 18;
        
        /* 
         * 2. 多行注释 multi-line comment
         * 这是多行注释
         * 可以写很多行
         * 适合写较长的说明
         */
        double price = 99.99;
        
        /**
         * 3. 文档注释 documentation comment
         * 这种注释可以生成 API 文档
         * 通常用于说明类或方法的功能
         * @author 你的名字
         * @version 1.0
         */
        String productName = "Java 入门教程";
        
        System.out.println(age);  // 这里也可以写注释
    }
}
```

::: tip 良好的注释习惯
- ✅ **解释"为什么"**,而不是"是什么"
  - 好的注释: `// 打折促销,所以价格减半`
  - 不好的注释: `// 价格除以2`
- ✅ 复杂的逻辑一定要加注释
- ✅ 注释要及时更新,过时的注释比没注释更糟糕
- ❌ 不要为显而易见的代码加注释
:::

## 📋 日志打印(Logging)

除了 `System.out.println()`,专业的程序开发还会用到**日志系统(Logging System)**。但对于初学者,我们先掌握一些实用的打印技巧。

### 📝 调试打印技巧

```java
public class DebugPrinting {
    public static void main(String[] args) {
        // 1. 打印变量名和值 print variable name and value
        int score = 85;
        System.out.println("score = " + score);
        
        // 2. 打印多个变量 print multiple variables
        String name = "王芳";
        int age = 20;
        System.out.println("name = " + name + ", age = " + age);
        
        // 3. 打印分隔线,让输出更清晰 print separators
        System.out.println("========== 开始计算 ==========");
        int result = 100 + 200;
        System.out.println("result = " + result);
        System.out.println("========== 计算结束 ==========");
        
        // 4. 使用 printf 格式化输出 formatted output
        double price = 19.5;
        System.out.printf("商品价格: %.2f 元\n", price);  // 保留2位小数
        
        // 5. 打印数据类型 print data type
        System.out.println("score 的类型是 int");
        System.out.println("name 的类型是 String");
    }
}
```

**运行结果:**
```
score = 85
name = 王芳, age = 20
========== 开始计算 ==========
result = 300
========== 计算结束 ==========
商品价格: 19.50 元
score 的类型是 int
name 的类型是 String
```

::: tip printf 的格式化符号
- `%d` - 整数
- `%f` - 小数
- `%.2f` - 保留2位小数的小数
- `%s` - 字符串
- `\n` - 换行

示例:
```java
System.out.printf("姓名: %s, 年龄: %d, 成绩: %.1f\n", "李华", 18, 95.5);
```
:::

## 💪 综合练习

现在,让我们把所有学到的知识结合起来!

### 练习 1: 个人信息卡片

创建一个程序,显示你的个人信息:

```java
public class PersonalInfo {
    public static void main(String[] args) {
        // TODO: 定义以下变量
        // 1. 姓名(String)
        // 2. 年龄(int)
        // 3. 身高(double,单位cm)
        // 4. 是否是学生(boolean)
        
        // TODO: 输出所有信息,格式如下:
        // ========== 个人信息 ==========
        // 姓名: xxx
        // 年龄: xx 岁
        // 身高: xxx.x cm
        // 学生身份: true/false
        // ============================
    }
}
```

### 练习 2: 简单计算器

编写一个程序,计算一家餐厅的账单:

```java
public class RestaurantBill {
    public static void main(String[] args) {
        // TODO: 完成以下任务
        // 1. 定义三道菜的价格(double)
        // 2. 计算小计
        // 3. 计算10%的服务费
        // 4. 计算总金额
        // 5. 假设你给了200元,计算找零
        // 6. 输出详细的账单信息
        
        // 提示: 服务费 = 小计 * 0.1
        // 提示: 找零 = 支付金额 - 总金额
    }
}
```

### 练习 3: 温度转换

编写一个程序,将摄氏温度转换为华氏温度:

```java
public class TemperatureConverter {
    public static void main(String[] args) {
        // TODO: 完成温度转换
        // 1. 定义一个摄氏温度变量 celsius = 25.0
        // 2. 使用公式计算华氏温度: fahrenheit = celsius * 9 / 5 + 32
        // 3. 输出结果: "25.0°C = xx.x°F"
        
        // 提示: 确保使用 double 类型,避免整数除法问题
    }
}
```

::: tip 练习提示
- 先在纸上写出解题思路
- 每完成一小步就运行一次,确保没有错误
- 善用 `System.out.println()` 查看中间结果
- 遇到问题时,检查是否忘记了分号或拼写错误
:::

## 📌 本章小结

恭喜你!你已经掌握了 Java 编程的基础语法。让我们回顾一下关键要点:

1. **变量(Variable)** 是存储数据的容器,定义格式为 `类型 变量名 = 值;`

2. **数据类型(Data Type)** 要根据数据的特点选择:
   - `int` - 整数
   - `double` - 小数
   - `String` - 文本
   - `boolean` - 真/假

3. **输出语句** 使用 `System.out.println()` 显示内容到控制台

4. **算术运算** 包括 `+`(加)、`-`(减)、`*`(乘)、`/`(除)、`%`(取余)

5. **注释(Comment)** 是代码的说明书:
   - `//` 单行注释
   - `/* */` 多行注释
   - `/** */` 文档注释

6. **调试打印** 帮助你理解程序的运行过程

::: danger 常见错误提醒
- ❌ 忘记分号 `;` 结束语句
- ❌ 变量名拼写错误或大小写不一致
- ❌ `String` 的值忘记加双引号 `""`
- ❌ 整数除法丢失小数部分
- ❌ 使用未定义的变量
:::

现在,你已经具备了编写简单 Java 程序的能力。在继续学习之前,务必完成上面的练习题,确保真正理解这些基础概念。编程是一门"手艺",只有多动手练习才能真正掌握!