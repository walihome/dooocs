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

在 Java 中，每个**变量(Variable)** 都需要指定**数据类型(Data Type)**。你可以把数据类型理解为"容器的规格"——不同的数据需要不同的容器来存放。

## 整数类型(Integer Types)

### 💡 概念讲解

**整数(Integer)** 就是没有小数点的数字，比如 1、-5、100。在 Java 中，最常用的整数类型是 `int`。

### 📝 代码示例

创建一个名为 `IntegerDemo.java` 的文件：

```java
public class IntegerDemo {
    public static void main(String[] args) {
        // 声明一个整数变量
        int age = 25;
        
        // 可以进行数学运算
        int score = 80 + 15;
        
        // 负数也是整数
        int temperature = -5;
        
        // 打印这些变量
        System.out.println("年龄: " + age);
        System.out.println("分数: " + score);
        System.out.println("温度: " + temperature);
        
        // 整数运算
        int a = 10;
        int b = 3;
        System.out.println("10 + 3 = " + (a + b));
        System.out.println("10 - 3 = " + (a - b));
        System.out.println("10 * 3 = " + (a * b));
        System.out.println("10 / 3 = " + (a / b));  // 注意：结果是 3,不是 3.333...
    }
}
```

### ✅ 验证方法

运行程序：

```bash
javac IntegerDemo.java
java IntegerDemo
```

你应该看到：

```
年龄: 25
分数: 95
温度: -5
10 + 3 = 13
10 - 3 = 7
10 * 3 = 30
10 / 3 = 3
```

::: warning 注意
整数相除的结果还是整数！`10 / 3` 的结果是 `3` 而不是 `3.333...`，小数部分会被直接舍弃。
:::

### 💪 练习题

1. 创建三个整数变量：`year`(2025)、`month`(10)、`day`(3)，并打印今天的日期
2. 计算一个长方形的面积，长是 12，宽是 8
3. 尝试计算 `100 / 7` 并观察结果

### 📌 小结

- 使用 `int` 声明整数变量
- 整数可以是正数、负数或零
- 整数除法会舍弃小数部分

## 浮点数类型(Floating-Point Types)

### 💡 概念讲解

**浮点数(Floating-Point Number)** 就是带小数点的数字，比如 3.14、-0.5、99.99。在 Java 中，常用 `double` 来表示浮点数。

为什么叫"浮点"？因为小数点的位置是"浮动"的，可以表示很大或很小的数字。

### 📝 代码示例

创建 `DoubleDemo.java`：

```java
public class DoubleDemo {
    public static void main(String[] args) {
        // 声明浮点数变量
        double price = 19.99;
        double pi = 3.14159;
        
        // 浮点数运算
        double length = 5.5;
        double width = 3.2;
        double area = length * width;
        
        System.out.println("价格: " + price);
        System.out.println("圆周率: " + pi);
        System.out.println("面积: " + area);
        
        // 浮点数除法
        double a = 10.0;
        double b = 3.0;
        System.out.println("10.0 / 3.0 = " + (a / b));  // 现在会得到小数
        
        // 整数和浮点数混合运算
        int x = 10;
        double y = 3.0;
        System.out.println("10 / 3.0 = " + (x / y));  // 结果是浮点数
    }
}
```

### ✅ 验证方法

运行程序：

```bash
javac DoubleDemo.java
java DoubleDemo
```

你应该看到：

```
价格: 19.99
圆周率: 3.14159
面积: 17.6
10.0 / 3.0 = 3.3333333333333335
10 / 3.0 = 3.3333333333333335
```

::: tip 提示
当整数和浮点数一起运算时，结果会自动变成浮点数。
:::

### 💪 练习题

1. 声明你的身高(如 1.75 米)和体重(如 65.5 公斤)，计算 BMI = 体重 / (身高 * 身高)
2. 计算一个圆的面积，半径是 5.0，使用 π = 3.14159
3. 尝试用浮点数计算 `100.0 / 7.0`，对比之前整数除法的结果

### 📌 小结

- 使用 `double` 声明浮点数变量
- 浮点数可以表示小数
- 浮点数除法会保留小数部分
- 整数和浮点数混合运算结果为浮点数

## 字符串类型(String Type)

### 💡 概念讲解

**字符串(String)** 是一串文字，比如 "Hello"、"你好"、"Java 编程"。在 Java 中，字符串必须用**双引号("")** 包起来。

字符串不是基本数据类型，而是一个**类(Class)**，所以 `String` 的首字母是大写的。

### 📝 代码示例

创建 `StringDemo.java`：

