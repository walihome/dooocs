---
title: super关键字
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java super关键字

`super` 关键字在 Java 中用于子类访问父类的成员（属性、构造函数和方法）。

在学习 `super` 关键字之前，请确保了解 [Java 继承](https://www.dooocs.com/img/java-programming/inheritance "Java inheritance") 的相关知识。

* * *

## 使用 `super` 关键字的情况

1. 调用子类中被重写的父类方法。
2. 在子类和父类具有同名属性时，访问父类的属性。
3. 在子类构造函数中显式调用父类的无参（默认）或带参数的构造函数。

让我们逐个了解这些使用情况。

* * *

## 1\. 访问被重写的父类方法

如果父类和子类中都定义了同名的方法，则子类中的方法会覆盖父类中的方法。这被称为 [方法重写](https://www.dooocs.com/img/java-programming/method-overriding "Java Method Overriding")。

### 示例 1: 方法重写
    
    
    class Animal {
    
      // 被重写的方法
      public void display(){
        System.out.println("我是一个动物");
      }
    }
    
    class Dog extends Animal {
    
      // 重写的方法
      @Override
      public void display(){
        System.out.println("我是一只狗");
      }
    
      public void printMessage(){
        display();
      }
    }
    
    class Main {
      public static void main(String[] args) {
        Dog dog1 = new Dog();
        dog1.printMessage();
      }
    }
    

**输出**
    
    
    我是一只狗
    

在这个例子中，通过创建一个 Dog 类的对象 dog1，我们可以调用它的方法 printMessage()，该方法会执行 `display()` 语句。

由于 `display()` 在两个类中都有定义，子类 Dog 的方法覆盖了父类 Animal 的方法。因此，会调用子类的 `display()`。

![Java 方法重写示例](https://cdn.programiz.com/sites/tutorial2program/files/java-overriding-example.png)  


**如果需要调用被重写的父类方法，该怎么办？**

如果需要调用父类 Animal 的被重写方法 `display()`，我们使用 `super.display()`。

### 示例 2: 使用 super 调用父类方法
    
    
    class Animal {
    
      // 被重写的方法
      public void display(){
        System.out.println("我是一个动物");
      }
    }
    
    class Dog extends Animal {
    
      // 重写的方法
      @Override
      public void display(){
        System.out.println("我是一只狗");
      }
    
      public void printMessage(){
    
        // 调用重写的方法
        display();
    
        // 调用被重写的方法
        super.display();
      }
    }
    
    class Main {
      public static void main(String[] args) {
        Dog dog1 = new Dog();
        dog1.printMessage();
      }
    }
    

**输出**
    
    
    我是一只狗
    我是一个动物
    

在这里，我们来看一下上述程序的工作原理。

![Java 中 super 的工作原理](https://cdn.programiz.com/sites/tutorial2program/files/call-superclass-method.png)  


* * *

## 2\. 访问父类的属性

父类和子类可以拥有同名的属性。我们使用 `super` 关键字来访问父类的属性。

### 示例 3: 访问父类属性
    
    
    class Animal {
      protected String type="动物";
    }
    
    class Dog extends Animal {
      public String type="哺乳动物";
    
      public void printType() {
        System.out.println("我是一只 " + type);
        System.out.println("我是一个 " + super.type);
      }
    }
    
    class Main {
      public static void main(String[] args) {
        Dog dog1 = new Dog();
        dog1.printType();
      }
    }
    

**输出** :
    
    
    我是一只哺乳动物
    我是一个动物
    

在这个例子中，我们在父类 Animal 和子类 Dog 中都定义了相同的实例