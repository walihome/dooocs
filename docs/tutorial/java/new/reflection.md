# Java反射

在Java中，反射允许我们在运行时检查和操作类、接口、构造函数、方法和字段。

Java中有一个名为`Class`的类，它在运行时保存了关于对象和类的所有信息。可以使用Class对象执行反射操作。

* * *

## 反射Java类

为了反射一个Java类，我们首先需要创建一个Class对象。

然后，使用此对象可以调用各种方法来获取类中方法、字段和构造函数的信息。

创建Class对象有三种方式：

**1\. 使用forName()方法**
    
    
    class Dog {...}
    
    // 创建Class对象
    // 以反射Dog类
    Class a = Class.forName("Dog");

这里，forName()方法以要反射的类的名称作为参数。

**2\. 使用getClass()方法**
    
    
    // 创建Dog类的对象
    Dog d1 = new Dog();
    
    // 创建Class对象
    // 以反射Dog类
    Class b = d1.getClass();

这里，我们使用Dog类的对象来创建Class对象。

**3\. 使用.class扩展**
    
    
    // 创建Class对象
    // 以反射Dog类
    Class c = Dog.class;

现在我们知道如何创建Class对象。我们可以使用此对象在运行时获取有关相应类的信息。

* * *

## 示例：Java类反射

```java
import java.lang.Class;
import java.lang.reflect.*;

class Animal {
}

// 将此类放入不同的Dog.java文件中
public class Dog extends Animal {
  public void display() {
    System.out.println("I am a dog.");
  }
}

// 将此类放入Main.java文件中
class Main {
  public static void main(String[] args) {
    try {
      // 创建Dog对象
      Dog d1 = new Dog();

      // 使用getClass()创建Class对象
      Class obj = d1.getClass();

      // 获取类名
      String name = obj.getName();
      System.out.println("Name: " + name);

      // 获取类的访问修饰符
      int modifier = obj.getModifiers();

      // 将访问修饰符转换为字符串
      String mod = Modifier.toString(modifier);
      System.out.println("Modifier: " + mod);

      // 获取Dog的父类
      Class superClass = obj.getSuperclass();
      System.out.println("Superclass: " + superClass.getName());
    }

    catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

**输出**
```
Name: Dog
Modifier: public
Superclass: Animal
```

在上面的示例中，我们创建了一个超类Animal和一个子类Dog。在这里，我们尝试检查Dog类。

注意以下语句：
```java
Class obj = d1.getClass();
```

在这里，我们使用getClass()方法创建了一个Class对象obj。然后，我们使用该对象调用Class的不同方法。

  * **obj.getName()** \- 返回类的名称
  * **obj.getModifiers()** \- 返回类的访问修饰符
  * **obj.getSuperclass()** \- 返回类的父类

要了解更多有关`Class`的信息，请访问[Java Class（官方Java文档）](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)。

> **注意**：我们使用`Modifier`类将整数访问修饰符转换为字符串形式。

* * *

## 反射字段、方法和构造函数

`java.lang.reflect`包提供了可以用于操作类成员的类。例如：

  * **Method类** - 提供有关类中方法的信息
  * **Field类** - 提供有关类中字段的信息
  * **Constructor类** - 提供有关类中构造函数的信息

* * *

## 1\. 反射Java方法

`Method`类提供了多种方法，可用于获取有关类中方法的信息。例如：

```java
import java.lang.Class;
import java.lang.reflect.*;

class Dog {

  // 类的方法
  public void display() {
    System.out.println("I am a dog.");
  }

  private void makeSound() {
    System.out.println("Bark Bark");
  }
}

class Main {
  public static void main(String[] args)请注意，以下是您要翻译的技术文章：

```ning it to the object field1 of the `Field` class. We then used field1 to modify the accessibility of color and allows us to make changes to it.

We then used field1 to perform various operations on the private field color.

To learn more about the different methods of Field, visit [Java Field Class (official Java documentation)](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Field.html).

* * *

## 3\. Reflection of Java Constructor

We can also inspect different constructors of a class using various methods provided by the `Constructor` class. For example,
    
    
    import java.lang.Class;
    import java.lang.reflect.*;
    
    class Dog {
    
      // public constructor without parameter
      public Dog() {
    
      }
    
      // private constructor with a single parameter
      private Dog(int age) {
    
      }
    
    }
    
    class Main {
      public static void main(String[] args) {
        try {
          // create an object of Dog
          Dog d1 = new Dog();
    
          // create an object of Class
          // using getClass()
          Class obj = d1.getClass();
    
          // get all constructors of Dog
          Constructor[] constructors = obj.getDeclaredConstructors();
    
          for (Constructor c : constructors) {
    
            // get the name of constructors
            System.out.println("Constructor Name: " + c.getName());
    
            // get the access modifier of constructors
            // convert it into string form
            int modifier = c.getModifiers();
            String mod = Modifier.toString(modifier);
            System.out.println("Modifier: " + mod);
    
            // get the number of parameters in constructors
            System.out.println("Parameters: " + c.getParameterCount());
            System.out.println("");
          }
        }
        
        catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

**Output**
    
    
    Constructor Name: Dog
    Modifier: public     
    Parameters: 0        
    
    Constructor Name: Dog
    Modifier: private    
    Parameters: 1

In the above example, we have created a class named Dog. The class includes two constructors.

We are using reflection to find the information about the constructors of the class. Notice the statement,
    
    
    Constructor[] constructors = obj.getDeclaredConstructor();

Here, the we are accessing all the constructors present in Dog and assigning them to an array constructors of the `Constructor` type.

We then used object c to get different informations about the constructor.

  * **c.getName()** \- returns the name of the constructor
  * **c.getModifiers()** \- returns the access modifiers of the constructor in integer form
  * **c.getParameterCount()** \- returns the number of parameters present in each constructor



To learn about more methods of the `Constructor` class, visit [Constructor class](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Constructor.html)
```

请开始翻译。