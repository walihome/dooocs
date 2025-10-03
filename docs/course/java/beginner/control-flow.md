---
title: 控制流
category: Java
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 控制流(Control Flow)

你有没有想过,程序是如何做决定的?比如淘宝如何判断你是否满18岁才能看某些商品,或者微信如何重复发送消息直到对方收到?这就是**控制流(Control Flow)**要解决的问题。

控制流就像交通指挥系统,它决定程序按什么顺序执行,什么时候重复,什么时候跳过某些代码。今天我们要学习三个最基础的控制流工具:条件判断的 `if`、固定次数循环的 `for`、以及条件循环的 `while`。

---

## if 语法 - 让程序做判断

### 💡 概念讲解(Concept)

想象你是门卫,需要检查身份证:
- **如果(if)** 年龄 >= 18,就让进
- **否则(else)** 就拒绝

`if` 语句就是程序的"门卫",它根据**条件(Condition)**是真是假来决定执行哪段代码。

**为什么需要它?** 因为程序需要根据不同情况做不同的事。比如:
- 登录时检查密码对不对
- 购物时检查余额够不够
- 游戏中判断是否过关

**基本结构:**

```java
if (条件) {
    // 条件为真时执行这里
} else {
    // 条件为假时执行这里
}
```

::: tip 提示
条件必须是一个**布尔值(boolean)**,即 `true` 或 `false`。常见的比较运算符有:
- `==` 等于
- `!=` 不等于
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于
:::

### 📝 代码示例(Code Example)

**示例1: 简单的年龄判断**

```java
public class AgeChecker {
    public static void main(String[] args) {
        int age = 20; // 定义年龄 define age
        
        // 判断是否成年 check if adult
        if (age >= 18) {
            System.out.println("你已成年,可以进入");
        } else {
            System.out.println("未满18岁,禁止进入");
        }
    }
}
```

**示例2: 多重条件判断(else if)**

有时候需要判断多种情况,就像考试评级:90分以上优秀,60-89及格,60以下不及格。

```java
public class GradeChecker {
    public static void main(String[] args) {
        int score = 75; // 分数 score
        
        // 多重条件判断 multiple conditions
        if (score >= 90) {
            System.out.println("优秀");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }
}
```

::: warning 注意
`else if` 和 `else` 是可选的,你可以只写 `if` 而不写 `else`。但 `else if` 必须写在 `if` 和 `else` 之间。
:::

**示例3: 逻辑运算符组合条件**

有时候需要同时满足多个条件,比如"年龄在18-60之间"。这时需要用到:
- `&&` 表示"并且(and)",两个条件都为真才为真
- `||` 表示"或者(or)",只要有一个为真就为真
- `!` 表示"取反(not)",把真变假,假变真

```java
public class LoginChecker {
    public static void main(String[] args) {
        String username = "admin"; // 用户名 username
        String password = "123456"; // 密码 password
        
        // 同时检查用户名和密码 check both username and password
        if (username.equals("admin") && password.equals("123456")) {
            System.out.println("登录成功");
        } else {
            System.out.println("用户名或密码错误");
        }
        
        // 检查是否是管理员或VIP check if admin or VIP
        String role = "VIP";
        if (role.equals("admin") || role.equals("VIP")) {
            System.out.println("欢迎尊贵的用户");
        }
    }
}
```

::: danger 警告
比较字符串时不能用 `==`,必须用 `.equals()` 方法!
- ❌ 错误: `username == "admin"`
- ✅ 正确: `username.equals("admin")`
:::

### ✅ 验证方法(Verification)

1. 将上面任一示例代码保存为 `.java` 文件
2. 在命令行编译:`javac 文件名.java`
3. 运行:`java 类名`

**预期输出(示例1):**
```
你已成年,可以进入
```

**验证你是否掌握:** 尝试修改 `age` 的值为 `15`,看输出是否变成"未满18岁,禁止进入"。

### 💪 练习题(Exercise)

**练习1 - 模仿**: 写一个程序判断一个数字是正数、负数还是零。

<details>
<summary>点击查看提示</summary>

需要用到 `else if` 判断三种情况:
- `number > 0`
- `number < 0`
- 剩下的就是等于0的情况
</details>

