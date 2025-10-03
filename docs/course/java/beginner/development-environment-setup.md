---
title: 开发环境搭建
category: Java
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 控制流

在编程世界里,程序不会永远按照从上到下的顺序执行。就像你在玩游戏时,会根据不同的情况做出不同的选择:遇到敌人要战斗,血量不足要补给,任务完成要领奖励。程序也需要这样的"决策能力"和"重复能力",这就是我们今天要学习的**控制流(Control Flow)**。

控制流让程序变得"聪明",可以:
- 根据条件做出不同的反应(if 语句)
- 重复执行某些操作(循环语句)

## 条件判断 - if 语句

### 💡 概念讲解

想象你在自动售货机前买饮料:
- **如果**你投入了足够的钱 → 机器会给你饮料
- **如果**钱不够 → 机器会提示你继续投币

这种"如果...那么..."的逻辑,在 Java 中就是 **if 语句(if statement)**。

**if 语句的基本结构:**

```java
if (条件) {
    // 条件为真时执行的代码
}
```

这里的"条件"必须是一个**布尔值(boolean)**,也就是 `true` 或 `false`。

::: tip 布尔值快速回顾
布尔值只有两种可能:
- `true` - 真,表示条件成立
- `false` - 假,表示条件不成立

常见的比较运算符:
- `==` 等于
- `!=` 不等于
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于
:::

### 📝 代码示例

**示例 1: 基本的 if 语句**

```java
public class IfExample {
    public static void main(String[] args) {
        int age = 20; // 定义年龄变量 define age variable
        
        // 判断是否成年 check if adult
        if (age >= 18) {
            System.out.println("你已经成年了!"); // 条件为真时执行 execute when condition is true
        }
        
        System.out.println("程序继续执行"); // 无论条件真假都会执行 always execute
    }
}
```

**运行结果:**
```
你已经成年了!
程序继续执行
```

**示例 2: if-else 语句**

有时候我们需要在条件不成立时执行另一段代码,这时就用 **else**:

```java
public class IfElseExample {
    public static void main(String[] args) {
        int score = 75; // 考试分数 exam score
        
        // 判断是否及格 check if pass
        if (score >= 60) {
            System.out.println("恭喜你,考试通过!"); // 及格的情况 pass case
        } else {
            System.out.println("很遗憾,需要补考"); // 不及格的情况 fail case
        }
    }
}
```

**示例 3: if-else if-else 多条件判断**

当有多个条件需要判断时,可以使用 **else if**:

```java
public class GradeChecker {
    public static void main(String[] args) {
        int score = 85; // 成绩 grade score
        
        // 根据分数划分等级 classify grade level
        if (score >= 90) {
            System.out.println("等级: 优秀"); // excellent
        } else if (score >= 80) {
            System.out.println("等级: 良好"); // good
        } else if (score >= 60) {
            System.out.println("等级: 及格"); // pass
        } else {
            System.out.println("等级: 不及格"); // fail
        }
    }
}
```

::: warning 注意执行顺序
if-else if-else 语句会从上到下依次判断,一旦某个条件为真,就执行对应的代码块,然后跳过后面所有的判断。就像走迷宫,找到出口就不会继续探索其他路径了。
:::

### ✅ 验证方法

创建一个新的 Java 文件,复制上面的任意示例代码,然后:

1. 在终端或命令提示符中编译:
```bash
javac IfExample.java
```

2. 运行程序:
```bash
java IfExample
```

3. 尝试修改变量的值,观察输出的变化:
   - 将 `age` 改为 `15`,看看是否还输出"你已经成年了"
   - 将 `score` 改为 `50`,看看输出是否变成"不及格"

### 💪 练习题

**练习 1: 判断奇偶数**
编写程序,判断一个数字是奇数还是偶数。
提示: 使用 `%` 取余运算符,`number % 2 == 0` 表示能被 2 整除

