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

## 💡 概念说明（Concept）

**数据类型(Data Type)** 就是告诉计算机"这个东西是什么"。就像现实生活中，你需要区分数字和文字一样，Java 也需要知道你存储的是数字、文字还是其他内容。

## 📝 整数类型（Integer）

**整数(int)** 用来存储没有小数点的数字。

```java
public class DataTypeDemo {
    public static void main(String[] args) {
        int age = 25;                    // 存储年龄
        int temperature = -5;            // 存储温度(可以是负数)
        int population = 1000000;        // 存储人口数量
        
        System.out.println(age);
        System.out.println(temperature);
        System.out.println(population);
    }
}
```

**运行结果：**
```
25
-5
1000000
```

### ✅ 验证方法

将代码保存为 `DataTypeDemo.java`，运行：
```bash
javac DataTypeDemo.java
java DataTypeDemo
```

### 💪 练习题

1. 创建一个变量存储你的幸运数字，并打印出来
2. 创建两个整数变量，计算它们的和并打印（使用 `+` 号）

---

## 📝 浮点数类型（Floating Point）

**浮点数(double)** 用来存储带小数点的数字。

```java
public class DoubleDemo {
    public static void main(String[] args) {
        double price = 19.99;            // 存储价格
        double pi = 3.14159;             // 存储圆周率
        double weight = 65.5;            // 存储体重
        
        System.out.println(price);
        System.out.println(pi);
        System.out.println(weight);
    }
}
```

**运行结果：**
```
19.99
3.14159
65.5
```

::: tip 提示
`double` 比 `int` 更精确，但占用更多内存。如果不需要小数，优先使用 `int`。
:::

### 💪 练习题

1. 创建一个变量存储商品价格 `99.5`，打印出来
2. 计算两个浮点数的乘积（使用 `*` 号）

---

## 📝 字符串类型（String）

**字符串(String)** 用来存储文字内容，必须用 **双引号** 包裹。

```java
public class StringDemo {
    public static void main(String[] args) {
        String name = "Alice";           // 存储姓名
        String city = "Beijing";         // 存储城市
        String message = "Hello World";  // 存储消息
        
        System.out.println(name);
        System.out.println(city);
        System.out.println(message);
    }
}
```

**运行结果：**
```
Alice
Beijing
Hello World
```

::: warning 注意
`String` 的首字母必须大写，双引号必须是英文状态下的 `"`。
:::

### 字符串拼接

你可以用 `+` 号连接多个字符串：

```java
public class StringConcatDemo {
    public static void main(String[] args) {
        String firstName = "Zhang";
        String lastName = "San";
        String fullName = firstName + " " + lastName;
        
        System.out.println(fullName);            // Zhang San
        System.out.println("My name is " + fullName);  // My name is Zhang San
    }
}
```

### 💪 练习题

1. 创建两个字符串变量分别存储你的姓和名，拼接后打印
2. 打印一句话：`"我今年 X 岁"`（提示：可以用 `+` 连接字符串和数字）

---

## 📝 布尔类型（Boolean）

**布尔值(boolean)** 只有两个值：`true`(真) 或 `false`(假)，用来表示"是"或"否"。

```java
public class BooleanDemo {
    public static void main(String[] args) {
        boolean isStudent = true;        // 是否是学生
        boolean hasLicense = false;      // 是否有驾照
        boolean isAdult = true;          // 是否成年
        
        System.out.println(isStudent);
        System.out.println(hasLicense);
        System.out.println(isAdult);
    }
}
```

**运行结果：**
```
true
false
true
```

::: tip 提示
`true` 和 `false` 都是小写，不需要加引号。
:::

### 💪 练习题

1. 创建一个布尔变量表示"今天是否下雨"，赋值为 `false`，打印出来
2. 创建三个布尔变量，分别表示不同的状态，观察打印结果

---

## 🎯 综合练习

创建一个完整的程序，包含所有数据类型：

```java
public class AllTypesDemo {
    public static void main(String[] args) {
        int age = 20;
        double height = 175.5;
        String name = "Tom";
        boolean isStudent = true;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Is Student: " + isStudent);
    }
}
```

**运行结果：**
```
Name: Tom
Age: 20
Height: 175.5
Is Student: true
```

### 💪 挑战练习

创建一个描述你自己的程序，包含：
- 姓名（String）
- 年龄（int）
- 身高（double）
- 是否喜欢编程（boolean）

---

## 📌 小结（Key Points）

1. **int** 存储整数，**double** 存储小数，**String** 存储文字（双引号），**boolean** 存储真假
2. 变量命名格式：`类型 变量名 = 值;`（注意分号）
3. 使用 `+` 可以拼接字符串或计算数字