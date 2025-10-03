---
title: 基础运算
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

在 Java 中,我们需要让计算机帮我们处理各种数据。就像你用计算器做算术题一样,Java 也能进行各种运算。今天我们要学习四种基本运算:赋值、数学运算、比较运算和逻辑运算。

## 赋值运算(Assignment)

### 💡 概念讲解

你可以把**赋值(Assignment)**想象成往一个盒子里放东西。这个"盒子"就是我们之前学过的**变量(Variable)**,而"放东西"这个动作就是赋值。

在 Java 中,我们用等号 `=` 来表示赋值。但要注意:这里的等号不是数学中的"相等",而是"把右边的值放到左边的变量里"。

```
变量名 = 值;
```

::: warning 注意
赋值的方向是从右到左!右边的值会被存储到左边的变量中。
:::

### 📝 代码示例

```java
public class AssignmentDemo {
    public static void main(String[] args) {
        // 把数字 10 赋值给变量 age
        int age = 10;
        System.out.println("年龄是: " + age);  // 输出: 年龄是: 10
        
        // 重新赋值 reassign value
        age = 15;
        System.out.println("现在年龄是: " + age);  // 输出: 现在年龄是: 15
        
        // 把一个变量的值赋给另一个变量 assign variable to variable
        int myAge = age;
        System.out.println("我的年龄是: " + myAge);  // 输出: 我的年龄是: 15
    }
}
```

### ✅ 验证方法

1. 将上面的代码保存为 `AssignmentDemo.java`
2. 在终端中运行:

```bash
javac AssignmentDemo.java
java AssignmentDemo
```

3. 如果成功,你会看到:
```
年龄是: 10
现在年龄是: 15
我的年龄是: 15
```

### 💪 练习题

1. 创建一个变量 `score`,赋值为 85,然后打印出来
2. 创建两个变量 `firstNumber` 和 `secondNumber`,先给 `firstNumber` 赋值 100,然后把 `firstNumber` 的值赋给 `secondNumber`
3. 创建一个字符串变量 `name`,赋值为你的名字,然后打印

### 📌 小结

- 赋值使用等号 `=`
- 赋值方向是从右到左
- 同一个变量可以被多次赋值,新值会覆盖旧值
- 变量之间可以相互赋值

## 数学运算(Arithmetic Operations)

### 💡 概念讲解

Java 可以像计算器一样做数学运算。我们有五种基本的**数学运算符(Arithmetic Operators)**:

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| `+` | 加法(Addition) | `5 + 3` | `8` |
| `-` | 减法(Subtraction) | `5 - 3` | `2` |
| `*` | 乘法(Multiplication) | `5 * 3` | `15` |
| `/` | 除法(Division) | `6 / 3` | `2` |
| `%` | 求余/取模(Modulus) | `5 % 3` | `2` |

::: tip 提示
求余运算 `%` 是什么?它会返回两个数相除后的余数。比如 5 除以 3 等于 1 余 2,所以 `5 % 3` 的结果就是 2。
:::

### 📝 代码示例

```java
public class ArithmeticDemo {
    public static void main(String[] args) {
        // 加法 addition
        int sum = 10 + 5;
        System.out.println("10 + 5 = " + sum);  // 输出: 10 + 5 = 15
        
        // 减法 subtraction
        int difference = 10 - 5;
        System.out.println("10 - 5 = " + difference);  // 输出: 10 - 5 = 5
        
        // 乘法 multiplication
        int product = 10 * 5;
        System.out.println("10 * 5 = " + product);  // 输出: 10 * 5 = 50
        
        // 除法 division
        int quotient = 10 / 5;
        System.out.println("10 / 5 = " + quotient);  // 输出: 10 / 5 = 2
        
        // 求余 modulus
        int remainder = 10 % 3;
        System.out.println("10 % 3 = " + remainder);  // 输出: 10 % 3 = 1
        
        // 组合运算 combined operations
        int result = (10 + 5) * 2;
        System.out.println("(10 + 5) * 2 = " + result);  // 输出: (10 + 5) * 2 = 30
    }
}
```

