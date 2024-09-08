---
title: 类型转换
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 类型转换

在学习**Java类型转换**之前，请确保你了解[Java数据类型](https://www.dooocs.com/img/java-programming/variables-primitive-data-types "Java数据类型")。

* * *

## 类型转换

将一个数据类型（`int`、`float`、`double`等）的值转换为另一个数据类型被称为类型转换。

在Java中，有13种类型的类型转换。然而，在本教程中，我们只关注主要的两种类型。

1\. 扩宽类型转换

2\. 缩小类型转换

要了解其他类型的类型转换，请访问[Java类型转换（官方Java文档）](https://docs.oracle.com/javase/specs/jls/se10/html/jls-5.html "Java类型转换（官方Java文档）")。

* * *

## 扩宽类型转换

在**扩宽类型转换**中，Java会自动将一种数据类型转换为另一种数据类型。

### 示例：将int转换为double

    
    class Main {
      public static void main(String[] args) {
        // 创建int类型变量
        int num = 10;
        System.out.println("整数值：" + num);

        // 转换为double类型
        double data = num;
        System.out.println("双精度值：" + data);
      }
    }
    

**输出**
    
    
    整数值：10
    双精度值：10.0
    

在上面的示例中，我们将名为num的`int`类型变量赋值给名为data的`double`类型变量。

在这里，Java首先将`int`类型数据转换为`double`类型，然后将其赋给`double`变量。

在**扩宽类型转换**中，较低的数据类型（大小较小）被转换为较高的数据类型（大小较大）。因此，数据不会丢失。这就是为什么这种类型的转换会自动发生的原因。

> **注意**：这也被称为**隐式类型转换**。

* * *

## 缩小类型转换

在**缩小类型转换**中，我们使用括号手动将一种数据类型转换为另一种数据类型。

### 示例：将double转换为int

    
    class Main {
      public static void main(String[] args) {
        // 创建double类型变量
        double num = 10.99;
        System.out.println("双精度值：" + num);

        // 转换为int类型
        int data = (int)num;
        System.out.println("整数值：" + data);
      }
    }
    

**输出**
    
    
    双精度值：10.99
    整数值：10
    

在上面的示例中，我们将名为num的`double`类型变量赋值给名为data的`int`类型变量。

注意以下代码行：

    int data = (int)num;

在这里，圆括号中的`int`关键字表示将num变量转换为`int`类型。

在**缩小类型转换**中，较高的数据类型（大小较大）被转换为较低的数据类型（大小较小）。因此会丢失数据。这就是为什么这种类型的转换不会自动发生的原因。

> **注意**：这也被称为**显式类型转换**。

* * *

让我们看一些Java中的其他类型转换的示例。

## 示例1：从int转换为String

    
    class Main {
      public static void main(String[] args) {
        // 创建int类型变量
        int num = 10;
        System.out.println("整数值：" + num);

        // 将int转换为string类型
        String data = String.valueOf(num);
        System.out.println("字符串值：" + data);
      }
    }
    

**输出**
    
    
    整数值：10
    字符串值：10
    

在上面的程序中，注意以下代码行

    String data = String.valueOf(num);

在这里，我们使用了[Java String类](https://www.dooocs.com/img/java-programming/string "Java String")的`