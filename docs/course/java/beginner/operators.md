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

在编程世界里,计算机最擅长的就是"算"。无论是购物网站计算总价、游戏计算伤害值,还是社交软件统计点赞数,背后都离不开各种运算。这一章,我们将学习 Java 中最基础也最常用的运算操作。

## 赋值运算:给变量装入数据

### 💡 概念讲解

你可以把**变量(Variable)**想象成一个带标签的盒子。**赋值(Assignment)**就是把东西放进这个盒子的过程。在 Java 中,我们使用等号 `=` 来完成赋值操作。

::: warning 注意
编程中的 `=` 不是"等于"的意思,而是"把右边的值放到左边的变量里"。这和数学课本上的等号完全不同!
:::

赋值的方向永远是:**从右向左**。计算机会先计算右边的结果,然后把结果存入左边的变量。

### 📝 代码示例

```java
public class AssignmentDemo {
    public static void main(String[] args) {
        // 声明变量并赋值 declare and assign
        int age = 25;  // 把数字 25 存入名为 age 的盒子
        
        // 先声明,后赋值 declare first, assign later
        int score;     // 先准备好盒子
        score = 98;    // 再把数字放进去
        
        // 可以多次赋值,新值会覆盖旧值 reassign with new value
        int level = 1;
        System.out.println("初始等级: " + level);  // 输出 1
        
        level = 5;     // 重新赋值
        System.out.println("升级后: " + level);    // 输出 5
        
        // 把一个变量的值赋给另一个变量 copy value from one variable to another
        int playerScore = 100;
        int backupScore = playerScore;  // 把 playerScore 的值复制给 backupScore
        System.out.println("备份分数: " + backupScore);  // 输出 100
    }
}
```

### ✅ 验证方法

1. 创建文件 `AssignmentDemo.java`,复制上面的代码
2. 运行程序:
```bash
javac AssignmentDemo.java
java AssignmentDemo
```
3. 如果成功,你会看到:
```
初始等级: 1
升级后: 5
备份分数: 100
```

### 💪 练习题

1. **基础练习**:创建一个变量 `money`,赋值 500,然后输出它
2. **进阶练习**:创建两个变量 `price` 和 `finalPrice`,把 `price` 的值复制给 `finalPrice`
3. **挑战练习**:声明一个变量 `count`,先赋值 10,输出,再赋值 20,再输出

### 📌 小结

- 赋值使用 `=` 符号,从右向左执行
- 变量可以多次赋值,新值会覆盖旧值
- `int x = 10;` 是声明+赋值的简写
- 赋值是把值**复制**到变量中,不是"移动"

---

## 算术运算:让计算机帮你算数

### 💡 概念讲解

Java 提供了五种基本的**算术运算符(Arithmetic Operators)**,它们和计算器上的按钮作用类似:

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| `+` | 加法(Addition) | `5 + 3` | 8 |
| `-` | 减法(Subtraction) | `5 - 3` | 2 |
| `*` | 乘法(Multiplication) | `5 * 3` | 15 |
| `/` | 除法(Division) | `6 / 3` | 2 |
| `%` | 取余(Modulus) | `5 % 3` | 2 |

::: tip 提示
乘法用 `*` 而不是 `×`,除法用 `/` 而不是 `÷`。这是编程的通用写法!
:::

**取余运算(%)**可能是你第一次见到的。它的意思是"除法后剩下的余数"。比如 `5 % 3` 就是 5 除以 3 余 2。

### 📝 代码示例

```java
public class ArithmeticDemo {
    public static void main(String[] args) {
        // 加法 addition
        int apples = 5;
        int oranges = 3;
        int totalFruits = apples + oranges;
        System.out.println("总水果数: " + totalFruits);  // 输出 8
        
        // 减法 subtraction
        int money = 100;
        int spent = 35;
        int remaining = money - spent;
        System.out.println("剩余金额: " + remaining);    // 输出 65
        
        // 乘法 multiplication
        int price = 15;
        int quantity = 4;
        int total = price * quantity;
        System.out.println("总价: " + total);            // 输出 60
        
        // 除法 division
        int cookies = 20;
        int friends = 4;
        int perPerson = cookies / friends;
        System.out.println("每人分到: " + perPerson);    // 输出 5
        
        // 取余 modulus - 判断奇偶数很有用
        int number = 7;
        int remainder = number % 2;
        System.out.println("7 除以 2 的余数: " + remainder);  // 输出 1
        
        // 实用案例:判断是否整除 check if divisible
        int eggs = 10;
        int boxSize = 3;
        int leftover = eggs % boxSize;
        System.out.println("剩余鸡蛋: " + leftover);      // 输出 1 (说明不能整除)
    }
}
```

