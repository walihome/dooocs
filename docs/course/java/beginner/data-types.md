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

在编程世界里,**数据类型(Data Type)** 就像是给不同类型的物品贴上标签。就像超市里,水果区的苹果、蔬菜区的白菜、冷冻区的冰淇淋需要不同的储存方式一样,计算机也需要知道你给它的数据是什么类型,才能正确处理。

在 Java 中,我们今天要学习四种最基础的数据类型:
- **整数(Integer)** - 用来表示没有小数点的数字
- **浮点数(Floating-point Number)** - 用来表示带小数点的数字
- **字符串(String)** - 用来表示文字
- **布尔值(Boolean)** - 用来表示"是"或"否"

## 整数类型(Integer)

### 💡 概念讲解

你有没有想过,为什么计算机要区分"整数"和"小数"呢?就像你去菜市场买苹果,可以说"我要 5 个苹果",但不会说"我要 5.5 个苹果"(半个苹果不好卖吧)。整数就是用来表示这种"完整的、不可分割的数量"。

在 Java 中,最常用的整数类型是 `int`,它可以表示从 -2,147,483,648 到 2,147,483,647 之间的任何整数。这个范围对于日常编程来说已经足够大了。

**什么时候用整数?**
- 统计数量:学生人数、商品数量
- 年龄、楼层数
- 游戏分数、排名

### 📝 代码示例

让我们创建一个文件来实践整数的使用:

```java
public class IntegerDemo {
    public static void main(String[] args) {
        // 声明并初始化一个整数变量 declare and initialize an integer variable
        int studentCount = 30;
        
        // 输出变量的值 print the value
        System.out.println("班级学生人数: " + studentCount);
        
        // 进行数学运算 perform mathematical operations
        int newStudent = 5;
        int totalStudent = studentCount + newStudent;
        System.out.println("新增学生后的人数: " + totalStudent);
        
        // 整数可以是负数 integers can be negative
        int temperature = -5;
        System.out.println("今天气温: " + temperature + "度");
    }
}
```

**代码解释:**
- `int studentCount = 30;` - 这行代码做了两件事:声明一个整数类型的变量名叫 `studentCount`,并且给它赋值 30
- `System.out.println()` - 在控制台打印输出
- `+` 号在这里有两个作用:连接字符串和进行数学加法

### ✅ 验证方法

保存文件为 `IntegerDemo.java`,然后在命令行运行:

```bash
javac IntegerDemo.java
java IntegerDemo
```

**如果成功,你会看到:**
```
班级学生人数: 30
新增学生后的人数: 35
今天气温: -5度
```

::: warning 注意
整数类型不能存储小数!如果你写 `int price = 19.99;`,编译器会报错,因为 19.99 是小数,不是整数。
:::

### 💪 练习题

**练习 1: 模仿练习**
创建一个程序,声明你的年龄(用整数),然后计算 10 年后你多大。

**练习 2: 简单应用**
声明三个整数变量:语文成绩、数学成绩、英语成绩,计算总分并输出。

**练习 3: 创新实践**
模拟一个简单的计数器:从 100 开始,减去 30,再加上 50,输出最终结果。

### 📌 小结

- `int` 是 Java 中最常用的**整数类型(Integer Type)**
- 整数可以是正数、负数或零
- 整数不能包含小数点
- 整数可以进行加、减、乘、除等运算
- 变量命名要有意义,使用**驼峰命名法(Camel Case)**,如 `studentCount`

## 浮点数类型(Floating-point Number)

### 💡 概念讲解

如果说整数是"完整的苹果",那浮点数就是"可以切开的蛋糕"。当你需要表示价格(19.99 元)、身高(1.75 米)、温度(36.5 度)这类带小数的数据时,就需要用到浮点数。

在 Java 中,有两种浮点数类型:
- `float` - 单精度浮点数(较少使用)
- `double` - 双精度浮点数(推荐使用)

`double` 比 `float` 更精确,能存储更多小数位。就像用高清相机比普通相机拍照更清晰一样。

