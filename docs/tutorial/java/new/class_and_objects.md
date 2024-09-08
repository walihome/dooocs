---
title: Java 类和对象
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java类和对象

Java是一种面向对象的编程语言。面向对象的核心概念是将复杂的问题分解为较小的对象。

对象是具有**状态**和**行为**的任何实体。例如，自行车是一个对象。它具有以下特性：

  * **状态**：空闲，一档等
  * **行为**：刹车，加速等。



在我们学习对象之前，先了解一下Java中的类。

* * *

## Java类

类是对象的蓝图。在创建对象之前，我们首先需要定义类。

我们可以将类比作房子的草图（原型）。它包含关于楼层、门窗等细节的所有信息。根据这些描述，我们建造房子。房子就是对象。

由于可以使用相同的描述制作多个房子，因此我们可以从类中创建多个对象。

* * *

## 在Java中创建一个类

我们可以使用class关键字在Java中创建一个类。例如，
    
    
    class 类名 {
      // 字段
      // 方法
    }

在这里，字段（变量）和方法分别表示对象的**状态**和**行为**。

  * 字段用于存储数据
  * 方法用于执行某些操作



对于我们的自行车对象，我们可以创建以下类
    
    
    class Bicycle {
    
      // 状态或字段
      private int gear = 5;
    
      // 行为或方法
      public void braking() {
        System.out.println("刹车的工作");
      }
    }

在上面的示例中，我们创建了一个名为Bicycle的类。它包含了一个名为gear的字段和一个名为braking()的方法。

在这里，Bicycle是一个原型。现在，我们可以使用该原型创建任意数量的自行车。而且，所有自行车都将共享原型的字段和方法。

> **注意**：我们使用了关键字`private`和`public`。这些被称为访问修饰符。要了解更多信息，请访问[Java访问修饰符](https://www.dooocs.com/img/java-programming/access-modifiers)。

* * *

## Java对象

对象称为类的实例。例如，假设Bicycle是一个类，那么MountainBicycle、SportsBicycle、TouringBicycle等都可以被视为该类的对象。

### 在Java中创建对象

以下是如何创建一个类的对象。
    
    
    类名 对象名 = new 类名();
    
    // 对于Bicycle类
    Bicycle sportsBicycle = new Bicycle();
    
    Bicycle touringBicycle = new Bicycle();

我们使用`new`关键字与类的构造函数一起创建对象。构造函数类似于方法，并与类具有相同的名称。例如，`Bicycle()`是Bicycle类的构造函数。要了解更多信息，请访问[Java构造函数](https://www.dooocs.com/img/java-programming/constructors)。

在这里，sportsBicycle和touringBicycle是对象的名称。我们可以使用它们来访问类的字段和方法。

正如您所看到的，我们创建了两个类的对象。在Java中，可以创建多个同一类的对象。

> **注意**：类的字段和方法也称为类的成员。

* * *

## 访问类的成员

我们可以使用对象的名称和`.`运算符来访问类的成员。例如，
    
    
    class Bicycle {
    
      // 类的字段
      int gear = 5;
    
      // 类的方法
      void braking() {
        ...
      }
    }
    
    // 创建对象
    Bicycle sportsBicycle = new Bicycle();
    
    // 访问字段和方法
    sportsBicycle.gear;
    sportsBicycle.braking();

在上面的示例中，我们创建了一个名为Bicycle的类。它包括一个名为gear的字段和一个名为`braking()`的方法。注意以下语句，
    
    
    Bicycle sportsBicycle = new Bicycle();

在这里，我们创建了一个名为sportsBicycle的Bicycle对象。然后，我们使用该对象来访问类的字段