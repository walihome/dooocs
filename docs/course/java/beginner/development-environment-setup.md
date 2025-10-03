---
title: 开发环境搭建
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

在 Java 的世界里,**类(Class)** 就像是一张蓝图或者设计图纸。就像建筑师画的房屋设计图,它定义了房子有哪些房间(属性)、能做什么事情(方法)。类本身不是房子,但可以根据这张图纸建造出无数栋真实的房子(对象)。

## 💡 为什么需要类?

你有没有想过,当我们需要管理很多学生的信息时,如果每个学生的姓名、年龄、成绩都用单独的变量存储,会有多混乱?

```java
// 不使用类的混乱写法
String student1Name = "张三";
int student1Age = 18;
double student1Score = 85.5;

String student2Name = "李四";
int student2Age = 19;
double student2Score = 90.0;
// 如果有 100 个学生呢?
```

类的出现就是为了把相关的数据和操作组织在一起,让代码更清晰、更易管理。

## 定义你的第一个类

让我们从最简单的例子开始——创建一个学生类。

### 📝 基础类结构

```java
// Student.java
public class Student {
    // 类的内容将写在这里
}
```

**关键要点**:
- `public` - **访问修饰符(Access Modifier)**,表示这个类可以被其他类访问
- `class` - **类关键字(Class Keyword)**,声明这是一个类
- `Student` - **类名(Class Name)**,首字母必须大写
- `{}` - **类体(Class Body)**,类的所有内容都写在大括号内

::: tip 命名规范
类名使用 **帕斯卡命名法(PascalCase)**:每个单词首字母大写,例如 `Student`、`BankAccount`、`ShoppingCart`。文件名必须与类名完全一致:`Student.java`。
:::

## 类字段(属性)

**字段(Field)** 也叫 **属性(Attribute)** 或 **成员变量(Member Variable)**,它们存储对象的数据。就像学生卡上的信息:姓名、学号、年龄。

### 📝 定义类字段

```java
// Student.java
public class Student {
    // 定义字段 define fields
    String name;        // 姓名 student name
    int age;           // 年龄 student age
    double score;      // 成绩 student score
}
```

每个 `Student` 对象都会有自己的 `name`、`age` 和 `score`。这就像每个学生都有自己的姓名和成绩,互不干扰。

::: warning 注意
字段定义在类体内,但在任何方法之外。它们属于整个类,不属于某个特定方法。
:::

## 类字段的访问等级

**访问修饰符(Access Modifier)** 控制谁可以访问这些字段。这就像你家的门:有些房间可以让客人进入,有些房间是私密的。

### 💡 四种访问级别

| 修饰符 | 中文 | 本类 | 同包 | 子类 | 所有类 |
|--------|------|------|------|------|--------|
| `private` | 私有的 | ✅ | ❌ | ❌ | ❌ |
| (默认) | 包私有 | ✅ | ✅ | ❌ | ❌ |
| `protected` | 受保护的 | ✅ | ✅ | ✅ | ❌ |
| `public` | 公开的 | ✅ | ✅ | ✅ | ✅ |

### 📝 实际应用示例

```java
// Student.java
public class Student {
    // private: 只能在 Student 类内部访问
    private String name;
    private int age;
    private double score;
    
    // public: 任何地方都可以访问
    public String studentId;  // 学号 student ID
}
```

::: tip 最佳实践
通常我们将字段设为 `private`,然后提供 `public` 方法来访问它们。这叫做 **封装(Encapsulation)**,是面向对象编程的核心原则之一。为什么?因为这样可以控制数据的访问方式,防止不合理的修改。
:::

### 💡 为什么需要 private?

想象一下,如果学生的年龄字段是 `public` 的:

```java
// 不好的设计
public class Student {
    public int age;  // 任何人都能直接修改
}

// 使用时可能出现问题
Student student = new Student();
student.age = -5;  // 年龄怎么能是负数? 但没人能阻止!
student.age = 999; // 这也不合理!
```

使用 `private` 配合方法就能解决这个问题:

```java
// 好的设计
public class Student {
    private int age;  // 私有字段
    
    // 提供方法来设置年龄 set age with validation
    public void setAge(int age) {
        if (age > 0 && age < 150) {  // 验证数据合理性
            this.age = age;
        } else {
            System.out.println("年龄不合理!");
        }
    }
}
```

## 类的方法

**方法(Method)** 定义了类能做什么事情。就像学生可以"学习"、"参加考试"、"自我介绍"。

### 📝 方法的基本结构

```java
访问修饰符 返回类型 方法名(参数列表) {
    // 方法体 method body
    // 执行的代码
    return 返回值;  // 如果有返回值
}
```

### 💡 完整示例:带方法的学生类