**练习2 - 应用**: 模拟一个简单的计算器,根据用户输入的运算符(`+`, `-`, `*`, `/`)执行不同的运算。

```java
int a = 10;
int b = 5;
String operator = "+";

// 你的代码写在这里
```

**练习3 - 挑战**: 判断一个年份是否是闰年。闰年规则:
- 能被4整除但不能被100整除
- 或者能被400整除

<details>
<summary>点击查看提示</summary>

需要用到取余运算符 `%`,比如 `year % 4 == 0` 表示能被4整除。
</details>

### 📌 小结(Key Points)

1. **if语句**用于根据条件执行不同的代码
2. 条件必须是 **布尔值(boolean)**,结果只能是 `true` 或 `false`
3. 比较运算符:`==`, `!=`, `>`, `<`, `>=`, `<=`
4. 逻辑运算符:`&&`(并且), `||`(或者), `!`(取反)
5. **字符串比较**必须用 `.equals()` 方法,不能用 `==`

---

## for 循环 - 重复固定次数

### 💡 概念讲解(Concept)

想象你要抄写课文10遍,你会:
1. 从第1遍开始(初始化)
2. 每抄完一遍检查:抄了几遍了?还没到10遍就继续(条件判断)
3. 抄完一遍后计数加1(更新)

**for循环(for loop)**就是这样一个"自动重复"的机器,特别适合"知道要重复多少次"的场景。

**为什么需要它?** 因为我们不想写这样的代码:

```java
System.out.println("第1次");
System.out.println("第2次");
System.out.println("第3次");
// ... 写100次?
```

**基本结构:**

```java
for (初始化; 条件; 更新) {
    // 循环体 loop body
}
```

**执行流程:**
1. 执行**初始化**,只执行一次
2. 检查**条件**,如果为真继续,为假退出循环
3. 执行**循环体**的代码
4. 执行**更新**
5. 回到步骤2

### 📝 代码示例(Code Example)

**示例1: 打印1到10**

```java
public class ForLoopBasic {
    public static void main(String[] args) {
        // 从1打印到10 print from 1 to 10
        for (int i = 1; i <= 10; i++) {
            System.out.println("这是第 " + i + " 次");
        }
        System.out.println("循环结束");
    }
}
```

**代码解析:**
- `int i = 1` - 初始化:定义一个**计数器(counter)** `i`,从1开始
- `i <= 10` - 条件:当 `i` 小于等于10时继续循环
- `i++` - 更新:`i` 每次增加1(等同于 `i = i + 1`)

::: tip 提示
`i++` 是一个快捷写法:
- `i++` 等于 `i = i + 1`
- `i--` 等于 `i = i - 1`
- `i += 2` 等于 `i = i + 2`
:::

**示例2: 计算1到100的和**

```java
public class SumCalculator {
    public static void main(String[] args) {
        int sum = 0; // 累加器 accumulator
        
        // 循环累加 loop and accumulate
        for (int i = 1; i <= 100; i++) {
            sum = sum + i; // 或写成 sum += i
        }
        
        System.out.println("1到100的和是: " + sum);
    }
}
```

**示例3: 遍历数组**

数组就像一个有编号的储物柜,`for` 循环可以逐个打开每个柜子。

```java
public class ArrayLoop {
    public static void main(String[] args) {
        // 定义一个数组 define an array
        String[] fruits = {"苹果", "香蕉", "橙子", "葡萄"};
        
        // 遍历数组 iterate through array
        for (int i = 0; i < fruits.length; i++) {
            System.out.println("第" + (i+1) + "个水果是: " + fruits[i]);
        }
    }
}
```

::: warning 注意
数组的**索引(index)**从 **0** 开始,不是从1开始!所以:
- 第1个元素是 `fruits[0]`
- 最后一个元素是 `fruits[fruits.length - 1]`
:::

**示例4: 嵌套循环(打印乘法表)**

循环里面还可以套循环,就像俄罗斯套娃。

```java
public class MultiplicationTable {
    public static void main(String[] args) {
        // 外层循环控制行 outer loop for rows
        for (int i = 1; i <= 9; i++) {
            // 内层循环控制列 inner loop for columns
            for (int j = 1; j <= i; j++) {
                System.out.print(j + "x" + i + "=" + (i*j) + "\t");
            }
            System.out.println(); // 换行 new line
        }
    }
}
```