**什么时候用浮点数?**
- 金钱金额
- 物理测量值(身高、体重、距离)
- 科学计算
- 百分比和比率

### 📝 代码示例

```java
public class DoubleDemo {
    public static void main(String[] args) {
        // 声明 double 类型变量 declare double variables
        double price = 19.99;
        double height = 1.75;
        
        System.out.println("商品价格: " + price + "元");
        System.out.println("身高: " + height + "米");
        
        // 浮点数的运算 arithmetic operations with doubles
        double discount = 0.8;  // 8折
        double finalPrice = price * discount;
        System.out.println("打折后价格: " + finalPrice + "元");
        
        // 计算 BMI(体重指数) calculate BMI
        double weight = 65.5;  // 体重 weight in kg
        double bmi = weight / (height * height);
        System.out.println("BMI 指数: " + bmi);
    }
}
```

**代码解释:**
- `double price = 19.99;` - 声明一个双精度浮点数变量
- 小数点用 `.` 表示(不是中文的 `。`)
- 浮点数可以进行所有数学运算
- `*` 表示乘法,`/` 表示除法

### ✅ 验证方法

运行命令:
```bash
javac DoubleDemo.java
java DoubleDemo
```

**预期输出:**
```
商品价格: 19.99元
身高: 1.75米
打折后价格: 15.992元
BMI 指数: 21.387755102040817
```

::: tip 提示
你可能注意到 BMI 的小数位特别长。在实际应用中,我们通常会对结果进行**四舍五入(Round)**,但这个技巧我们后面再学。
:::

::: warning 注意
浮点数计算可能有微小误差。比如 `0.1 + 0.2` 在计算机中可能不完全等于 `0.3`,而是 `0.30000000000000004`。这是计算机二进制存储的特性,在处理金钱时需要特别注意。
:::

### 💪 练习题

**练习 1: 模仿练习**
创建一个程序,声明圆的半径(比如 5.5),计算圆的面积(公式:π × 半径²,π 取 3.14)。

**练习 2: 简单应用**
声明一件商品的原价 299.99,打 7 折,计算并输出折扣金额和最终价格。

**练习 3: 创新实践**
计算一个月的开销:房租 2500.50,餐费 1200.80,交通费 300.00,输出总开销。

### 📌 小结

- `double` 是 Java 中推荐使用的**浮点数类型(Floating-point Type)**
- 浮点数用来表示带小数的数值
- 小数点用英文句点 `.` 表示
- 浮点数运算可能有微小误差
- 声明时可以直接赋值小数,如 `double x = 3.14;`

## 字符串类型(String)

### 💡 概念讲解

如果前面的数字类型是数学作业,那**字符串(String)** 就是语文作业。字符串用来存储文字、句子、甚至一整段话。

你有没有想过,为什么要把文字叫做"字符串"呢?想象一下:每个文字就像一颗珠子,把它们串起来就成了一串项链。`"Hello"` 就是把 H、e、l、l、o 五个字符串起来。

在 Java 中,字符串有个特别之处:**它以大写字母 S 开头** - `String`。这是因为 String 实际上是一个类(Class),而不是基本数据类型。但作为初学者,你现在只需要知道如何使用它就够了。

**什么时候用字符串?**
- 姓名、地址
- 提示信息、错误信息
- 文件路径
- 任何需要显示给用户看的文字

### 📝 代码示例

```java
public class StringDemo {
    public static void main(String[] args) {
        // 声明字符串变量 declare string variables
        String name = "张三";
        String greeting = "你好";
        
        // 字符串必须用双引号包裹 strings must be enclosed in double quotes
        System.out.println(greeting + ", " + name + "!");
        
        // 字符串拼接 string concatenation
        String firstName = "Li";
        String lastName = "Ming";
        String fullName = firstName + " " + lastName;
        System.out.println("全名: " + fullName);
        
        // 字符串可以包含数字,但不能进行数学运算
        String phoneNumber = "13800138000";
        System.out.println("电话号码: " + phoneNumber);
        
        // 字符串和数字混合 mixing strings and numbers
        int age = 25;
        String message = name + "今年" + age + "岁";
        System.out.println(message);
        
        // 获取字符串长度 get string length
        int nameLength = name.length();
        System.out.println("姓名长度: " + nameLength + "个字符");
    }
}
```

