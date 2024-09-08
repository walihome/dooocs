---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java Nested Static Class

在之前的教程中，我们学到了在Java中可以在另一个类中创建一个类。这种类被称为嵌套类。在Java中，嵌套类有两种类型：

  * 嵌套非静态类（内部类）
  * 嵌套静态类。

我们已经在之前的教程中讨论过内部类。如果你想了解内部类，请访问[Java Nested Class](https://www.programiz.com/java-programming/nested-inner-class)。

在本教程中，我们将学习嵌套静态类。

* * *

## Java Nested Static Class

我们使用关键字`static`使嵌套类成为静态类。

> **注意：**在Java中，只允许嵌套类是静态的。

和普通的类一样，静态嵌套类可以包含静态和非静态的字段和方法。例如，
    
    
    Class Animal {
       static class Mammal {
          // Mammal的静态和非静态成员
       }
       // Animal的成员
    } 
    

静态嵌套类与外部类相关联。

要访问静态嵌套类，我们不需要外部类的对象。

* * *

### 示例：静态嵌套类
    
    
    class Animal {
    
    // 内部类
       class Reptile {
          public void displayInfo() {
            System.out.println("我是爬行动物。");
          }
       }
    
    // 静态类
       static class Mammal {
          public void displayInfo() {
            System.out.println("我是哺乳动物。");
          }
       }
    }
    
    class Main {
       public static void main(String[] args) {
          // 创建外部类的对象
          Animal animal = new Animal();
    
          // 创建非静态类的对象
          Animal.Reptile reptile = animal.new Reptile();
          reptile.displayInfo();
    
          // 创建静态嵌套类的对象
          Animal.Mammal mammal = new Animal.Mammal();
          mammal.displayInfo();
    
       }
    }
    

**输出**
    
    
    我是爬行动物。
    我是哺乳动物。
    

在上面的程序中，我们在一个Animal类中有两个嵌套类Mammal和Reptile。

要创建非静态类Reptile的对象，我们使用了
    
    
    Animal.Reptile reptile = animal.new Reptile()
    

要创建静态类Mammal的对象，我们使用了
    
    
    Animal.Mammal mammal = new Animal.Mammal()
    

* * *

## 访问外部类的成员

在Java中，静态嵌套类与外部类相关联。这就是为什么静态嵌套类只能访问外部类的类成员（静态字段和方法）。

让我们看看如果我们尝试访问外部类的非静态字段和方法会发生什么。

### 示例：访问非静态成员
    
    
    class Animal {
      static class Mammal {
       public void displayInfo() {
         System.out.println("我是哺乳动物。");
       }
     }
    
     class Reptile {
       public void displayInfo() {
         System.out.println("我是爬行动物。");
       }
     }
    
     public void eat() {
       System.out.println("我吃食物。");
     }
    }
    
    class Main {
     public static void main(String[] args) {
       Animal animal = new Animal();
       Animal.Reptile reptile = animal.new Reptile();
       reptile.displayInfo();
    
       Animal.Mammal mammal = new Animal.Mammal();
       mammal.displayInfo();
       mammal.eat();
     }
    }
    

**输出**
    
    
    Main.java:28: 错误: 找不到符号
        mammal.eat();
              ^
      符号:   方法 eat()
      位置: 类型为Mammal的变量mammal
    1错误
    编译器退出状态1
    

在上面的示例