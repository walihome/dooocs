---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
## Java自动装箱和拆箱

在Java中，**自动装箱**是指编译器自动将基本类型转换为其对应的包装类对象。例如，

```java
int a = 56;

// 自动装箱
Integer aObj = a;
```

在使用Java集合时，自动装箱有很大的优势。

---

### 示例1：Java自动装箱

```java
import java.util.ArrayList;

class Main {
   public static void main(String[] args) {

      ArrayList<Integer> list = new ArrayList<>();

      // 自动装箱
      list.add(5);
      list.add(6);

      System.out.println("ArrayList: " + list);
   }
}
```

**输出**

```
ArrayList: [5, 6]
```

在上面的示例中，我们创建了一个整数类型的数组列表。因此，该数组列表只能存储`Integer`类型的对象。

注意以下代码行：

```java
list.add(5);
```

在这里，我们传递的是基本类型值。然而，由于自动装箱，基本值会自动转换为`Integer`对象，并存储在数组列表中。

---

## Java拆箱 - 包装类对象到基本类型

在Java中，**拆箱**是指编译器自动将包装类对象转换为其对应的基本类型。例如，

```java
// 自动装箱
Integer aObj = 56;

// 拆箱
int a = aObj;
```

与自动装箱类似，拆箱也可以用于Java集合。

---

### 示例2：Java拆箱

```java
import java.util.ArrayList;

class Main {
   public static void main(String[] args) {

      ArrayList<Integer> list = new ArrayList<>();

      // 自动装箱
      list.add(5);
      list.add(6);

      System.out.println("ArrayList: " + list);

      // 拆箱
      int a = list.get(0);
      System.out.println("索引0的值：" + a);
   }
}
```

**输出**

```
ArrayList: [5, 6]
索引0的值：5
```

在上面的示例中，注意以下代码行：

```java
int a = list.get(0);
```

这里，`get()`方法返回索引为0的对象。然而，由于拆箱，该对象会自动转换为基本类型`int`，并赋值给变量a。