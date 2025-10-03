---
title: 开发环境搭建
category: Java
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 基础运算

在编程的世界里,计算机就像一个超级快速的计算器。你在生活中用计算器做加减乘除,在 Java 中也可以让计算机帮你完成这些运算。但编程中的"运算"不仅仅是数学计算,还包括比较大小、做逻辑判断等等。这一章,我们将学习 Java 中最基础的几种运算方式。

## 💡 赋值运算(Assignment)

### 什么是赋值?

想象你有一个空盒子,你把一个苹果放进去,这个过程就是"赋值"。在编程中:
- **变量(Variable)** 就是那个盒子
- **值(Value)** 就是你要放进去的东西
- **等号 `=`** 表示"把右边的东西放到左边的盒子里"

::: warning 注意
编程中的 `=` 不是"相等"的意思,而是"赋值"!这和数学课上学的不一样。
:::

### 📝 代码示例

```java
public class AssignmentDemo {
    public static void main(String[] args) {
        // 赋值运算 assign values to variables
        int age = 25;  // 把数字 25 放到名为 age 的盒子里
        double price = 19.99;  // 把小数 19.99 放到名为 price 的盒子里
        String name = "张三";  // 把文字"张三"放到名为 name 的盒子里
        
        // 打印这些值 print values
        System.out.println("年龄: " + age);
        System.out.println("价格: " + price);
        System.out.println("姓名: " + name);
        
        // 重新赋值 reassign value
        age = 26;  // 把盒子里的 25 扔掉,放入新的 26
        System.out.println("新年龄: " + age);
    }
}
```

### ✅ 验证方法

1. 将上述代码保存为 `AssignmentDemo.java`
2. 在终端运行:
```bash
javac AssignmentDemo.java
java AssignmentDemo
```

**如果成功,你会看到:**
```
年龄: 25
价格: 19.99
姓名: 张三
新年龄: 26
```

### 💪 练习题

1. 创建一个变量 `score`,赋值为 95,然后打印出来
2. 创建一个变量 `temperature`,先赋值为 30,然后改为 25,打印两次看看变化
3. 创建三个变量:你的名字、年龄和城市,并全部打印出来

---

## 💡 数学运算(Arithmetic Operations)

### 基本运算符

Java 提供了五种基本的数学运算符(Operator):

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| `+` | 加法(Addition) | `5 + 3` | `8` |
| `-` | 减法(Subtraction) | `5 - 3` | `2` |
| `*` | 乘法(Multiplication) | `5 * 3` | `15` |
| `/` | 除法(Division) | `6 / 3` | `2` |
| `%` | 求余(Modulus) | `5 % 3` | `2` |

::: tip 为什么用 `*` 而不是 `×`?
因为键盘上没有 `×` 符号,所以编程语言都用 `*` 代表乘法。同理,用 `/` 代表除法。
:::

### 📝 代码示例

```java
public class ArithmeticDemo {
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
        
        // 求余 modulus (remainder)
        int remainder = a % b;
        System.out.println("求余: " + a + " % " + b + " = " + remainder);
    }
}
```

### 🤔 求余运算是什么?

求余(也叫取模)就是求"余数"。比如 10 个苹果分给 3 个人:
- 每人能分到 3 个(这是除法: `10 / 3 = 3`)
- 还剩 1 个(这是求余: `10 % 3 = 1`)

**生活中的应用:**
- 判断奇偶数: `number % 2 == 0` 就是偶数
- 循环显示: 比如一周 7 天,第 8 天又回到星期一

### ✅ 验证方法

运行上述代码,你会看到:
```
加法: 10 + 3 = 13
减法: 10 - 3 = 7
乘法: 10 * 3 = 30
除法: 10 / 3 = 3
求余: 10 % 3 = 1
```

::: warning 除法的小陷阱
注意 `10 / 3` 的结果是 `3` 而不是 `3.333...`!这是因为 `int` 类型只能存储整数。如果你想要小数结果,需要使用 `double`:

```java
double result = 10.0 / 3.0;  // 结果是 3.3333...
```
:::

### 💪 练习题

1. 计算一个长方形的面积:长 12,宽 5
2. 你有 50 元,买了一支 15 元的笔,还剩多少钱?
3. 判断 17 是奇数还是偶数(提示:用求余运算 `17 % 2`)
4. 23 个学生坐车,每辆车坐 5 人,需要几辆车?还剩几个座位?

---

## 💡 比较运算(Comparison Operations)

### 什么是比较?

比较运算就像你在做选择题:"A 和 B 谁更高?""我的分数够不够 60 分?"。比较的结果只有两种可能:
- `true` (真,表示"是的")
- `false` (假,表示"不是")

### 比较运算符

| 运算符 | 名称 | 示例 | 含义 |
|--------|------|------|------|
| `==` | 等于(Equal to) | `5 == 5` | 左边等于右边吗? |
| `!=` | 不等于(Not equal to) | `5 != 3` | 左边不等于右边吗? |
| `>` | 大于(Greater than) | `5 > 3` | 左边大于右边吗? |
| `<` | 小于(Less than) | `3 < 5` | 左边小于右边吗? |
| `>=` | 大于等于(Greater than or equal to) | `5 >= 5` | 左边大于或等于右边吗? |
| `<=` | 小于等于(Less than or equal to) | `3 <= 5` | 左边小于或等于右边吗? |

::: danger 特别注意
判断相等用 `==` (两个等号),不是 `=` (一个等号)!
- `a == b` 是在"问":a 等于 b 吗?
- `a = b` 是在"做":把 b 的值赋给 a
:::

### 📝 代码示例

```java
public class ComparisonDemo {
    public static void main(String[] args) {
        int score = 85;
        int passingScore = 60;
        
        // 等于 equal to
        boolean isPerfect = (score == 100);
        System.out.println("是满分吗? " + isPerfect);  // false
        
        // 不等于 not equal to
        boolean isNotZero = (score != 0);
        System.out.println("不是零分吗? " + isNotZero);  // true
        
        // 大于 greater than
        boolean isPass = (score > passingScore);
        System.out.println("及格了吗? " + isPass);  // true
        
        // 小于 less than
        boolean isFail = (score < passingScore);
        System.out.println("不及格吗? " + isFail);  // false
        
        // 大于等于 greater than or equal to
        boolean isExcellent = (score >= 90);
        System.out.println("优秀吗(>=90)? " + isExcellent);  // false
        
        // 小于等于 less than or equal to
        boolean isGood = (score <= 90);
        System.out.println("良好或以下(<=90)? " + isGood);  // true
    }
}
```

### ✅ 验证方法

运行代码,你会看到:
```
是满分吗? false
不是零分吗? true
及格了吗? true
不及格吗? false
优秀吗(>=90)? false
良好或以下(<=90)? true
```

### 💪 练习题

1. 创建一个变量 `age = 18`,判断是否成年(>= 18)
2. 创建两个变量 `temperature = 30` 和 `hotThreshold = 28`,判断天气是否炎热
3. 判断 `100 / 3` 是否等于 `33`
4. 创建变量 `money = 50`,判断是否买得起 `price = 60` 的商品

---

## 💡 逻辑运算(Logical Operations)

### 什么是逻辑运算?

生活中你经常会做这样的判断:
- "如果**既**下雨**又**刮风,我就不出门" (需要两个条件都满足)
- "如果**要么**下雨**要么**刮风,我就带伞" (只需要一个条件满足)

逻辑运算就是用来组合多个条件的。

### 三个逻辑运算符

| 运算符 | 名称 | 含义 | 示例 |
|--------|------|------|------|
| `&&` | 逻辑与(AND) | 两个都要是 true | `(age >= 18) && (hasLicense)` |
| `\|\|` | 逻辑或(OR) | 至少一个是 true | `(isRaining) \|\| (isSnowing)` |
| `!` | 逻辑非(NOT) | 取反 | `!(isWeekend)` |

