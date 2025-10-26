---
title: 抽象类  
description: 理解 Java 中 abstract 关键字、抽象方法与抽象类的设计意图，掌握如何用抽象类设计灵活可扩展的代码结构。  
order: 12  
keywords: [Java, 抽象类, abstract, 抽象方法, 面向对象设计]  
---

# 抽象类

## 前置知识
> 在阅读本章前,你需要了解:  
> - Java 类和对象的基础知识  
> - 方法的定义和调用  
> - 继承的基本概念

## 为什么需要抽象类?

想象一下，你正在设计一个程序，需要表示不同种类的动物。虽然它们各有不同行为，但都有一些共通点，比如都能“叫”、“移动”。如果直接用普通类来设计，可能会导致代码重复或者难以处理通用和特定行为的关系。  

这时候，Java 的抽象类就像一把“设计工具”，帮我们把“共性”提炼出来，形成一个模板，而具体子类去完成各自特有的细节。它告诉我们“这个类不完整、不能直接实例化，但它定义了重要的公共行为规范”。这不仅让代码更干净，还提高了代码的灵活性和可维护性。

## 具体章节

### 1. 什么是抽象类和抽象方法？

用最简单的话说：  
- **抽象类**是有点“半成品”的类，它可能包含方法的声明（但没实现），也能包含已有实现的方法。  
- **抽象方法**是只写了方法签名（声明），没有写方法体的方法，留给子类实现。

抽象类使用关键字 `abstract` 修饰，同时类中只要有一个抽象方法，这个类就必须是抽象类。

#### 为什么需要它？

当你想要定义一类对象的“框架”，但具体细节依赖于子类时，抽象类就派上用场了。它让你能写出“有共性的父类”，同时迫使子类实现“必须的行为”。

### 2. 抽象类的基础用法

让我们从一个极简示例开始。

```java
// 定义一个抽象的动物类
abstract class Animal {
    // 定义一个抽象方法，让子类实现具体叫声
    abstract void makeSound();

    // 具体方法，可以直接使用
    void breathe() {
        System.out.println("I am breathing...");
    }
}

public class Main {
    public static void main(String[] args) {
        // Animal animal = new Animal(); // 这行代码会报错，抽象类不能实例化
        
        // 创建子类对象
        Dog dog = new Dog();
        dog.makeSound();  // 子类实现的具体吃声
        dog.breathe();    // 抽象类中继承的方法
    }
}

// 具体子类，实现了抽象方法
class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}
```

**这段代码做了什么？**  
1. `Animal` 是抽象类，定义了一个抽象方法 `makeSound()`，没有实现；还有一个具体方法 `breathe()` 有实现。  
2. `Dog` 类继承 `Animal`，实现了 `makeSound()` 方法。  
3. 尝试实例化 `Animal` 会报错，因为抽象类不允许直接创建对象。  
4. 通过 `Dog` 类实例调用 `makeSound()` 和 `breathe()` 方法，演示了继承与多态。

### 3. 多个抽象方法和模板设计

抽象类可以定义多个抽象方法，形成一个“模版”，子类按照这个模版填充细节。  

我们来设计一个“动物展示”程序，不同动物除了叫声，还需要描述不同的移动方式。

```java
abstract class Animal {
    abstract void makeSound();  // 抽象方法，子类必须实现

    abstract void move();       // 新增抽象方法

    void describe() {           // 具体方法，调用抽象方法，形成模板
        System.out.print("This animal says: ");
        makeSound();
        System.out.print("It moves by: ");
        move();
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow");
    }

    @Override
    void move() {
        System.out.println("walking gracefully");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Cat();
        animal.describe();
    }
}
```

**这段代码做了什么？**  
- 抽象类 `Animal` 定义两个抽象方法 `makeSound` 和 `move`，还有一个具体方法 `describe` 调用它们。  
- `Cat` 实现了这两个方法。  
- 通过 `describe` 方法，你只写一次打印逻辑，具体细节由子类填充，让代码更简洁且易扩展。

