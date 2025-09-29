---
title: 类、属性、方法
category: Java
order: 8
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# 🎮 第8关：类、属性、方法 - 面向对象编程入门

**Welcome, 编程勇士！** 准备好进入Java最强大的领域了吗？这一关我们将掌握**Object-Oriented Programming（面向对象编程）**的核心概念！

## 🎯 本关学习目标
- 掌握**Class（类）**的定义和使用
- 理解**Field（字段/属性）**和**Method（方法）**
- 学会**Access Level（访问等级）**的控制

---

## 1. 定义一个类 - 创建你的第一个蓝图 🏗️

**Class（类）**就像是一个蓝图，定义了对象的属性和行为。让我们创建一个简单的**Person（人类）**：

```java
// Define a class 定义一个类
public class Person {
    // Class definition goes here 类定义在这里
}
```

**💡 费曼解释**：想象**Class**就像制作饼干的模具，定义了所有饼干的基本形状！

---

## 2. 定义类字段 - 给对象添加特征 🎭

**Field（字段）**是类的属性，描述了对象的状态：

```java
public class Person {
    // Define class fields 定义类字段
    String name;        // Person's name 人的姓名
    int age;           // Person's age 人的年龄
    double height;     // Person's height 人的身高
}
```

**🎮 西蒙分块**：我们把人的特征分解为三个简单字段：姓名、年龄、身高！

---

## 3. 定义类的方法 - 让对象动起来 💃

**Method（方法）**定义了对象能做什么：

```java
public class Person {
    // Fields 字段
    String name;
    int age;
    
    // Define methods 定义方法
    public void introduce() {
        // Method body 方法体
        System.out.println("Hello, my name is " + name);
    }
    
    public void celebrateBirthday() {
        age = age + 1;  // Increase age by 1 年龄增加1岁
        System.out.println("Happy birthday! Now I'm " + age + " years old.");
    }
}
```

---

## 4. 类字段的访问等级 - 保护你的数据 🛡️

**Access Level（访问等级）**控制谁可以访问你的字段和方法：

```java
public class Person {
    // Different access levels 不同的访问等级
    public String name;         // Anyone can access 任何人都可以访问
    private int age;           // Only this class can access 只有这个类可以访问
    protected double height;   // This class and subclasses can access 这个类和子类可以访问
    
    // Public method to access private field 访问私有字段的公共方法
    public int getAge() {
        return age;
    }
    
    // Public method to modify private field 修改私有字段的公共方法
    public void setAge(int newAge) {
        if (newAge > 0) {  // Validation 验证
            age = newAge;
        }
    }
}
```

---

## 🎯 完整示例：创建和使用Person类

```java
// Main class to test our Person 测试Person类的主类
public class Main {
    public static void main(String[] args) {
        // Create a Person object 创建Person对象
        Person alice = new Person();
        
        // Set fields 设置字段
        alice.name = "Alice";
        alice.setAge(25);  // Using setter method 使用设置方法
        
        // Call methods 调用方法
        alice.introduce();         // Output: Hello, my name is Alice
        alice.celebrateBirthday(); // Output: Happy birthday! Now I'm 26 years old.
    }
}

class Person {
    // Fields with different access levels 不同访问等级的字段
    public String name;
    private int age;
    
    // Getter method for private field 私有字段的获取方法
    public int getAge() {
        return age;
    }
    
    // Setter method for private field 私有字段的设置方法
    public void setAge(int newAge) {
        if (newAge > 0) {
            age = newAge;
        }
    }
    
    // Public methods 公共方法
    public void introduce() {
        System.out.println("Hello, my name is " + name);
    }
    
    public void celebrateBirthday() {
        age = age + 1;
        System.out.println("Happy birthday! Now I'm " + age + " years old.");
    }
}
```

---

## 🏆 闯关挑战任务

**你的任务：**创建一个**Book（书籍）**类

```java
// TODO: Create a Book class 创建Book类
// Requirements 要求：
// 1. Fields: title, author, pages, isBorrowed
// 2. Methods: displayInfo(), borrowBook(), returnBook()
// 3. Use appropriate access levels 使用合适的访问等级

// 开始你的代码 below this line 在下面开始你的代码
```

**💪 提示：**
- `title`和`author`应该是**public**
- `isBorrowed`应该是**private**，并提供getter/setter
- `borrowBook()`方法应该检查书是否已被借出

---

## 📚 核心概念总结

| 概念 | 英文术语 | 中文解释 |
|------|----------|----------|
| 类 | **Class** | 对象的蓝图 |
| 字段 | **Field** | 对象的属性 |
| 方法 | **Method** | 对象的行为 |
| 访问等级 | **Access Level** | 访问控制权限 |
| 公共 | **public** | 完全开放访问 |
| 私有 | **private** | 仅类内访问 |
| 受保护 | **protected** | 类和子类访问 |

---

**🎉 恭喜！** 你已经掌握了面向对象编程的基础！下一关我们将深入**Inheritance（继承）**和**Polymorphism（多态）**！

**记住：** 好的**Class Design（类设计）**是写出优秀Java程序的关键！🚀