::: danger 警告:整数除法的陷阱
```java
int result = 5 / 2;
System.out.println(result);  // 输出 2,不是 2.5!
```
当两个整数相除时,结果会舍弃小数部分。如果需要小数结果,至少一个数要用 `double` 类型。
:::

### ✅ 验证方法

运行上面的代码,检查每个输出是否符合预期。特别留意除法和取余的结果。

### 💪 练习题

1. **基础练习**:计算你的年龄乘以 12(一年有多少个月),输出结果
2. **进阶练习**:有 17 个苹果,每 5 个装一盒,计算能装几盒,还剩几个
3. **挑战练习**:计算一个三位数 `456` 的各位数字之和(提示:用 `/` 和 `%` 分离出各位数字)

### 📌 小结

- 加减乘除的符号是 `+ - * /`
- 取余 `%` 返回除法的余数,常用于判断整除
- 整数除法会丢弃小数部分
- 运算优先级:乘除取余 > 加减(和数学一样)
- 可以用小括号 `()` 改变优先级

---

## 比较运算:判断两个值的关系

### 💡 概念讲解

在生活中,我们经常需要比较:"价格是否相同?""分数是否及格?""年龄是否足够?"。在编程中,我们使用**比较运算符(Comparison Operators)**来做这些判断。

比较运算的结果只有两种可能:
- `true` (真,表示"是的,符合条件")
- `false` (假,表示"不,不符合")

这种只有两个值的类型叫做**布尔类型(Boolean)**。

| 运算符 | 含义 | 示例 | 结果 |
|--------|------|------|------|
| `==` | 相等(Equal) | `5 == 5` | true |
| `!=` | 不相等(Not Equal) | `5 != 3` | true |
| `>` | 大于(Greater Than) | `5 > 3` | true |
| `<` | 小于(Less Than) | `5 < 3` | false |
| `>=` | 大于等于(Greater or Equal) | `5 >= 5` | true |
| `<=` | 小于等于(Less or Equal) | `3 <= 5` | true |

::: warning 注意
判断相等用 `==`(两个等号),不是 `=`(一个等号)!
- `=` 是赋值:"把值放进变量"
- `==` 是比较:"两个值是否相同"

这是新手最容易犯的错误!
:::

### 📝 代码示例

```java
public class ComparisonDemo {
    public static void main(String[] args) {
        int myAge = 20;
        int friendAge = 22;
        
        // 相等比较 equal comparison
        boolean sameAge = (myAge == friendAge);
        System.out.println("年龄相同吗? " + sameAge);  // 输出 false
        
        // 不相等比较 not equal comparison
        boolean differentAge = (myAge != friendAge);
        System.out.println("年龄不同吗? " + differentAge);  // 输出 true
        
        // 大于比较 greater than comparison
        int score = 85;
        boolean passed = (score > 60);
        System.out.println("及格了吗? " + passed);  // 输出 true
        
        // 小于比较 less than comparison
        int temperature = 15;
        boolean cold = (temperature < 20);
        System.out.println("天气冷吗? " + cold);  // 输出 true
        
        // 大于等于 greater or equal
        int vipLevel = 5;
        boolean canAccess = (vipLevel >= 5);
        System.out.println("可以访问高级功能吗? " + canAccess);  // 输出 true
        
        // 小于等于 less or equal
        int stock = 10;
        boolean needRestock = (stock <= 10);
        System.out.println("需要补货吗? " + needRestock);  // 输出 true
        
        // 实用案例:判断数字范围 check if number is in range
        int userAge = 16;
        boolean isTeenager = (userAge >= 13) && (userAge <= 19);  // 稍后会学 &&
        System.out.println("是青少年吗? " + isTeenager);
    }
}
```

::: tip 提示
比较运算常常和后面要学的 `if` 语句搭配使用,比如:"如果分数大于60,就显示及格"。现在先记住这些运算符怎么用。
:::

### ✅ 验证方法

1. 运行程序,观察每个比较的结果
2. 尝试修改变量的值,看结果如何变化
3. 特别留意 `>=` 和 `<=` 在相等时的表现

### 💪 练习题

1. **基础练习**:声明两个变量 `price1 = 50` 和 `price2 = 50`,比较它们是否相等
2. **进阶练习**:判断一个分数 `score = 72` 是否在 60~90 之间(需要用到两次比较)
3. **挑战练习**:判断一个数 `num = 15` 是否不等于 10(用 `!=`)

