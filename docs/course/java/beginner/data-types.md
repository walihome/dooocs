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

你有没有想过,计算机是如何区分数字、文字、真假这些不同的信息的?就像我们在生活中会用不同的容器装不同的东西——用杯子装水,用盒子装书,用钱包装钱——计算机也需要用不同的"容器"来存放不同类型的数据。这些"容器"就是我们今天要学习的 **数据类型(Data Type)**。

## 💡 什么是数据类型

**数据类型(Data Type)** 告诉计算机:这个数据是什么类型的,应该占用多少内存空间,可以进行什么样的操作。

想象一下,如果你告诉朋友"我有 10 个",朋友一定会问:"10 个什么?"可能是 10 个苹果,10 块钱,或者 10 岁。计算机也需要知道这个"10"到底是什么,才能正确处理它。

在 Java 中,主要有以下几种基本数据类型:
- **整数(Integer)** - 用来表示整数,比如年龄、数量
- **浮点数(Floating Point)** - 用来表示带小数点的数字,比如价格、温度
- **字符串(String)** - 用来表示文字,比如姓名、地址
- **布尔值(Boolean)** - 用来表示真或假,比如"已完成"、"是否登录"

## 整数类型

### 💡 概念讲解

**整数类型(Integer Type)** 用来存储没有小数部分的数字。在 Java 中,最常用的整数类型是 `int`。

你什么时候需要用整数?
- 统计人数:班级有 30 个学生
- 表示年龄:我今年 25 岁
- 计数器:页面被访问了 100 次

::: tip 为什么叫 int?
`int` 是 integer(整数)的缩写。程序员喜欢用简短的名字,这样可以少打字!
:::

### 📝 代码示例

让我们创建第一个使用整数的 Java 程序:

```java
public class IntegerDemo {
    public static void main(String[] args) {
        // 声明一个整数变量 declare an integer variable
        int studentCount;
        
        // 给变量赋值 assign value to variable
        studentCount = 30;
        
        // 声明并同时赋值 declare and initialize
        int age = 25;
        
        // 打印输出 print output
        System.out.println("学生人数: " + studentCount);
        System.out.println("年龄: " + age);
        
        // 整数的计算 integer calculation
        int total = studentCount + age;
        System.out.println("总和: " + total);
    }
}
```

**代码解读:**
- `int studentCount;` - 声明了一个叫 `studentCount` 的整数变量
- `studentCount = 30;` - 把数字 30 存入这个变量
- `int age = 25;` - 声明的同时就赋值,这是更常用的写法
- `+` 号可以用来做加法运算

### ✅ 验证方法

将上面的代码保存为 `IntegerDemo.java`,然后运行:

```bash
javac IntegerDemo.java
java IntegerDemo
```

**预期输出:**
```
学生人数: 30
年龄: 25
总和: 55
```

如果你看到这样的输出,说明你已经成功使用了整数类型!

::: warning 常见错误
如果写成 `int age = 25.5;` 会报错,因为 25.5 不是整数,它有小数部分。整数类型只能存储整数!
:::

### 💪 练习题

**练习 1 - 基础模仿**
创建一个程序,声明三个整数变量:
- `appleCount` 赋值为 5(苹果数量)
- `orangeCount` 赋值为 8(橙子数量)
- 计算并输出水果总数

**练习 2 - 简单变化**
创建一个程序计算你的出生年份:
- 声明 `currentYear` 为 2025
- 声明 `age` 为你的年龄
- 计算并输出出生年份(提示: 出生年份 = 当前年份 - 年龄)

**练习 3 - 实际应用**
模拟一个简单的计分系统:
- 声明 `score1`, `score2`, `score3` 分别为 85, 90, 78
- 计算三科总分
- 计算平均分(提示: 总分除以 3)

## 浮点数类型

### 💡 概念讲解

**浮点数类型(Floating Point Type)** 用来存储带有小数部分的数字。在 Java 中,常用 `double` 来表示浮点数。

为什么叫"浮点"数?你可以把小数点想象成可以"浮动"的点——1.23、12.3、123.0 都是同一个数字的不同表示方式,小数点的位置在"浮动"。

你什么时候需要用浮点数?
- 表示价格:一本书 29.99 元
- 表示温度:今天气温 23.5 度
- 表示比率:完成度 78.6%

::: tip double vs float
Java 有两种浮点数类型:`float` 和 `double`。`double` 可以存储更大更精确的小数,是更常用的选择。记住:初学时就用 `double`!
:::

### 📝 代码示例

```java
public class DoubleDemo {
    public static void main(String[] args) {
        // 声明浮点数变量 declare double variables
        double price = 29.99;
        double temperature = 23.5;
        
        System.out.println("书的价格: " + price + " 元");
        System.out.println("当前温度: " + temperature + " 度");
        
        // 浮点数的计算 double calculation
        double totalPrice = price * 3;  // 买3本书
        System.out.println("买3本书总价: " + totalPrice + " 元");
        
        // 混合整数和浮点数 mixing int and double
        int quantity = 2;
        double total = price * quantity;
        System.out.println("买" + quantity + "本书: " + total + " 元");
    }
}
```

