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

当你开始学习 Java 编程时,你需要掌握的第一件事就是如何与计算机"对话"。就像学习一门外语需要先掌握基本的词汇和语法一样,学习 Java 也需要了解它的基本语法规则。这一章会带你了解如何存储数据、显示信息、进行计算,以及如何让代码更容易理解。

## 💡 什么是变量(Variable)

想象一下,你的书桌上有很多抽屉,每个抽屉上都贴着标签,标签上写着里面放的是什么东西——"铅笔"、"橡皮"、"笔记本"。在编程中,**变量(Variable)** 就像这些贴了标签的抽屉,用来存储数据。

变量有三个重要组成部分:
- **数据类型(Data Type)**:说明这个抽屉能放什么类型的东西
- **变量名(Variable Name)**:抽屉上的标签,用来识别这个变量
- **值(Value)**:实际存储的数据

### 常用的数据类型

在 Java 中,最常用的基本数据类型有:

| 数据类型 | 英文名 | 用途 | 示例 |
|---------|--------|------|------|
| **整数** | int | 存储整数 | 10, -5, 0 |
| **小数** | double | 存储带小数点的数字 | 3.14, -0.5 |
| **文本** | String | 存储文字内容 | "Hello", "张三" |
| **布尔值** | boolean | 存储真或假 | true, false |

::: tip 提示
`String` 的首字母是大写的 S,这与其他基本类型不同。这是因为 `String` 在 Java 中是一个类(Class),而不是基本数据类型。现在你只需要记住这个写法即可。
:::

## 📝 定义变量的基本语法

定义一个变量的格式是:

```
数据类型 变量名 = 值;
```

让我们创建一个完整的 Java 程序来演示如何定义变量:

```java
public class BasicSyntax {
    public static void main(String[] args) {
        // 定义一个整数变量 define an integer variable
        int age = 25;
        
        // 定义一个小数变量 define a double variable
        double price = 19.99;
        
        // 定义一个文本变量 define a String variable
        String name = "小明";
        
        // 定义一个布尔值变量 define a boolean variable
        boolean isStudent = true;
    }
}
```

::: warning 注意
- 每条语句结尾必须有分号 `;`
- 变量名不能包含空格,建议使用驼峰命名法(camelCase):第一个单词小写,后续单词首字母大写,如 `studentAge`
- 变量名不能以数字开头,不能使用 Java 的关键字(如 `int`、`class` 等)
:::

### 变量命名的最佳实践

```java
// ✅ 好的命名:见名知意
int studentAge = 20;
double productPrice = 99.5;
String userName = "张三";

// ❌ 不好的命名:无法理解含义
int a = 20;
double p = 99.5;
String s = "张三";
```

## 💬 输出变量

定义了变量之后,你肯定想看看变量里存储的内容是什么。在 Java 中,我们使用 `System.out.println()` 来输出内容到控制台(Console)。

### 基本输出语法

```java
public class PrintExample {
    public static void main(String[] args) {
        // 定义变量 define variables
        int age = 25;
        String name = "小红";
        double height = 165.5;
        
        // 输出变量的值 print variable values
        System.out.println(age);      // 输出:25
        System.out.println(name);     // 输出:小红
        System.out.println(height);   // 输出:165.5
        
        // 输出带说明文字的内容 print with description
        System.out.println("年龄是:" + age);           // 输出:年龄是:25
        System.out.println("姓名是:" + name);          // 输出:姓名是:小红
        System.out.println("身高是:" + height + "厘米"); // 输出:身高是:165.5厘米
    }
}
```

### println 和 print 的区别

```java
public class PrintDifference {
    public static void main(String[] args) {
        // println 会在输出后换行 println adds a new line
        System.out.println("第一行");
        System.out.println("第二行");
        
        // print 不会换行 print does not add a new line
        System.out.print("不换行1 ");
        System.out.print("不换行2 ");
        System.out.println("最后换行");
    }
}
```

输出结果:
```
第一行
第二行
不换行1 不换行2 最后换行
```

::: tip 提示
使用 `+` 符号可以将文字和变量拼接在一起,这个过程叫做 **字符串拼接(String Concatenation)**。
:::

## 🔢 基本运算:加减乘除

现在你已经知道如何存储数据了,接下来让我们学习如何对数据进行计算。Java 支持基本的数学运算。

