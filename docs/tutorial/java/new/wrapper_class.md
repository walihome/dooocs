# Java包装类

Java中的包装类用于将基本类型（`int`、`char`、`float`等）转换为相应的对象。

每个基本类型都有对应的包装类。

基本类型 | 包装类
---|---
`byte` | `Byte`
`boolean` | `Boolean`
`char` | `Character`
`double` | `Double`
`float` | `Float`
`int` | `Integer`
`long` | `Long`
`short` | `Short`

* * *

## 将基本类型转换为包装对象

我们也可以使用`valueOf()`方法将基本类型转换为相应的对象。

### 示例1：基本类型到包装对象的转换


```java 
class Main {
  public static void main(String[] args) {

    // 创建基本类型
    int a = 5;
    double b = 5.65;

    // 转换为包装对象
    Integer aObj = Integer.valueOf(a);
    Double bObj = Double.valueOf(b);

    if(aObj instanceof Integer) {
      System.out.println("创建了一个Integer对象。");
    }

    if(bObj instanceof Double) {
      System.out.println("创建了一个Double对象。");
    }
  }
}
```


**输出**
```java
创建了一个Integer对象。
创建了一个Double对象。
```

在上面的示例中，我们使用了`valueOf()`方法将基本类型转换为对象。

这里，我们使用了`instanceof`运算符来检查生成的对象是否是`Integer`或`Double`类型。

然而，Java编译器可以直接将基本类型转换为相应的对象。例如，
```java
int a = 5;
// 转换为对象
Integer aObj = a;

double b = 5.6;
// 转换为对象
Double bObj = b;
```

这个过程称为**自动装箱**。要了解更多信息，。

> **注意**：我们也可以使用`Wrapper`类的构造函数将基本类型转换为包装对象。但是在Java 9之后，构造函数的使用被废弃。

* * *

## 包装对象到基本类型

要将对象转换为基本类型，我们可以使用每个包装类中存在的相应值方法（`intValue()`、`doubleValue()`等）。

### 示例2：包装对象到基本类型


``` java
class Main {
  public static void main(String[] args) {

    // 创建包装类对象
    Integer aObj = Integer.valueOf(23);
    Double bObj = Double.valueOf(5.55);

    // 转换为基本类型
    int a = aObj.intValue();
    double b = bObj.doubleValue();

    System.out.println("a的值：" + a);
    System.out.println("b的值：" + b);
  }
}
```


**输出**
``` java
a的值：23
b的值：5.55
```

在上面的示例中，我们使用了`intValue()`和`doubleValue()`方法将`Integer`和`Double`对象转换为相应的基本类型。

然而，Java编译器可以自动将对象转换为相应的基本类型。例如，
``` java
Integer aObj = Integer.valueOf(2);
// 转换为int类型
int a = aObj;

Double bObj = Double.valueOf(5.55);
// 转换为double类型
double b = bObj;
```

这个过程称为**拆箱**。要了解更多信息

* * *

## 包装类的优点

  * 在Java中，有时我们可能需要使用对象而不是基本数据类型。例如，在使用集合时。

```java 
// 错误
ArrayList<int> list = new ArrayList<>();

// 正确运行
ArrayList<Integer> list = new ArrayList<>();
```


在这种情况下，包装类帮助我们使用基本数据类型作为对象。
  * 我们可以在包装对象中存储`null`值。例如，
    
    
    // 生成错误
    int a