**代码解读:**
- `double price = 29.99;` - 声明浮点数时,直接写小数即可
- `price * 3` - 浮点数可以进行加减乘除运算
- `price * quantity` - 整数和浮点数可以一起运算,结果是浮点数

### ✅ 验证方法

运行程序:

```bash
javac DoubleDemo.java
java DoubleDemo
```

**预期输出:**
```
书的价格: 29.99 元
当前温度: 23.5 度
买3本书总价: 89.97 元
买2本书: 59.98 元
```

::: warning 浮点数的精度问题
有时浮点数计算会出现很长的小数,比如 `0.1 + 0.2` 可能得到 `0.30000000000000004`。这是计算机存储小数的特性,不是错误。如果你需要精确计算金额,需要学习专门的技术(在后续课程会讲到)。
:::

### 💪 练习题

**练习 1 - 基础计算**
创建一个程序:
- 声明 `height` 为 1.75(身高,米)
- 声明 `weight` 为 65.5(体重,公斤)
- 计算并输出 BMI(体重指数 = 体重 ÷ 身高 ÷ 身高)

**练习 2 - 购物计算**
模拟购物结算:
- 商品单价 `unitPrice` 为 15.8 元
- 购买数量 `quantity` 为 4
- 折扣率 `discount` 为 0.9(9折)
- 计算并输出最终价格(单价 × 数量 × 折扣)

**练习 3 - 温度转换**
创建一个摄氏度转华氏度的程序:
- 声明 `celsius` 为 25.0(摄氏度)
- 使用公式: 华氏度 = 摄氏度 × 1.8 + 32
- 输出转换结果

## 字符串类型

### 💡 概念讲解

**字符串(String)** 用来存储文本信息,比如名字、地址、消息等。字符串要用双引号 `""` 包裹起来。

想象字符串就像一串珠子,每个字符(字母、数字、符号)就是一颗珠子,串起来就成了一个完整的文本。

你什么时候需要用字符串?
- 存储用户名:"张三"
- 显示欢迎消息:"欢迎来到我的程序!"
- 记录地址:"北京市朝阳区XX路XX号"

::: tip String 首字母大写
你可能注意到,`String` 的首字母是大写的,而 `int` 和 `double` 是小写的。这是因为 `String` 实际上不是基本数据类型,而是一个类(Class)。现在不需要理解什么是类,只要记住写成 `String` 就好。
:::

### 📝 代码示例

```java
public class StringDemo {
    public static void main(String[] args) {
        // 声明字符串变量 declare string variables
        String name = "张三";
        String greeting = "你好";
        String city = "北京";
        
        // 输出字符串 print strings
        System.out.println(name);
        System.out.println(greeting);
        
        // 字符串拼接 string concatenation
        String message = greeting + ", " + name + "!";
        System.out.println(message);
        
        // 字符串和数字拼接 mixing string and numbers
        int age = 25;
        String info = name + "今年" + age + "岁, 住在" + city;
        System.out.println(info);
        
        // 多行字符串输出 multi-line output
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age);
        System.out.println("城市: " + city);
    }
}
```

**代码解读:**
- `String name = "张三";` - 字符串必须用双引号包裹
- `greeting + ", " + name` - 用 `+` 号可以把多个字符串连接起来
- `name + "今年" + age + "岁"` - 字符串可以和数字拼接,数字会自动转成字符串

### ✅ 验证方法

运行程序:

```bash
javac StringDemo.java
java StringDemo
```

**预期输出:**
```
张三
你好
你好, 张三!
张三今年25岁, 住在北京
姓名: 张三
年龄: 25
城市: 北京
```

::: warning 常见错误
- ❌ `String name = 张三;` - 忘记双引号会报错
- ❌ `String name = '张三';` - 单引号不行,必须用双引号
- ✅ `String name = "张三";` - 正确写法
:::

### 💪 练习题

**练习 1 - 个人信息卡**
创建一个程序显示你的信息:
- 姓名 `name`
- 学校 `school`
- 专业 `major`
- 用字符串拼接输出完整介绍:"我叫XXX,在XXX学习XXX专业"

**练习 2 - 产品介绍**
创建一个商品信息程序:
- 商品名 `productName`
- 品牌 `brand`
- 价格 `price`(double)
- 拼接输出:"【品牌】商品名 - ¥价格"

**练习 3 - 地址格式化**
创建一个程序拼接完整地址:
- 省份 `province`
- 城市 `city`
- 区县 `district`
- 街道 `street`
- 门牌号 `houseNumber`
- 按格式输出:"省份-城市-区县-街道-门牌号"

## 布尔类型

### 💡 概念讲解

**布尔类型(Boolean Type)** 只有两个值:`true`(真)和 `false`(假)。它用来表示"是"或"否"、"对"或"错"这样的二选一情况。