### ✅ 验证方法(Verification)

**验证示例2的结果:**
1到100的和应该是 **5050**(数学公式: n*(n+1)/2 = 100*101/2)

**验证你是否掌握:**
- 修改示例1,让它倒数从10打印到1
- 修改示例3,输出"我最喜欢香蕉"(只输出香蕉那一行)

### 💪 练习题(Exercise)

**练习1 - 模仿**: 打印所有偶数从2到20。

<details>
<summary>点击查看提示</summary>

可以用 `i += 2` 每次增加2,或者用 `if (i % 2 == 0)` 判断是否偶数。
</details>

**练习2 - 应用**: 计算5的阶乘(5! = 5 × 4 × 3 × 2 × 1)。

```java
int factorial = 1; // 阶乘结果 factorial result

// 你的循环代码写在这里

System.out.println("5的阶乘是: " + factorial);
```

**练习3 - 挑战**: 找出1到100之间所有能被3或5整除的数,并计算它们的和。

### 📌 小结(Key Points)

1. **for循环**用于重复执行固定次数的代码
2. 三要素:**初始化**、**条件**、**更新**
3. **计数器(counter)**通常命名为 `i`, `j`, `k`
4. 数组**索引(index)**从 **0** 开始
5. 嵌套循环可以处理二维问题(如表格、矩阵)

---

## while 循环 - 根据条件重复

### 💡 概念讲解(Concept)

想象你在排队买奶茶:
- **当(while)** 前面还有人时,你就继续等
- 你不知道要等多久,只知道"有人就等"

这就是 `while` 和 `for` 的区别:
- **for**: 知道要重复多少次(如"抄10遍")
- **while**: 不知道次数,只知道条件(如"等到没人为止")

**为什么需要它?** 很多情况我们不知道要循环多少次:
- 读取文件直到结束
- 等待用户输入正确的密码
- 游戏循环直到玩家死亡

**基本结构:**

```java
while (条件) {
    // 当条件为真时,重复执行这里
}
```

::: danger 警告
如果条件永远为真,就会造成**死循环(infinite loop)**,程序会卡死!比如:
```java
while (true) {
    System.out.println("停不下来了!");
}
```
:::

### 📝 代码示例(Code Example)

**示例1: 基础倒计时**

```java
public class Countdown {
    public static void main(String[] args) {
        int count = 5; // 倒计时起点 countdown start
        
        // 当count大于0时继续循环 loop while count > 0
        while (count > 0) {
            System.out.println(count);
            count--; // 每次减1 decrease by 1
        }
        System.out.println("发射!");
    }
}
```

**示例2: 猜数字游戏(使用 Scanner)**

这个例子展示了 `while` 的典型应用:不知道用户要猜多少次才能猜对。

```java
import java.util.Scanner; // 导入扫描器 import Scanner

public class GuessNumber {
    public static void main(String[] args) {
        int secretNumber = 42; // 神秘数字 secret number
        Scanner scanner = new Scanner(System.in); // 创建输入扫描器 create scanner
        int guess = 0; // 用户猜测 user's guess
        
        // 当猜测不等于答案时继续循环 loop until guess is correct
        while (guess != secretNumber) {
            System.out.print("请输入你的猜测(1-100): ");
            guess = scanner.nextInt(); // 读取用户输入 read user input
            
            if (guess < secretNumber) {
                System.out.println("太小了!");
            } else if (guess > secretNumber) {
                System.out.println("太大了!");
            } else {
                System.out.println("恭喜你猜对了!");
            }
        }
        
        scanner.close(); // 关闭扫描器 close scanner
    }
}
```

::: tip 提示
`Scanner` 是用来读取用户键盘输入的工具类。常用方法:
- `nextInt()` - 读取整数
- `nextDouble()` - 读取小数
- `nextLine()` - 读取一行文字
:::

**示例3: do-while 循环(先执行后判断)**

有时候我们希望**至少执行一次**,再判断条件。比如游戏中"按回车继续",总要先显示一次提示。