### 4. 抽象类和接口的对比

在很多场合，抽象类和接口都可以用来做到代码的抽象。它们的区别在哪里？  

| 特点          | 抽象类                          | 接口                            |
|-------------|-----------------------------|------------------------------|
| 继承关系       | 单继承，类只能继承一个抽象类                 | 多继承，一个类可以实现多个接口               |
| 可以包含方法实现   | 可以                          | Java 8后接口可以有默认方法实现，但本质不同          |
| 可以有成员变量    | 可以，有实例变量和常量                     | 只能有静态常量                       |
| 适用场景       | 当需要共享代码实现和状态时更合适                | 更适合定义行为规范，不关心实现                |

---

:::tip 💡 实战建议  
- 如果你的抽象类包含共享的字段和部分具体实现，用抽象类更合适。  
- 如果只是定义一组规范，且需要多重继承（如实现多个角色接口），首选接口。  
- 抽象类和接口的选择，往往根据项目架构和设计风格来定。  
:::

---

### 5. 进阶示例：抽象类结合构造函数与字段

抽象类不仅可以定义方法和抽象方法，也可以有构造函数和字段，子类可以调用它们。

下面的例子演示了抽象类中带字段和构造函数如何帮助管理“共性数据”。

```java
abstract class Vehicle {
    private String brand;

    public Vehicle(String brand) {
        this.brand = brand; // 初始化品牌字段
    }

    public String getBrand() {
        return brand;
    }

    abstract void startEngine();

    void displayInfo() {
        System.out.println("This is a vehicle of brand: " + brand);
    }
}

class Car extends Vehicle {
    public Car(String brand) {
        super(brand); // 调用父类构造函数
    }

    @Override
    void startEngine() {
        System.out.println(getBrand() + " car engine started.");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car("Toyota");
        myCar.displayInfo();
        myCar.startEngine();
    }
}
```

**这段代码做了什么？**  
- 抽象类 `Vehicle` 保存了品牌字段，并提供了构造函数初始化。  
- 抽象方法 `startEngine()` 由具体子类实现。  
- 子类 `Car` 通过 `super` 传递品牌信息。  
- 主方法演示了多态，统一用 `Vehicle` 类型引用调用方法。

---

### 6. 常见陷阱

::: warning ⚠️ 常见陷阱  
- 抽象类不能被实例化，但可以声明引用指向子类对象，常见错误是直接 `new` 一个抽象类。  
- 抽象方法必须被子类实现，除非子类也是抽象类。漏写实现会导致编译错误。  
- 抽象类可以有构造器，但不能用来创建对象，只能被子类调用。  
- 与接口混淆：接口默认是公共的抽象方法，而抽象类可包含实现和状态。混用时要分清职责。  
:::

---

## 小结

- 抽象类是不能被实例化的“半成品”类，定义了某些方法但留给子类实现。  
- `abstract` 关键字用来修饰类和抽象方法。  
- 抽象类适合描述“具有共性又需要不同行为”的场景，帮助代码复用和规范设计。  
- 抽象类可以包含字段、构造器和具体方法，接口相比则更轻量且支持多重实现。  
- 注意抽象类不能实例化，子类必须实现所有抽象方法，除非子类也抽象。

---

## 延伸思考

> - 抽象类和接口如何在大型项目中协同使用，达到灵活且低耦合的设计？  
> - 在什么情况下，抽象类的设计会限制后续功能扩展？如何规避？  
> - 你能设计一个抽象类，既包含模版方法，又支持部分默认行为的例子吗？

---

如果你感到抽象类有点“模糊”，没关系，程序员的路上，这正是面向对象设计不断深入理解的过程。慢慢体会抽象带来的代码优雅和灵活，你会发现写大型系统也能游刃有余。继续实践，我们下章见！