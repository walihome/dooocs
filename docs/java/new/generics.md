# Java泛型

Java泛型允许我们创建一个可以与不同类型的数据（对象）一起使用的单个类、接口和方法。

这有助于我们重用我们的代码。

> **注意**：**泛型**不适用于原始类型（`int`，`float`，`char`等）。

---

## Java泛型类

我们可以创建一个可以与任何类型的数据一起使用的类。这样的类被称为泛型类。

以下是如何在Java中创建一个泛型类的示例：

### 示例：创建一个泛型类

```java
class Main {
  public static void main(String[] args) {

    // 使用整数数据初始化泛型类
    GenericsClass<Integer> intObj = new GenericsClass<>(5);
    System.out.println("泛型类返回值：" + intObj.getData());

    // 使用字符串数据初始化泛型类
    GenericsClass<String> stringObj = new GenericsClass<>("Java编程");
    System.out.println("泛型类返回值：" + stringObj.getData());
  }
}

// 创建一个泛型类
class GenericsClass<T> {

  // T类型的变量
  private T data;

  public GenericsClass(T data) {
    this.data = data;
  }

  // 返回T类型的变量的方法
  public T getData() {
    return this.data;
  }
}
```

**输出**

```
泛型类返回值：5
泛型类返回值：Java编程
```

在上面的示例中，我们创建了一个名为GenericsClass的泛型类。该类可用于处理任何类型的数据。

```java
class GenericsClass<T> {...}
```

在这里，角括号`<>`中使用的T表示**类型参数**。在Main类中，我们创建了两个GenericsClass对象：

- intObj - 在这里，类型参数T被替换为`Integer`。现在，GenericsClass可以处理整数数据。
- stringObj - 在这里，类型参数T被替换为`String`。现在，GenericsClass可以处理字符串数据。

---

## Java泛型方法

类似于泛型类，我们还可以创建一个可以与任何类型的数据一起使用的方法。这样的方法被称为泛型方法。

以下是如何在Java中创建一个泛型方法的示例：

### 示例：创建一个泛型方法

```java
class Main {
  public static void main(String[] args) {

    // 使用整数数据初始化DemoClass
    DemoClass demo = new DemoClass();

    // 使用字符串工作的泛型方法
    demo.<String>genericsMethod("Java编程");

    // 使用整数工作的泛型方法
    demo.<Integer>genericsMethod(25);
  }
}

class DemoClass {

  // 创建一个泛型方法
  public <T> void genericsMethod(T data) {
    System.out.println("泛型方法：");
    System.out.println("传递的数据：" + data);
  }
}
```

**输出**

```
泛型方法：
传递的数据：Java编程
泛型方法：
传递的数据：25
```

在上面的示例中，我们创建了一个名为genericsMethod的泛型方法。

```java
public <T> void genericMethod(T data) {...}
```

在这里，类型参数`<T>`插入到修饰符`public`之后和返回类型`void`之前。

我们可以通过在方法名称之前的括号中放置实际类型`<String>`和`<Integer>`来调用泛型方法。

```java
demo.<String>genericMethod("Java编程");

demo.<Integer>genericMethod(25);
```

**注意**：我们可以在不包括类型参数的情况下调用泛型方法。例如，

```java
demo.genericsMethod("Java编程");
```

在这种情况下，编译器可以根据传递给方法的值来匹配类型参数。

---

## 有界类型

一般而言，**类型参数**可以接受任何数据类型（除了原始类型）。

然而，如果我们只想对某些特定类型（例如接受数字类型的数据）使用