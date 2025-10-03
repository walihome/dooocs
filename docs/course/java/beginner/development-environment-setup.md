---
title: 开发环境搭建
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

你有没有想过,计算机是怎么区分数字、文字和真假判断的?就像我们在生活中会用不同的容器装不同的东西——用水杯装水、用碗装饭、用袋子装衣服,Java 也需要用不同的**数据类型(Data Type)**来存储不同种类的信息。

在这一章,你将学会 Java 中最常用的四种基本数据类型。学完后,你就能让程序存储和处理各种信息了。

## 💡 什么是数据类型?

想象你在超市购物:
- 买了 **5** 个苹果 → 这是整数
- 苹果单价是 **3.5** 元 → 这是带小数的数字
- 苹果品种是 **"红富士"** → 这是文字
- 问你"苹果新鲜吗?" 你回答 **"是"或"否"** → 这是真假判断

Java 也是这样工作的!它需要知道你存储的是什么类型的数据,才能正确处理它们。

::: tip 为什么需要数据类型?
计算机内存只认识 0 和 1,数据类型就像"翻译规则",告诉计算机如何理解这些 0 和 1。比如:
- 整数 `5` 在内存中是一种表示方式
- 小数 `3.5` 是另一种表示方式
- 文字 `"红富士"` 又是完全不同的方式
:::

## 整数类型(Integer)

### 💡 概念讲解

**整数(Integer)**就是没有小数部分的数字,包括正数、负数和零。在 Java 中,最常用的整数类型是 `int`。

生活中的整数例子:
- 你的年龄: 25 岁
- 班级人数: 30 人
- 温度: -5 度(可以是负数!)

::: warning 注意
整数不能有小数点!`3.0` 不是整数,`3` 才是。
:::

### 📝 代码示例

让我们创建第一个 Java 程序来使用整数:

```java
public class IntegerDemo {
    public static void main(String[] args) {
        // 声明并初始化整数变量 declare and initialize integer variables
        int age = 25;                    // 年龄 age
        int studentCount = 30;           // 学生数量 student count
        int temperature = -5;            // 温度(可以是负数) temperature (can be negative)
        
        // 打印输出 print output
        System.out.println("年龄: " + age);
        System.out.println("学生数量: " + studentCount);
        System.out.println("温度: " + temperature + "度");
        
        // 整数运算 integer operations
        int appleCount = 5;              // 苹果数量 apple count
        int orangeCount = 3;             // 橙子数量 orange count
        int totalFruit = appleCount + orangeCount;  // 总水果数 total fruits
        
        System.out.println("总共有 " + totalFruit + " 个水果");
    }
}
```

**代码解析:**
- `int age = 25;` - 这一行做了两件事:
  - `int` 告诉 Java "我要创建一个整数类型的变量"
  - `age` 是变量名(就像给这个"容器"起名字)
  - `= 25` 把数字 25 存进这个变量
- `System.out.println()` 用于在屏幕上显示内容
- `+` 号可以连接文字和数字

### ✅ 验证方法

1. 创建一个名为 `IntegerDemo.java` 的文件
2. 复制上面的代码
3. 在终端/命令行中运行:

```bash
javac IntegerDemo.java
java IntegerDemo
```

**你应该看到:**
```
年龄: 25
学生数量: 30
温度: -5度
总共有 8 个水果
```

::: danger 常见错误
❌ 错误写法: `int age = 25.5;`  
为什么错?因为 `25.5` 有小数部分,不是整数!

✅ 正确写法: `int age = 25;`
:::

### 💪 练习题

**练习 1(模仿)**: 创建三个整数变量
- `score` 存储你的考试分数(比如 85)
- `maxScore` 存储满分(100)
- 计算并打印 `score + maxScore` 的结果

**练习 2(应用)**: 计算购物
- 创建变量 `applePrice = 3` (苹果单价,元)
- 创建变量 `appleCount = 5` (购买数量)
- 计算总价并打印

**练习 3(创新)**: 年龄计算器
- 创建变量 `currentYear = 2025`
- 创建变量 `birthYear = 2000`
- 计算年龄并打印结果

## 浮点数类型(Floating-Point Number)

### 💡 概念讲解

**浮点数(Floating-Point Number)**就是带小数点的数字。在 Java 中,最常用的浮点数类型是 `double`。