**练习 2: 温度提醒**
根据温度给出穿衣建议:
- 温度 < 10°C: "天气很冷,穿厚外套"
- 温度 10-20°C: "天气凉爽,穿长袖"
- 温度 > 20°C: "天气温暖,穿短袖"

**练习 3: 登录验证**
模拟简单的登录验证,检查用户名和密码是否正确。
```java
String username = "admin";
String password = "123456";
// 你的判断代码...
```

### 📌 小结

- **if 语句**用于根据条件执行不同的代码
- 条件必须是布尔值(`true` 或 `false`)
- `else` 处理条件不成立的情况
- `else if` 用于多个条件的判断
- 条件判断是按顺序执行的,找到第一个为真的条件就停止

---

## while 循环

### 💡 概念讲解

想象你在刷牙:你会重复"上下刷动"这个动作,直到牙齿干净为止。这种"重复做某件事,直到满足某个条件"的过程,就是**循环(Loop)**。

**while 循环(while loop)**的意思是:"当条件为真时,持续执行某段代码"。

基本结构:
```java
while (条件) {
    // 重复执行的代码
}
```

::: danger 警告:无限循环
如果条件永远为真,程序会一直循环下去,无法停止!这叫做**无限循环(Infinite Loop)**。记得要在循环体内改变条件相关的变量,让循环能够结束。
:::

### 📝 代码示例

**示例 1: 倒计时**

```java
public class CountdownExample {
    public static void main(String[] args) {
        int count = 5; // 从5开始倒数 start from 5
        
        // 当count大于0时继续循环 continue while count > 0
        while (count > 0) {
            System.out.println("倒计时: " + count);
            count--; // 每次减1 decrease by 1 each time
        }
        
        System.out.println("发射!"); // 循环结束后执行 execute after loop ends
    }
}
```

**运行结果:**
```
倒计时: 5
倒计时: 4
倒计时: 3
倒计时: 2
倒计时: 1
发射!
```

**示例 2: 累加求和**

计算 1 + 2 + 3 + ... + 10 的结果:

```java
public class SumCalculator {
    public static void main(String[] args) {
        int number = 1; // 当前数字 current number
        int sum = 0; // 累加和 accumulated sum
        
        // 当number小于等于10时继续 continue while number <= 10
        while (number <= 10) {
            sum = sum + number; // 累加 add to sum
            number++; // 移动到下一个数字 move to next number
        }
        
        System.out.println("1到10的和是: " + sum);
    }
}
```

**示例 3: 用户输入验证**

实际开发中,while 循环常用于验证用户输入:

```java
import java.util.Scanner; // 导入Scanner类 import Scanner class

public class PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // 创建输入对象 create input object
        String password = ""; // 初始化密码变量 initialize password variable
        
        // 当密码不是"123456"时继续询问 continue while password is not correct
        while (!password.equals("123456")) {
            System.out.print("请输入密码: ");
            password = scanner.nextLine(); // 读取用户输入 read user input
            
            if (!password.equals("123456")) {
                System.out.println("密码错误,请重试!");
            }
        }
        
        System.out.println("密码正确,欢迎!");
        scanner.close(); // 关闭Scanner close scanner
    }
}
```

::: tip Scanner 使用说明
`Scanner` 是 Java 提供的用于读取用户输入的工具类:
- `new Scanner(System.in)` - 创建一个从键盘读取输入的对象
- `nextLine()` - 读取一行文本
- `nextInt()` - 读取一个整数
- 使用完后记得调用 `close()` 关闭资源
:::

### ✅ 验证方法

1. 运行倒计时示例,确认输出从 5 递减到 1
2. 运行求和示例,验证结果是否为 55(1+2+...+10=55)
3. 运行密码验证示例,尝试输入错误密码和正确密码,观察程序行为

### 💪 练习题

**练习 1: 打印偶数**
使用 while 循环打印 1 到 20 之间的所有偶数

**练习 2: 猜数字游戏**
程序随机生成一个 1-100 的数字,用户不断猜测,直到猜对为止
提示: 使用 `(int)(Math.random() * 100) + 1` 生成随机数

