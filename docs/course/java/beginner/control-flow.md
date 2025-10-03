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

在编程的世界里,程序就像一本"选择自己的冒险"书。你有没有读过那种每页末尾都会问你"如果选择A,翻到第5页;如果选择B,翻到第10页"的书?程序也是这样运行的——它需要做决定(用if语句),也需要重复做某些事情(用循环)。

今天我们要学习的**控制流(Control Flow)**,就是让程序能够"做决定"和"重复工作"的工具。想象你是一个机器人的大脑,你需要告诉它:
- "如果前面有墙,就转弯"(条件判断)
- "把这个动作重复10次"(循环)

## 💡 为什么需要控制流?

假设你要写一个程序来检查100个学生的成绩是否及格。如果没有控制流,你需要写100遍几乎相同的代码!但有了控制流,你只需要写一次检查逻辑,然后告诉程序"重复100次"就可以了。

现在让我们从最简单的开始。

## if语句——让程序做决定

### 💡 概念讲解(Concept)

**if语句(if Statement)**就像现实生活中的"如果...就..."。比如:
- 如果下雨,就带伞
- 如果考试及格,就奖励自己
- 如果余额不足,就不能购买

在Java中,if语句让程序根据条件选择是否执行某段代码。

**基本语法结构:**
```java
if (条件) {
    // 当条件为true时执行这里的代码
}
```

条件必须是一个**布尔值(boolean)**,也就是`true`(真)或`false`(假)。

### 📝 代码示例(Code Example)

让我们写一个检查年龄是否可以投票的程序:

```java
public class IfExample {
    public static void main(String[] args) {
        int age = 20; // 定义年龄变量 define age variable
        
        // 如果年龄大于等于18,就输出可以投票
        // if age is greater than or equal to 18, print can vote
        if (age >= 18) {
            System.out.println("你可以投票了!");
        }
        
        System.out.println("程序结束"); // 无论条件是否满足,这行都会执行
    }
}
```

**运行结果:**
```
你可以投票了!
程序结束
```

::: tip 提示
`>=` 是**比较运算符(Comparison Operator)**,表示"大于或等于"。其他常用的有:
- `==` 等于(注意是两个等号!)
- `!=` 不等于
- `>` 大于
- `<` 小于
- `<=` 小于或等于
:::

### if-else 语句——二选一

很多时候,我们需要"如果...就...,否则..."的逻辑:

```java
public class IfElseExample {
    public static void main(String[] args) {
        int score = 55; // 考试分数 exam score
        
        // 判断是否及格 check if passed
        if (score >= 60) {
            System.out.println("恭喜你及格了!");
        } else {
            System.out.println("很遗憾,需要补考");
        }
    }
}
```

**运行结果:**
```
很遗憾,需要补考
```

### if-else if-else 语句——多条件判断

当有多个条件需要检查时:

```java
public class GradeChecker {
    public static void main(String[] args) {
        int score = 85; // 考试分数 exam score
        
        // 根据分数判断等级 determine grade by score
        if (score >= 90) {
            System.out.println("等级: A 优秀!");
        } else if (score >= 80) {
            System.out.println("等级: B 良好!");
        } else if (score >= 60) {
            System.out.println("等级: C 及格");
        } else {
            System.out.println("等级: D 不及格");
        }
    }
}
```

**运行结果:**
```
等级: B 良好!
```

::: warning 注意
条件是按顺序检查的,一旦某个条件为true,就执行对应的代码块,然后跳过后面的所有条件。所以要把最严格的条件放在前面!
:::

### ✅ 验证方法(Verification)

1. 创建一个新的Java文件,复制上面的代码
2. 尝试修改`score`的值为不同的数字(如95、75、50、30)
3. 每次修改后运行程序,观察输出是否符合预期
4. 如果输出正确,说明你理解了if语句的运行逻辑!

### 💪 练习题(Exercise)

**练习1(模仿)**: 写一个程序判断一个数字是正数、负数还是零。

**练习2(应用)**: 写一个程序检查密码长度。如果密码少于6位,输出"密码太短";如果6到12位,输出"密码合格";如果超过12位,输出"密码很强"。

