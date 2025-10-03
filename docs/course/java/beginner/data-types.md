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

编程就是让计算机处理数据。不同的数据需要用不同的方式存储和处理:

- **整数(Integer)** - 用来存储没有小数部分的数字
- **浮点数(Floating Point)** - 用来存储带小数的数字
- **字符串(String)** - 用来存储文本内容
- **布尔值(Boolean)** - 用来表示真或假

## 整数(Integer)

### 📝 代码示例

```java{3-6}
public class IntegerDemo {
    public static void main(String[] args) {
        int age = 25;                    // 年龄
        int score = 98;                  // 分数
        int temperature = -5;            // 温度(可以是负数)
        
        System.out.println(age);         // 输出: 25
        System.out.println(score);       // 输出: 98
        System.out.println(temperature); // 输出: -5
    }
}
```

::: tip 提示
`int` 是 integer 的缩写,表示整数类型。整数可以是正数、负数或零。
:::

### 💪 练习题

**练习1**: 创建三个整数变量,分别存储你的出生年份、当前年份,然后计算并输出你的年龄。

::: details 查看答案
```java
public class AgeCalculator {
    public static void main(String[] args) {
        int birthYear = 2000;
        int currentYear = 2025;
        int myAge = currentYear - birthYear;
        
        System.out.println(myAge);  // 输出: 25
    }
}
```
:::

## 浮点数(Floating Point)

### 📝 代码示例

```java{3-5}
public class DoubleDemo {
    public static void main(String[] args) {
        double price = 19.99;           // 商品价格
        double pi = 3.14159;            // 圆周率
        double temperature = 36.5;      // 体温
        
        System.out.println(price);      // 输出: 19.99
        System.out.println(pi);         // 输出: 3.14159
        System.out.println(temperature);// 输出: 36.5
    }
}
```

::: tip 提示
`double` 表示双精度浮点数,用于存储带小数的数字。适合存储价格、温度、距离等需要精确度的数据。
:::

### 💪 练习题

**练习2**: 计算一个矩形的面积。已知长是 5.5,宽是 3.2,面积 = 长 × 宽。

::: details 查看答案
```java
public class RectangleArea {
    public static void main(String[] args) {
        double length = 5.5;
        double width = 3.2;
        double area = length * width;
        
        System.out.println(area);  // 输出: 17.6
    }
}
```
:::

## 字符串(String)

### 📝 代码示例

```java{3-6}
public class StringDemo {
    public static void main(String[] args) {
        String name = "张三";           // 姓名
        String city = "北京";           // 城市
        String greeting = "Hello";      // 问候语
        
        System.out.println(name);       // 输出: 张三
        System.out.println(city);       // 输出: 北京
        System.out.println(greeting);   // 输出: Hello
    }
}
```

::: warning 注意
字符串的值必须用双引号 `""` 包裹,不能用单引号。
:::

### 字符串拼接

```java{4-5}
public class StringConcat {
    public static void main(String[] args) {
        String firstName = "三";
        String fullName = "张" + firstName;        // 用 + 拼接字符串
        String message = "你好," + fullName;
        
        System.out.println(fullName);   // 输出: 张三
        System.out.println(message);    // 输出: 你好,张三
    }
}
```

### 💪 练习题

**练习3**: 创建你的自我介绍,包含姓名、年龄、城市,并用一句话输出。

::: details 查看答案
```java
public class SelfIntro {
    public static void main(String[] args) {
        String name = "李四";
        int age = 20;
        String city = "上海";
        
        String intro = "我叫" + name + ",今年" + age + "岁,来自" + city;
        System.out.println(intro);
        // 输出: 我叫李四,今年20岁,来自上海
    }
}
```
:::

## 布尔值(Boolean)

### 📝 代码示例

```java{3-5}
public class BooleanDemo {
    public static void main(String[] args) {
        boolean isStudent = true;       // 是否是学生
        boolean isRaining = false;      // 是否在下雨
        boolean hasLicense = true;      // 是否有驾照
        
        System.out.println(isStudent);  // 输出: true
        System.out.println(isRaining);  // 输出: false
        System.out.println(hasLicense); // 输出: true
    }
}
```

::: tip 提示
布尔值只有两个可能的值: `true`(真) 或 `false`(假)。常用于表示是或否、开或关等二选一的情况。
:::

### 布尔值的运算

```java{4-6}
public class BooleanCompare {
    public static void main(String[] args) {
        int score = 85;
        boolean isPassed = score >= 60;    // 是否及格
        boolean isExcellent = score >= 90; // 是否优秀
        
        System.out.println(isPassed);      // 输出: true
        System.out.println(isExcellent);   // 输出: false
    }
}
```

### 💪 练习题

**练习4**: 判断一个人是否成年(年龄 >= 18),以及是否是未成年人。

::: details 查看答案
```java
public class AgeCheck {
    public static void main(String[] args) {
        int age = 16;
        boolean isAdult = age >= 18;
        boolean isMinor = age < 18;
        
        System.out.println(isAdult);  // 输出: false
        System.out.println(isMinor);  // 输出: true
    }
}
```
:::

## 📌 小结

- **int** - 存储整数,如年龄、数量
- **double** - 存储小数,如价格、温度
- **String** - 存储文本,必须用双引号包裹
- **boolean** - 存储真假值,只有 `true` 或 `false`