**练习 3: 计算阶乘**
计算 5 的阶乘(5! = 5 × 4 × 3 × 2 × 1)

### 📌 小结

- **while 循环**用于重复执行代码,直到条件为假
- 循环体内必须改变条件相关的变量,否则会造成无限循环
- `!=` 表示"不等于", `!` 表示"非"(取反)
- Scanner 可以读取用户从键盘输入的数据
- 循环在处理重复任务时非常高效

---

## for 循环

### 💡 概念讲解

如果说 while 循环像是"不知道要重复多少次,直到满足条件为止",那么 **for 循环(for loop)**就像是"我明确知道要重复几次"。

想象你在点名:班上有 30 个学生,你需要从第 1 个点到第 30 个。这种"有明确次数"的重复,用 for 循环最合适。

**for 循环的结构:**

```java
for (初始化; 条件判断; 更新) {
    // 循环体 loop body
}
```

这三部分的执行顺序:
1. **初始化** - 只执行一次,在循环开始前
2. **条件判断** - 每次循环前检查,为真则继续
3. **循环体** - 执行实际操作
4. **更新** - 每次循环后执行
5. 回到步骤 2

### 📝 代码示例

**示例 1: 打印数字**

```java
public class ForLoopBasic {
    public static void main(String[] args) {
        // i从0开始,每次加1,直到i小于5 i starts from 0, increases by 1, until i < 5
        for (int i = 0; i < 5; i++) {
            System.out.println("第 " + i + " 次循环");
        }
    }
}
```

**运行结果:**
```
第 0 次循环
第 1 次循环
第 2 次循环
第 3 次循环
第 4 次循环
```

::: tip i++ 是什么意思?
`i++` 是 `i = i + 1` 的简写,表示"将 i 的值增加 1"。
类似的还有:
- `i--` 表示 `i = i - 1`(减 1)
- `i += 2` 表示 `i = i + 2`(增加 2)
:::

**示例 2: 计算乘法表**

```java
public class MultiplicationTable {
    public static void main(String[] args) {
        int number = 7; // 要计算的数字 number to calculate
        
        // 打印7的乘法表 print multiplication table of 7
        for (int i = 1; i <= 10; i++) {
            int result = number * i; // 计算结果 calculate result
            System.out.println(number + " × " + i + " = " + result);
        }
    }
}
```

**示例 3: 数组遍历**

for 循环最常见的用途之一是遍历**数组(Array)**:

```java
public class ArrayExample {
    public static void main(String[] args) {
        // 创建一个水果数组 create a fruit array
        String[] fruits = {"苹果", "香蕉", "橙子", "葡萄", "西瓜"};
        
        // 遍历数组中的每个元素 traverse each element in array
        for (int i = 0; i < fruits.length; i++) {
            System.out.println("第 " + (i + 1) + " 个水果: " + fruits[i]);
        }
    }
}
```

::: tip 数组快速入门
数组是一组相同类型数据的集合:
- 声明: `类型[] 数组名 = {元素1, 元素2, ...};`
- 访问: `数组名[索引]`(索引从 0 开始)
- 长度: `数组名.length`
:::

**示例 4: 嵌套循环**

for 循环可以嵌套使用,常用于处理二维数据:

```java
public class NestedLoop {
    public static void main(String[] args) {
        // 打印一个5x5的星号矩阵 print a 5x5 star matrix
        for (int row = 0; row < 5; row++) { // 外层循环控制行 outer loop controls rows
            for (int col = 0; col < 5; col++) { // 内层循环控制列 inner loop controls columns
                System.out.print("* "); // print不换行 print without newline
            }
            System.out.println(); // 每行结束后换行 newline after each row
        }
    }
}
```

**运行结果:**
```
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
```

### ✅ 验证方法

1. 运行基础示例,确认输出了 0 到 4 共 5 次
2. 修改乘法表的 `number` 值,测试不同数字的乘法表
3. 在数组示例中添加或删除水果,观察程序是否正确遍历
4. 修改嵌套循环的行列数,尝试打印不同大小的矩阵