为什么叫"浮点"?想象小数点可以在数字中"浮动"位置:
- `3.14` → 小数点在 3 和 1 之间
- `0.5` → 小数点在 0 和 5 之间
- `123.456` → 小数点可以在任何位置

生活中的浮点数例子:
- 商品价格: 19.99 元
- 你的身高: 1.75 米
- 圆周率: 3.14159...

::: tip 为什么用 double 而不是 float?
Java 有两种浮点数类型:`float` 和 `double`。`double` 是"双精度",可以存储更精确的小数,所以我们推荐初学者直接使用 `double`。
:::

### 📝 代码示例

```java
public class DoubleDemo {
    public static void main(String[] args) {
        // 声明浮点数变量 declare floating-point variables
        double price = 19.99;            // 商品价格 product price
        double height = 1.75;            // 身高(米) height in meters
        double pi = 3.14159;             // 圆周率 pi value
        
        // 打印输出 print output
        System.out.println("商品价格: " + price + " 元");
        System.out.println("身高: " + height + " 米");
        System.out.println("圆周率: " + pi);
        
        // 浮点数运算 floating-point operations
        double applePrice = 3.5;         // 苹果单价 apple unit price
        int appleCount = 5;              // 苹果数量 apple count
        double totalPrice = applePrice * appleCount;  // 总价 total price
        
        System.out.println("购买 " + appleCount + " 个苹果");
        System.out.println("总价: " + totalPrice + " 元");
        
        // 整数和浮点数混合运算 mixed integer and floating-point operations
        int a = 10;
        int b = 3;
        double result1 = a / b;          // 结果会怎样? what will the result be?
        double result2 = (double) a / b; // 强制转换 type casting
        
        System.out.println("10 / 3 = " + result1);        // 输出 3.0(注意!)
        System.out.println("10.0 / 3 = " + result2);      // 输出 3.333...
    }
}
```

**代码解析:**
- `double price = 19.99;` - 创建浮点数变量,可以存储小数
- `applePrice * appleCount` - 小数乘以整数,结果是小数
- `(double) a / b` - `(double)` 把整数 `a` 临时转换成浮点数,这样除法结果才会有小数

::: warning 整数除法的陷阱
当两个整数相除时,结果会自动"丢掉"小数部分!
- `10 / 3` 在 Java 中结果是 `3`,不是 `3.333...`
- 如果想要小数结果,至少有一个数要是浮点数:`10.0 / 3` 或 `(double)10 / 3`
:::

### ✅ 验证方法

创建 `DoubleDemo.java`,复制代码并运行:

```bash
javac DoubleDemo.java
java DoubleDemo
```

**你应该看到:**
```
商品价格: 19.99 元
身高: 1.75 米
圆周率: 3.14159
购买 5 个苹果
总价: 17.5 元
10 / 3 = 3.0
10.0 / 3 = 3.3333333333333335
```

### 💪 练习题

**练习 1(模仿)**: 计算平均分
- 创建 `subject1 = 85.5`(第一科成绩)
- 创建 `subject2 = 92.0`(第二科成绩)
- 计算平均分并打印

**练习 2(应用)**: 货币兑换
- 创建 `usdAmount = 100.0`(美元金额)
- 创建 `exchangeRate = 7.25`(汇率)
- 计算兑换成人民币的金额

**练习 3(思考)**: 试试看这两行代码有什么区别?
```java
double result1 = 5 / 2;        // 这个结果是什么?
double result2 = 5.0 / 2;      // 这个结果又是什么?
```

## 字符串类型(String)

### 💡 概念讲解

**字符串(String)**用于存储文字内容,比如名字、地址、一句话等。在 Java 中,字符串要用**双引号**包围。

想象字符串是"一串字符":
- `"Hello"` - 5 个字符连在一起
- `"我爱编程"` - 4 个汉字字符
- `"2025"` - 这也是字符串,不是数字!(因为有引号)

::: tip String 的大写字母
你可能注意到了,`String` 的首字母是大写的 `S`,这和 `int`、`double` 不同。这是因为 `String` 是一个"类(Class)",而不是"基本类型"。现在你不需要理解这个区别,只要记住写 `String` 时首字母要大写就行。
:::

### 📝 代码示例