```java
public class StringDemo {
    public static void main(String[] args) {
        // 声明字符串变量
        String name = "张三";
        String greeting = "你好";
        String message = "欢迎学习 Java!";
        
        // 打印字符串
        System.out.println(name);
        System.out.println(greeting);
        System.out.println(message);
        
        // 字符串拼接 - 使用 + 号
        String firstName = "张";
        String lastName = "三";
        String fullName = firstName + lastName;
        System.out.println("全名: " + fullName);
        
        // 字符串和数字拼接
        String intro = "我今年 " + 25 + " 岁";
        System.out.println(intro);
        
        // 常用字符串操作
        String text = "Hello Java";
        System.out.println("字符串长度: " + text.length());  // 获取长度
        System.out.println("转大写: " + text.toUpperCase());  // 转大写
        System.out.println("转小写: " + text.toLowerCase());  // 转小写
    }
}
```

### ✅ 验证方法

运行程序：

```bash
javac StringDemo.java
java StringDemo
```

你应该看到：

```
张三
你好
欢迎学习 Java!
全名: 张三
我今年 25 岁
字符串长度: 10
转大写: HELLO JAVA
转小写: hello java
```

::: warning 注意
字符串必须用**双引号 ""**，不能用单引号 ''。单引号在 Java 中有其他用途。
:::

### 📝 字符串的特殊情况

```java
public class StringSpecial {
    public static void main(String[] args) {
        // 空字符串
        String empty = "";
        System.out.println("空字符串长度: " + empty.length());
        
        // 包含空格的字符串
        String withSpace = "Hello World";
        System.out.println(withSpace);
        
        // 数字的字符串表示
        String numberText = "123";
        int number = 123;
        System.out.println("字符串: " + numberText);
        System.out.println("整数: " + number);
        
        // 注意：字符串 "123" 和整数 123 是不同的!
        // System.out.println(numberText + 1);  // 结果是 "1231"
        // System.out.println(number + 1);      // 结果是 124
    }
}
```

::: danger 警告
`"123"` 是字符串，`123` 是整数，它们完全不同！字符串 `"123" + 1` 的结果是 `"1231"`，而不是 `124`。
:::

### 💪 练习题

1. 创建三个字符串变量：姓名、城市、爱好，然后拼接成一句完整的自我介绍
2. 声明一个包含你喜欢的一句话的字符串，打印它的长度
3. 尝试将字符串 `"java"` 转换为大写并打印

### 📌 小结

- 使用 `String` 声明字符串变量(注意大写 S)
- 字符串必须用双引号 `""` 包裹
- 使用 `+` 可以拼接字符串
- `"123"` 和 `123` 是完全不同的东西

## 布尔类型(Boolean Type)

### 💡 概念讲解

**布尔值(Boolean)** 只有两个可能的值：`true`(真) 或 `false`(假)。它通常用来表示"是或否"、"对或错"、"有或无"这类只有两种状态的情况。

布尔值在**条件判断(Conditional Statement)** 中非常重要。虽然我们还没学到条件判断,但可以先了解布尔值的基本用法。

### 📝 代码示例

创建 `BooleanDemo.java`：

```java
public class BooleanDemo {
    public static void main(String[] args) {
        // 声明布尔变量
        boolean isStudent = true;
        boolean hasDriverLicense = false;
        
        System.out.println("是学生吗? " + isStudent);
        System.out.println("有驾照吗? " + hasDriverLicense);
        
        // 比较运算会产生布尔值
        int age = 20;
        boolean isAdult = age >= 18;  // 年龄大于等于18吗?
        System.out.println("是成年人吗? " + isAdult);
        
        // 更多比较运算
        int score = 85;
        System.out.println("分数等于100? " + (score == 100));  // false
        System.out.println("分数大于60? " + (score > 60));      // true
        System.out.println("分数小于60? " + (score < 60));      // false
        System.out.println("分数不等于85? " + (score != 85));   // false
        
        // 字符串比较
        String password = "abc123";
        boolean isCorrect = password.equals("abc123");  // 字符串比较用 equals
        System.out.println("密码正确吗? " + isCorrect);
    }
}
```

### ✅ 验证方法

运行程序：

```bash
javac BooleanDemo.java
java BooleanDemo
```

你应该看到：

```
是学生吗? true
有驾照吗? false
是成年人吗? true
分数等于100? false
分数大于60? true
分数小于60? false
分数不等于85? false
密码正确吗? true
```

::: tip 提示
比较运算符：
- `==` 等于
- `!=` 不等于
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于
:::

