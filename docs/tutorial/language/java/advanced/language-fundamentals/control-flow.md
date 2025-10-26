---
title: 控制流语句  
description: 详细讲解 Java 中的基本控制流语句，包括条件判断和循环结构，帮助你理解程序执行的路线和逻辑。  
order: 4  
keywords: [Java, 控制流, if-else, switch, for, while, break, continue, return]  
---

# 控制流语句

## 前置知识
> 在阅读本章前,你需要了解:  
> - Java 基础语法（变量声明、方法定义）  
> - 基本数据类型  
> - 简单的输出语句（System.out.println）

## 为什么需要控制流语句?

想象一下，你写了一个程序，让计算机帮你判断一个数字是不是正数、负数还是零。你想让程序根据这个数字执行不同的任务，而不是所有代码都按顺序执行——这就是控制流语句派上用场的时候。

控制流的作用就像给程序加装路标和岔路，让程序“决定”往哪里走，实现不同的行为。没有控制流，程序只能按顺序执行命令，就像流水线，那表达复杂逻辑就变得困难。

我们今天要一块儿看看 Java 里这些“路标”和“岔路”，从简单的条件判断开始，逐步了解循环和跳转语句。别担心，复杂的知识我们会慢慢拆开来讲，边讲边敲代码，你跟着练一练，很快就能熟练应用。

---

## 条件判断：if-else 和 switch

### 简单定义

条件判断让程序在遇到不同情况时选择不同路线。最常见的两种是：

- **if-else**：根据布尔条件决定执行哪个代码块  
- **switch**：方便判断变量具体值，并选择匹配代码块  

### 为什么需要条件判断？

生活中处处都有选择，比如：你看天气预报，决定今天带伞不带伞。程序里也一样，你要做出“选择”，根据输入或者状态决定下一步做什么。

### 基础用法示例：if-else

```java
public class IfElseExample {
    public static void main(String[] args) {
        int number = 10; // 假设这是输入数字

        // 判断数字是正数、负数或零
        if (number > 0) {
            System.out.println("这是一个正数");
        } else if (number < 0) {
            System.out.println("这是一个负数");
        } else {
            System.out.println("数字是零");
        }
    }
}
```

**这段代码做了什么：**  
1. 定义一个整数变量 `number`。  
2. 用 `if` 判断它是否大于零，如果是，打印“正数”。  
3. 如果不是，继续用 `else if` 判断是否小于零，是则打印“负数”。  
4. 以上都不满足，则说明它是零，打印“数字是零”。  

这就是 if-else 控制流的最经典用法，它像是程序里的“分叉口”，根据判断结果决定下一步走的路。

---

### 进阶用法示例：switch 语句

当判断某个变量的多个具体值时，`switch` 语句会显得更清晰。

```java
public class SwitchExample {
    public static void main(String[] args) {
        int dayOfWeek = 3;

        switch (dayOfWeek) {
            case 1:
                System.out.println("星期一");
                break; // 跳出 switch
            case 2:
                System.out.println("星期二");
                break;
            case 3:
                System.out.println("星期三");
                break;
            default:
                System.out.println("不是有效的星期数");
        }
    }
}
```

**这段代码做了什么：**  
1. 定义了变量 `dayOfWeek`，表示星期几。  
2. `switch` 根据变量的值匹配对应 `case`。  
3. 如果匹配到 `3`，执行第三个 `case` 的语句，打印“星期三”。  
4. `break` 会阻止代码继续执行后续 `case`，避免“掉进坑”里。  
5. 如果都不匹配，执行 `default` 里的语句。  

`switch` 结构让多分支条件判断代码更整洁，特别适合判断枚举值或有限几种情况。

---

## 循环结构：for、while、do-while

循环让程序反复执行某些操作，直到条件不满足。  

### 三大常用循环：  

- **for 循环**：循环次数已知时常用  
- **while 循环**：循环次数不定，依据条件控制  
- **do-while 循环**：至少执行一次的循环  

### for 循环示例

```java
public class ForLoopExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("第 " + i + " 次循环");
        }
    }
}
```

**这段代码做了什么：**  
1. 循环变量 `i` 从1开始。  
2. 每次循环前检查条件 `i <= 5` 是否成立。  
3. 条件为真时，执行循环体打印当前次数。  
4. 每次循环结束，执行 `i++`，把 `i` 加1。  
5. 循环到 `i` 变成6时条件不满足，结束循环。  

`for` 循环结构整齐，计数和条件都写在同一行，很方便控制循环流程。

---

### while 循环示例

```java
public class WhileLoopExample {
    public static void main(String[] args) {
        int count = 1;

        while (count <= 5) {
            System.out.println("第 " + count + " 次循环");
            count++;
        }
    }
}
```

**这段代码做了什么：**  
1. 初始化计数器变量 `count`。  
2. 在循环开始时判断条件 `count <= 5`。  
3. 条件为真时，执行循环体并输出次数。  
4. 循环体内，变量 `count` 自增。  
5. 直到 `count` 超过5，循环结束。  

`while` 循环更灵活，适合不确定循环次数的场景。

---

### do-while 循环示例

```java
public class DoWhileExample {
    public static void main(String[] args) {
        int count = 1;

        do {
            System.out.println("第 " + count + " 次循环");
            count++;
        } while (count <= 5);
    }
}
```

