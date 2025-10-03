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

在编程中,你经常需要让程序根据不同情况做出不同的决定,或者重复执行某些操作。这就是**控制流(Control Flow)**要解决的问题——控制代码的执行顺序和方式。

## if 条件判断(Conditional Statement)

### 💡 概念讲解

**if语句(if Statement)**用于根据条件决定是否执行某段代码。就像生活中的决策:
- "如果下雨,我就带伞"
- "如果分数大于60,就显示及格"

### 📝 代码示例

```java
public class IfExample {
    public static void main(String[] args) {
        int score = 75;  // 分数
        
        // 单个if:只判断一个条件
        if (score >= 60) {
            System.out.println("及格了!");
        }
        
        // if-else:二选一
        if (score >= 90) {
            System.out.println("优秀");
        } else {
            System.out.println("继续努力");
        }
        
        // if-else if-else:多个条件判断
        if (score >= 90) {
            System.out.println("等级: A");
        } else if (score >= 80) {
            System.out.println("等级: B");
        } else if (score >= 60) {
            System.out.println("等级: C");
        } else {
            System.out.println("等级: D");
        }
    }
}
```

::: tip 提示
条件表达式必须写在圆括号 `()` 里,执行的代码必须写在花括号 `{}` 里。
:::

### ✅ 验证方法

运行上面的代码,你会看到:
```
及格了!
继续努力
等级: B
```

为什么是"等级: B"? 因为75分满足 `score >= 60` 但不满足 `score >= 90`,在多个条件判断中,第一个满足 `score >= 80` 的条件被执行。

### 📝 常用比较运算符

```java
public class ComparisonOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        
        // ==  等于
        if (a == b) {
            System.out.println("a等于b");
        }
        
        // !=  不等于
        if (a != b) {
            System.out.println("a不等于b");  // 会输出这个
        }
        
        // >   大于
        if (a > b) {
            System.out.println("a大于b");  // 会输出这个
        }
        
        // <   小于
        if (a < b) {
            System.out.println("a小于b");
        }
        
        // >=  大于等于
        if (a >= 10) {
            System.out.println("a大于等于10");  // 会输出这个
        }
        
        // <=  小于等于
        if (b <= 5) {
            System.out.println("b小于等于5");  // 会输出这个
        }
    }
}
```

::: warning 注意
判断相等用 `==` (两个等号),不是 `=` (一个等号)。一个等号是**赋值(Assignment)**,两个等号是**比较(Comparison)**。
:::

### 💪 练习题

1. **基础练习**: 写一个程序,判断一个数字是正数、负数还是零
2. **进阶练习**: 写一个程序,输入年龄,判断是儿童(0-12)、青少年(13-17)、成年人(18-59)还是老年人(60+)
3. **综合练习**: 写一个程序,判断一个年份是否为闰年(能被4整除但不能被100整除,或者能被400整除)

## for 循环(For Loop)

### 💡 概念讲解

**for循环(For Loop)**用于重复执行某段代码指定的次数。比如:
- 打印1到10的数字
- 计算1到100的总和
- 处理数组中的每个元素

### 📝 代码示例

```java
public class ForLoopExample {
    public static void main(String[] args) {
        // 基本for循环:打印1到5
        for (int i = 1; i <= 5; i++) {
            System.out.println("第" + i + "次循环");
        }
        
        System.out.println("---");
        
        // 计算1到10的总和
        int sum = 0;  // 用来存储总和
        for (int i = 1; i <= 10; i++) {
            sum = sum + i;  // 每次循环都累加i的值
        }
        System.out.println("1到10的总和: " + sum);
        
        System.out.println("---");
        
        // 打印偶数
        for (int i = 0; i <= 10; i = i + 2) {
            System.out.println("偶数: " + i);
        }
    }
}
```

### 🔍 for循环的结构解析

```java
for (初始化; 条件判断; 更新) {
    // 循环体:重复执行的代码
}
```

让我们拆解 `for (int i = 1; i <= 5; i++)`:

1. **初始化(Initialization)**: `int i = 1` - 创建变量i,初始值为1(只执行一次)
2. **条件判断(Condition)**: `i <= 5` - 每次循环前检查,如果为真就继续,为假就停止
3. **更新(Update)**: `i++` - 每次循环结束后执行,`i++` 等同于 `i = i + 1`

::: tip 提示
`i++` 是一个简写,意思是"让i增加1"。你也可以写 `i = i + 1`,效果相同。
:::

### 📝 循环执行过程演示

```java
public class LoopProcess {
    public static void main(String[] args) {
        // 让我们看看for循环是如何工作的
        for (int i = 1; i <= 3; i++) {
            System.out.println("循环开始,i的值是: " + i);
        }
        
        // 执行过程:
        // 1. i = 1, 检查 1 <= 3? 是,输出 "i的值是: 1", 然后 i++, i变成2
        // 2. i = 2, 检查 2 <= 3? 是,输出 "i的值是: 2", 然后 i++, i变成3
        // 3. i = 3, 检查 3 <= 3? 是,输出 "i的值是: 3", 然后 i++, i变成4
        // 4. i = 4, 检查 4 <= 3? 否,循环结束
    }
}
```

### ✅ 验证方法

运行第一个示例,你会看到:
```
第1次循环
第2次循环
第3次循环
第4次循环
第5次循环
---
1到10的总和: 55
---
偶数: 0
偶数: 2
偶数: 4
偶数: 6
偶数: 8
偶数: 10
```

### 💪 练习题

1. **基础练习**: 使用for循环打印10到1的倒计时
2. **进阶练习**: 计算1到50之间所有奇数的和
3. **综合练习**: 打印九九乘法表(提示:需要嵌套两个for循环)

## while 循环(While Loop)

### 💡 概念讲解

**while循环(While Loop)**在条件为真时持续执行代码。与for循环的区别:
- **for循环**: 知道要循环多少次时使用
- **while循环**: 不确定循环次数,只知道什么时候停止

比如:"当账户余额不足100时,继续提示充值"。

### 📝 代码示例

```java
public class WhileLoopExample {
    public static void main(String[] args) {
        // 基本while循环
        int count = 1;
        while (count <= 5) {
            System.out.println("计数: " + count);
            count++;  // 别忘了更新变量,否则会无限循环!
        }
        
        System.out.println("---");
        
        // 实际应用:猜数字游戏
        int target = 42;  // 目标数字
        int guess = 10;   // 当前猜测
        int attempts = 0; // 尝试次数
        
        while (guess != target) {
            attempts++;
            
            if (guess < target) {
                System.out.println(guess + " 太小了");
                guess = guess + 10;  // 增加猜测值
            } else {
                System.out.println(guess + " 太大了");
                guess = guess - 5;  // 减少猜测值
            }
        }
        
        System.out.println("恭喜!答案是 " + target);
        System.out.println("总共尝试了 " + attempts + " 次");
    }
}
```

### 📝 while vs for 对比

```java
public class WhileVsFor {
    public static void main(String[] args) {
        // 用for循环打印1到5
        System.out.println("使用for循环:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
        
        System.out.println("---");
        
        // 用while循环打印1到5
        System.out.println("使用while循环:");
        int i = 1;           // 初始化
        while (i <= 5) {     // 条件判断
            System.out.println(i);
            i++;             // 更新
        }
    }
}
```

两种循环都能完成相同任务,但while更灵活,适合条件复杂的情况。

::: danger 警告
使用while循环时,一定要确保循环变量会改变,否则会造成**无限循环(Infinite Loop)**,程序永远不会停止!

```java
// ❌ 错误示例:无限循环
int count = 1;
while (count <= 5) {
    System.out.println(count);
    // 忘记写 count++,count永远是1,循环永不停止!
}
```
:::

### 📝 do-while 循环

还有一种特殊的while循环叫**do-while循环**,它至少会执行一次:

```java
public class DoWhileExample {
    public static void main(String[] args) {
        int number = 10;
        
        // 普通while:条件不满足,一次都不执行
        System.out.println("普通while:");
        while (number < 5) {
            System.out.println("这句话不会输出");
        }
        
        System.out.println("---");
        
        // do-while:先执行一次,再判断条件
        System.out.println("do-while:");
        do {
            System.out.println("这句话会输出一次");
        } while (number < 5);
        
        System.out.println("---");
        
        // 实际应用:菜单选择
        int choice = 0;
        do {
            System.out.println("请选择操作: 1.开始游戏 2.退出");
            choice = 2;  // 模拟用户选择
            
            if (choice == 1) {
                System.out.println("游戏开始!");
            } else if (choice == 2) {
                System.out.println("退出游戏");
            }
        } while (choice != 2);
    }
}
```

### ✅ 验证方法

运行WhileLoopExample,你会看到:
```
计数: 1
计数: 2
计数: 3
计数: 4
计数: 5
---
10 太小了
20 太小了
30 太小了
40 太小了
50 太大了
45 太大了
恭喜!答案是 42
总共尝试了 6 次
```

### 💪 练习题

1. **基础练习**: 使用while循环计算2的10次方(提示:每次循环结果乘以2)
2. **进阶练习**: 写一个程序,输入一个数字,计算它的各位数字之和(如123→1+2+3=6)
3. **综合练习**: 模拟存钱过程,每月存1000元,利息1%,问多少个月后能存够10万元

## 循环控制语句

### 💡 概念讲解

有时候你需要在循环中提前结束或跳过某次循环:
- **break**: 立即终止整个循环
- **continue**: 跳过本次循环,继续下一次

### 📝 代码示例

```java
public class LoopControl {
    public static void main(String[] args) {
        // break示例:找到第一个能被7整除的数
        System.out.println("使用break:");
        for (int i = 1; i <= 100; i++) {
            if (i % 7 == 0) {  // %是取余运算符
                System.out.println("找到了: " + i);
                break;  // 找到后立即退出循环
            }
        }
        
        System.out.println("---");
        
        // continue示例:只打印奇数
        System.out.println("使用continue:");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {  // 如果是偶数
                continue;  // 跳过本次循环,不执行下面的打印
            }
            System.out.println("奇数: " + i);
        }
        
        System.out.println("---");
        
        // 实际应用:查找数组中的值
        int[] numbers = {5, 12, 8, 20, 3, 15};
        int target = 20;
        boolean found = false;
        
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                System.out.println("在位置 " + i + " 找到了 " + target);
                found = true;
                break;  // 找到后不再继续查找
            }
        }
        
        if (!found) {
            System.out.println("没有找到 " + target);
        }
    }
}
```

::: tip 提示
`%` 是**取余运算符(Modulo Operator)**,返回除法的余数。比如 `7 % 2` 结果是1(7除以2余1),`8 % 2` 结果是0(8能被2整除)。
:::

### ✅ 验证方法

运行上面的代码,你会看到:
```
使用break:
找到了: 7
---
使用continue:
奇数: 1
奇数: 3
奇数: 5
奇数: 7
奇数: 9
---
在位置 3 找到了 20
```

### 💪 练习题

1. **基础练习**: 打印1到100,但遇到包含数字7的数就跳过(如7, 17, 27...)
2. **进阶练习**: 找出1到100之间的所有质数(只能被1和自己整除的数)

## 📌 本章小结

1. **if语句**用于条件判断,根据真假执行不同代码
   - 单个if: `if (条件) { }`
   - 二选一: `if (条件) { } else { }`
   - 多选一: `if (条件1) { } else if (条件2) { } else { }`

2. **for循环**适合知道循环次数的场景
   - 结构: `for (初始化; 条件; 更新) { }`
   - 常用于遍历数字范围或数组

3. **while循环**适合循环次数不确定的场景
   - 结构: `while (条件) { }`
   - 记得更新循环变量,避免无限循环

4. **循环控制**
   - `break`: 终止整个循环
   - `continue`: 跳过当前循环,继续下一次

5. **常用运算符**
   - 比较: `==`, `!=`, `>`, `<`, `>=`, `<=`
   - 取余: `%`
   - 自增: `i++` (等于 `i = i + 1`)

::: tip 下一步
尝试把if和循环结合使用,比如"打印1到100之间的所有偶数"、"计算成绩的平均分并判断等级"。控制流是编程的基础,多练习才能熟练掌握!
:::