**代码解释:**
- `String name = "张三";` - 声明字符串变量,值必须用**双引号(Double Quotes)** `""` 包裹
- `+` 号用于连接字符串,这叫做**字符串拼接(String Concatenation)**
- `.length()` 是一个**方法(Method)**,用来获取字符串的长度
- 字符串可以包含中文、英文、数字、符号等任何字符

### ✅ 验证方法

运行命令:
```bash
javac StringDemo.java
java StringDemo
```

**预期输出:**
```
你好, 张三!
全名: Li Ming
电话号码: 13800138000
张三今年25岁
姓名长度: 2个字符
```

::: danger 警告
字符串必须用双引号 `""`,不能用单引号 `''`。单引号在 Java 中有其他用途(表示单个字符)。
:::

::: tip 提示
当你用 `+` 连接字符串和数字时,Java 会自动把数字转换成字符串。比如 `"年龄:" + 25` 会变成 `"年龄:25"`。
:::

### 💪 练习题

**练习 1: 模仿练习**
创建一个自我介绍程序:声明你的姓名、城市、爱好(用字符串),然后拼接成一句完整的话输出。

**练习 2: 简单应用**
创建一个简单的名片:包含姓名、职业、邮箱、电话,每个信息单独一行输出。

**练习 3: 创新实践**
制作一个简单的商品标签:包含商品名称(字符串)、价格(double)、库存数量(int),用字符串拼接输出完整信息。

### 📌 小结

- `String` 用来存储文字和字符序列
- 字符串值必须用**双引号 `""`** 包裹
- 使用 `+` 进行字符串拼接
- `.length()` 方法获取字符串长度
- 字符串和数字可以混合拼接

## 布尔类型(Boolean)

### 💡 概念讲解

**布尔值(Boolean)** 是编程中最简单但也最强大的数据类型。它只有两个值:`true`(真)或 `false`(假)。就像电灯开关,只有"开"和"关"两种状态。

你有没有想过,为什么计算机需要"是"和"否"这种简单的概念?因为计算机底层就是靠无数个"开"和"关"的电路组成的。布尔值是计算机做决策的基础。

**什么时候用布尔值?**
- 判断用户是否登录
- 检查密码是否正确
- 判断游戏是否结束
- 检查库存是否充足
- 任何需要"是/否"、"真/假"判断的场景

### 📝 代码示例

```java
public class BooleanDemo {
    public static void main(String[] args) {
        // 声明布尔变量 declare boolean variables
        boolean isStudent = true;
        boolean hasLicense = false;
        
        System.out.println("是否是学生: " + isStudent);
        System.out.println("是否有驾照: " + hasLicense);
        
        // 布尔值常用于比较运算 booleans are often used in comparisons
        int age = 18;
        boolean isAdult = age >= 18;  // 大于等于 greater than or equal to
        System.out.println("是否成年: " + isAdult);
        
        int score = 85;
        boolean isPassed = score >= 60;  // 判断是否及格 check if passed
        System.out.println("是否及格: " + isPassed);
        
        // 比较运算符 comparison operators
        int a = 10;
        int b = 20;
        boolean isEqual = (a == b);  // 等于 equal to
        boolean isGreater = (a > b); // 大于 greater than
        boolean isLess = (a < b);    // 小于 less than
        
        System.out.println("a 等于 b: " + isEqual);
        System.out.println("a 大于 b: " + isGreater);
        System.out.println("a 小于 b: " + isLess);
    }
}
```

**代码解释:**
- `boolean isStudent = true;` - 声明布尔变量并赋值为 true
- `true` 和 `false` 是**关键字(Keyword)**,不需要加引号
- `>=` 表示"大于等于",`==` 表示"等于",`>` 表示"大于",`<` 表示"小于"
- 比较运算的结果是布尔值

### ✅ 验证方法

运行命令:
```bash
javac BooleanDemo.java
java BooleanDemo
```