### 算术运算符(Arithmetic Operators)

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| + | 加法(Addition) | 5 + 3 | 8 |
| - | 减法(Subtraction) | 5 - 3 | 2 |
| * | 乘法(Multiplication) | 5 * 3 | 15 |
| / | 除法(Division) | 6 / 3 | 2 |
| % | 取余(Modulus) | 7 % 3 | 1 |

### 完整计算示例

```java
public class Calculator {
    public static void main(String[] args) {
        // 定义两个数字 define two numbers
        int num1 = 10;
        int num2 = 3;
        
        // 加法运算 addition
        int sum = num1 + num2;
        System.out.println("10 + 3 = " + sum);  // 输出:10 + 3 = 13
        
        // 减法运算 subtraction
        int difference = num1 - num2;
        System.out.println("10 - 3 = " + difference);  // 输出:10 - 3 = 7
        
        // 乘法运算 multiplication
        int product = num1 * num2;
        System.out.println("10 * 3 = " + product);  // 输出:10 * 3 = 30
        
        // 除法运算 division
        int quotient = num1 / num2;
        System.out.println("10 / 3 = " + quotient);  // 输出:10 / 3 = 3
        
        // 取余运算 modulus (获取余数 get remainder)
        int remainder = num1 % num2;
        System.out.println("10 % 3 = " + remainder);  // 输出:10 % 3 = 1
    }
}
```

::: warning 注意:整数除法的陷阱
当两个整数相除时,结果会自动舍去小数部分:
```java
int result1 = 10 / 3;        // 结果是 3,不是 3.333...
double result2 = 10 / 3;     // 结果仍然是 3.0,因为计算时用的是整数

// 要得到小数结果,至少有一个数要是小数类型
double result3 = 10.0 / 3;   // 结果是 3.3333...
double result4 = 10 / 3.0;   // 结果是 3.3333...
```
:::

### 实际应用:计算购物总价

```java
public class ShoppingCart {
    public static void main(String[] args) {
        // 商品信息 product information
        String productName = "Java编程书";
        double unitPrice = 89.5;      // 单价 unit price
        int quantity = 3;             // 数量 quantity
        
        // 计算总价 calculate total price
        double totalPrice = unitPrice * quantity;
        
        // 计算优惠后价格(打9折) calculate discounted price (10% off)
        double discount = 0.9;
        double finalPrice = totalPrice * discount;
        
        // 输出购物信息 print shopping information
        System.out.println("商品名称:" + productName);
        System.out.println("单价:" + unitPrice + "元");
        System.out.println("数量:" + quantity + "本");
        System.out.println("原价:" + totalPrice + "元");
        System.out.println("优惠价:" + finalPrice + "元");
    }
}
```

## 📝 增加注释

你有没有想过,当你一个月后再看自己写的代码时,还能记得每行代码的作用吗?**注释(Comment)** 就像是给未来的自己(或其他人)留的小纸条,用来解释代码的作用。

### 三种注释方式

```java
public class CommentExample {
    public static void main(String[] args) {
        // 1. 单行注释(Single-line Comment):用双斜杠开头
        // 这是一个单行注释,编译器会忽略这一行
        int age = 25;  // 也可以写在代码后面
        
        /* 
         * 2. 多行注释(Multi-line Comment):用斜杠星号包围
         * 这是多行注释的第一行
         * 这是多行注释的第二行
         * 适合写较长的说明
         */
        String name = "小明";
        
        /**
         * 3. 文档注释(Documentation Comment):用于生成API文档
         * 这种注释通常用在类和方法的定义前
         * 
         * @author 作者名
         * @version 1.0
         */
        double price = 99.9;
    }
}
```

### 注释的最佳实践

```java
public class GoodComments {
    public static void main(String[] args) {
        // ✅ 好的注释:解释"为什么"而不是"是什么"
        // 使用9折优惠是因为这是新用户的首次购买折扣
        double discount = 0.9;
        
        // ❌ 不好的注释:重复了代码的意思
        // 定义一个折扣变量
        double discount2 = 0.9;
        
        // ✅ 好的注释:说明复杂的业务逻辑
        // 计算税后价格:原价 * (1 + 13%的增值税率)
        double priceWithTax = 100 * 1.13;
        
        // ✅ 好的注释:标注待办事项
        // TODO: 这里需要添加输入验证逻辑
        int userInput = 10;
    }
}
```

