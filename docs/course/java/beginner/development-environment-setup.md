---
title: 开发环境搭建
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

欢迎开始 Java 编程的第一步!这一章会带你了解 Java 程序的基本组成部分。你可能会想:"我该如何让计算机做我想做的事?"答案就在这些基础语法中。

不用担心,我们会从最简单的开始——让计算机记住一些信息,然后把它们显示出来。就像你用笔记本记事一样,只不过这次我们用代码来"记事"。

## 💡 什么是变量(Variable)

想象一下,你有一个贴着标签的盒子,盒子里可以放东西。**变量(Variable)**就像这样的盒子:

- **标签**就是变量名,比如 `age`、`name`
- **盒子里的东西**就是变量的值,比如 `25`、`"张三"`
- **盒子的类型**决定了能放什么东西,比如只能放数字的盒子、只能放文字的盒子

::: tip 为什么需要变量?
程序需要处理各种数据(用户输入、计算结果等),变量就是用来临时存储这些数据的"容器"。没有变量,计算机就无法"记住"任何信息!
:::

## 📝 定义变量(Variable Declaration)

在 Java 中,定义变量需要三个部分:**数据类型(Data Type)** + **变量名(Variable Name)** + **初始值(Initial Value)**。

### 常用数据类型

让我们先认识几种最常用的数据类型:

| 数据类型 | 中文名称 | 用途 | 示例 |
|---------|---------|------|------|
| `int` | 整数(Integer) | 存储整数 | `10`, `-5`, `0` |
| `double` | 小数(Double) | 存储带小数点的数字 | `3.14`, `99.9` |
| `String` | 字符串(String) | 存储文字 | `"Hello"`, `"张三"` |
| `boolean` | 布尔值(Boolean) | 存储真/假 | `true`, `false` |

::: warning 注意
`String` 的首字母是大写的 `S`,这是 Java 的特殊规定。其他基本类型都是小写。
:::

### 完整代码示例

创建一个名为 `BasicSyntax.java` 的文件,输入以下代码:

```java
public class BasicSyntax {
    public static void main(String[] args) {
        // 定义整数变量 define integer variable
        int age = 25;
        
        // 定义小数变量 define double variable
        double price = 19.99;
        
        // 定义字符串变量 define string variable
        String name = "Alice";
        
        // 定义布尔变量 define boolean variable
        boolean isStudent = true;
        
        // 你也可以先定义,再赋值 declare first, assign later
        int score;
        score = 95;
    }
}
```

::: tip 代码解读
- `int age = 25;` 表示:创建一个名为 `age` 的整数盒子,里面放数字 `25`
- `String name = "Alice";` 表示:创建一个名为 `name` 的文字盒子,里面放文本 `"Alice"`
- 注意:文字必须用**双引号**包起来,数字不需要
- 每条语句结尾都要有**分号(Semicolon)** `;`
:::

## 📺 输出变量(Print Variables)

定义了变量后,你一定想看看它们的值,对吧?这时候需要用到**日志打印(Logging)**功能。

### System.out.println() 详解

`System.out.println()` 是 Java 中最常用的输出语句,它的作用是把内容显示在控制台(Console)上。

```java
public class PrintExample {
    public static void main(String[] args) {
        // 定义变量 define variables
        int age = 25;
        String name = "Bob";
        double height = 1.75;
        
        // 方法1: 直接打印变量 print variable directly
        System.out.println(age);        // 输出: 25
        System.out.println(name);       // 输出: Bob
        
        // 方法2: 打印带说明的内容 print with description
        System.out.println("年龄是: " + age);           // 输出: 年龄是: 25
        System.out.println("名字是: " + name);          // 输出: 名字是: Bob
        System.out.println("身高是: " + height + "米"); // 输出: 身高是: 1.75米
        
        // 方法3: 打印多个变量 print multiple variables
        System.out.println("姓名: " + name + ", 年龄: " + age);
        // 输出: 姓名: Bob, 年龄: 25
    }
}
```

::: tip 加号的魔法
`+` 在这里不是数学加法,而是**字符串拼接(String Concatenation)**。它把文字和变量的值连接成一句完整的话。比如:
- `"年龄是: " + 25` → `"年龄是: 25"`
- `"Hello " + "World"` → `"Hello World"`
:::

### println() 和 print() 的区别

