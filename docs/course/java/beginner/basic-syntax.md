---
title: 基本语法
category: Java
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 基本语法

## 💡 变量(Variable)

**变量(Variable)** 就像一个有名字的盒子,用来存放数据。

变量需要先**声明(Declare)**,再**赋值(Assign)**:

```java
int age;        // 声明变量
age = 25;       // 赋值
```

也可以声明时直接赋值:

```java
int age = 25;   // 声明并赋值
```

变量名规则:
- 只能包含字母、数字、下划线和美元符号
- 必须以字母开头
- 建议使用有意义的名字

### 📝 代码示例

```java{5-7}
public class VariableDemo {
    public static void main(String[] args) {
        // 声明并赋值不同类型的变量
        
        int age = 25;              // 整数
        double price = 99.99;      // 小数
        String name = "张三";       // 文本
        
        boolean isStudent = true;  // 布尔值(真/假)
    }
}
```

::: tip 提示
`int`、`double`、`String`、`boolean` 是数据类型,后续章节会详细讲解。
:::

## 💡 输出变量

使用 `System.out.println()` 可以在控制台打印变量的内容。

### 📝 代码示例

```java{9-11}
public class PrintDemo {
    public static void main(String[] args) {
        int age = 25;
        double price = 99.99;
        String name = "张三";
        
        // 打印变量
        
        System.out.println(age);     // 输出: 25
        System.out.println(price);   // 输出: 99.99
        System.out.println(name);    // 输出: 张三
    }
}
```

**运行结果:**
```
25
99.99
张三
```

可以使用 `+` 拼接文本和变量:

```java{5-6}
public class PrintWithTextDemo {
    public static void main(String[] args) {
        String name = "张三";
        int age = 25;
        
        System.out.println("姓名:" + name);           // 输出: 姓名:张三
        System.out.println("年龄:" + age + "岁");     // 输出: 年龄:25岁
    }
}
```

## 💡 基本运算

Java 支持常见的数学运算:

| 运算符 | 说明 | 示例 |
|--------|------|------|
| `+` | 加法 | `5 + 3` 结果为 `8` |
| `-` | 减法 | `5 - 3` 结果为 `2` |
| `*` | 乘法 | `5 * 3` 结果为 `15` |
| `/` | 除法 | `6 / 3` 结果为 `2` |
| `%` | 取余 | `5 % 2` 结果为 `1` |

### 📝 代码示例

```java{5-9}
public class CalculationDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println(a + b);  // 输出: 13
        System.out.println(a - b);  // 输出: 7
        System.out.println(a * b);  // 输出: 30
        System.out.println(a / b);  // 输出: 3
        System.out.println(a % b);  // 输出: 1
    }
}
```

**运行结果:**
```
13
7
30
3
1
```

::: warning 注意
整数除法只保留整数部分,`10 / 3` 结果是 `3` 而不是 `3.333...`
:::

### 📝 小数运算

```java{4-5}
public class DecimalCalculationDemo {
    public static void main(String[] args) {
        double price = 99.5;
        double discount = 0.8;
        double finalPrice = price * discount;
        
        System.out.println("原价:" + price);
        System.out.println("折扣:" + discount);
        System.out.println("最终价格:" + finalPrice);
    }
}
```

**运行结果:**
```
原价:99.5
折扣:0.8
最终价格:79.6
```

## 💡 注释(Comment)

**注释(Comment)** 是写给人看的说明,程序运行时会被忽略。

Java 有三种注释方式:

```java
// 单行注释:用两个斜杠开头

/*
多行注释:
用斜杠星号开始
用星号斜杠结束
*/

/**
 * 文档注释:
 * 用于生成API文档
 */
```

### 📝 代码示例

```java{3,6,9-11}
public class CommentDemo {
    public static void main(String[] args) {
        // 计算商品总价
        
        int quantity = 5;      // 数量
        double unitPrice = 10.5;  // 单价
        
        /*
        总价 = 数量 × 单价
        */
        double totalPrice = quantity * unitPrice;
        
        System.out.println("总价:" + totalPrice);
    }
}
```

::: tip 提示
养成写注释的习惯,未来的你会感谢现在的你。
:::

## 💡 日志打印

除了 `System.out.println()`,还有其他打印方式:

| 方法 | 说明 |
|------|------|
| `System.out.println()` | 打印后换行 |
| `System.out.print()` | 打印后不换行 |
| `System.out.printf()` | 格式化打印 |

### 📝 代码示例

```java{4-6,9-12}
public class PrintMethodsDemo {
    public static void main(String[] args) {
        // println 会换行
        System.out.println("第一行");
        System.out.println("第二行");
        
        // print 不换行
        System.out.print("A");
        System.out.print("B");
        System.out.print("C");
        System.out.println();  // 手动换行
        
        // printf 格式化打印
        String name = "李四";
        int age = 30;
        double salary = 8500.5;
        System.out.printf("姓名:%s, 年龄:%d, 工资:%.2f", name, age, salary);
    }
}
```

**运行结果:**
```
第一行
第二行
ABC
姓名:李四, 年龄:30, 工资:8500.50
```

`printf()` 常用占位符:
- `%s` - 字符串
- `%d` - 整数
- `%f` - 小数
- `%.2f` - 保留2位小数

## 💪 练习题

**练习1:** 编写程序计算矩形的面积和周长

要求:
- 定义变量 `length`(长)和 `width`(宽)
- 计算并打印面积和周长

<details>
<summary>点击查看答案</summary>

```java
public class RectangleCalculator {
    public static void main(String[] args) {
        // 定义矩形的长和宽
        double length = 10.5;
        double width = 5.0;
        
        // 计算面积和周长
        double area = length * width;
        double perimeter = 2 * (length + width);
        
        // 打印结果
        System.out.println("长:" + length);
        System.out.println("宽:" + width);
        System.out.println("面积:" + area);
        System.out.println("周长:" + perimeter);
    }
}
```

</details>

**练习2:** 编写程序计算购物车总价

要求:
- 有3件商品,价格分别是 19.9、35.5、88.0
- 使用 `printf()` 格式化打印总价,保留2位小数

<details>
<summary>点击查看答案</summary>

```java
public class ShoppingCart {
    public static void main(String[] args) {
        // 商品价格
        double item1 = 19.9;
        double item2 = 35.5;
        double item3 = 88.0;
        
        // 计算总价
        double total = item1 + item2 + item3;
        
        // 格式化打印
        System.out.println("商品1:¥" + item1);
        System.out.println("商品2:¥" + item2);
        System.out.println("商品3:¥" + item3);
        System.out.printf("总价:¥%.2f", total);
    }
}
```

</details>

## 📌 小结

- **变量**是存储数据的容器,格式为 `类型 变量名 = 值;`
- **输出**使用 `System.out.println()`,可用 `+` 拼接文本和变量
- **运算**支持 `+`、`-`、`*`、`/`、`%` 五种基本运算符
- **注释**用 `//` 或 `/* */`,帮助理解代码
- **日志打印**可选择 `println()`、`print()` 或 `printf()` 根据需求使用