::: danger 警告
整数除法会直接舍弃小数部分!比如 `7 / 2` 的结果是 `3` 而不是 `3.5`。如果需要保留小数,要使用浮点数类型 `double`。
:::

### 更多除法示例

```java
public class DivisionDemo {
    public static void main(String[] args) {
        // 整数除法 integer division - 会丢失小数部分!
        int intResult = 7 / 2;
        System.out.println("7 / 2 (整数) = " + intResult);  // 输出: 3
        
        // 浮点数除法 floating-point division - 保留小数
        double doubleResult = 7.0 / 2.0;
        System.out.println("7.0 / 2.0 (小数) = " + doubleResult);  // 输出: 3.5
        
        // 混合运算 mixed operation - 只要有一个是小数,结果就是小数
        double mixedResult = 7 / 2.0;
        System.out.println("7 / 2.0 (混合) = " + mixedResult);  // 输出: 3.5
    }
}
```

### ✅ 验证方法

运行 `ArithmeticDemo.java`:
```bash
javac ArithmeticDemo.java
java ArithmeticDemo
```

运行 `DivisionDemo.java`:
```bash
javac DivisionDemo.java
java DivisionDemo
```

### 💪 练习题

1. 计算你的年龄乘以 12(得到你活了多少个月),并打印结果
2. 有 17 个苹果,平均分给 5 个人,每人能分几个?还剩几个?(提示:用除法和求余)
3. 计算这个表达式的结果:`(20 + 10) / 3 * 2`

### 📌 小结

- 加减乘除使用 `+` `-` `*` `/` 运算符
- 求余运算 `%` 返回除法的余数
- 整数除法会舍弃小数部分
- 可以用括号改变运算顺序
- 至少有一个小数参与运算,结果才会是小数

## 比较运算(Comparison Operations)

### 💡 概念讲解

有时候我们需要比较两个值的大小关系,比如"年龄是否大于 18"、"分数是否等于 100"。**比较运算(Comparison)**的结果只有两种可能:**真(true)**或**假(false)**。

这种只有"真"或"假"两个值的数据类型叫做**布尔类型(Boolean)**,在 Java 中用 `boolean` 表示。

| 运算符 | 名称 | 示例 | 含义 |
|--------|------|------|------|
| `==` | 等于(Equal to) | `5 == 5` | 判断两个值是否相等 |
| `!=` | 不等于(Not equal to) | `5 != 3` | 判断两个值是否不相等 |
| `>` | 大于(Greater than) | `5 > 3` | 判断左边是否大于右边 |
| `<` | 小于(Less than) | `3 < 5` | 判断左边是否小于右边 |
| `>=` | 大于等于(Greater than or equal to) | `5 >= 5` | 判断左边是否大于或等于右边 |
| `<=` | 小于等于(Less than or equal to) | `3 <= 5` | 判断左边是否小于或等于右边 |

::: warning 注意
"等于"是两个等号 `==`,不是一个等号!一个等号 `=` 是赋值,两个等号 `==` 才是比较是否相等。
:::

### 📝 代码示例

```java
public class ComparisonDemo {
    public static void main(String[] args) {
        int age = 20;
        int adultAge = 18;
        
        // 等于 equal to
        boolean isExactly20 = (age == 20);
        System.out.println("年龄是 20 吗? " + isExactly20);  // 输出: true
        
        // 不等于 not equal to
        boolean isNot18 = (age != 18);
        System.out.println("年龄不是 18 吗? " + isNot18);  // 输出: true
        
        // 大于 greater than
        boolean isAdult = (age > adultAge);
        System.out.println("是成年人吗? " + isAdult);  // 输出: true
        
        // 小于 less than
        boolean isChild = (age < 18);
        System.out.println("是小孩吗? " + isChild);  // 输出: false
        
        // 大于等于 greater than or equal to
        boolean canVote = (age >= 18);
        System.out.println("能投票吗? " + canVote);  // 输出: true
        
        // 小于等于 less than or equal to
        boolean isYoung = (age <= 25);
        System.out.println("是年轻人吗? " + isYoung);  // 输出: true
        
        // 比较运算的结果可以直接打印 print comparison result directly
        System.out.println("10 > 5 的结果是: " + (10 > 5));  // 输出: true
        System.out.println("10 == 5 的结果是: " + (10 == 5));  // 输出: false
    }
}
```

