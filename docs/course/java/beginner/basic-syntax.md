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

## 变量(Variable)的定义与使用

### 💡 概念讲解

变量就像是一个**带标签的盒子**,用来存储数据。你需要告诉 Java 三件事:
1. 盒子里装什么类型的东西(**数据类型 Data Type**)
2. 盒子叫什么名字(**变量名 Variable Name**)
3. 盒子里放什么(**值 Value**)

### 📝 代码示例

在你的编辑器中创建一个新文件 `BasicSyntax.java`,输入以下代码:

```java
public class BasicSyntax {
    public static void main(String[] args) {
        // 定义一个整数变量
        int age = 25;
        
        // 定义一个小数变量
        double price = 19.99;
        
        // 定义一个文本变量
        String name = "张三";
        
        // 定义一个布尔变量(真/假)
        boolean isStudent = true;
    }
}
```

::: tip 提示
变量定义的格式是:**数据类型 变量名 = 值;** 别忘了结尾的分号`;`
:::

### ✅ 验证方法

在终端运行:
```bash
javac BasicSyntax.java
java BasicSyntax
```

如果没有任何错误提示,说明代码编译成功!虽然暂时看不到输出,但变量已经被创建了。

### 💪 练习题

1. 定义一个变量 `height`,存储你的身高(单位:厘米)
2. 定义一个变量 `city`,存储你所在的城市名称
3. 定义一个变量 `hasDriverLicense`,表示是否有驾照

::: warning 注意
- 变量名不能以数字开头,比如 `1name` 是错误的
- 变量名区分大小写,`age` 和 `Age` 是两个不同的变量
- 文本内容必须用双引号 `"` 包裹
:::

## 输出变量(Print Output)

### 💡 概念讲解

定义变量后,你需要把它们显示出来查看。Java 提供了 `System.out.println()` 方法来输出内容到控制台。

### 📝 代码示例

修改你的 `BasicSyntax.java`:

```java
public class BasicSyntax {
    public static void main(String[] args) {
        int age = 25;
        double price = 19.99;
        String name = "张三";
        boolean isStudent = true;
        
        // 输出变量
        System.out.println(age);
        System.out.println(price);
        System.out.println(name);
        System.out.println(isStudent);
        
        // 输出变量和文字的组合
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age);
    }
}
```

### ✅ 验证方法

运行程序:
```bash
javac BasicSyntax.java
java BasicSyntax
```

你应该看到:
```
25
19.99
张三
true
姓名: 张三
年龄: 25
```

::: tip 提示
- `println` 会在输出后自动换行
- 使用 `+` 可以连接文字和变量
- 如果想输出后不换行,使用 `System.out.print()`
:::

### 💪 练习题

1. 定义变量 `score = 95`,输出 "考试成绩: 95"
2. 定义三个变量存储你的姓、名、年龄,然后输出一句完整的自我介绍
3. 尝试使用 `print()` 代替 `println()`,观察输出的区别

## 基本运算(Basic Operations)

### 💡 概念讲解

Java 可以像计算器一样进行数学运算。主要的**运算符(Operator)**包括:
- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法
- `%` 取余(求余数)

### 📝 代码示例

创建新文件 `Calculator.java`:

```java
public class Calculator {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        // 加法运算
        int sum = a + b;
        System.out.println("10 + 3 = " + sum);
        
        // 减法运算
        int difference = a - b;
        System.out.println("10 - 3 = " + difference);
        
        // 乘法运算
        int product = a * b;
        System.out.println("10 * 3 = " + product);
        
        // 除法运算
        int quotient = a / b;
        System.out.println("10 / 3 = " + quotient);
        
        // 取余运算
        int remainder = a % b;
        System.out.println("10 % 3 = " + remainder);
        
        // 小数除法
        double preciseResult = 10.0 / 3.0;
        System.out.println("10.0 / 3.0 = " + preciseResult);
    }
}
```

### ✅ 验证方法

运行程序:
```bash
javac Calculator.java
java Calculator
```

预期输出:
```
10 + 3 = 13
10 - 3 = 7
10 * 3 = 30
10 / 3 = 3
10 % 3 = 1
10.0 / 3.0 = 3.3333333333333335
```

::: warning 注意
整数除法会**舍弃小数部分**!`10 / 3` 结果是 `3` 而不是 `3.333...`
如果需要保留小数,至少有一个数要是 `double` 类型
:::

### 💪 练习题

1. 计算圆的面积:定义半径 `radius = 5`,计算面积(公式: π × r²,π 取 3.14)
2. 计算购物总价:定义单价 `price = 29.9`,数量 `quantity = 3`,计算总价
3. 判断一个数是否是偶数:定义 `number = 17`,用取余运算判断(偶数除以 2 余数为 0)

::: tip 提示
你可以先用变量存储中间结果,让计算过程更清晰:
```java
double radius = 5.0;
double pi = 3.14;
double area = pi * radius * radius;
System.out.println("面积: " + area);
```
:::

## 注释(Comments)

### 💡 概念讲解