::: tip 提示
- 在英文注释和中文注释混合使用时,英文部分放在后面,如:`// 计算总价 calculate total price`
- 使用注释来暂时"禁用"某些代码,方便调试:
```java
// System.out.println("这行代码被注释掉了,不会执行");
System.out.println("这行代码会正常执行");
```
:::

## 🖨️ 日志打印

在前面我们已经使用了 `System.out.println()` 来输出内容,这其实就是最基础的 **日志打印(Logging)**。日志就像程序运行时的"日记本",记录程序在做什么,方便你了解程序的运行状态和排查问题。

### 常用的输出方法

```java
public class LoggingExample {
    public static void main(String[] args) {
        String username = "小李";
        int loginCount = 5;
        
        // 1. println:输出内容并换行
        System.out.println("用户登录信息:");
        System.out.println("用户名:" + username);
        System.out.println("登录次数:" + loginCount);
        
        System.out.println("---分隔线---");
        
        // 2. print:输出内容不换行
        System.out.print("姓名:");
        System.out.print(username);
        System.out.print(" | ");
        System.out.print("次数:");
        System.out.println(loginCount);  // 最后用println换行
        
        System.out.println("---分隔线---");
        
        // 3. printf:格式化输出(类似C语言)
        System.out.printf("用户 %s 已登录 %d 次\n", username, loginCount);
        // %s 表示字符串占位符, %d 表示整数占位符, \n 表示换行
    }
}
```

输出结果:
```
用户登录信息:
用户名:小李
登录次数:5
---分隔线---
姓名:小李 | 次数:5
---分隔线---
用户 小李 已登录 5 次
```

### 使用 printf 的格式化输出

`printf` 可以让输出更加整齐美观:

```java
public class FormattedOutput {
    public static void main(String[] args) {
        // 商品信息 product information
        String product1 = "笔记本";
        String product2 = "钢笔";
        String product3 = "橡皮";
        
        double price1 = 15.5;
        double price2 = 8.0;
        double price3 = 2.5;
        
        // 使用printf格式化输出表格
        System.out.println("========== 价格表 ==========");
        System.out.printf("%-10s | 价格: %.2f 元\n", product1, price1);
        System.out.printf("%-10s | 价格: %.2f 元\n", product2, price2);
        System.out.printf("%-10s | 价格: %.2f 元\n", product3, price3);
        System.out.println("============================");
        
        // %-10s 表示左对齐的10个字符宽度的字符串
        // %.2f 表示保留2位小数的浮点数
    }
}
```

输出结果:
```
========== 价格表 ==========
笔记本       | 价格: 15.50 元
钢笔        | 价格: 8.00 元
橡皮        | 价格: 2.50 元
============================
```

### 常用的格式化占位符

| 占位符 | 含义 | 示例 |
|--------|------|------|
| %s | 字符串 | `printf("%s", "Hello")` |
| %d | 整数 | `printf("%d", 123)` |
| %f | 浮点数 | `printf("%f", 3.14)` |
| %.2f | 保留2位小数 | `printf("%.2f", 3.14159)` → 3.14 |
| %10s | 占10个字符宽度 | `printf("%10s", "Hi")` → "        Hi" |
| %-10s | 左对齐占10个字符 | `printf("%-10s", "Hi")` → "Hi        " |

## ✅ 验证你的学习成果

现在让我们创建一个完整的程序,把今天学到的所有知识点都用上:

