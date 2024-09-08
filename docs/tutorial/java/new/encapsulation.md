---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java封装

Java封装是面向对象编程的一个关键特性之一。封装指的是将字段和方法封装在一个类中。

它防止外部类访问和修改类的字段和方法。这也有助于实现**数据隐藏**。

* * *

### 示例1：Java封装
    
    
    class Area {
    
      // 用于计算面积的字段
      int length;
      int breadth;
    
      // 初始化值的构造函数
      Area(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
      }
    
      // 计算面积的方法
      public void getArea() {
        int area = length * breadth;
        System.out.println("Area: " + area);
      }
    }
    
    class Main {
      public static void main(String[] args) {
    
        // 创建Area对象
        // 传递长度和宽度的值
        Area rectangle = new Area(5, 6);
        rectangle.getArea();
      }
    }

**输出**
    
    
    Area: 30

在上面的示例中，我们创建了一个名为Area的类。这个类的主要目的是计算面积。

为了计算面积，我们需要两个变量：length和breadth，并且需要一个名为`getArea()`的方法。因此，我们将这些字段和方法封装在一个类中。

在这里，这些字段和方法也可以从其他类中访问。因此，这并不是**数据隐藏**。

这只是**封装**。我们只是将相似的代码放在一起。

**注意**：人们通常认为封装是数据隐藏，但这并不完全正确。

封装指的是将相关的字段和方法捆绑在一起。这可以用来实现数据隐藏。封装本身并不是数据隐藏。

* * *

## 为什么要封装？

  * 在Java中，封装帮助我们将相关的字段和方法放在一起，使我们的代码更加清晰易读。
  * 它有助于控制我们数据字段的值。例如，
    
        class Person {
      private int age;
    
      public void setAge(int age) {
        if (age >= 0) {
          this.age = age;
        }
      }
    }

  
在这里，我们将age变量设为`private`，并在`setAge()`方法中应用逻辑。现在，age不能为负数。
  * getter和setter方法提供对类字段的**只读**或**只写**访问。例如，
    
        getName()  // 提供只读访问
    setName() // 提供只写访问

  * 它有助于解耦系统的组件。例如，我们可以将代码封装到多个bundle中。  
  
这些解耦的组件（bundle）可以独立和并行地开发、测试和调试。而且，对一个特定组件的任何更改都不会对其他组件产生任何影响。
  * 我们还可以使用封装来实现数据隐藏。在上面的示例中，如果我们将length和breadth变量更改为private，则对这些字段的访问受到限制。  
  
它们被保持对外部类的隐藏。这称为**数据隐藏**。



* * *

## 数据隐藏

数据隐藏是通过隐藏实现细节来限制数据成员访问的一种方式。封装也为数据隐藏提供了一种方法。

我们可以使用[访问修饰符](https://www.dooocs.com/img/java-programming/access-modifiers)来实现数据隐藏。例如，

### 示例2：使用private关键字进行数据隐藏
    
    
    class Person {
    
      // 私有字段
      private int age;
    
      // getter方法
      public int getAge() {
        return age;
      }
    
      // setter方法
      public void setAge(int age) {
        this.age = age;
      }
    }
    
    class Main {
      public static void main(String[] args) {
    
        // 创建Person对象
        Person p1 = new Person();
    
        // 使用setter改变age的值
        p1.setAge