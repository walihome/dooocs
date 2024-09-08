---
title: Java instanceof 运算符
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java instanceof 运算符

在Java中，`instanceof` 运算符用于检查一个对象是否是特定类的实例。

它的语法是


    objectName instanceOf className;

在这里，如果 `objectName` 是 `className` 的实例，运算符返回 `true`。否则，返回 `false`。

* * *

### 示例：Java instanceof


    class Main {
    
      public static void main(String[] args) {
    
        // 创建一个字符串类型的变量
        String name = "Programiz";
        
        // 检查 name 是否是 String 的实例
        boolean result1 = name instanceof String;
        System.out.println("name is an instance of String: " + result1);
    
        // 创建一个 Main 类的对象
        Main obj = new Main();
    
        // 检查 obj 是否是 Main 的实例
        boolean result2 = obj instanceof Main;
        System.out.println("obj is an instance of Main: " + result2);
      }
    }

**输出**
    
    
    name is an instance of String: true
    obj is an instance of Main: true

在上面的示例中，我们创建了一个 `String` 类型的变量 `name` 和一个 `Main` 类的对象 `obj`。

在这里，我们使用了 `instanceof` 运算符来检查 `name` 和 `obj` 是否分别是 `String` 和 `Main` 类的实例。在两种情况下，运算符都返回 `true`。

> **注意** ：在Java中，`String` 是一个类，而不是原始数据类型。要了解更多信息，请访问 [Java String](https://www.dooocs.com/img/java-programming/string "Java String")。

* * *

## 继承中的 Java instanceof

我们可以使用 `instanceof` 运算符来检查子类的对象是否也是超类的实例。例如，
    
    
    // 检查一个子类的对象是否也是超类的实例的Java程序
    
    // 超类
    class Animal {
    }
    
    // 子类
    class Dog extends Animal {
    }
    
    class Main {
      public static void main(String[] args) {
    
        // 创建一个子类的对象
        Dog d1 = new Dog();
    
        // 检查 d1 是否是子类的实例
        System.out.println(d1 instanceof Dog);        // 输出 true
    
        // 检查 d1 是否是超类的实例
        System.out.println(d1 instanceof Animal);     // 输出 true
      }
    }

在上面的示例中，我们创建了一个继承自超类 `Animal` 的子类 `Dog`。我们创建了一个 `Dog` 类的对象 `d1`。

在打印语句中，注意表达式
    
    
    d1 instanceof Animal

在这里，我们使用 `instanceof` 运算符来检查 `d1` 是否也是超类 `Animal` 的实例。

* * *

## 接口中的 Java instanceof

`instanceof` 运算符还用于检查一个类的对象是否也是该类实现的接口的实例。例如，
    
    
    // 检查一个类的对象是否也是实现了该类的接口的实例的Java程序
    
    interface Animal {
    }
    
    class Dog implements Animal {
    }
    
    class Main {
      public static void main(String[] args) {
    
        // 创建一个 Dog 类的对象
        Dog d1 = new Dog();
    
        // 检查 Dog 的对象是否也是 Animal 的实例
        System.out.println(d1 instanceof Animal);  // 输出 true
      }
    }

在上面的示例中，`Dog` 类实现了 `Animal` 接口。在打印语句中，注意表达式
    
    
    d1 instanceof Animal

在这里，`d1` 是 `Dog` 类的一个实例。`instanceof` 运算符检查 `d1` 是否也是接口 `Animal` 的实例。

**注意** ：在Java中，所有类都继承自 `Object` 类。因此，所有类的实例也是 `Object` 类的实例。

在上一个示例中，如果我们检查
    
    
    d1 instanceof Object

结果将为 `true`。