```java
public class LearningVerification {
    public static void main(String[] args) {
        // 第1步:定义变量 Step 1: define variables
        String studentName = "张三";
        int mathScore = 95;
        int englishScore = 88;
        int chineseScore = 92;
        
        // 第2步:进行计算 Step 2: perform calculations
        int totalScore = mathScore + englishScore + chineseScore;
        double averageScore = totalScore / 3.0;  // 注意要用3.0而不是3
        
        // 第3步:输出结果 Step 3: print results
        System.out.println("========== 学生成绩单 ==========");
        System.out.println("学生姓名:" + studentName);
        System.out.println();  // 输出空行
        
        // 使用println输出各科成绩
        System.out.println("数学成绩:" + mathScore + "分");
        System.out.println("英语成绩:" + englishScore + "分");
        System.out.println("语文成绩:" + chineseScore + "分");
        System.out.println("----------------------------");
        
        // 使用printf格式化输出总分和平均分
        System.out.printf("总分:   %d 分\n", totalScore);
        System.out.printf("平均分: %.2f 分\n", averageScore);
        System.out.println("================================");
        
        /* 
         * 这个程序演示了:
         * 1. 如何定义不同类型的变量
         * 2. 如何进行加法和除法运算
         * 3. 如何使用println和printf输出
         * 4. 如何添加注释让代码更清晰
         */
    }
}
```

### 运行步骤

1. 将以上代码保存为 `LearningVerification.java` 文件
2. 打开命令行,进入文件所在目录
3. 编译代码:
```bash
javac LearningVerification.java
```
4. 运行程序:
```bash
java LearningVerification
```

如果成功,你应该看到类似这样的输出:
```
========== 学生成绩单 ==========
学生姓名:张三

数学成绩:95分
英语成绩:88分
语文成绩:92分
----------------------------
总分:   275 分
平均分: 91.67 分
================================
```

::: danger 常见错误排查
如果遇到错误,请检查:
1. ❌ `cannot find symbol`:变量名拼写错误或未定义
2. ❌ `';' expected`:忘记写分号
3. ❌ `class X is public, should be declared in a file named X.java`:类名和文件名不一致
4. ❌ 输出的中文是乱码:确保文件保存为 UTF-8 编码
:::

## 💪 动手练习

### 练习1:个人信息卡片(简单)

创建一个程序,输出你的个人信息:

```java
public class MyProfile {
    public static void main(String[] args) {
        // TODO: 定义以下变量
        // - 姓名(String)
        // - 年龄(int)
        // - 身高(double,单位:厘米)
        // - 是否是学生(boolean)
        
        // TODO: 使用println输出这些信息
        // 提示:可以参考前面"学生成绩单"的格式
    }
}
```

### 练习2:简易计算器(中等)

编写一个程序,计算两个数的四则运算结果:

```java
public class SimpleCalculator {
    public static void main(String[] args) {
        // TODO: 定义两个数字变量
        double number1 = 20;
        double number2 = 4;
        
        // TODO: 计算并输出以下结果
        // - 加法: 20 + 4 = ?
        // - 减法: 20 - 4 = ?
        // - 乘法: 20 * 4 = ?
        // - 除法: 20 / 4 = ?
        
        // 提示:使用 printf("20 + 4 = %.2f\n", result);
    }
}
```

### 练习3:温度转换器(挑战)

创建一个将摄氏温度转换为华氏温度的程序:

```java
public class TemperatureConverter {
    public static void main(String[] args) {
        // 温度转换公式: 华氏度 = 摄氏度 * 1.8 + 32
        
        // TODO: 定义一个摄氏温度变量
        double celsius = 25.0;
        
        // TODO: 计算对应的华氏温度
        
        // TODO: 使用printf输出结果,格式如下:
        // "25.00°C = 77.00°F"
        
        // 额外挑战:同时计算并输出 0°C, 100°C 的华氏温度
    }
}
```

## 📌 本章小结

恭喜你完成了 Java 基本语法的学习!让我们回顾一下关键知识点:

1. **变量(Variable)** 是存储数据的容器,定义格式是:`数据类型 变量名 = 值;`

2. **常用数据类型**:
   - `int` - 整数
   - `double` - 小数
   - `String` - 文本(首字母大写)
   - `boolean` - 布尔值(true/false)

3. **输出方法**:
   - `System.out.println()` - 输出并换行
   - `System.out.print()` - 输出不换行
   - `System.out.printf()` - 格式化输出

4. **算术运算符**: `+`(加) `-`(减) `*`(乘) `/`(除) `%`(取余)

5. **注释方式**:
   - `//` 单行注释
   - `/* ... */` 多行注释
   - `/** ... */` 文档注释

::: tip 下一步建议
- 多练习练习题,熟能生巧
- 尝试修改示例代码,看看会发生什么
- 给代码添加注释,养成良好习惯
- 记住:每个程序员都是从写错代码开始的,不要害怕出错!
:::