### 📝 布尔逻辑运算

```java
public class BooleanLogic {
    public static void main(String[] args) {
        boolean hasTicket = true;
        boolean hasID = true;
        
        // 逻辑与(AND) - 两个都为true才是true
        boolean canEnter = hasTicket && hasID;
        System.out.println("可以进场吗? " + canEnter);  // true
        
        // 逻辑或(OR) - 只要有一个true就是true
        boolean isWeekend = false;
        boolean isHoliday = true;
        boolean canRest = isWeekend || isHoliday;
        System.out.println("可以休息吗? " + canRest);  // true
        
        // 逻辑非(NOT) - 取反
        boolean isBusy = false;
        boolean isFree = !isBusy;
        System.out.println("有空吗? " + isFree);  // true
    }
}
```

::: warning 注意
字符串比较不能用 `==`，要用 `.equals()` 方法。这是 Java 的一个特殊规则。
:::

### 💪 练习题

1. 声明两个布尔变量表示今天是否下雨、是否带伞，然后判断会不会被淋湿
2. 创建一个整数变量表示温度，判断温度是否在 18-26 度之间(舒适温度)
3. 尝试用逻辑运算符 `&&` 和 `||` 组合多个条件

### 📌 小结

- 使用 `boolean` 声明布尔变量
- 布尔值只有 `true` 和 `false` 两个值
- 比较运算会产生布尔值
- 字符串比较使用 `.equals()` 而不是 `==`

## 数据类型总览

### 📊 快速对比

| 数据类型 | 关键字 | 示例值 | 用途 |
|---------|-------|--------|------|
| 整数 | `int` | `42`, `-10`, `0` | 表示没有小数的数字 |
| 浮点数 | `double` | `3.14`, `-0.5`, `99.99` | 表示带小数的数字 |
| 字符串 | `String` | `"Hello"`, `"你好"` | 表示文本 |
| 布尔值 | `boolean` | `true`, `false` | 表示真假 |

### 📝 综合示例

创建 `DataTypeDemo.java`：

```java
public class DataTypeDemo {
    public static void main(String[] args) {
        // 个人信息卡片
        String name = "李华";              // 姓名
        int age = 20;                      // 年龄
        double height = 1.75;              // 身高(米)
        boolean isStudent = true;          // 是否是学生
        
        // 打印信息
        System.out.println("===== 个人信息 =====");
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age + " 岁");
        System.out.println("身高: " + height + " 米");
        System.out.println("学生: " + isStudent);
        
        // 简单计算
        double weight = 70.5;
        double bmi = weight / (height * height);
        System.out.println("BMI: " + bmi);
        
        // 判断
        boolean isHealthy = bmi >= 18.5 && bmi <= 24.9;
        System.out.println("BMI 正常: " + isHealthy);
    }
}
```

### ✅ 验证方法

```bash
javac DataTypeDemo.java
java DataTypeDemo
```

### 💪 综合练习

创建一个商品信息程序，包含：
- 商品名称(字符串)
- 原价(浮点数)
- 折扣(浮点数，如 0.8 表示 8 折)
- 是否包邮(布尔值)
- 库存数量(整数)

计算并打印：
- 折扣后的价格
- 如果买 3 件的总价
- 是否满足"包邮且库存充足"的条件

### 🎯 常见错误及解决

**错误 1：忘记双引号**
```java
String name = Hello;  // ❌ 错误
String name = "Hello";  // ✅ 正确
```

**错误 2：整数除法期望得到小数**
```java
int result = 10 / 3;      // ❌ 结果是 3,不是 3.333...
double result = 10.0 / 3.0;  // ✅ 结果是 3.333...
```

**错误 3：字符串用 == 比较**
```java
String s = "hello";
if (s == "hello")  // ❌ 不推荐
if (s.equals("hello"))  // ✅ 正确方式
```

**错误 4：数据类型写错**
```java
string name = "李华";  // ❌ string 首字母要大写
String name = "李华";  // ✅ 正确
```

### 📌 本章总结

你已经学会了 Java 的四种基本数据类型：

1. **`int`** - 存储整数，适合年龄、数量等
2. **`double`** - 存储浮点数，适合价格、测量值等
3. **`String`** - 存储文本，适合姓名、描述等
4. **`boolean`** - 存储真假，适合状态判断

::: tip 下一步
现在你已经掌握了 Java 的数据类型，可以用它们存储各种信息了。接下来建议学习：
- 如何根据条件做不同的事情(条件语句)
- 如何重复执行某些操作(循环)
- 如何将数据组织成列表(数组)
:::