---
title: Java 数组
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java数组

数组是一种存储相同类型数据的集合。

例如，如果我们想要存储100个人的姓名，我们可以创建一个可以存储100个姓名的字符串类型的数组。

```java
String[] array = new String[100];
```

在上面的例子中，这个数组不能存储超过100个姓名。Java数组中的值的数量始终是固定的。

## 如何在Java中声明数组？

在Java中，我们可以这样声明一个数组。

```java
dataType[] arrayName;
```

- `dataType` - 它可以是[基本数据类型](https://www.programiz.com/java-programming/variables-primitive-data-types#data-types)如`int`，`char`，`double`，`byte`等，也可以是[Java对象](https://www.programiz.com/java-programming/class-objects)。
- `arrayName` - 它是[标识符](https://www.programiz.com/java-programming/keywords-identifiers#identifiers)。

例如，

```java
double[] data;
```
在这个例子中，`data`是一个可以保存`double`类型值的数组。

**但是，这个数组可以保存多少元素？**

好问题！要定义数组可以容纳的元素数量，在Java中我们必须为数组分配内存。例如，

```java
// 声明一个数组
double[] data;

// 分配内存
data = new double[10];
```

在这里，数组可以存储**10**个元素。我们还可以说数组的**大小或长度**为10。

在Java中，我们可以在一个语句中同时声明和分配数组的内存。例如，

```java
double[] data = new double[10];
```

## 如何初始化Java数组？

在Java中，我们可以在声明时初始化数组。例如，

```java
// 声明并初始化数组
int[] age = {12, 4, 5, 2, 5};
```

在这里，我们创建了一个名为`age`的数组，并使用花括号中的值进行初始化。

请注意，我们没有提供数组的大小。在这种情况下，Java编译器会自动通过计数数组中的元素数量（即5）来指定大小。

在Java数组中，每个内存位置都与一个数字相关联。该数字被称为数组索引。我们也可以使用索引号来初始化Java数组。例如，

```java
// 声明一个数组
int[] age = new int[5];

// 初始化数组
age[0] = 12;
age[1] = 4;
age[2] = 5;
..
```

![Elements are stored in the array](https://cdn.programiz.com/sites/tutorial2program/files/initialize-array-during-declaration-java.jpg)  
Java数组初始化

**注意**：

- 数组索引始终从0开始。也就是说，数组的第一个元素位于索引0处。
- 如果数组的大小为n，则数组的最后一个元素将位于索引n-1处。

## 如何在Java中访问数组元素？

我们可以使用索引号访问数组的元素。以下是访问数组元素的语法：

```java
array[index]
```

让我们看一个使用索引号访问数组元素的示例。

### 示例：访问数组元素

```java
class Main {
 public static void main(String[] args) {
  
   // 创建一个数组
   int[] age = {12, 4, 5, 2, 5};

   // 访问每个数组元素
   System.out.println("访问数组元素：");
   System.out.println("第一个元素：" + age[0]);
   System.out.println("第二个元素：" + age[1]);
   System.out.println("第三个元素：" + age[2]);
   System.out.println("第四个元素：" + age[3]);
   System.out.println("第五个元素：" + age[4]);
 }
}
```

**输出**
```
访问数组元素：
第一个元素：12
第二个元素：4
第三个元素：5
第四个元素：2
第五个元素：5
```

在上面的示例中，注意我们使用索引号来访