### 真值表(Truth Table)

**AND (`&&`) - 都真才真:**

| A | B | A && B |
|---|---|--------|
| true | true | true ✅ |
| true | false | false |
| false | true | false |
| false | false | false |

**OR (`||`) - 一真即真:**

| A | B | A \|\| B |
|---|---|----------|
| true | true | true ✅ |
| true | false | true ✅ |
| false | true | true ✅ |
| false | false | false |

### 📝 代码示例

```java
public class LogicalDemo {
    public static void main(String[] args) {
        // 场景:电影院购票规则
        int age = 20;
        boolean hasStudentCard = true;
        boolean isWeekend = false;
        
        // AND 运算 - 学生票条件:年龄<25 且 有学生证
        boolean canBuyStudentTicket = (age < 25) && hasStudentCard;
        System.out.println("可以买学生票吗? " + canBuyStudentTicket);  // true
        
        // OR 运算 - 打折条件:是学生 或 是周末
        boolean hasDiscount = (hasStudentCard) || (isWeekend);
        System.out.println("可以打折吗? " + hasDiscount);  // true
        
        // NOT 运算 - 需要全价吗?(没有折扣)
        boolean needFullPrice = !hasDiscount;
        System.out.println("需要全价吗? " + needFullPrice);  // false
        
        // 复杂条件组合 complex condition
        // 免费入场:年龄<12 或者 (是周末 且 有学生证)
        boolean canEnterFree = (age < 12) || (isWeekend && hasStudentCard);
        System.out.println("可以免费入场吗? " + canEnterFree);  // false
    }
}
```

### 🤔 运算优先级

当多个逻辑运算组合时,执行顺序是:
1. `!` (NOT) - 最先执行
2. `&&` (AND) - 其次
3. `||` (OR) - 最后

**建议:** 用小括号 `()` 明确表达你的意图,让代码更易读!

```java
// 不清晰 unclear
boolean result = a || b && c;

// 清晰 clear
boolean result = a || (b && c);
```

### ✅ 验证方法

运行代码,你会看到:
```
可以买学生票吗? true
可以打折吗? true
需要全价吗? false
可以免费入场吗? false
```

### 💪 练习题

1. **餐厅优惠规则:** 
   - 变量: `age = 65`, `isMember = true`
   - 规则: 年龄 >= 60 或者 是会员,可以打折
   - 判断是否能打折

2. **游乐园入场规则:**
   - 变量: `height = 140`, `hasAdult = true`
   - 规则: 身高 >= 150 或者 (身高 >= 120 且 有成人陪同)
   - 判断是否能入场

3. **登录验证:**
   - 变量: `username = "admin"`, `password = "123456"`, `isCaptchaCorrect = true`
   - 规则: 用户名正确 且 密码正确 且 验证码正确
   - 判断是否能登录

---

## 📌 本章小结

让我们回顾一下今天学到的四种运算:

### 1️⃣ 赋值运算(Assignment)
- 用 `=` 把值放到变量里
- 记住: `=` 不是"相等",而是"赋值"
- 可以随时重新赋值

### 2️⃣ 数学运算(Arithmetic)
- 五种运算符: `+` `-` `*` `/` `%`
- 求余 `%` 用来算余数,常用于判断奇偶
- 注意整数除法会丢掉小数部分

### 3️⃣ 比较运算(Comparison)
- 结果只有 `true` 或 `false`
- 六种运算符: `==` `!=` `>` `<` `>=` `<=`
- 特别注意: 判断相等用 `==`,不是 `=`

### 4️⃣ 逻辑运算(Logical)
- `&&` (AND): 都真才真
- `||` (OR): 一真即真  
- `!` (NOT): 取反
- 用括号让复杂条件更清晰

::: tip 下一步建议
完成所有练习题后,尝试组合这些运算:
- 用数学运算计算结果
- 用比较运算判断条件
- 用逻辑运算组合多个条件
- 把结果赋值给变量并打印

这样你就掌握了 Java 运算的核心技能!
:::