布尔值就像开关,只有"开"和"关"两种状态。在编程中,我们经常需要做判断:
- 用户是否登录?true 或 false
- 任务是否完成?true 或 false
- 年龄是否大于 18?true 或 false

::: tip 为什么叫 boolean?
Boolean 这个词来自数学家乔治·布尔(George Boole)的名字,他创建了布尔代数。在 Java 中,`boolean` 类型名全部小写。
:::

### 📝 代码示例

```java
public class BooleanDemo {
    public static void main(String[] args) {
        // 声明布尔变量 declare boolean variables
        boolean isStudent = true;
        boolean hasLicense = false;
        boolean isRaining = true;
        
        // 输出布尔值 print boolean values
        System.out.println("是学生吗? " + isStudent);
        System.out.println("有驾照吗? " + hasLicense);
        System.out.println("正在下雨吗? " + isRaining);
        
        // 比较运算产生布尔值 comparison produces boolean
        int age = 20;
        boolean isAdult = age >= 18;  // 年龄大于等于18
        System.out.println("是成年人吗? " + isAdult);
        
        int score = 85;
        boolean isPassed = score >= 60;  // 分数大于等于60
        System.out.println("考试及格了吗? " + isPassed);
        
        // 布尔值的应用场景 boolean usage scenarios
        boolean canDrive = isAdult && hasLicense;  // 并且(and)
        System.out.println("可以开车吗? " + canDrive);
    }
}
```

**代码解读:**
- `boolean isStudent = true;` - 布尔变量只能是 `true` 或 `false`,不用加引号
- `age >= 18` - 比较运算符会产生布尔值结果
- `&&` - 表示"并且"(and),两边都是 true 结果才是 true

**常用比较运算符:**
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于
- `==` 等于(注意是两个等号)
- `!=` 不等于

### ✅ 验证方法

运行程序:

```bash
javac BooleanDemo.java
java BooleanDemo
```

**预期输出:**
```
是学生吗? true
有驾照吗? false
正在下雨吗? true
是成年人吗? true
考试及格了吗? true
可以开车吗? false
```

最后一行输出 `false`,因为虽然年龄满足条件(`isAdult` 是 true),但没有驾照(`hasLicense` 是 false),两个条件同时满足才能开车。

::: warning 常见错误
- ❌ `boolean isStudent = "true";` - 加引号就变成字符串了
- ❌ `boolean isStudent = True;` - 首字母不能大写
- ❌ `if (age = 18)` - 比较用 `==`,不是 `=`(这是赋值符号)
- ✅ `boolean isStudent = true;` - 正确写法
:::

### 💪 练习题

**练习 1 - 资格检查**
创建一个程序检查是否符合报名条件:
- 年龄 `age` 为 22
- 是否是学生 `isStudent` 为 true
- 检查并输出:年龄是否在18-25之间?是否是学生?

**练习 2 - 成绩评估**
创建一个程序:
- 语文成绩 `chineseScore` 为 88
- 数学成绩 `mathScore` 为 76
- 英语成绩 `englishScore` 为 92
- 检查:三门是否都及格(≥60)?是否有科目优秀(≥90)?

**练习 3 - 天气决策**
创建一个程序判断是否适合出门:
- 是否下雨 `isRaining`
- 温度 `temperature`
- 判断:不下雨并且温度在15-25度之间,就适合出门

## 📌 本章小结

恭喜你!你已经学会了 Java 的四种核心数据类型。让我们总结一下:

**关键知识点:**

1. **整数类型 `int`** - 存储整数,没有小数部分
   - 示例:`int age = 25;`
   - 用途:计数、年龄、数量

2. **浮点数类型 `double`** - 存储带小数的数字
   - 示例:`double price = 29.99;`
   - 用途:价格、温度、比率

3. **字符串类型 `String`** - 存储文本信息
   - 示例:`String name = "张三";`
   - 注意:必须用双引号,首字母大写
   - 用途:姓名、地址、消息

4. **布尔类型 `boolean`** - 只有 true 或 false 两个值
   - 示例:`boolean isStudent = true;`
   - 用途:判断、开关、状态

5. **数据类型的选择原则**
   - 需要精确的整数 → 用 `int`
   - 需要小数 → 用 `double`
   - 需要文字 → 用 `String`
   - 需要是非判断 → 用 `boolean`

**实用记忆技巧:**

| 类型 | 关键词 | 记忆方法 |
|------|--------|----------|
| `int` | 整数 | **int**eger 的缩写 |
| `double` | 浮点数 | 双精度,小数点可以"浮动" |
| `String` | 字符串 | 一串字符像珠子串 |
| `boolean` | 布尔值 | 布尔先生发明的,只有真假 |

现在你已经掌握了编程的"基本建材",接下来的学习中,你会看到这些数据类型无处不在。每当你创建变量时,都要先想想:这个数据应该是什么类型?这样选择正确的数据类型,你的程序就有了一个好的开始!