```java
// Student.java
public class Student {
    // 字段 fields
    private String name;
    private int age;
    private double score;
    
    // 方法1: 设置姓名 set student name
    public void setName(String name) {
        this.name = name;  // this 表示当前对象的字段
    }
    
    // 方法2: 获取姓名 get student name
    public String getName() {
        return this.name;  // 返回姓名
    }
    
    // 方法3: 设置年龄(带验证) set age with validation
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            System.out.println("年龄必须在 1-150 之间!");
        }
    }
    
    // 方法4: 获取年龄 get student age
    public int getAge() {
        return this.age;
    }
    
    // 方法5: 设置成绩 set score
    public void setScore(double score) {
        if (score >= 0 && score <= 100) {
            this.score = score;
        } else {
            System.out.println("成绩必须在 0-100 之间!");
        }
    }
    
    // 方法6: 获取成绩 get score
    public double getScore() {
        return this.score;
    }
    
    // 方法7: 自我介绍 introduce self
    public void introduce() {
        System.out.println("大家好,我叫 " + this.name + 
                         ",今年 " + this.age + " 岁" +
                         ",成绩是 " + this.score + " 分。");
    }
    
    // 方法8: 判断是否及格 check if passed
    public boolean isPassed() {
        return this.score >= 60;  // 60分及格
    }
}
```

### 💡 方法详解

**1. this 关键字**

`this` 代表"当前对象"。当参数名和字段名相同时,用 `this.` 来区分:

```java
public void setName(String name) {
    this.name = name;  // this.name 是字段, name 是参数
}
```

**2. 返回类型(Return Type)**

- `void` - 无返回值,方法执行完就结束
- `String` - 返回文本
- `int` - 返回整数
- `boolean` - 返回 true 或 false
- 其他类型...

**3. 参数(Parameters)**

方法可以接收外部传入的数据:

```java
// 无参数 no parameters
public void sayHello() {
    System.out.println("Hello!");
}

// 单个参数 single parameter
public void setName(String name) {
    this.name = name;
}

// 多个参数 multiple parameters
public void setInfo(String name, int age, double score) {
    this.name = name;
    this.age = age;
    this.score = score;
}
```

## ✅ 完整可运行示例

让我们创建一个完整的程序来验证所有概念:

```java
// Student.java
public class Student {
    // 私有字段 private fields
    private String name;
    private int age;
    private double score;
    
    // Getter 和 Setter 方法
    public void setName(String name) {
        this.name = name;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            System.out.println("年龄不合理!");
        }
    }
    
    public int getAge() {
        return this.age;
    }
    
    public void setScore(double score) {
        if (score >= 0 && score <= 100) {
            this.score = score;
        } else {
            System.out.println("成绩不合理!");
        }
    }
    
    public double getScore() {
        return this.score;
    }
    
    // 业务方法 business methods
    public void introduce() {
        System.out.println("姓名: " + this.name + 
                         ", 年龄: " + this.age + 
                         ", 成绩: " + this.score);
    }
    
    public boolean isPassed() {
        return this.score >= 60;
    }
}
```

```java
// Main.java
public class Main {
    public static void main(String[] args) {
        // 创建学生对象 create student object
        Student student1 = new Student();
        
        // 设置学生信息 set student information
        student1.setName("张三");
        student1.setAge(18);
        student1.setScore(85.5);
        
        // 调用方法 call methods
        student1.introduce();
        
        // 判断是否及格 check if passed
        if (student1.isPassed()) {
            System.out.println(student1.getName() + " 及格了!");
        }
        
        // 创建第二个学生 create second student
        Student student2 = new Student();
        student2.setName("李四");
        student2.setAge(19);
        student2.setScore(55.0);
        
        student2.introduce();
        if (!student2.isPassed()) {
            System.out.println(student2.getName() + " 没有及格,需要努力!");
        }
        
        // 测试数据验证 test data validation
        student1.setAge(-5);     // 会显示错误信息
        student1.setScore(150);  // 会显示错误信息
    }
}
```

### 🔍 运行步骤

**1. 创建文件**

在同一个文件夹下创建两个文件:
- `Student.java`
- `Main.java`

**2. 编译代码**

```bash
javac Student.java Main.java
```

**3. 运行程序**

```bash
java Main
```

**4. 预期输出**

```
姓名: 张三, 年龄: 18, 成绩: 85.5
张三 及格了!
姓名: 李四, 年龄: 19, 成绩: 55.0
李四 没有及格,需要努力!
年龄不合理!
成绩不合理!
```

## 💪 练习题

### 练习 1: 创建图书类