**这段代码做了什么：**  
1. 程序先执行一次循环体内容。  
2. 执行后检测条件 `count <= 5` 是否成立。  
3. 条件为真，继续循环，否则结束。  

`do-while` 确保循环体至少执行一次，适合先执行、后判断的场景。

---

## 跳转语句：break、continue 和 return

### break：跳出最近的循环或 switch

想象你在逛街，看到喜欢的东西马上决定买下，不再逛了，`break` 就是让程序提前跳出循环或 switch，停止后续循环。

### continue：跳过本次循环，进入下一次

逛街时遇到不喜欢的东西，直接跳过，继续逛下一家，`continue` 就是跳过本次循环后剩余代码，进入下一轮循环。

### return：结束当前方法执行并返回

`return` 是结束当前函数的执行，返回给调用方一个结果（或无）。它相当于是程序的“出口”。

---

### break 和 continue 示例

```java
public class BreakContinueExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i == 6) {
                break; // 6时停止整个循环
            }
            if (i % 2 == 0) {
                continue; // 偶数跳过本次打印
            }
            System.out.println("当前数字: " + i);
        }
    }
}
```

**这段代码做了什么：**  
1. 循环从1到10。  
2. 遇到数字6时使用 `break` 提前停止循环。  
3. 如果数字是偶数，用 `continue` 跳过后续打印语句。  
4. 只有奇数且小于6的数字被打印。  

这样结合使用，可以灵活控制循环流程，避免不必要工作。

---

### return 示例

```java
public class ReturnExample {
    public static void main(String[] args) {
        System.out.println(isEven(4)); // true
        System.out.println(isEven(5)); // false
    }

    public static boolean isEven(int number) {
        if (number % 2 == 0) {
            return true; // 偶数返回true
        }
        return false; // 非偶数返回false
    }
}
```

**这段代码做了什么：**  
1. 定义函数 `isEven` 判断奇偶。  
2. 如果是偶数，直接用 `return` 返回 `true`，马上结束函数。  
3. 不是偶数时，执行下一条 `return false`。  
4. 主函数打印返回结果。  

`return` 帮助我们在函数中决断结果，代码执行一旦遇到 `return` 就会离开函数，不再往下执行。

---

## 常见陷阱

:::warning ⚠️ 常见陷阱：忘记在 switch 里加 break  
很多初学者会在 `switch-case` 中忘记写 `break`，导致程序“跑”到后面的 case 里去，执行多余代码，一不小心就出现难以发现的错误。

```java
int number = 2;
switch (number) {
    case 1:
        System.out.println("一");
    case 2:
        System.out.println("二");
    case 3:
        System.out.println("三");
}
```

上述代码会输出：  
```
二
三
```

因为 `case 2` 没有 `break`，会继续执行 `case 3`。  
养成给每个 `case` 写 `break` 的习惯，保持逻辑清晰。

:::

---

## 对比总结

| 控制流语句   | 适用场景                         | 优劣                                      |
|-------------|--------------------------------|-------------------------------------------|
| if-else     | 多条件复杂判断                   | 灵活，但多层嵌套时代码可读性下降            |
| switch      | 有限多个具体值判断               | 语义清晰，执行效率有时更高，但不支持范围判断 |
| for         | 循环次数已知                   | 结构紧凑，整合初始化、条件、更新            |
| while       | 循环次数不固定，基于条件控制    | 灵活，适合传感器数据等条件依赖循环           |
| do-while    | 至少执行一次的循环              | 确保循环体执行，不适合不执行的情况           |
| break/continue | 控制循环执行流程               | 增加灵活性，滥用容易导致代码混乱             |
| return      | 结束函数的执行并返回结果        | 明确流程，但频繁返回可能影响阅读             |

---

## 实战建议

:::tip 💡 实战建议  
在日常项目中，清晰、可维护的代码结构非常重要。控制流语句尽量避免写深层嵌套，尤其是多层 if-else。可以考虑将复杂条件拆分成多个小函数，提升代码可读性。

使用 `switch` 时，要牢记给每个 `case` 添加 `break`，除非你有意要“贯穿”(fall-through)。在循环中合理使用 `break` 和 `continue`，避免过度依赖它们导致代码跳转混乱。

测试不同边界条件，确保循环和判断覆盖完整，避免死循环和遗漏情况。

代码写完后，不妨让同事或自己大声读一遍流程逻辑，有助于发现思考盲点。

:::

---

## 延伸思考

- 如果你需要根据多个条件同时判断，if-else 和 switch 哪种更适合？在什么场景下选择互补或结合使用？
- 如何设计循环结构来避免死循环？遇到无限循环如何排查和调试？
- 有没有更简洁的方法实现多条件分支，比如利用策略模式、函数式编程特性？

---

## 小结

- 控制流语句让程序能够根据条件做出不同选择，实现复杂业务逻辑。  
- `if-else` 适合复杂多条件判断，`switch` 适合多分支值判断。  
- 三种循环 (`for`, `while`, `do-while`) 分别适合不同循环场景。  
- `break`、`continue` 和 `return` 是灵活跳转工具，但使用时要保持代码清晰。  
- 养成分块思考和避免深层嵌套的习惯，有助于编写可读、易维护的代码。

---

期待你动手试试这些控制流语句，写写代码，小步快跑，慢慢你会发现，这些“程序走路的路标”，其实一点都不难。加油！