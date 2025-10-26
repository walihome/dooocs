---
title: 数组
description: 详细讲解 Java 中数组的基本概念、初始化方式、遍历技巧及 Arrays 工具类应用，帮助你玩转数组操作。
order: 5
keywords: [Java, 数组, 一维数组, 多维数组, Arrays 工具类]
---

# 数组

## 前置知识
> 在阅读本章前，你需要了解：变量、数据类型和基本的 Java 语法结构（如方法定义和循环）。

---

## 为什么需要数组？

想象一下，你在给一个学校班级录入成绩。每个学生都有一个分数，传统方式是为每个学生都创建一个单独变量，比如 score1, score2, score3……这不仅浪费空间，还让代码难维护。这里，数组就像一排能装下所有成绩的“格子”，只用一个名字就能指向一整组数据。更重要的是，我们可以用循环轻松访问每一个成绩。

简单来说，数组让我们用一种整齐、统一的方式管理相同类型的多个数据。接下来，我们一步步了解数组的样子，如何初始化它们，以及如何优雅地读写里面的元素。

---

## 数组的基本概念

### 什么是一维数组？

用人话讲，一维数组就是“一个线性的盒子”，里面装着相同类型的东西，顺序排列着。比如 `int[] scores` 就是装整数分数的盒子。

你可以用下标（索引）访问盒子里的任意一个物品，**注意：下标从0开始**。

### 为什么需要一维数组？

保持代码整洁，方便批量操作数据。如：对所有分数批量加5分，或找出最高分。

### 一维数组的基本用法

- 声明：告诉Java你要一个数组，但还没准备好放东西。
- 初始化：指定数组可以放多少内容。
- 访问：用下标读取或修改元素。
- 遍历：逐个访问数组内元素。

---

## 代码示例 1：最简单的一维数组

```java
public class SimpleArrayExample {
    public static void main(String[] args) {
        // 声明并初始化一个能存5个整数的数组
        int[] scores = new int[5];

        // 给每个位置赋值
        scores[0] = 85;
        scores[1] = 90;
        scores[2] = 78;
        scores[3] = 92;
        scores[4] = 88;

        // 访问并打印第一个和最后一个元素
        System.out.println("第一个分数: " + scores[0]);  // 85
        System.out.println("最后一个分数: " + scores[4]);  // 88
    }
}
```

**这段代码做了什么？**

1. 通过 `new int[5]` 创建了一个长度为5的整型数组，默认每个元素是0。
2. 依次给数组中的元素赋了具体成绩。
3. 用下标0和4访问了数组首尾元素。
4. 打印输出查看。

这里你看到，数组就像一排带编号的储物柜，可以有序存放信息。

---

## 多维数组：二维就是二维的“矩阵”

当你面对像“考试成绩表”这样更复杂的数据结构，单一的线性盒子就不够了。二维数组就相当于一张考试成绩表：行代表学生，列代表科目。

声明方式一般是 `int[][] matrix`，它看起来像“盒子里面又装着盒子”，通过两个下标访问。

---

## 代码示例 2：二维数组初始化与遍历

```java
public class TwoDimensionalArrayExample {
    public static void main(String[] args) {
        // 创建一个3行4列的二维数组，模拟3个学生4门科目的成绩
        int[][] scoresTable = new int[3][4];

        // 给每个元素赋值，比如第1个学生第1门课成绩是85
        scoresTable[0][0] = 85;
        scoresTable[0][1] = 90;
        scoresTable[0][2] = 78;
        scoresTable[0][3] = 92;

        scoresTable[1][0] = 88;
        scoresTable[1][1] = 76;
        scoresTable[1][2] = 95;
        scoresTable[1][3] = 80;

        scoresTable[2][0] = 70;
        scoresTable[2][1] = 85;
        scoresTable[2][2] = 88;
        scoresTable[2][3] = 90;

        // 遍历并打印二维数组
        for (int student = 0; student < scoresTable.length; student++) {
            System.out.print("学生" + (student + 1) + "成绩: ");
            for (int subject = 0; subject < scoresTable[student].length; subject++) {
                System.out.print(scoresTable[student][subject] + " ");
            }
            System.out.println();  // 换行
        }
    }
}
```

**这段代码做了什么？**

1. 创建了3x4大小的二维数组。
2. 逐个给元素赋具体成绩。
3. 用双重循环打印出整个成绩表。

你可以想象一张表格，通过 `scoresTable[row][column]` 精准定位成绩。外层循环是“行”，内层循环是“列”。

---

## 数组初始化的多种写法

除了按长度动态创建，你也可以直接用“字面量”快速创建数组。

```java
int[] primes = {2, 3, 5, 7, 11}; // 静态初始化，一步到位
```

或二维：