创建一个 `Book` 类,包含以下内容:
- 私有字段:书名(`title`),作者(`author`),价格(`price`)
- 为每个字段提供 getter 和 setter 方法
- 价格的 setter 要验证:价格必须大于 0
- 创建一个 `displayInfo()` 方法显示图书信息

<details>
<summary>💡 参考答案</summary>

```java
// Book.java
public class Book {
    private String title;
    private String author;
    private double price;
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getTitle() {
        return this.title;
    }
    
    public void setAuthor(String author) {
        this.author = author;
    }
    
    public String getAuthor() {
        return this.author;
    }
    
    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        } else {
            System.out.println("价格必须大于0!");
        }
    }
    
    public double getPrice() {
        return this.price;
    }
    
    public void displayInfo() {
        System.out.println("《" + this.title + "》");
        System.out.println("作者: " + this.author);
        System.out.println("价格: " + this.price + " 元");
    }
}
```
</details>

### 练习 2: 添加业务方法

为上面的 `Book` 类添加以下方法:
- `applyDiscount(double percentage)` - 打折方法,参数是折扣百分比(如 10 表示打9折)
- `isExpensive()` - 判断图书是否昂贵(价格超过50元返回 true)

<details>
<summary>💡 参考答案</summary>

```java
public void applyDiscount(double percentage) {
    if (percentage > 0 && percentage < 100) {
        this.price = this.price * (100 - percentage) / 100;
        System.out.println("已应用 " + percentage + "% 折扣");
    } else {
        System.out.println("折扣百分比不合理!");
    }
}

public boolean isExpensive() {
    return this.price > 50;
}
```
</details>

### 练习 3: 创建银行账户类

挑战题!创建一个 `BankAccount` 类:
- 私有字段:账户号(`accountNumber`),余额(`balance`)
- 提供 getter 方法(但不提供 balance 的 setter)
- 创建 `deposit(double amount)` 存款方法(金额必须大于0)
- 创建 `withdraw(double amount)` 取款方法(余额必须足够,金额必须大于0)
- 创建 `displayBalance()` 显示余额方法

<details>
<summary>💡 参考答案</summary>

```java
// BankAccount.java
public class BankAccount {
    private String accountNumber;
    private double balance;
    
    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }
    
    public String getAccountNumber() {
        return this.accountNumber;
    }
    
    public double getBalance() {
        return this.balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            System.out.println("存款成功! 存入: " + amount + " 元");
        } else {
            System.out.println("存款金额必须大于0!");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance = this.balance - amount;
                System.out.println("取款成功! 取出: " + amount + " 元");
            } else {
                System.out.println("余额不足!");
            }
        } else {
            System.out.println("取款金额必须大于0!");
        }
    }
    
    public void displayBalance() {
        System.out.println("账户: " + this.accountNumber);
        System.out.println("余额: " + this.balance + " 元");
    }
}
```
</details>

## 📌 本章小结

### 关键概念回顾

1. **类(Class)** 是对象的蓝图,定义了对象的属性和行为
2. **字段(Field)** 存储对象的数据,通常设为 `private`
3. **方法(Method)** 定义对象的行为,提供访问和操作数据的方式
4. **访问修饰符(Access Modifier)** 控制成员的可见性:
   - `private` - 最安全,只能类内部访问
   - `public` - 完全公开,任何地方都能访问
5. **this 关键字** 代表当前对象,用于区分字段和参数

### 重要实践原则

- ✅ 字段通常使用 `private`,通过方法访问
- ✅ 方法名使用 **驼峰命名法(camelCase)**:首字母小写,后续单词首字母大写
- ✅ Getter 方法以 `get` 开头,Setter 方法以 `set` 开头
- ✅ 在 Setter 方法中添加数据验证逻辑
- ✅ 类名与文件名必须一致

::: tip 下一步
现在你已经掌握了类的基础知识,接下来可以学习 **构造方法(Constructor)**,它可以让对象创建时就初始化数据,让代码更简洁!
:::

## 🔍 常见问题解答

**Q: 为什么字段要设为 private,不是更麻烦吗?**

A: 这是为了数据安全。如果字段是 public 的,任何人都能随意修改,可能导致不合理的数据(比如年龄设为-5)。使用 private + 方法的方式,你可以在方法里添加验证逻辑,保证数据的合理性。

**Q: this 关键字什么时候必须写?**

A: 当参数名和字段名相同时必须写 `this.`,否则 Java 会认为你在操作参数。在其他情况下,`this.` 可以省略,但建议写上以提高代码可读性。

**Q: 一个 .java 文件可以有多个类吗?**

A: 可以,但只能有一个 `public` 类,且该类名必须与文件名相同。其他类可以不加 `public` 修饰符。不过对于初学者,建议一个文件只写一个类,更清晰。