```java
public class StringDemo {
    public static void main(String[] args) {
        // 声明字符串变量 declare string variables
        String name = "张三";                    // 姓名 name
        String city = "北京";                    // 城市 city
        String greeting = "你好,世界!";          // 问候语 greeting
        
        // 打印输出 print output
        System.out.println("姓名: " + name);
        System.out.println("城市: " + city);
        System.out.println(greeting);
        
        // 字符串拼接 string concatenation
        String firstName = "张";
        String lastName = "三";
        String fullName = firstName + lastName;  // 拼接字符串 concatenate strings
        
        System.out.println("全名: " + fullName);
        
        // 字符串和数字混合 mixing strings and numbers
        String product = "苹果";
        int count = 5;
        double price = 3.5;
        
        System.out.println("购买了 " + count + " 个" + product);
        System.out.println("单价: " + price + " 元");
        System.out.println("总价: " + (count * price) + " 元");
        
        // 常见的字符串方法 common string methods
        String message = "Hello World";
        System.out.println("字符串长度: " + message.length());        // 字符串有多少个字符
        System.out.println("转大写: " + message.toUpperCase());       // 转换为大写
        System.out.println("转小写: " + message.toLowerCase());       // 转换为小写
    }
}
```

**代码解析:**
- `String name = "张三";` - 用双引号包围的就是字符串
- `firstName + lastName` - 用 `+` 号可以把两个字符串连接起来
- `message.length()` - `.length()` 是字符串的"方法",可以获取字符串长度
- `(count * price)` - 括号确保先计算乘法,再拼接到字符串

::: danger 常见错误
❌ 错误写法: `String name = 张三;` (缺少引号)  
❌ 错误写法: `String name = '张三';` (单引号不行)  
✅ 正确写法: `String name = "张三";` (必须用双引号)
:::

### ✅ 验证方法

创建 `StringDemo.java`,运行后你应该看到:

```
姓名: 张三
城市: 北京
你好,世界!
全名: 张三
购买了 5 个苹果
单价: 3.5 元
总价: 17.5 元
字符串长度: 11
转大写: HELLO WORLD
转小写: hello world
```

::: tip 字符串的长度计算
`"Hello World"` 的长度是 11,因为空格也算一个字符!
- H-e-l-l-o-空格-W-o-r-l-d = 11 个字符
:::

### 💪 练习题

**练习 1(模仿)**: 自我介绍
- 创建 `name`(你的名字)
- 创建 `age`(你的年龄,用整数)
- 创建 `hobby`(你的爱好)
- 拼接并打印:"我叫XX,今年XX岁,喜欢XX"

**练习 2(应用)**: 制作标签
- 创建 `productName = "iPhone"`
- 创建 `model = "15 Pro"`
- 拼接成完整的产品名称并打印

**练习 3(探索)**: 试试看这两行有什么不同?
```java
System.out.println("10" + 20);      // 输出是什么?
System.out.println(10 + 20);        // 输出又是什么?
```

## 布尔类型(Boolean)

### 💡 概念讲解

**布尔类型(Boolean)**只有两个可能的值:`true`(真)和 `false`(假)。它用于表示"是或否"、"对或错"、"开或关"这类只有两种状态的信息。

生活中的布尔值例子:
- 灯是开的吗?→ 是(`true`)或 否(`false`)
- 今天下雨了吗?→ 是 或 否
- 你是学生吗?→ 是 或 否

在编程中,布尔值最常用于**判断和选择**,比如"如果下雨了,就带伞"。

::: tip 为什么叫 Boolean?
这个名字来自数学家乔治·布尔(George Boole),他发明了布尔代数。为了纪念他,我们把这种只有真假两个值的类型命名为 Boolean。
:::

### 📝 代码示例