```java
int[][] magicSquare = {
    {8, 1, 6},
    {3, 5, 7},
    {4, 9, 2}
};
```

这种方式尤其适合数据固定不变的场景。

---

## 遍历数组的3种常用方式对比

```java
int[] numbers = {10, 20, 30, 40, 50};

// 1. 传统for循环 - 最灵活
for (int i = 0; i < numbers.length; i++) {
    System.out.println("索引 " + i + " 的值是 " + numbers[i]);
}

// 2. 增强型for循环 (foreach) - 简洁直观
for (int num : numbers) {
    System.out.println("数值为 " + num);
}

// 3. Java 8 StreamAPI - 声明式风格
import java.util.Arrays;
Arrays.stream(numbers)
      .forEach(num -> System.out.println("流处理数值 " + num));
```

**你可能注意到，前三种遍历方式各有千秋。**

- 传统 for 循环灵活，可以控制索引。
- 增强 for 循环简洁，但你拿不到索引。
- Stream API 更现代，可链式调用，有更强表达力。

实践中，你会根据需求选最合适的。

---

## Arrays 工具类简析

Java 标准库提供了 `java.util.Arrays` 类，带来了许多操作数组的便利方法，比如排序、查找、填充以及数组与字符串之间的转换。

```java
import java.util.Arrays;

public class ArraysUtilityExample {
    public static void main(String[] args) {
        int[] values = {30, 10, 50, 20, 40};

        // 排序
        Arrays.sort(values);

        // 输出排序后的数组
        System.out.println("排序后: " + Arrays.toString(values));

        // 查找元素 - 二分查找必须先排序
        int index = Arrays.binarySearch(values, 20);
        System.out.println("元素20在数组中的位置: " + index);

        // 填充数组 - 将所有元素都设为99
        int[] fillArray = new int[5];
        Arrays.fill(fillArray, 99);
        System.out.println("填充后的数组: " + Arrays.toString(fillArray));
    }
}
```

**这段代码做了什么？**

1. 用 `Arrays.sort()` 给数组排序，BinarySearch 要求排序好才能正确工作。
2. `Arrays.toString()` 让打印数组更友好。
3. `Arrays.fill()` 快速给数组赋相同的值。

`Arrays` 工具类是开发中日常操作数组的好帮手。

---

:::warning ⚠️ 常见陷阱

1. **越界访问**：访问数组时下标千万不能超出 `0 ~ length-1`，否则运行时会抛 `ArrayIndexOutOfBoundsException`，这是常见错误。
2. **数组是引用类型**，赋值时是引用传递；修改副本会影响原数组。下面演示：

```java
public class ArrayReferenceTrap {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1; // 不是复制内容，是引用同一个数组

        arr2[0] = 100;

        System.out.println("arr1[0]: " + arr1[0]); // 100, 这可能不是你想要的！
    }
}
```

3. **多维数组“行不等长”**：Java 支持“锯齿数组”，即每行长度可以不同，初始化不均匀时要小心访问。

---

:::tip 💡 实战建议

- 初始化数组时，尽可能使用静态初始化（字面量）提高代码简洁度，尤其在数据已知时。
- 遍历数组时优先使用增强 for 循环，但如果需要索引或修改元素，请用传统 for 循环。
- Java 8 以上版本推荐结合 `Arrays.stream()` 或 Stream API 做更复杂的数据操作，代码更简洁可读。
- 养成用 `Arrays.toString()` 打印检查数组内容的习惯，避免调试中盲目输出内存地址。

---

:::details 🔍 深入理解：数组在内存中的表现

当你创建一个 `int[5]` 数组时，Java 会在堆内存申请一块能存5个整数的连续空间。数组变量其实是一个“引用”，指向这块内存。

执行 `scores[2] = 100;`时，会从数组起始位置向后偏移2个整数单位，然后把100写进去。

对于二维数组，实际是引用数组的“数组”，即第一维存放行的引用，第二维才是真正元素集合。这点导致二维数组不一定是完全矩阵，比如：

```java
int[][] jagged = {
    {1, 2, 3},
    {4, 5},
    {6, 7, 8, 9}
};
```

这就是典型的“不规则”二维数组。

---

## 小结

- 一维数组是相同类型元素的有序集合，编号从0开始。
- 多维数组是数组的数组，适合矩阵或表格结构。
- 数组初始化可以动态分配或用字面量快速赋值。
- 遍历数组时选择合适的循环形式很重要。
- `java.util.Arrays` 提供了很多便利的数组操作方法。
- 注意数组越界、引用传递和多维数组行长度不均的问题。

---

希望这章内容能帮你理清数组的基础，掌握不同层次的用法。接下来，可以尝试用数组解决现实问题，比如统计成绩最高的学生，或对二维数组中数据求和。练习中不断遇到问题和优化，会让你对数组的理解更加透彻。加油！

