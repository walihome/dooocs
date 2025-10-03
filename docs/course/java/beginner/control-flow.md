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

 # 控制流

程序就像一条道路,代码从上往下一行行执行。但现实中我们常需要"如果...就..."或"重复做某事",这就是控制流要解决的问题。

## if 语法

### 💡 概念说明

**条件判断(if Statement)** 让程序根据情况做出不同选择。

### 📝 代码示例

```java
public class IfDemo {
    public static void main(String[] args) {
        int age = 18;
        
        // 单个条件判断
        if (age >= 18) {
            System.out.println("你是成年人");
        }
        
        // 两个分支
        int score = 75;
        if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
        
        // 多个分支
        int temperature = 25;
        if (temperature > 30) {
            System.out.println("天气炎热");
        } else if (temperature > 20) {
            System.out.println("天气温暖");
        } else {
            System.out.println("天气寒冷");
        }
    }
}
```

### ✅ 验证方法

将代码保存为 `IfDemo.java`,运行后会看到:

```
你是成年人
及格
天气温暖
```

试着修改 `age`、`score`、`temperature` 的值,观察输出变化。

### 💪 练习题

1. 写一个程序判断数字是正数、负数还是零
2. 判断一个年份是否为闰年(能被4整除但不能被100整除,或能被400整除)

## while 循环

### 💡 概念说明

**while 循环(while Loop)** 在条件为真时重复执行代码块。

### 📝 代码示例

```java
public class WhileDemo {
    public static void main(String[] args) {
        // 打印 1 到 5
        int count = 1;
        while (count <= 5) {
            System.out.println("第 " + count + " 次");
            count++;  // count = count + 1
        }
        
        // 计算 1+2+3+4+5
        int num = 1;
        int sum = 0;
        while (num <= 5) {
            sum = sum + num;
            num++;
        }
        System.out.println("总和: " + sum);
    }
}
```

::: warning 注意
如果忘记写 `count++`,循环会永远执行下去(死循环)。遇到这种情况按 `Ctrl + C` 强制停止程序。
:::

### ✅ 验证方法

运行后看到:

```
第 1 次
第 2 次
第 3 次
第 4 次
第 5 次
总和: 15
```

### 💪 练习题

1. 使用 while 循环打印 10 到 1 的倒计时
2. 计算 1 到 100 的所有偶数之和

## for 循环

### 💡 概念说明

**for 循环(for Loop)** 是最常用的循环,特别适合已知循环次数的场景。

### 📝 代码示例

```java
public class ForDemo {
    public static void main(String[] args) {
        // 打印 0 到 4
        for (int i = 0; i < 5; i++) {
            System.out.println("i = " + i);
        }
        
        // 打印九九乘法表的一行
        for (int j = 1; j <= 9; j++) {
            System.out.print("3 x " + j + " = " + (3 * j) + "  ");
        }
        System.out.println();
        
        // 嵌套循环:打印矩形
        for (int row = 1; row <= 3; row++) {
            for (int col = 1; col <= 5; col++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

::: tip 提示
`for (int i = 0; i < 5; i++)` 包含三部分:
- `int i = 0` - 初始化,只执行一次
- `i < 5` - 每次循环前检查条件
- `i++` - 每次循环后执行
:::

### ✅ 验证方法

运行后看到:

```
i = 0
i = 1
i = 2
i = 3
i = 4
3 x 1 = 3  3 x 2 = 6  3 x 3 = 9  3 x 4 = 12  3 x 5 = 15  3 x 6 = 18  3 x 7 = 21  3 x 8 = 24  3 x 9 = 27  
* * * * * 
* * * * * 
* * * * * 
```

### 💪 练习题

1. 使用 for 循环计算 1! + 2! + 3! + 4! + 5! (阶乘)
2. 打印完整的九九乘法表(使用嵌套循环)
3. 找出 1 到 100 之间所有能被 7 整除的数

## 📌 小结

- **if 语句**根据条件决定执行哪段代码,可以有多个分支
- **while 循环**在条件为真时持续执行,要注意更新循环变量避免死循环
- **for 循环**适合已知次数的重复任务,三个部分控制循环的开始、继续和更新