```java
public class PrintDifference {
    public static void main(String[] args) {
        // println 打印后会换行 print with new line
        System.out.println("第一行");
        System.out.println("第二行");
        // 输出:
        // 第一行
        // 第二行
        
        // print 打印后不换行 print without new line
        System.out.print("A");
        System.out.print("B");
        System.out.print("C");
        // 输出: ABC
    }
}
```

## 🔢 基本运算(Basic Operations)

变量最大的用处就是参与计算。Java 支持我们熟悉的加减乘除运算。

### 数学运算符(Arithmetic Operators)

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| `+` | 加法(Addition) | `5 + 3` | `8` |
| `-` | 减法(Subtraction) | `5 - 3` | `2` |
| `*` | 乘法(Multiplication) | `5 * 3` | `15` |
| `/` | 除法(Division) | `6 / 3` | `2` |
| `%` | 取余(Modulo) | `7 % 3` | `1` |

### 完整运算示例

```java
public class BasicCalculation {
    public static void main(String[] args) {
        // 定义两个数字 define two numbers
        int a = 10;
        int b = 3;
        
        // 加法运算 addition
        int sum = a + b;
        System.out.println("10 + 3 = " + sum);  // 输出: 10 + 3 = 13
        
        // 减法运算 subtraction
        int difference = a - b;
        System.out.println("10 - 3 = " + difference);  // 输出: 10 - 3 = 7
        
        // 乘法运算 multiplication
        int product = a * b;
        System.out.println("10 * 3 = " + product);  // 输出: 10 * 3 = 30
        
        // 除法运算 division
        int quotient = a / b;
        System.out.println("10 / 3 = " + quotient);  // 输出: 10 / 3 = 3 (注意!)
        
        // 取余运算 modulo (求余数)
        int remainder = a % b;
        System.out.println("10 % 3 = " + remainder);  // 输出: 10 % 3 = 1
        
        // 小数除法 division with decimal
        double c = 10.0;
        double d = 3.0;
        double result = c / d;
        System.out.println("10.0 / 3.0 = " + result);  // 输出: 10.0 / 3.0 = 3.333...
    }
}
```

::: warning 整数除法的陷阱
当两个整数相除时,结果会**自动舍去小数部分**:
- `10 / 3` 结果是 `3`,而不是 `3.333...`
- 如果需要小数结果,至少要有一个数是 `double` 类型
- `10.0 / 3` 或 `10 / 3.0` 才会得到 `3.333...`
:::

### 复合运算和运算顺序

```java
public class ComplexCalculation {
    public static void main(String[] args) {
        // 运算顺序: 先乘除,后加减 order of operations
        int result1 = 2 + 3 * 4;
        System.out.println("2 + 3 * 4 = " + result1);  // 输出: 14 (不是20!)
        
        // 使用括号改变顺序 use parentheses to change order
        int result2 = (2 + 3) * 4;
        System.out.println("(2 + 3) * 4 = " + result2);  // 输出: 20
        
        // 计算平均分 calculate average score
        int math = 85;
        int english = 90;
        int science = 88;
        double average = (math + english + science) / 3.0;
        System.out.println("平均分: " + average);  // 输出: 平均分: 87.666...
    }
}
```

## 📝 添加注释(Comments)

你有没有想过:写完代码后,过几天再看,会不会忘记这段代码是干什么的?**注释(Comment)**就是用来解决这个问题的。

注释是写给人看的说明文字,程序运行时会**完全忽略**注释内容。

### 三种注释方式

```java
public class CommentExample {
    public static void main(String[] args) {
        // 单行注释: 用两个斜杠开头 single-line comment
        // 适合简短说明
        int age = 25;  // 也可以写在代码后面
        
        /*
         * 多行注释: 用斜杠星号包围 multi-line comment
         * 适合较长的说明
         * 可以写很多行
         */
        String name = "Charlie";
        
        /**
         * 文档注释: 用于生成 API 文档 documentation comment
         * 通常用在类或方法前面
         * @param 参数说明
         * @return 返回值说明
         */
        System.out.println("Hello");
    }
}
```

::: tip 好注释的标准
- ✅ 解释"为什么"这样写,而不是"写了什么"(代码本身已经说明了写了什么)
- ✅ 标注复杂逻辑的思路
- ✅ 警告特殊情况或容易出错的地方
- ❌ 避免写无意义的注释,如 `int a = 1; // 定义变量a`
:::