### 📌 小结

- 比较运算符用于判断两个值的关系
- 结果是 `boolean` 类型,只有 `true` 或 `false`
- `==` 判断相等,`!=` 判断不相等
- `>` `<` `>=` `<=` 用于比较大小
- 不要把 `=`(赋值) 和 `==`(比较) 混淆

---

## 逻辑运算:组合多个条件

### 💡 概念讲解

现实生活中的判断往往不是单一条件:"要买这个商品,价格要便宜**并且**质量要好";"可以出门玩,如果完成作业**或者**是周末"。这种组合多个条件的判断,就需要用到**逻辑运算符(Logical Operators)**。

Java 提供了三种逻辑运算符:

| 运算符 | 名称 | 含义 | 示例 |
|--------|------|------|------|
| `&&` | 逻辑与(AND) | 两个条件**都**为真,结果才为真 | `(age > 18) && (hasLicense == true)` |
| `\|\|` | 逻辑或(OR) | 两个条件**至少一个**为真,结果就为真 | `(isWeekend == true) \|\| (isHoliday == true)` |
| `!` | 逻辑非(NOT) | 取反,真变假,假变真 | `!(score < 60)` |

### 🎯 AND(&&) 的真值表

想象你要进入一个游戏房间,需要"等级够**并且**有钥匙":

| 等级够? | 有钥匙? | 能进入? |
|---------|---------|---------|
| true | true | **true** ✅ |
| true | false | false ❌ |
| false | true | false ❌ |
| false | false | false ❌ |

只有两个条件**同时满足**,结果才是 true。

### 🎯 OR(||) 的真值表

想象周末可以休息,**或者**生病了也可以休息:

| 是周末? | 生病了? | 可以休息? |
|---------|---------|-----------|
| true | true | **true** ✅ |
| true | false | **true** ✅ |
| false | true | **true** ✅ |
| false | false | false ❌ |

只要**至少一个**条件满足,结果就是 true。

### 📝 代码示例

```java
public class LogicalDemo {
    public static void main(String[] args) {
        // AND 运算:两个条件都要满足 both conditions must be true
        int age = 20;
        boolean hasDriverLicense = true;
        boolean canDrive = (age >= 18) && hasDriverLicense;
        System.out.println("可以开车吗? " + canDrive);  // 输出 true
        
        // 如果年龄不够 if age is not enough
        int youngAge = 16;
        boolean youngCanDrive = (youngAge >= 18) && hasDriverLicense;
        System.out.println("16岁可以开车吗? " + youngCanDrive);  // 输出 false
        
        // OR 运算:至少一个条件满足 at least one condition must be true
        boolean isWeekend = false;
        boolean isHoliday = true;
        boolean canRest = isWeekend || isHoliday;
        System.out.println("可以休息吗? " + canRest);  // 输出 true
        
        // 两个条件都不满足 neither condition is true
        boolean busyDay = (isWeekend == false) || (isHoliday == false);
        System.out.println("至少一个为假吗? " + busyDay);  // 输出 true
        
        // NOT 运算:取反 negate the result
        boolean isCold = true;
        boolean isWarm = !isCold;
        System.out.println("天气暖和吗? " + isWarm);  // 输出 false
        
        int score = 75;
        boolean failed = !(score >= 60);  // 不及格 not passed
        System.out.println("不及格吗? " + failed);  // 输出 false
        
        // 复杂组合:判断优惠资格 complex combination
        int purchaseAmount = 200;
        boolean isMember = true;
        // 会员或者购买超过300可以打折 member or purchase over 300 gets discount
        boolean hasDiscount = isMember || (purchaseAmount > 300);
        System.out.println("有折扣吗? " + hasDiscount);  // 输出 true
        
        // 多重条件:判断能否参加活动 multiple conditions
        int playerLevel = 10;
        int vipStatus = 2;
        boolean hasTicket = true;
        // 等级够并且(是VIP或者有票) level enough and (is VIP or has ticket)
        boolean canJoin = (playerLevel >= 5) && (vipStatus >= 3 || hasTicket);
        System.out.println("可以参加活动吗? " + canJoin);  // 输出 true
    }
}
```

::: tip 提示:短路运算
`&&` 和 `||` 有一个聪明的特性叫**短路(Short-circuit)**:
- `&&`:如果第一个条件是 false,第二个条件不会被计算(反正结果肯定是 false)
- `||`:如果第一个条件是 true,第二个条件不会被计算(反正结果肯定是 true)

这可以提高程序效率!
:::

