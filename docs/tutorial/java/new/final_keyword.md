---
title: Java final 关键字
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java final 关键字

在Java中，`final`关键字用于表示常量。它可以用于变量、方法和类。

一旦任何实体（变量、方法或类）被声明为`final`，它只能被赋值一次。也就是说，

  * 最终变量不能重新初始化为另一个值
  * 最终方法不能被覆盖
  * 最终类不能被扩展



* * *

## 1\. Java final 变量

在Java中，我们不能改变最终变量的值。例如，
    
    
    class Main {
      public static void main(String[] args) {
    
        // 创建一个最终变量
        final int AGE = 32;
    
        // 尝试改变最终变量的值
        AGE = 45;
        System.out.println("年龄：" + AGE);
      }
    }
    

在上面的程序中，我们创建了一个名为age的最终变量。然后我们尝试改变最终变量的值。

当我们运行程序时，将会得到以下编译错误信息。
    
    
    无法为最终变量AGE分配值
        AGE = 45;
        ^
    

> **注意**：建议在Java中使用大写字母来声明最终变量。

* * *

## 2\. Java final 方法

在学习最终方法和最终类之前，请确保您了解[Java继承](https://www.dooocs.com/img/java-programming/inheritance "Java Inheritance")。

在Java中，子类无法覆盖最终方法。例如，
    
    
    class FinalDemo {
        // 创建一个最终方法
        public final void display() {
          System.out.println("这是一个最终方法。");
        }
    }
    
    class Main extends FinalDemo {
      // 尝试覆盖最终方法
      public final void display() {
        System.out.println("最终方法被覆盖。");
      }
    
      public static void main(String[] args) {
        Main obj = new Main();
        obj.display();
      }
    }
    

在上面的例子中，我们在`FinalDemo`类中创建了一个名为`display()`的最终方法。在这里，Main类继承了FinalDemo类。

我们试图在Main类中覆盖最终方法。当我们运行程序时，将会得到以下编译错误信息。
    
    
     display() in Main cannot override display() in FinalDemo
      public final void display() {
                        ^
      overridden method is final
    

* * *

## 3\. Java final 类

在Java中，最终类无法被其他类继承。例如，
    
    
    // 创建一个最终类
    final class FinalClass {
      public void display() {
        System.out.println("这是一个最终方法。");
      }
    }
    
    // 尝试继承最终类
    class Main extends FinalClass {
      public  void display() {
        System.out.println("最终方法被覆盖。");
      }
    
      public static void main(String[] args) {
        Main obj = new Main();
        obj.display();
      }
    }
    

在上面的例子中，我们创建了一个名为FinalClass的最终类。在这里，我们试图通过Main类来继承最终类。

当我们运行程序时，将会得到以下编译错误信息。
    
    
    无法从最终类FinalClass继承
    class Main extends FinalClass {
                       ^
    
```