### ✅ 验证方法

运行代码:
```bash
javac ComparisonDemo.java
java ComparisonDemo
```

你应该看到多个 `true` 和 `false` 的输出结果。

### 💪 练习题

1. 创建一个变量 `score` 赋值为 85,判断它是否大于等于 60(及格线)
2. 创建两个变量 `price1 = 50` 和 `price2 = 50`,判断它们是否相等
3. 判断 15 是否小于 10,并打印结果

### 📌 小结

- 比较运算的结果是布尔类型(`boolean`),只有 `true` 或 `false`
- `==` 是判断相等,`=` 是赋值,不要混淆
- `!=` 表示不等于
- `>` `<` `>=` `<=` 用于比较大小关系
- 比较运算常用于判断条件

## 逻辑运算(Logical Operations)

### 💡 概念讲解

有时候我们需要组合多个条件。比如:"年龄大于 18 **并且** 有驾照才能开车"、"是学生 **或者** 是老师可以进入图书馆"。这就需要用到**逻辑运算(Logical Operations)**。

逻辑运算符用于连接多个布尔值(true/false),结果也是布尔值。

| 运算符 | 名称 | 含义 | 示例 |
|--------|------|------|------|
| `&&` | 逻辑与(AND) | 两个条件都为真,结果才为真 | `true && true` → `true` |
| `\|\|` | 逻辑或(OR) | 只要有一个条件为真,结果就为真 | `true \|\| false` → `true` |
| `!` | 逻辑非(NOT) | 取反,真变假,假变真 | `!true` → `false` |

### 💡 理解 AND 运算 (&&)

想象你要进入一个需要门禁卡**并且**需要指纹的房间:
- 有卡 **并且** 有指纹 → 能进入 ✅
- 有卡 **但没有** 指纹 → 不能进入 ❌
- 没有卡 **但有** 指纹 → 不能进入 ❌
- 没有卡 **也没有** 指纹 → 不能进入 ❌

只有两个条件**都满足**,结果才是 `true`。

### 💡 理解 OR 运算 (||)

想象你可以用现金**或者**信用卡付款:
- 有现金 **或者** 有信用卡 → 能付款 ✅
- 有现金 **但没有** 信用卡 → 能付款 ✅
- 没有现金 **但有** 信用卡 → 能付款 ✅
- 没有现金 **也没有** 信用卡 → 不能付款 ❌

只要**至少一个**条件满足,结果就是 `true`。

### 📝 代码示例

```java
public class LogicalDemo {
    public static void main(String[] args) {
        int age = 20;
        boolean hasLicense = true;
        boolean isStudent = false;
        
        // 逻辑与 AND - 两个条件都要满足
        boolean canDrive = (age >= 18) && hasLicense;
        System.out.println("能开车吗? " + canDrive);  // 输出: true
        // 因为 age >= 18 是 true, hasLicense 是 true, true && true = true
        
        // 逻辑或 OR - 至少一个条件满足就行
        boolean canEnterLibrary = isStudent || (age < 12);
        System.out.println("能进图书馆吗? " + canEnterLibrary);  // 输出: false
        // 因为 isStudent 是 false, age < 12 也是 false, false || false = false
        
        // 逻辑非 NOT - 取反
        boolean isNotStudent = !isStudent;
        System.out.println("不是学生吗? " + isNotStudent);  // 输出: true
        // 因为 isStudent 是 false, !false = true
        
        // 复杂组合 complex combination
        boolean canGetDiscount = (age < 18 || age > 60) && isStudent;
        System.out.println("能打折吗? " + canGetDiscount);  // 输出: false
        // age < 18 是 false, age > 60 是 false, false || false = false
        // false && isStudent = false
    }
}
```

### 真值表(Truth Table)

这是逻辑运算的完整结果表:

**AND (&&) 运算:**
```
true  && true  = true
true  && false = false
false && true  = false
false && false = false
```

**OR (||) 运算:**
```
true  || true  = true
true  || false = true
false || true  = true
false || false = false
```

**NOT (!) 运算:**
```
!true  = false
!false = true
```

### 📝 更多实战示例

```java
public class LogicalPractice {
    public static void main(String[] args) {
        // 场景1: 电影票优惠 movie ticket discount
        int age = 15;
        boolean isWeekend = true;
        
        // 儿童(12岁以下)或老人(65岁以上)在周末可以享受优惠
        boolean getDiscount = ((age < 12) || (age > 65)) && isWeekend;
        System.out.println("能享受优惠吗? " + getDiscount);  // 输出: false
        
        // 场景2: 登录验证 login validation
        String username = "admin";
        String password = "123456";
        
        boolean isCorrectUser = username.equals("admin");
        boolean isCorrectPass = password.equals("123456");
        boolean canLogin = isCorrectUser && isCorrectPass;
        System.out.println("能登录吗? " + canLogin);  // 输出: true
        
        // 场景3: 考试通过条件 pass exam condition
        int mathScore = 85;
        int englishScore = 70;
        
        // 两门都及格(>=60)才算通过
        boolean passMath = mathScore >= 60;
        boolean passEnglish = englishScore >= 60;
        boolean passExam = passMath && passEnglish;
        System.out.println("考试通过了吗? " + passExam);  // 输出: true
        
        // 或者总分大于等于150也算通过
        int totalScore = mathScore + englishScore;
        boolean passExamAlt = passExam || (totalScore >= 150);
        System.out.println("通过考试了吗(方式2)? " + passExamAlt);  // 输出: true
    }
}
```

::: tip 提示
字符串比较要用 `.equals()` 方法,不能用 `==`。这是因为字符串是对象,`==` 比较的是对象的地址,而 `.equals()` 比较的是内容。
:::

### ✅ 验证方法

运行代码:
```bash
javac LogicalDemo.java
java LogicalDemo
```

```bash
javac LogicalPractice.java
java LogicalPractice
```

### 💪 练习题

1. 创建一个判断:年龄在 13 到 19 之间(包括13和19)的是青少年,写出这个判断条件
2. 判断一个人是否可以免费乘坐公交:6岁以下**或者**70岁以上可以免费
3. 判断一个数是否在 1 到 100 之间(包括1和100)

::: tip 练习提示
第1题:"在 13 到 19 之间"意味着要同时满足"大于等于13"**并且**"小于等于19"
:::

### 📌 小结

- `&&` (AND) 要求所有条件都为真,结果才为真
- `||` (OR) 只要有一个条件为真,结果就为真
- `!` (NOT) 对布尔值取反
- 逻辑运算符连接的是布尔值(true/false)
- 可以用括号控制运算顺序
- 字符串比较用 `.equals()` 方法,不用 `==`

## 综合练习

现在让我们把所有学到的运算结合起来:

```java
public class ComprehensiveExercise {
    public static void main(String[] args) {
        // 商品购买场景 shopping scenario
        int productPrice = 120;  // 商品价格 product price
        int quantity = 3;  // 购买数量 quantity
        int userAge = 16;  // 用户年龄 user age
        boolean isMember = true;  // 是否会员 is member
        
        // 1. 计算总价 calculate total price
        int totalPrice = productPrice * quantity;
        System.out.println("总价: " + totalPrice + " 元");
        
        // 2. 判断是否可以打折 check if eligible for discount
        // 会员或者18岁以下可以打9折
        boolean canDiscount = isMember || (userAge < 18);
        System.out.println("可以打折吗? " + canDiscount);
        
        // 3. 计算折后价 calculate discounted price
        double finalPrice;
        if (canDiscount) {
            finalPrice = totalPrice * 0.9;  // 9折 10% off
        } else {
            finalPrice = totalPrice;
        }
        System.out.println("最终价格: " + finalPrice + " 元");
        
        // 4. 判断是否超预算 check if over budget
        int budget = 300;
        boolean overBudget = finalPrice > budget;
        System.out.println("超预算了吗? " + overBudget);
        
        // 5. 计算需要补多少钱 calculate how much more money needed
        if (overBudget) {
            double shortage = finalPrice - budget;
            System.out.println("还需要: " + shortage + " 元");
        } else {
            double remaining = budget - finalPrice;
            System.out.println("还剩余: " + remaining + " 元");
        }
    }
}
```

