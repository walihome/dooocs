---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 数据类型（基本）

## Java 数据类型

顾名思义，数据类型指定了可以存储在[Java变量](https://www.dooocs.com/img/java-programming/variables-literals)中的数据类型。

Java是一种静态类型语言。这意味着所有变量在使用之前必须声明。
    
    
    int speed;

这里，speed是一个变量，变量的数据类型是`int`。

`int`数据类型确定了speed变量只能包含整数。

Java预定义了8种数据类型，称为基本数据类型。

> **注意**：除了基本数据类型外，还有引用类型（对象类型）。

* * *

## 8种基本数据类型

### 1\. 布尔类型

  * `boolean`数据类型有两个可能的值，要么是`true`，要么是`false`。
  * 默认值：`false`。
  * 它们通常用于**真/假**条件。



### 示例1：Java布尔数据类型
    
    
    class Main {
      public static void main(String[] args) {
        	
        boolean flag = true;
        System.out.println(flag);    // 输出 true
      }
    }

* * *

### 2\. 字节类型

  * `byte`数据类型的取值范围是**-128**到**127**（8位有符号二补数整数）。
  * 如果可以确定变量的值将在-128到127之间，则可以使用它来节省内存，而不是使用`int`。
  * 默认值：0



### 示例2：Java字节数据类型
    
    
    class Main {
      public static void main(String[] args) {
    
        byte range;
        range = 124;
        System.out.println(range);    // 输出 124
      }
    }

* * *

### 3\. 短整型

  * Java中的`short`数据类型的取值范围是**-32768**到**32767**（16位有符号二补数整数）。
  * 如果可以确定变量的值将在-32768和32767之间，则可以使用它来节省内存，而不是使用其他整数数据类型（如`int`、`long`）。
  * 默认值：0



### 示例3：Java短整型数据类型
    
    
    class Main {
      public static void main(String[] args) {
        	
        short temperature;
        temperature = -200;
        System.out.println(temperature);  // 输出 -200
      }
    }

* * *

### 4\. 整型

  * `int`数据类型的取值范围是**-2 31**到**2 31-1**（32位有符号二补数整数）。
  * 如果您使用的是Java 8或更高版本，可以使用无符号32位整数。其最小值为0，最大值为232-1。要了解更多信息，请访问[如何在Java 8中使用无符号整数？](http://stackoverflow.com/questions/25556017/how-to-use-the-unsigned-integer-in-java-8)
  * 默认值：0



### 示例4：Java整型数据类型
    
    
    class Main {
      public static void main(String[] args) {
        	
        int range = -4250000;
        System.out.println(range);  // 输出 -4250000
      }
    }

* * *

### 5\. 长整型

  * `long`数据类型的取值范围是**-2 63**到**2 63-1**（64位有符号二补数整数）。
  * 如果您使用的是Java 8或更高版本，可以使用无符号64位整数。其最小值为**0**，最大值为**2 64-1**。
  * 默认值：0



### 示例5：Java长整型数据类型
    
    
    class LongExample {
      public static void main(String[] args) {
        	
        long range = -42332200000L;
        System.out.println(range);    // 输出 -42332200000
      }
    }

请注意，在`-42332200000`的末尾使用了`L`。这表示它是`long`类型的整数。

* * *

### 6\. 双精度浮点型

  * `double`数据类型是双精度64位浮点