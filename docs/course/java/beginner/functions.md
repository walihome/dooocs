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

类是创建对象的模板。你可以把类想象成建筑图纸,它定义了对象应该有哪些特征和能做什么事情。

在Java中,几乎所有代码都要写在类里面。

## 定义一个类

### 📝 基本语法

```java
public class Person {
    // 类的内容写在这里
}
```

::: tip 提示
类名必须和文件名完全一致。如果类名是 `Person`,文件名就必须是 `Person.java`
:::

### 📝 完整示例

创建一个名为 `Person.java` 的文件:

```java{1-2,5}
// Person.java
public class Person {
    // 这是一个空类
    
    public static void main(String[] args) {
        System.out.println("这是 Person 类");
    }
}
```

运行后会输出:
```
这是 Person 类
```

## 定义类字段(Field)

类字段也叫**属性(Attribute)**或**成员变量(Member Variable)**,用来存储对象的数据。

### 📝 代码示例

```java{3-4}
// Person.java
public class Person {
    String name;    // 姓名
    int age;        // 年龄
    
    public static void main(String[] args) {
        Person person = new Person();
        person.name = "张三";
        person.age = 25;
        
        System.out.println("姓名: " + person.name);
        System.out.println("年龄: " + person.age);
    }
}
```

运行后会输出:
```
姓名: 张三
年龄: 25
```

::: tip 提示
`new Person()` 表示根据类创建一个具体的对象
:::

## 定义类的方法(Method)

方法定义了对象能做什么事情,相当于对象的行为。

### 📝 代码示例

```java{6-8}
// Person.java
public class Person {
    String name;
    int age;
    
    void sayHello() {
        System.out.println("你好,我是 " + name);
    }
    
    public static void main(String[] args) {
        Person person = new Person();
        person.name = "李四";
        person.sayHello();  // 调用方法
    }
}
```

运行后会输出:
```
你好,我是 李四
```

### 📝 带参数和返回值的方法

```java{6-8}
// Calculator.java
public class Calculator {
    
    // 计算两个数的和
    int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int result = calc.add(10, 20);
        System.out.println("结果: " + result);
    }
}
```

运行后会输出:
```
结果: 30
```

## 类字段的访问等级(Access Level)

访问等级控制其他代码能否访问你的字段和方法。

### 💡 四种访问等级

- **public**: 任何地方都能访问
- **private**: 只能在类内部访问
- **protected**: 同一包或子类可以访问
- **不写修饰符**: 同一包内可以访问

### 📝 代码示例

```java{3-4}
// BankAccount.java
public class BankAccount {
    private double balance;  // 私有字段,外部不能直接访问
    public String owner;     // 公开字段,外部可以访问
    
    // 提供公开方法来访问私有字段
    public void deposit(double amount) {
        balance = balance + amount;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.owner = "王五";
        account.deposit(1000);
        
        System.out.println("账户主: " + account.owner);
        System.out.println("余额: " + account.getBalance());
        
        // account.balance = 9999;  // 错误!无法直接访问 private 字段
    }
}
```

运行后会输出:
```
账户主: 王五
余额: 1000.0
```

::: warning 注意
通常建议字段设为 `private`,通过 `public` 方法来访问,这样可以保护数据安全
:::

## 💪 练习题

### 练习1:创建一个学生类

创建一个 `Student` 类,包含:
- 字段:`name`(姓名)、`score`(分数)
- 方法:`showInfo()`(显示学生信息)

<details>
<summary>查看答案</summary>

```java
// Student.java
public class Student {
    String name;
    int score;
    
    void showInfo() {
        System.out.println("姓名: " + name);
        System.out.println("分数: " + score);
    }
    
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "小明";
        student.score = 95;
        student.showInfo();
    }
}
```

</details>

### 练习2:创建一个商品类

创建一个 `Product` 类,包含:
- 私有字段:`price`(价格)
- 公开字段:`name`(商品名)
- 方法:`setPrice(double p)`(设置价格)、`getPrice()`(获取价格)

<details>
<summary>查看答案</summary>

```java
// Product.java
public class Product {
    public String name;
    private double price;
    
    public void setPrice(double p) {
        if (p > 0) {
            price = p;
        }
    }
    
    public double getPrice() {
        return price;
    }
    
    public static void main(String[] args) {
        Product product = new Product();
        product.name = "手机";
        product.setPrice(2999);
        
        System.out.println("商品: " + product.name);
        System.out.println("价格: " + product.getPrice());
    }
}
```

</details>

## 📌 小结

- **类(Class)**是创建对象的模板,类名必须和文件名一致
- **字段(Field)**存储对象的数据,定义在类里面
- **方法(Method)**定义对象的行为,可以有参数和返回值
- **访问等级**:`private`保护数据,`public`允许外部访问