注释是写给人看的说明文字,Java 会完全忽略它们。注释的作用是:
- 解释代码的用途
- 提醒自己或他人注意事项
- 临时禁用某段代码

Java 有三种注释方式:

### 📝 代码示例

```java
public class CommentDemo {
    public static void main(String[] args) {
        // 这是单行注释,用两个斜杠开头
        int age = 25; // 也可以写在代码后面
        
        /*
         * 这是多行注释
         * 可以写多行说明
         * 用于较长的解释
         */
        double salary = 8000.0;
        
        /**
         * 这是文档注释(Javadoc)
         * 通常用于函数或类的说明
         * 可以生成 API 文档
         */
        String name = "李四";
        
        // 下面这行代码被注释掉了,不会执行
        // System.out.println("这行不会输出");
        
        System.out.println("年龄: " + age);
    }
}
```

### ✅ 验证方法

运行程序只会输出:
```
年龄: 25
```

所有注释内容都不会影响程序运行。

::: tip 提示
**好的注释应该解释"为什么"而不是"是什么"**

❌ 不好的注释:
```java
int a = 5; // 定义变量 a 等于 5
```

✅ 好的注释:
```java
int maxRetries = 5; // 网络请求失败时最多重试 5 次
```
:::

### 💪 练习题

1. 为你之前的计算器代码添加注释,解释每个运算的用途
2. 使用多行注释写一段代码说明,包括:作者、日期、功能
3. 注释掉某行输出代码,验证它不会执行

## 日志打印(Logging)

### 💡 概念讲解

除了 `System.out.println()`,Java 还有其他输出方式。了解不同的输出方法可以让你更灵活地调试程序。

### 📝 代码示例

创建 `LoggingDemo.java`:

```java
public class LoggingDemo {
    public static void main(String[] args) {
        String username = "admin";
        int loginAttempts = 3;
        
        // 方式1: println - 输出后换行
        System.out.println("用户登录");
        System.out.println("用户名: " + username);
        
        // 方式2: print - 输出后不换行
        System.out.print("尝试次数: ");
        System.out.print(loginAttempts);
        System.out.println(); // 手动换行
        
        // 方式3: printf - 格式化输出
        System.out.printf("用户 %s 已尝试登录 %d 次\n", username, loginAttempts);
        
        // 方式4: 输出多个变量
        double temperature = 26.5;
        System.out.println("温度: " + temperature + "°C");
        
        // 格式化小数位数
        double pi = 3.1415926;
        System.out.printf("圆周率保留2位小数: %.2f\n", pi);
        
        // 输出错误信息(红色显示)
        System.err.println("警告: 密码即将过期!");
    }
}
```

### ✅ 验证方法

运行程序:
```bash
javac LoggingDemo.java
java LoggingDemo
```

预期输出:
```
用户登录
用户名: admin
尝试次数: 3
用户 admin 已尝试登录 3 次
温度: 26.5°C
圆周率保留2位小数: 3.14
警告: 密码即将过期!
```

::: tip 提示
**printf 格式化占位符**:
- `%s` - 字符串(String)
- `%d` - 整数(Decimal)
- `%f` - 小数(Float)
- `%.2f` - 保留 2 位小数
- `\n` - 换行符
:::

### 💪 练习题

1. 使用 `printf` 输出你的个人信息卡片:
   ```
   姓名: xxx
   年龄: xx 岁
   身高: x.xx 米
   ```
   
2. 创建一个购物小票,使用 `printf` 对齐输出:
   ```
   商品        单价    数量    小计
   苹果        5.50    3      16.50
   ```

3. 尝试输出彩色文本(使用 `System.err.println()`),观察它与普通输出的区别

::: warning 注意
`System.err.println()` 用于输出错误信息,在某些终端会显示为红色。不要用它输出普通信息。
:::

## 📌 本章小结

通过本章学习,你现在应该掌握了:

1. **变量定义**: `数据类型 变量名 = 值;` 四种基本类型 `int`、`double`、`String`、`boolean`

2. **输出方法**: 
   - `println()` - 自动换行
   - `print()` - 不换行
   - `printf()` - 格式化输出

3. **基本运算**: 加 `+`、减 `-`、乘 `*`、除 `/`、取余 `%`

4. **注释规范**: 
   - `//` 单行注释
   - `/* */` 多行注释
   - 注释解释"为什么"而非"是什么"

5. **关键要点**:
   - 每行代码结尾必须有分号 `;`
   - 整数除法会丢失小数部分
   - 变量名要有意义,见名知意
   - 字符串用双引号 `"` 包裹

### 常见错误排查

**错误 1**: `cannot find symbol`
```java
System.out.println(agee); // 变量名拼写错误
```
**解决**: 检查变量名是否正确定义和拼写

**错误 2**: `incompatible types`
```java
int number = "123"; // 类型不匹配
```
**解决**: 确保变量类型和赋值类型一致

**错误 3**: `';' expected`
```java
int age = 25 // 缺少分号
```
**解决**: 每行代码结尾添加分号

现在你已经掌握了 Java 的基本语法,可以开始编写简单的程序了!试着组合这些知识,创建一个计算你每月开销的小程序吧。