**练习3(创新)**: 写一个简单的BMI判断程序。BMI = 20时输出"偏瘦",20-25输出"正常",25-30输出"超重",大于30输出"肥胖"。

### 📌 小结(Key Points)

- **if语句(if Statement)**用于条件判断,根据条件决定是否执行代码
- 条件必须是**布尔值(boolean)**,结果为true或false
- **比较运算符(Comparison Operator)**:`==`、`!=`、`>`、`<`、`>=`、`<=`
- `else`提供条件不满足时的备选方案
- `else if`用于多条件判断,条件按顺序检查

---

## for循环——重复指定次数

### 💡 概念讲解(Concept)

想象你是体育老师,要让学生做10个俯卧撑。你不会说10次"做一个俯卧撑",而是说"做10个俯卧撑"。**for循环(for Loop)**就是这样,让程序重复执行某段代码指定的次数。

**for循环的基本结构:**
```java
for (初始化; 条件; 更新) {
    // 循环体 loop body
}
```

这三个部分是什么意思?
- **初始化(Initialization)**: 循环开始前的准备工作,通常是定义一个计数器
- **条件(Condition)**: 每次循环前检查,如果为true就继续,为false就停止
- **更新(Update)**: 每次循环结束后执行,通常是改变计数器的值

### 📝 代码示例(Code Example)

让我们写一个最简单的for循环,打印1到5:

```java
public class ForLoopBasic {
    public static void main(String[] args) {
        // 循环打印1到5 print numbers 1 to 5
        for (int i = 1; i <= 5; i++) {
            System.out.println("当前数字: " + i);
        }
        System.out.println("循环结束!");
    }
}
```

**运行结果:**
```
当前数字: 1
当前数字: 2
当前数字: 3
当前数字: 4
当前数字: 5
循环结束!
```

**逐步解析这个循环:**
1. `int i = 1` - 创建变量i,初始值为1(只执行一次)
2. `i <= 5` - 检查i是否小于等于5
3. 如果条件为true,执行循环体(打印语句)
4. `i++` - 循环体执行完后,i的值加1(`i++`等同于`i = i + 1`)
5. 回到第2步,重新检查条件

::: tip 提示
`i++`是**自增运算符(Increment Operator)**,表示变量的值加1。类似的,`i--`表示减1。这是编程中非常常用的操作!
:::

### 实用示例——计算累加

for循环最常见的用途之一是计算累加:

```java
public class SumCalculator {
    public static void main(String[] args) {
        int sum = 0; // 用于存储总和 store the sum
        
        // 计算1到100的和 calculate sum from 1 to 100
        for (int i = 1; i <= 100; i++) {
            sum = sum + i; // 也可以写成 sum += i
        }
        
        System.out.println("1到100的和是: " + sum);
    }
}
```

**运行结果:**
```
1到100的和是: 5050
```

### 嵌套循环——循环中的循环

你有没有想过如何打印一个乘法表?这就需要**嵌套循环(Nested Loop)**——在一个循环里面再写一个循环:

```java
public class MultiplicationTable {
    public static void main(String[] args) {
        // 打印3x3乘法表 print 3x3 multiplication table
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i + "x" + j + "=" + (i*j) + "\t");
            }
            System.out.println(); // 换行 new line
        }
    }
}
```

**运行结果:**
```
1x1=1	1x2=2	1x3=3	
2x1=2	2x2=4	2x3=6	
3x1=3	3x2=6	3x3=9	
```

::: warning 注意
`System.out.print()`和`System.out.println()`的区别:
- `print()`输出后不换行
- `println()`输出后自动换行
- `\t`是制表符(Tab),用于对齐输出
:::

### ✅ 验证方法(Verification)

1. 运行基本的for循环示例,确认输出了1到5
2. 修改循环条件,比如改成`i <= 10`,看是否输出1到10
3. 修改初始值,比如改成`int i = 5`,观察变化
4. 尝试运行乘法表程序,看能否正确显示

### 💪 练习题(Exercise)

**练习1(模仿)**: 写一个程序打印1到10的所有偶数。

**练习2(应用)**: 写一个程序计算1到50中所有能被3整除的数字的和。(提示:使用`%`取余运算符,`i % 3 == 0`表示i能被3整除)