```java
import java.util.Scanner;

public class MenuSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;
        
        // do-while保证至少执行一次 do-while executes at least once
        do {
            System.out.println("\n===== 菜单 =====");
            System.out.println("1. 开始游戏");
            System.out.println("2. 查看设置");
            System.out.println("3. 退出");
            System.out.print("请选择(1-3): ");
            choice = scanner.nextInt();
            
            if (choice == 1) {
                System.out.println("游戏开始!");
            } else if (choice == 2) {
                System.out.println("显示设置...");
            } else if (choice == 3) {
                System.out.println("再见!");
            } else {
                System.out.println("无效选择,请重新输入");
            }
        } while (choice != 3); // 直到用户选择3退出 until user chooses 3
        
        scanner.close();
    }
}
```

**while 和 do-while 的区别:**

```java
// while: 先判断,可能一次都不执行
int x = 10;
while (x < 5) {
    System.out.println("不会执行");
}

// do-while: 先执行,至少执行一次
int y = 10;
do {
    System.out.println("会执行一次");
} while (y < 5);
```

**示例4: break 和 continue**

有时候需要提前退出循环或跳过某次循环。

```java
public class BreakContinue {
    public static void main(String[] args) {
        // break示例: 找到第一个能被7整除的数就停止
        int num = 1;
        while (num <= 100) {
            if (num % 7 == 0) {
                System.out.println("找到了: " + num);
                break; // 立即退出循环 exit loop immediately
            }
            num++;
        }
        
        // continue示例: 跳过所有偶数,只打印奇数
        System.out.println("\n奇数列表:");
        int i = 0;
        while (i < 10) {
            i++;
            if (i % 2 == 0) {
                continue; // 跳过本次循环,进入下一次 skip to next iteration
            }
            System.out.println(i);
        }
    }
}
```

::: warning 注意
- `break` - 立即退出**整个循环**
- `continue` - 跳过**本次循环**,继续下一次
:::

### ✅ 验证方法(Verification)

**运行示例1,预期输出:**
```
5
4
3
2
1
发射!
```

**验证你是否掌握:**
- 运行示例2,尝试输入不同的数字,观察提示
- 修改示例3,增加一个"查看帮助"选项(选项4)

### 💪 练习题(Exercise)

**练习1 - 模仿**: 写一个程序,要求用户输入密码,直到输入正确("123456")为止。

**练习2 - 应用**: 计算一个数的位数。比如12345有5位。

```java
int number = 12345;
int digits = 0;

// 你的while循环代码(提示: 每次除以10,直到number变成0)

System.out.println("位数: " + digits);
```

**练习3 - 挑战**: 实现一个简单ATM取款机:
- 初始余额1000元
- 用户可以选择:1.查询余额 2.取款 3.存款 4.退出
- 取款时检查余额是否足够
- 使用 `do-while` 循环保持菜单显示

### 📌 小结(Key Points)

1. **while循环**用于不知道循环次数,只知道条件的场景
2. **do-while**保证至少执行一次循环体
3. **break**用于提前退出循环
4. **continue**用于跳过本次循环,进入下一次
5. 一定要避免**死循环(infinite loop)**,确保条件最终会变为假

---

## 🎯 总结对比

| 控制流类型 | 使用场景 | 示例 |
|----------|---------|------|
| **if** | 需要做选择时 | 判断年龄、密码验证 |
| **for** | 知道重复次数 | 遍历数组、打印1-100 |
| **while** | 不知道次数,只知道条件 | 等待用户输入、读取文件 |

**选择建议:**
- 如果知道循环次数 → 用 `for`
- 如果不知道次数 → 用 `while`
- 如果需要至少执行一次 → 用 `do-while`

::: tip 最佳实践
1. **命名规范**: 循环变量用 `i`, `j`, `k`(来自数学中的索引习惯)
2. **缩进规范**: 循环体内的代码要缩进(按Tab键)
3. **避免死循环**: 确保循环条件最终会变为假
4. **提前退出**: 找到结果后用 `break` 避免无意义的循环
:::

恭喜你!现在你已经掌握了程序控制流的三大武器。接下来建议你:
1. 完成上面所有的练习题
2. 尝试组合使用这些控制流(如在 `for` 里用 `if`)
3. 思考日常生活中哪些场景可以用这些控制流模拟

记住:**编程的本质是解决问题**,控制流是你指挥程序的工具。多练习,你很快就能灵活运用它们!