```java
public class BooleanDemo {
    public static void main(String[] args) {
        // 声明布尔变量 declare boolean variables
        boolean isRaining = true;              // 是否下雨 is it raining
        boolean isWeekend = false;             // 是否周末 is it weekend
        boolean hasUmbrella = true;            // 是否有雨伞 has umbrella
        
        // 打印输出 print output
        System.out.println("下雨了吗? " + isRaining);
        System.out.println("是周末吗? " + isWeekend);
        System.out.println("有雨伞吗? " + hasUmbrella);
        
        // 比较运算产生布尔值 comparison operations produce boolean values
        int age = 25;
        boolean isAdult = age >= 18;           // 年龄是否大于等于18 is age >= 18
        boolean isTeenager = age < 18;         // 年龄是否小于18 is age < 18
        
        System.out.println("是成年人吗? " + isAdult);
        System.out.println("是未成年人吗? " + isTeenager);
        
        // 数值比较 numeric comparisons
        int score = 85;
        boolean passed = score >= 60;          // 是否及格(>=60分) passed (>=60 points)
        boolean excellent = score >= 90;       // 是否优秀(>=90分) excellent (>=90 points)
        
        System.out.println("及格了吗? " + passed);
        System.out.println("优秀吗? " + excellent);
        
        // 字符串比较 string comparison
        String password = "abc123";
        boolean isCorrect = password.equals("abc123");  // 密码是否正确 is password correct
        
        System.out.println("密码正确吗? " + isCorrect);
        
        // 逻辑运算 logical operations
        boolean sunny = true;
        boolean warm = true;
        boolean goodWeather = sunny && warm;    // 两个条件都满足 both conditions true
        
        System.out.println("天气好吗? " + goodWeather);
    }
}
```

**代码解析:**
- `boolean isRaining = true;` - 布尔变量只能是 `true` 或 `false`
- `age >= 18` - 比较运算符 `>=` 会产生布尔值结果
- `password.equals("abc123")` - `.equals()` 方法用于比较两个字符串是否相同
- `sunny && warm` - `&&` 表示"并且",两个都是 `true` 结果才是 `true`

::: warning 字符串比较的陷阱
比较字符串不能用 `==`,要用 `.equals()` 方法!
- ❌ 错误: `password == "abc123"`
- ✅ 正确: `password.equals("abc123")`

现在你可能不理解为什么,记住这个规则就好,后面章节会详细解释。
:::

### ✅ 验证方法

创建 `BooleanDemo.java`,运行后应该看到:

```
下雨了吗? true
是周末吗? false
有雨伞吗? true
是成年人吗? true
是未成年人吗? false
及格了吗? true
优秀吗? false
密码正确吗? true
天气好吗? true
```

### 💪 练习题

**练习 1(模仿)**: 资格检查
- 创建 `age = 20`
- 创建 `hasLicense = true`
- 判断是否可以开车(年龄>=18 并且 有驾照)

**练习 2(应用)**: 折扣判断
- 创建 `price = 150`
- 判断是否满足折扣条件(价格>=100)
- 打印判断结果

**练习 3(思考)**: 猜猜结果
```java
int a = 10;
int b = 20;
boolean result1 = a > b;        // 这是 true 还是 false?
boolean result2 = a < b;        // 这又是什么?
boolean result3 = a == 10;      // 这呢?
```

## 📌 本章小结

恭喜你!现在你已经掌握了 Java 的四种基本数据类型。让我们回顾一下:

### 关键要点

1. **整数类型(int)** - 存储没有小数的数字
   - 例子:`int age = 25;`
   - 可以是负数:`int temperature = -5;`

2. **浮点数类型(double)** - 存储带小数的数字
   - 例子:`double price = 19.99;`
   - 注意整数除法陷阱:`5 / 2` 结果是 `2`,不是 `2.5`

3. **字符串类型(String)** - 存储文字内容
   - 必须用双引号:`String name = "张三";`
   - 可以用 `+` 拼接:`firstName + lastName`
   - 记住首字母大写:`String`,不是 `string`

4. **布尔类型(boolean)** - 只有 `true` 或 `false`
   - 用于判断:`boolean isAdult = age >= 18;`
   - 字符串比较用 `.equals()`,不用 `==`

5. **选择合适的类型很重要**
   - 年龄、数量 → 用 `int`
   - 价格、身高 → 用 `double`
   - 姓名、地址 → 用 `String`
   - 是否判断 → 用 `boolean`

::: tip 下一步学习建议
现在你可以存储数据了,但还不能根据数据做判断和选择。下一章你将学习**条件语句(if-else)**,让程序能够"思考"和"决策"!
:::

### 验证你的掌握程度

试着独立完成这个综合练习:创建一个程序,包含:
- 一个整数变量(你的年龄)
- 一个浮点数变量(你的身高)
- 一个字符串变量(你的名字)
- 一个布尔变量(判断年龄是否>=18)
- 打印所有信息

如果你能独立完成,说明你已经真正掌握了这一章的内容!