**预期输出:**
```
是否是学生: true
是否有驾照: false
是否成年: true
是否及格: true
a 等于 b: false
a 大于 b: false
a 小于 b: true
```

::: warning 注意
常见错误:**判断相等要用两个等号 `==`**,不是一个等号 `=`。
- `boolean result = (5 == 5);` ✅ 正确,判断 5 是否等于 5
- `boolean result = (5 = 5);` ❌ 错误,这是赋值操作
:::

::: tip 提示
布尔变量通常以 `is`、`has`、`can` 等词开头,这样读起来更像自然语言:
- `isStudent` - 是学生吗?
- `hasLicense` - 有驾照吗?
- `canSwim` - 会游泳吗?
:::

### 💪 练习题

**练习 1: 模仿练习**
创建一个程序,声明你的年龄,判断是否大于 20 岁,是否小于 30 岁,用布尔变量存储结果并输出。

**练习 2: 简单应用**
模拟一个简单的登录检查:声明用户名 `"admin"` 和密码 `"123456"`,检查输入的用户名和密码是否正确(用布尔值表示)。

**练习 3: 创新实践**
创建一个购物资格检查程序:
- 年龄是否≥18岁
- 账户余额是否≥100元
- 是否是会员
分别用布尔变量存储并输出结果。

### 📌 小结

- `boolean` 类型只有两个值:`true` 和 `false`
- 布尔值用于表示"是/否"、"真/假"的状态
- **比较运算符(Comparison Operators)**:`==`(等于)、`!=`(不等于)、`>`(大于)、`<`(小于)、`>=`(大于等于)、`<=`(小于等于)
- 布尔变量命名常以 `is`、`has`、`can` 开头
- 判断相等用 `==`,不是 `=`

## 综合实践

现在让我们把四种数据类型结合起来,创建一个完整的程序:

```java
public class StudentInfo {
    public static void main(String[] args) {
        // 学生基本信息 basic student information
        String name = "李华";
        int age = 20;
        double height = 1.72;
        boolean isEnrolled = true;
        
        // 成绩信息 grade information
        double mathScore = 92.5;
        double englishScore = 88.0;
        double averageScore = (mathScore + englishScore) / 2;
        
        // 判断是否及格 check if passed
        boolean mathPassed = mathScore >= 60;
        boolean englishPassed = englishScore >= 60;
        
        // 输出完整信息 print complete information
        System.out.println("====== 学生信息卡 ======");
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age + "岁");
        System.out.println("身高: " + height + "米");
        System.out.println("是否在校: " + isEnrolled);
        System.out.println("----------------------");
        System.out.println("数学成绩: " + mathScore + "分");
        System.out.println("英语成绩: " + englishScore + "分");
        System.out.println("平均分: " + averageScore + "分");
        System.out.println("数学及格: " + mathPassed);
        System.out.println("英语及格: " + englishPassed);
        System.out.println("=======================");
    }
}
```

这个程序展示了如何:
- 使用不同数据类型存储不同类型的信息
- 进行数学计算
- 进行比较判断
- 用字符串拼接输出友好的信息

## 数据类型对照表

| 数据类型 | 英文 | 用途 | 示例值 | 默认值 |
|---------|------|------|--------|--------|
| `int` | Integer | 整数 | `42`, `-100`, `0` | `0` |
| `double` | Double | 浮点数 | `3.14`, `-0.5`, `99.99` | `0.0` |
| `String` | String | 字符串 | `"Hello"`, `"张三"` | `null` |
| `boolean` | Boolean | 布尔值 | `true`, `false` | `false` |

::: tip 最佳实践
- 整数用 `int`,除非数值特别大
- 小数用 `double`,不用 `float`
- 文字用 `String`,记得加双引号
- 是非判断用 `boolean`
- 变量名要有意义,使用驼峰命名法
:::

恭喜你!你已经掌握了 Java 的四种基础数据类型。这些是编程的基石,后面所有的知识都会建立在这些基础之上。现在你可以尝试创建自己的程序,用这些数据类型来描述你感兴趣的事物了。