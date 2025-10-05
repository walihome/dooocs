---
title: 数据类型
category: Java
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 数据类型

## 💡 什么是数据类型(Data Type)

计算机需要知道你存储的是什么类型的数据,这样才能正确地处理它们。就像你的大脑会区分数字、文字、真假一样,Java 也需要明确区分这些不同类型的信息。

Java 有 4 种最常用的基本数据类型:
- **整数(int)** - 存储整数,如 1、100、-50
- **浮点数(double)** - 存储小数,如 3.14、-0.5
- **字符串(String)** - 存储文本,如 "hello"、"你好"
- **布尔值(boolean)** - 存储真或假,只有 true 和 false 两个值

## 整数(int)

### 📝 代码示例

```java{4,5,8}
public class IntegerDemo {
    public static void main(String[] args) {
        // 声明并赋值一个整数
        int age = 25;
        int temperature = -10;
        
        // 打印整数
        System.out.println(age);
        System.out.println(temperature);
    }
}
```

**运行结果:**
```
25
-10
```

::: tip 提示
`int` 是 integer(整数)的缩写。声明变量时,格式是:`int 变量名 = 值;`
:::

### 💪 练习题

**练习1:** 创建一个变量存储你的出生年份,并打印出来。

::: details 点击查看答案
```java
public class Practice1 {
    public static void main(String[] args) {
        int birthYear = 2000;
        System.out.println(birthYear);
    }
}
```
:::

**练习2:** 创建两个整数变量,计算它们的和并打印。

::: details 点击查看答案
```java
public class Practice2 {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int sum = a + b;
        System.out.println(sum);
    }
}
```
:::

## 浮点数(double)

### 📝 代码示例

```java{4,5,8,9}
public class DoubleDemo {
    public static void main(String[] args) {
        // 声明并赋值浮点数
        double price = 19.99;
        double temperature = -3.5;
        
        // 打印浮点数
        System.out.println(price);
        System.out.println(temperature);
    }
}
```

**运行结果:**
```
19.99
-3.5
```

::: warning 注意
小数点用英文的句点 `.` 而不是逗号 `,`
:::

### 💪 练习题

**练习1:** 创建一个变量存储商品价格 99.99,并打印。

::: details 点击查看答案
```java
public class Practice3 {
    public static void main(String[] args) {
        double price = 99.99;
        System.out.println(price);
    }
}
```
:::

**练习2:** 计算圆的面积(半径为 5,π 取 3.14)。

::: details 点击查看答案
```java
public class Practice4 {
    public static void main(String[] args) {
        double radius = 5.0;
        double pi = 3.14;
        double area = pi * radius * radius;
        System.out.println(area);
    }
}
```
:::

## 字符串(String)

### 📝 代码示例

```java{4,5,8,9}
public class StringDemo {
    public static void main(String[] args) {
        // 声明并赋值字符串
        String name = "张三";
        String message = "Hello, World!";
        
        // 打印字符串
        System.out.println(name);
        System.out.println(message);
    }
}
```

**运行结果:**
```
张三
Hello, World!
```

::: tip 提示
- 字符串必须用双引号 `""` 包围
- `String` 的首字母要大写
:::

### 字符串拼接

```java{4,5,6,9}
public class StringConcatDemo {
    public static void main(String[] args) {
        // 使用 + 号拼接字符串
        String firstName = "三";
        String lastName = "张";
        String fullName = lastName + firstName;
        
        // 打印拼接结果
        System.out.println(fullName);
    }
}
```

**运行结果:**
```
张三
```

### 💪 练习题

**练习1:** 创建两个字符串变量,分别存储你的姓和名,然后拼接打印。

::: details 点击查看答案
```java
public class Practice5 {
    public static void main(String[] args) {
        String lastName = "李";
        String firstName = "明";
        String fullName = lastName + firstName;
        System.out.println(fullName);
    }
}
```
:::

**练习2:** 创建一个自我介绍,包含姓名和年龄。

::: details 点击查看答案
```java
public class Practice6 {
    public static void main(String[] args) {
        String name = "王芳";
        int age = 20;
        String introduction = "我叫" + name + ",今年" + age + "岁";
        System.out.println(introduction);
    }
}
```
:::

## 布尔值(boolean)

### 📝 代码示例

```java{4,5,8,9}
public class BooleanDemo {
    public static void main(String[] args) {
        // 布尔值只有两个值: true 或 false
        boolean isStudent = true;
        boolean isRaining = false;
        
        // 打印布尔值
        System.out.println(isStudent);
        System.out.println(isRaining);
    }
}
```

**运行结果:**
```
true
false
```

::: tip 提示
- `boolean` 只有两个值:`true`(真)和 `false`(假)
- 不需要加引号,直接写 true 或 false
:::

### 比较运算产生布尔值

```java{4,5,8,9}
public class ComparisonDemo {
    public static void main(String[] args) {
        // 比较运算的结果是布尔值
        boolean result1 = 10 > 5;
        boolean result2 = 3 < 2;
        
        // 打印比较结果
        System.out.println(result1);
        System.out.println(result2);
    }
}
```

**运行结果:**
```
true
false
```

### 💪 练习题

**练习1:** 创建一个布尔变量表示"今天是周末",值为 true,并打印。

::: details 点击查看答案
```java
public class Practice7 {
    public static void main(String[] args) {
        boolean isWeekend = true;
        System.out.println(isWeekend);
    }
}
```
:::

**练习2:** 比较两个数字 15 和 20 的大小,判断 15 是否大于 20。

::: details 点击查看答案
```java
public class Practice8 {
    public static void main(String[] args) {
        boolean result = 15 > 20;
        System.out.println(result);
    }
}
```
:::

## 📌 小结

1. **四种基本数据类型**:
   - `int` - 整数(如: 10, -5, 0)
   - `double` - 浮点数(如: 3.14, -0.5)
   - `String` - 字符串(如: "hello", 用双引号包围)
   - `boolean` - 布尔值(只有 true 或 false)

2. **声明变量的格式**: `数据类型 变量名 = 值;`

3. **不同类型有不同用途**: 存储年龄用 int,存储价格用 double,存储姓名用 String,存储真假用 boolean