### ✅ 验证方法

1. 运行程序,检查每个逻辑判断的结果
2. 尝试修改变量值,观察结果如何变化
3. 特别注意 `!` 运算符如何改变结果

### 💪 练习题

1. **基础练习**:判断一个人(年龄18,有学生证)是否可以享受学生优惠(18岁以下**或者**有学生证)
2. **进阶练习**:判断一个数字 `num = 25` 是否**不在** 10~20 之间(提示:用 `!` 和 `&&`)
3. **挑战练习**:游戏登录需要满足:(用户名正确 **并且** 密码正确) **或者** (有记住密码),用代码表达这个逻辑

### 📌 小结

- `&&` 表示"并且",所有条件都要满足
- `||` 表示"或者",至少一个条件满足即可
- `!` 表示"取反",true 变 false,false 变 true
- 可以用小括号 `()` 组合多个逻辑条件
- `&&` 优先级高于 `||`,建议用括号明确顺序

---

## 综合练习:运算符实战

现在你已经掌握了所有基础运算,让我们通过一个完整的案例来巩固:

```java
public class ShoppingCart {
    public static void main(String[] args) {
        // 商品信息 product information
        int price = 120;          // 单价 unit price
        int quantity = 3;         // 数量 quantity
        int discount = 20;        // 折扣额 discount amount
        
        // 用户信息 user information
        boolean isMember = true;  // 是会员 is member
        int memberLevel = 2;      // 会员等级 member level
        
        // 计算原价 calculate original price
        int originalTotal = price * quantity;
        System.out.println("原价: " + originalTotal);
        
        // 应用折扣 apply discount
        int finalTotal = originalTotal - discount;
        System.out.println("折后价: " + finalTotal);
        
        // 判断是否包邮 check if free shipping
        // 会员并且消费超过200,或者非会员消费超过300
        // (member and total > 200) or (not member and total > 300)
        boolean freeShipping = (isMember && finalTotal > 200) || 
                               (!isMember && finalTotal > 300);
        System.out.println("包邮吗? " + freeShipping);
        
        // 判断是否可以使用优惠券 check if can use coupon
        // 等级大于等于2并且消费超过250
        boolean canUseCoupon = (memberLevel >= 2) && (finalTotal >= 250);
        System.out.println("可以用优惠券吗? " + canUseCoupon);
        
        // 计算可以获得的积分 calculate reward points
        // 每10元1积分 1 point per 10 yuan
        int points = finalTotal / 10;
        System.out.println("获得积分: " + points);
        
        // 判断是否是偶数积分 check if points is even
        boolean evenPoints = (points % 2 == 0);
        System.out.println("积分是偶数吗? " + evenPoints);
    }
}
```

### ✅ 运行结果

```
原价: 360
折后价: 340
包邮吗? true
可以用优惠券吗? true
获得积分: 34
积分是偶数吗? true
```

### 💪 终极挑战

创建一个程序,模拟游戏角色战斗:
- 角色有攻击力(attack)、防御力(defense)、血量(health)
- 计算伤害:伤害 = 攻击力 - 防御力(如果结果小于0就是0)
- 判断是否击败敌人:敌人血量 - 伤害 <= 0
- 判断是否获得奖励:击败敌人 **并且** 角色等级 >= 5

---

## 🎓 本章总结

恭喜你完成了基础运算的学习!让我们回顾一下核心要点:

### 你已经掌握了

1. **赋值运算(`=`)**:把值存入变量,从右向左执行
2. **算术运算**:
   - 加 `+`、减 `-`、乘 `*`、除 `/`、取余 `%`
   - 整数除法会舍弃小数部分
3. **比较运算**:
   - 相等 `==`、不等 `!=`
   - 大于 `>`、小于 `<`、大于等于 `>=`、小于等于 `<=`
   - 结果是 `boolean` 类型(true/false)
4. **逻辑运算**:
   - 与 `&&`:所有条件都满足
   - 或 `||`:至少一个条件满足
   - 非 `!`:取反

### 常见陷阱

- ❌ 不要把 `=` 和 `==` 混淆
- ❌ 整数相除得不到小数
- ❌ 忘记运算优先级(用括号可以避免)
- ❌ 逻辑运算中条件的组合顺序

### 下一步

你现在已经掌握了编程中的"计算"部分。这些运算符会在你编写的每一个程序中反复出现。建议你多多练习,直到能够不假思索地写出各种运算表达式。当你熟练后,就可以学习如何根据运算结果来控制程序的行为了(if 语句、循环等)。

继续加油! 🚀