**练习3(创新)**: 写一个程序打印一个直角三角形,由`*`组成,共5行。第1行1个星,第2行2个星,以此类推。

### 📌 小结(Key Points)

- **for循环(for Loop)**用于重复执行代码指定的次数
- 循环有三个部分:**初始化(Initialization)**、**条件(Condition)**、**更新(Update)**
- **自增运算符(Increment Operator)**`i++`相当于`i = i + 1`
- **嵌套循环(Nested Loop)**是在循环内部再写循环,外层每循环一次,内层完整执行一遍
- `%`是**取余运算符(Modulo Operator)**,`a % b`返回a除以b的余数

---

## while循环——重复直到条件不满足

### 💡 概念讲解(Concept)

如果说for循环像是"做10个俯卧撑"(明确次数),那么**while循环(while Loop)**就像是"做俯卧撑直到累了为止"(不确定次数)。

while循环在不知道确切循环次数,但知道什么时候应该停止时特别有用。比如:
- 读取文件直到结束
- 接收用户输入直到输入"退出"
- 游戏运行直到生命值为0

**while循环的基本结构:**
```java
while (条件) {
    // 只要条件为true,就一直执行这里的代码
}
```

### 📝 代码示例(Code Example)

让我们用while循环实现和之前for循环相同的功能——打印1到5:

```java
public class WhileLoopBasic {
    public static void main(String[] args) {
        int i = 1; // 初始化计数器 initialize counter
        
        // 当i小于等于5时,继续循环 loop while i is less than or equal to 5
        while (i <= 5) {
            System.out.println("当前数字: " + i);
            i++; // 别忘了更新计数器! don't forget to update counter
        }
        
        System.out.println("循环结束!");
    }
}
```

**运行结果:**
```
当前数字: 1
当前数字: 2
当前数字: 3
当前数字: 4
当前数字: 5
循环结束!
```

::: danger 警告
while循环最容易犯的错误是**忘记更新条件中的变量**!如果忘记写`i++`,那么i永远等于1,条件永远为true,程序会陷入**无限循环(Infinite Loop)**,不停地打印"当前数字: 1"。如果遇到这种情况,按`Ctrl + C`可以强制停止程序。
:::

### while vs for——什么时候用哪个?

这两种循环可以互相转换,但各有适用场景:

**用for循环的情况:**
- 知道要循环多少次
- 有明确的计数器
- 示例:遍历数组、打印固定范围的数字

**用while循环的情况:**
- 不知道要循环多少次
- 循环次数取决于某个条件
- 示例:读取用户输入、搜索直到找到目标

让我们看一个更实际的while循环例子——模拟猜数字游戏:

```java
public class GuessNumber {
    public static void main(String[] args) {
        int secretNumber = 42; // 神秘数字 secret number
        int guess = 0; // 猜测的数字 guessed number
        int attempts = 0; // 尝试次数 number of attempts
        
        // 模拟猜测过程 simulate guessing process
        while (guess != secretNumber) {
            attempts++;
            guess = attempts * 10; // 模拟猜测:10, 20, 30, 40...
            System.out.println("第" + attempts + "次猜测: " + guess);
            
            if (guess < secretNumber) {
                System.out.println("太小了!");
            } else if (guess > secretNumber) {
                System.out.println("太大了!");
            }
        }
        
        System.out.println("恭喜!用了" + attempts + "次猜中了!");
    }
}
```

**运行结果:**
```
第1次猜测: 10
太小了!
第2次猜测: 20
太小了!
第3次猜测: 30
太小了!
第4次猜测: 40
太小了!
第5次猜测: 50
太大了!
```

::: tip 提示
这个例子展示了while循环的强大之处——我们事先不知道要猜多少次才能猜中,循环会在条件满足(猜中了)时自动停止。
:::

### do-while循环——先执行再判断

还有一种特殊的while循环叫**do-while循环(do-while Loop)**,它的特点是至少执行一次循环体:

```java
public class DoWhileExample {
    public static void main(String[] args) {
        int count = 0;
        
        // 即使条件一开始就是false,循环体也会执行一次
        // even if condition is false at start, body executes once
        do {
            System.out.println("执行了一次,count = " + count);
            count++;
        } while (count < 0); // 条件为false
        
        System.out.println("最终count = " + count);
    }
}
```