### 实用注释示例

```java
public class PracticalComments {
    public static void main(String[] args) {
        // 商品原价 original price
        double price = 99.0;
        
        // 折扣: 0.8表示8折 discount: 0.8 means 20% off
        double discount = 0.8;
        
        // 计算折后价 calculate discounted price
        double finalPrice = price * discount;
        
        // 注意: 这里四舍五入到两位小数 round to 2 decimal places
        System.out.println("最终价格: " + finalPrice);
        
        // TODO: 将来需要添加会员额外折扣功能 add member discount feature
    }
}
```

## 📋 日志打印进阶(Advanced Logging)

除了基础的 `println()`,我们还可以用更灵活的方式输出信息。

### 格式化输出(Formatted Output)

```java
public class FormattedPrint {
    public static void main(String[] args) {
        String name = "David";
        int age = 28;
        double salary = 8500.50;
        
        // 方法1: 使用 printf 进行格式化 formatted print
        // %s = 字符串, %d = 整数, %.2f = 保留2位小数
        System.out.printf("姓名: %s, 年龄: %d, 工资: %.2f元%n", name, age, salary);
        // 输出: 姓名: David, 年龄: 28, 工资: 8500.50元
        
        // 方法2: 使用 String.format 创建格式化字符串 create formatted string
        String info = String.format("员工 %s (年龄%d岁) 的月薪是 %.2f 元", name, age, salary);
        System.out.println(info);
        // 输出: 员工 David (年龄28岁) 的月薪是 8500.50 元
        
        // 实用示例: 打印表格 print table
        System.out.println("=== 员工信息表 ===");
        System.out.printf("%-10s %-5s %-10s%n", "姓名", "年龄", "工资");
        System.out.printf("%-10s %-5d %-10.2f%n", "Alice", 25, 7500.00);
        System.out.printf("%-10s %-5d %-10.2f%n", "Bob", 30, 9200.50);
        System.out.printf("%-10s %-5d %-10.2f%n", "Charlie", 28, 8500.75);
    }
}
```

::: tip 格式化符号说明
- `%s` - 字符串(String)
- `%d` - 整数(Integer)
- `%f` - 浮点数(Float/Double)
- `%.2f` - 保留2位小数的浮点数
- `%n` - 换行符(推荐用这个而不是 `\n`)
- `%-10s` - 左对齐,占10个字符宽度
:::

## ✅ 验证方法

让我们创建一个完整的程序来测试所有学到的知识:

创建 `BasicSyntaxTest.java` 文件:

```java
public class BasicSyntaxTest {
    public static void main(String[] args) {
        // 第1步: 定义变量 step 1: define variables
        int quantity = 5;
        double unitPrice = 29.9;
        String productName = "Java编程书";
        
        // 第2步: 计算总价 step 2: calculate total price
        double totalPrice = quantity * unitPrice;
        
        // 第3步: 输出信息 step 3: print information
        System.out.println("========== 购物清单 ==========");
        System.out.println("商品名称: " + productName);
        System.out.println("单价: " + unitPrice + "元");
        System.out.println("数量: " + quantity + "本");
        System.out.println("总价: " + totalPrice + "元");
        
        // 第4步: 计算折扣 step 4: calculate discount
        double discount = 0.85;  // 85折
        double finalPrice = totalPrice * discount;
        double saved = totalPrice - finalPrice;
        
        System.out.println("---------- 优惠信息 ----------");
        System.out.printf("折扣: %.0f折%n", discount * 10);
        System.out.printf("优惠后价格: %.2f元%n", finalPrice);
        System.out.printf("您节省了: %.2f元%n", saved);
        System.out.println("==============================");
    }
}
```

### 运行步骤

**Windows 系统:**

```bash
# 编译 compile
javac BasicSyntaxTest.java

# 运行 run
java BasicSyntaxTest
```

**macOS/Linux 系统:**

```bash
# 编译 compile
javac BasicSyntaxTest.java

# 运行 run
java BasicSyntaxTest
```

### 预期输出

如果一切正常,你会看到:

```
========== 购物清单 ==========
商品名称: Java编程书
单价: 29.9元
数量: 5本
总价: 149.5元
---------- 优惠信息 ----------
折扣: 9折
优惠后价格: 127.08元
您节省了: 22.43元
==============================
```