::: tip 关于 if 语句
这里出现了 `if` 语句,它用于根据条件执行不同的代码。格式是:
```java
if (条件) {
    // 条件为真时执行
} else {
    // 条件为假时执行
}
```
我们会在后续章节详细学习,这里只需要理解它的作用即可。
:::

## 运算符优先级

你有没有想过,当一个表达式中有多个运算符时,Java 会先算哪个?

就像数学中"先乘除后加减"一样,Java 的运算符也有优先级:

1. `()` 括号(最高优先级)
2. `!` 逻辑非
3. `*` `/` `%` 乘除求余
4. `+` `-` 加减
5. `>` `<` `>=` `<=` 比较大小
6. `==` `!=` 判断相等
7. `&&` 逻辑与
8. `||` 逻辑或
9. `=` 赋值(最低优先级)

```java
public class PriorityDemo {
    public static void main(String[] args) {
        // 没有括号 without parentheses
        int result1 = 10 + 5 * 2;  // 先算 5*2=10, 再算 10+10=20
        System.out.println("10 + 5 * 2 = " + result1);  // 输出: 20
        
        // 有括号 with parentheses
        int result2 = (10 + 5) * 2;  // 先算 10+5=15, 再算 15*2=30
        System.out.println("(10 + 5) * 2 = " + result2);  // 输出: 30
        
        // 复杂表达式 complex expression
        boolean result3 = 10 > 5 && 8 < 20 || false;
        // 先算比较: 10>5 是 true, 8<20 是 true
        // 再算 &&: true && true 是 true
        // 最后算 ||: true || false 是 true
        System.out.println("结果是: " + result3);  // 输出: true
    }
}
```

::: tip 最佳实践
当表达式复杂时,**建议使用括号**明确运算顺序,这样代码更易读,也不容易出错。
:::

## 常见错误与解决

### 错误1: 混淆 = 和 ==

```java
// ❌ 错误
int age = 18;
if (age = 18) {  // 这是赋值,不是比较!
    System.out.println("成年了");
}

// ✅ 正确
if (age == 18) {  // 这才是比较
    System.out.println("成年了");
}
```

### 错误2: 整数除法丢失小数

```java
// ❌ 错误
int result = 7 / 2;  // 结果是 3,不是 3.5
System.out.println(result);  // 输出: 3

// ✅ 正确
double result = 7.0 / 2.0;  // 结果是 3.5
System.out.println(result);  // 输出: 3.5
```

### 错误3: 字符串比较用 ==

```java
// ❌ 错误(有时能用但不推荐)
String name1 = "Tom";
String name2 = "Tom";
if (name1 == name2) {  // 比较的是地址,不是内容
    System.out.println("相同");
}

// ✅ 正确
if (name1.equals(name2)) {  // 比较内容
    System.out.println("相同");
}
```

## 本章总结

恭喜你!你已经掌握了 Java 的基础运算。让我们回顾一下:

✅ **赋值运算**: 用 `=` 把值存入变量,方向是从右到左

✅ **数学运算**: 
   - `+` `-` `*` `/` `%` 五种运算符
   - 整数除法会舍弃小数部分
   - 用括号改变运算顺序

✅ **比较运算**: 
   - `==` `!=` `>` `<` `>=` `<=` 六种运算符
   - 结果是布尔类型(true/false)
   - `==` 是比较,`=` 是赋值

✅ **逻辑运算**:
   - `&&` (AND) 要求全部为真
   - `||` (OR) 至少一个为真
   - `!` (NOT) 取反
   - 用于组合多个条件

这些运算是编程的基础,后面我们会不断使用它们。建议你多写几个小程序练习,直到能熟练运用!