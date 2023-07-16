# Java注解

Java注解是我们程序源代码的元数据（关于数据的数据）。

它们为编译器提供关于程序的额外信息，但不是程序本身的一部分。这些注解不会影响已编译程序的执行。

注解以`@`开头。其语法为：

```
@AnnotationName
```

* * *

让我们以`@Override`注解为例。

`@Override`注解指定了被标记为此注解的方法将覆盖具有相同方法名、返回类型和参数列表的超类方法。

在重写方法时，使用`@Override`并不是强制性的。然而，如果我们使用它，在重写方法时如果出现问题（例如参数类型错误），编译器会报错。

### 示例1：@Override注解示例

```java
class Animal {
  public void displayInfo() {
    System.out.println("I am an animal.");
  }
}

class Dog extends Animal {
  @Override
  public void displayInfo() {
    System.out.println("I am a dog.");
  }
}

class Main {
  public static void main(String[] args) {
    Dog d1 = new Dog();
    d1.displayInfo();
  }
}
```

**输出**

```
I am a dog.
```

在这个例子中，方法`displayInfo()`同时存在于超类Animal和子类Dog中。当调用此方法时，将调用子类中的方法，而不是超类中的方法。

* * *

## 注解格式

注解也可以包含元素（成员/属性/参数）。

### 1\. 标记注解

标记注解不包含成员/元素。它只用于标记声明。

其语法为：

```
@AnnotationName()
```

由于这些注解不包含元素，括号可以省略。例如：

```
@Override
```

* * *

### 2\. 单元素注解

单元素注解只包含一个元素。

其语法为：

```
@AnnotationName(elementName = "elementValue")
```

如果只有一个元素，则习惯上将该元素命名为value。

```
@AnnotationName(value = "elementValue")
```

在这种情况下，元素名称也可以省略。元素名称默认为value。

```
@AnnotationName("elementValue")
```

* * *

### 3\. 多元素注解

这些注解包含多个以逗号分隔的元素。

其语法为：

```
@AnnotationName(element1 = "value1", element2 = "value2")
```

* * *

## 注解放置位置

可以通过将注解放置在声明之前来为任何声明打上标记。从Java 8开始，注解还可以放在类型之前。

### 1\. 在声明之上

如上所述，Java注解可以放在类、方法、接口、字段和其他程序元素声明之上。

### 示例2：@SuppressWarnings注解示例

```java
import java.util.*;

class Main {
  @SuppressWarnings("unchecked")
  static void wordsList() {
    ArrayList wordList = new ArrayList<>();

    // This causes an unchecked warning
    wordList.add("programiz");

    System.out.println("Word list => " + wordList);
  }

  public static void main(String args[]) {
    wordsList();
  }
}
```

**输出**

```
Word list => [programiz]
```

如果以上程序在没有使用`@SuppressWarnings("unchecked")`注解的情况下编译，编译器仍将编译该程序，但会给出警告，如：

```
Main.java uses unchecked or unsafe operations.
Word list => [programiz]
```

我们收到警告

```
Main.java uses unchecked or unsafe operations
```

是因为以下语句。

```
ArrayList wordList = new ArrayList<>();
```

这是因为我们没有定义数组列表的泛型类型。我们可以通过在尖括号`<>`内指定泛型来修复此警告。

```
ArrayList<String> wordList = new ArrayList<>();
```

* * *

### 2\. 类型注解

在Java 8之前，注解只能应用于声明。现在，也可以使用类型注解。这意味着我们可以在