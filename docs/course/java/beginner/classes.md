---
title: 类、属性、方法
category: Java
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 类、属性、方法

## 💡 什么是类(Class)

类是创建对象的模板。你可以把类想象成建筑图纸，而对象是根据图纸建造出来的房子。

类包含两部分核心内容：
- **属性(Field/Attribute)**：描述对象的特征，比如一个人的姓名、年龄
- **方法(Method)**：定义对象可以执行的操作，比如一个人可以说话、走路

## 📝 创建你的第一个类

让我们创建一个 `Person` 类来表示一个人：

```java{1,3,6}
public class Person {
    // 这里放属性和方法
    String name;
    int age;

    void sayHello() {
        System.out.println("Hello, my name is " + name);
    }
}
```

**代码说明：**
- 第 1 行：定义一个名为 `Person` 的类
- 第 3-4 行：定义了两个属性
- 第 6-8 行：定义了一个方法

::: tip 命名规范
类名使用大驼峰命名法(PascalCase)，每个单词首字母大写，如 `Person`、`StudentInfo`
:::

## 📝 定义类的属性

属性用来存储对象的数据。语法格式：`数据类型 属性名;`

```java{2-3}
public class Student {
    String name;      // 学生姓名
    int score;        // 学生分数
}
```

### 常用数据类型

| 数据类型 | 说明 | 示例 |
|---------|------|------|
| `String` | 文本 | `"张三"` |
| `int` | 整数 | `18` |
| `double` | 小数 | `98.5` |
| `boolean` | 真/假 | `true` 或 `false` |

```java
public class Car {
    String brand;        // 品牌
    String color;        // 颜色
    double price;        // 价格
    boolean isRunning;   // 是否在运行
}
```

## 📝 定义类的方法

方法定义对象能做什么。语法格式：`返回类型 方法名() { 方法体 }`

```java{5-7,9-12}
public class Calculator {
    int number1;
    int number2;

    void showNumbers() {
        System.out.println("Number 1: " + number1);
        System.out.println("Number 2: " + number2);
    }

    int add() {
        return number1 + number2;
    }
}
```

**方法的两种类型：**

1. **无返回值方法**：使用 `void`，只执行操作不返回结果
2. **有返回值方法**：指定返回类型（如 `int`），使用 `return` 返回结果

## 📝 完整示例：创建和使用类

创建一个 `Dog` 类并使用它：

```java{1-11,15-19}
public class Dog {
    String name;
    int age;

    void bark() {
        System.out.println(name + " says: Woof!");
    }

    void introduce() {
        System.out.println("I am " + name + ", " + age + " years old");
    }
}

// 在 main 方法中使用
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();     // 创建对象
        myDog.name = "Buddy";      // 设置属性
        myDog.age = 3;
        
        myDog.bark();              // 调用方法
        myDog.introduce();
    }
}
```

**运行结果：**
```
Buddy says: Woof!
I am Buddy, 3 years old
```

## 📝 属性的访问级别(Access Level)

访问级别控制谁可以访问类的属性。最常用的两种：

### public - 公开的

任何地方都可以访问：

```java{2-3}
public class Book {
    public String title;
    public double price;
}

// 在其他类中可以直接访问
Book book = new Book();
book.title = "Java Tutorial";  // ✅ 可以访问
```

### private - 私有的

只能在类内部访问：

```java{2-3,5-11}
public class BankAccount {
    private String accountNumber;
    private double balance;

    public void deposit(double amount) {
        balance = balance + amount;  // ✅ 类内部可以访问
    }

    public double getBalance() {
        return balance;              // ✅ 类内部可以访问
    }
}

// 在其他类中
BankAccount account = new BankAccount();
account.balance = 1000;  // ❌ 错误！无法访问 private 属性
account.deposit(1000);   // ✅ 正确！通过 public 方法访问
```

::: tip 最佳实践
通常将属性设为 `private`，通过 `public` 方法来访问和修改，这样可以更好地保护数据
:::

### 完整的示例

```java{2-3,6-8,11-13}
public class Student {
    private String name;
    private int score;

    // 设置姓名
    public void setName(String newName) {
        name = newName;
    }

    // 获取姓名
    public String getName() {
        return name;
    }

    // 设置分数（带验证）
    public void setScore(int newScore) {
        if (newScore >= 0 && newScore <= 100) {
            score = newScore;
        } else {
            System.out.println("Invalid score!");
        }
    }

    // 获取分数
    public int getScore() {
        return score;
    }
}

// 使用示例
public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setName("Alice");
        student.setScore(95);
        
        System.out.println(student.getName() + "'s score: " + student.getScore());
    }
}
```

**运行结果：**
```
Alice's score: 95
```

## 💪 练习题

### 练习 1：创建手机类
创建一个 `Phone` 类，包含：
- 属性：`brand`（品牌）、`price`（价格）
- 方法：`showInfo()`（显示手机信息）

### 练习 2：创建计数器类
创建一个 `Counter` 类，包含：
- 私有属性：`count`（初始值为 0）
- 方法：`increment()`（加 1）、`getCount()`（获取当前值）

### 练习 3：创建矩形类
创建一个 `Rectangle` 类，包含：
- 私有属性：`width`（宽）、`height`（高）
- 方法：`setWidth()`、`setHeight()`、`getArea()`（计算面积）

## 📌 关键要点

1. **类是对象的模板**，包含属性和方法
2. **属性存储数据**，方法定义行为
3. **`private` 属性更安全**，通过 `public` 方法访问