**运行结果:**
```
执行了一次,count = 0
最终count = 1
```

**while和do-while的区别:**
- **while**: 先检查条件,再决定是否执行(可能一次都不执行)
- **do-while**: 先执行一次,再检查条件(至少执行一次)

### ✅ 验证方法(Verification)

1. 运行while循环示例,确认输出正确
2. 故意注释掉`i++`这行,运行程序,观察无限循环(记得用Ctrl+C停止!)
3. 恢复`i++`,再次运行确认程序正常
4. 运行do-while示例,理解"至少执行一次"的含义

### 💪 练习题(Exercise)

**练习1(模仿)**: 用while循环实现倒计时,从10打印到1。

**练习2(应用)**: 写一个程序,用while循环计算2的多少次方第一次超过1000。(提示:定义一个变量存储2的幂,每次乘以2)

**练习3(创新)**: 模拟一个简单的存钱罐。初始金额100元,每月存入50元,用while循环计算多少个月后能存够500元。

### 📌 小结(Key Points)

- **while循环(while Loop)**在条件为true时重复执行,适用于不确定循环次数的场景
- **无限循环(Infinite Loop)**是忘记更新条件变量导致的常见错误
- **do-while循环(do-while Loop)**至少执行一次循环体,适用于"先做再判断"的场景
- while和for可以互相转换,选择更符合逻辑的那个
- 按`Ctrl + C`可以终止失控的程序

---

## 🎓 综合练习——整合if和循环

现在你已经学会了控制流的三大武器,让我们用一个综合案例把它们结合起来:

```java
public class ComprehensiveExample {
    public static void main(String[] args) {
        System.out.println("=== 成绩统计程序 ===");
        
        // 模拟10个学生的成绩 simulate 10 students' scores
        int totalScore = 0; // 总分 total score
        int passCount = 0; // 及格人数 number of students who passed
        int excellentCount = 0; // 优秀人数 number of excellent students
        
        // 使用for循环处理每个学生 use for loop to process each student
        for (int i = 1; i <= 10; i++) {
            // 模拟随机成绩(实际应该从输入或数组获取)
            // simulate random scores (should get from input or array in reality)
            int score = 50 + i * 5; // 生成55, 60, 65, 70...100
            
            System.out.println("学生" + i + "的成绩: " + score);
            
            totalScore += score; // 累加总分 accumulate total score
            
            // 使用if判断成绩等级 use if to determine grade
            if (score >= 90) {
                System.out.println("  等级: 优秀");
                excellentCount++;
                passCount++; // 优秀也算及格
            } else if (score >= 60) {
                System.out.println("  等级: 及格");
                passCount++;
            } else {
                System.out.println("  等级: 不及格");
            }
        }
        
        // 计算平均分 calculate average score
        double average = totalScore / 10.0;
        
        System.out.println("\n=== 统计结果 ===");
        System.out.println("平均分: " + average);
        System.out.println("及格人数: " + passCount);
        System.out.println("优秀人数: " + excellentCount);
        System.out.println("及格率: " + (passCount * 100.0 / 10) + "%");
    }
}
```

这个程序展示了:
- 用for循环处理多个数据
- 用if-else判断不同情况
- 在循环中累加统计数据
- 循环结束后进行汇总计算

---

## 🎯 本章总结

恭喜你!你现在已经掌握了编程中最核心的控制流知识。让我们回顾一下:

**三种控制流工具:**
1. **if语句** - 让程序做决定
2. **for循环** - 重复指定次数
3. **while循环** - 重复直到条件不满足

**重要概念:**
- **布尔值(boolean)**: true或false
- **比较运算符(Comparison Operator)**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **自增/自减运算符(Increment/Decrement Operator)**: `++`, `--`
- **嵌套(Nesting)**: 在if或循环中再写if或循环

**常见陷阱:**
- if条件中用`==`而不是`=`
- while循环忘记更新条件变量导致无限循环
- 嵌套循环的执行次数是相乘关系(外层3次×内层3次=共9次)

有了这些工具,你就可以写出能够"思考"和"重复工作"的程序了。下一步,建议你多做练习,把这些知识变成肌肉记忆!