::: danger 常见错误
1. **忘记分号**: `int age = 25` → 错误! 应该是 `int age = 25;`
2. **字符串没有双引号**: `String name = Alice;` → 错误! 应该是 `String name = "Alice";`
3. **变量名拼写错误**: 定义了 `int age`,却使用 `int agee` → 变量名必须完全一致
4. **文件名与类名不一致**: 类名是 `BasicSyntax`,文件名却是 `basic.java` → 必须是 `BasicSyntax.java`
:::

## 💪 练习题

### 练习1: 个人信息卡(初级)

创建一个程序,输出你的个人信息:

```java
public class MyInfo {
    public static void main(String[] args) {
        // TODO: 定义以下变量
        // 1. 你的名字 (String)
        // 2. 你的年龄 (int)
        // 3. 你的身高(米) (double)
        // 4. 是否是学生 (boolean)
        
        // TODO: 用 println 输出所有信息
        // 格式: 姓名: xxx, 年龄: xx岁, 身高: x.xxm, 学生: true/false
    }
}
```

**期望输出示例:**
```
姓名: 张三, 年龄: 20岁, 身高: 1.75m, 学生: true
```

### 练习2: 简易计算器(中级)

编写一个程序,计算两个数字的所有运算结果:

```java
public class Calculator {
    public static void main(String[] args) {
        // TODO: 定义两个数字变量
        int num1 = 20;
        int num2 = 7;
        
        // TODO: 分别计算并输出:
        // 1. num1 + num2
        // 2. num1 - num2
        // 3. num1 * num2
        // 4. num1 / num2 (注意小数问题)
        // 5. num1 % num2
        
        // 提示: 使用 printf 让输出更整齐
    }
}
```

**期望输出示例:**
```
20 + 7 = 27
20 - 7 = 13
20 * 7 = 140
20 / 7 = 2.857142857142857
20 % 7 = 6
```

### 练习3: 成绩报告(高级)

创建一个学生成绩报告程序:

```java
public class GradeReport {
    public static void main(String[] args) {
        // TODO: 定义变量
        // 1. 学生姓名
        // 2. 三门课的成绩 (数学、语文、英语)
        
        // TODO: 计算
        // 1. 总分
        // 2. 平均分 (保留2位小数)
        
        // TODO: 输出
        // 用 printf 输出一个格式化的成绩单
        // 要求: 对齐、美观、包含所有信息
    }
}
```

**期望输出示例:**
```
========== 成绩单 ==========
姓名: 李四
------------------------
数学:    85分
语文:    92分
英语:    88分
------------------------
总分:    265分
平均分:  88.33分
========================
```

::: tip 练习提示
- 练习1 重点练习变量定义和基础输出
- 练习2 重点练习数学运算和注意整数除法问题
- 练习3 综合运用所有知识,注重输出格式的美观
:::

## 📌 本章小结

恭喜你完成了 Java 基础语法的学习!让我们回顾一下核心知识点:

### 关键概念

1. **变量(Variable)** 是存储数据的容器,需要指定类型:
   - `int` - 整数
   - `double` - 小数
   - `String` - 文字
   - `boolean` - 真/假

2. **输出语句(Print Statements)**:
   - `System.out.println()` - 打印后换行
   - `System.out.print()` - 打印后不换行
   - `System.out.printf()` - 格式化打印

3. **基本运算(Basic Operations)**:
   - `+` 加、`-` 减、`*` 乘、`/` 除、`%` 取余
   - 注意整数除法会丢失小数部分
   - 运算顺序:先乘除,后加减,括号优先

4. **注释(Comments)**:
   - `//` 单行注释
   - `/* */` 多行注释
   - 注释是给人看的,程序运行时会忽略

5. **语法规则**:
   - 每条语句以分号 `;` 结尾
   - 字符串必须用双引号 `"` 包围
   - 变量名要见名知意,不能用中文
   - 文件名必须与 `public class` 名称一致

### 下一步建议

完成本章后,建议你:

1. 把所有示例代码亲自敲一遍(不要复制粘贴!)
2. 完成三道练习题
3. 尝试修改示例代码,观察结果变化
4. 思考:如何用这些知识解决生活中的小问题?

记住:编程是一项**实践技能**,看懂不等于会用,只有动手写才能真正掌握!