### 💪 练习题

**练习 1: 求平均分**
创建一个包含 5 个考试成绩的数组,使用 for 循环计算平均分
```java
int[] scores = {85, 92, 78, 90, 88};
// 你的代码...
```

**练习 2: 找最大值**
在一个数字数组中找出最大的数字
```java
int[] numbers = {23, 45, 12, 67, 34, 89, 56};
// 提示: 先假设第一个数是最大值,然后逐个比较
```

**练习 3: 打印直角三角形**
使用嵌套循环打印一个星号组成的直角三角形:
```
*
**
***
****
*****
```

### 📌 小结

- **for 循环**适合已知循环次数的场景
- 结构包含三部分:初始化、条件判断、更新
- `i++` 是常见的递增操作
- 数组索引从 0 开始,长度用 `.length` 获取
- 嵌套循环用于处理多维数据

---

## 三种控制流的选择

你可能会问:什么时候用 if,什么时候用 while,什么时候用 for?

**决策树:**

```
需要根据条件做不同的事? 
    └→ 是 → 使用 if/else

需要重复执行某些操作?
    └→ 是 → 知道要重复几次?
              └→ 是 → 使用 for 循环
              └→ 否 → 使用 while 循环
```

**实际例子:**

| 场景 | 使用的控制流 | 原因 |
|-----|------------|------|
| 判断用户是否成年 | if | 只需要做一次判断 |
| 打印 1-100 的数字 | for | 明确知道要循环 100 次 |
| 等待用户输入正确密码 | while | 不知道用户要尝试几次 |
| 根据成绩给评级 | if-else if | 多个条件判断 |
| 遍历数组 | for | 数组有明确的长度 |

---

## 综合练习:数字猜猜看游戏

现在让我们综合运用本章学到的所有知识,制作一个完整的小游戏:

```java
import java.util.Scanner;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // 生成1-100的随机数 generate random number between 1-100
        int targetNumber = (int)(Math.random() * 100) + 1;
        int guess = 0; // 用户猜的数字 user's guess
        int attempts = 0; // 尝试次数 number of attempts
        
        System.out.println("=== 欢迎来到猜数字游戏 ===");
        System.out.println("我想了一个1到100之间的数字,你能猜对吗?");
        
        // 当还没猜对时继续 continue while not guessed correctly
        while (guess != targetNumber) {
            System.out.print("请输入你的猜测: ");
            guess = scanner.nextInt(); // 读取用户输入的整数 read user input integer
            attempts++; // 尝试次数加1 increase attempts
            
            // 判断猜测结果 check guess result
            if (guess < targetNumber) {
                System.out.println("太小了!再试试");
            } else if (guess > targetNumber) {
                System.out.println("太大了!再试试");
            } else {
                System.out.println("恭喜你!猜对了!");
                System.out.println("你一共用了 " + attempts + " 次尝试");
            }
        }
        
        scanner.close();
    }
}
```

这个游戏用到了:
- **if-else if-else** 判断猜测是太大、太小还是正确
- **while 循环** 持续让用户猜测,直到猜对
- **变量** 保存目标数字、猜测值和尝试次数

---

## 最后的挑战

尝试改进上面的猜数字游戏:

1. **限制尝试次数**:只给用户 7 次机会,超过就游戏结束
   - 提示:添加一个条件到 while 循环

2. **添加难度选择**:让用户选择简单(1-50)、普通(1-100)或困难(1-200)模式
   - 提示:使用 if-else 根据用户选择生成不同范围的随机数

3. **显示进度提示**:告诉用户还剩几次机会
   - 提示:使用 `7 - attempts` 计算剩余次数

通过这些练习,你已经掌握了编程中最重要的控制流概念!记住:
- **if** 让程序能做决定
- **while** 让程序能等待和重复
- **for** 让程序能高效地处理批量任务

这三个工具组合起来,就能构建出复杂而智能的程序逻辑!