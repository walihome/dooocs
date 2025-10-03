---
title: 集合
category: Java
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 集合

在 Java 中，当你需要存储多个数据时，有不同的选择。本章将介绍三种最常用的集合方式：**数组(Array)**、**集合(Set)** 和 **映射(Map)**。

## 数组(Array)

### 💡 概念讲解

**数组(Array)** 是一个固定长度的容器，用来存储同一类型的多个值。

想象一个停车场，有 5 个固定车位，编号从 0 到 4。一旦建好，车位数量就不能改变了。

### 📝 代码示例

```java
public class ArrayDemo {
    public static void main(String[] args) {
        // 方式1：声明数组并指定长度
        int[] scores = new int[5];  // 创建一个能存 5 个整数的数组
        
        // 给数组赋值（索引从 0 开始）
        scores[0] = 85;
        scores[1] = 92;
        scores[2] = 78;
        scores[3] = 95;
        scores[4] = 88;
        
        // 读取数组中的值
        System.out.println("第一个成绩: " + scores[0]);  // 输出: 85
        System.out.println("第三个成绩: " + scores[2]);  // 输出: 78
        
        // 方式2：声明数组并直接赋值
        String[] names = {"张三", "李四", "王五"};
        
        // 获取数组长度
        System.out.println("学生人数: " + names.length);  // 输出: 3
        
        // 遍历数组
        System.out.println("\n所有学生姓名:");
        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]);
        }
    }
}
```

::: warning 注意
数组的索引(Index)从 0 开始，不是从 1 开始！一个长度为 5 的数组，索引是 0、1、2、3、4。
:::

### ✅ 验证方法

运行上述代码，你会看到：

```
第一个成绩: 85
第三个成绩: 78
学生人数: 3

所有学生姓名:
张三
李四
王五
```

### 💪 练习题

**练习 1**：创建一个数组存储一周的温度（7 个整数），并计算平均温度。

```java
public class TemperatureAverage {
    public static void main(String[] args) {
        int[] temperatures = {22, 24, 26, 25, 23, 27, 28};
        
        // 你的代码：计算平均温度
        // 提示：先求和，再除以数组长度
    }
}
```

**练习 2**：找出数组中的最大值。

```java
public class FindMax {
    public static void main(String[] args) {
        int[] numbers = {45, 23, 67, 12, 89, 34};
        
        // 你的代码：找出最大值并输出
    }
}
```

### 📌 小结

- 数组长度固定，创建后不能改变
- 索引从 0 开始
- 使用 `array.length` 获取数组长度
- 使用 `array[index]` 访问或修改元素

---

## 集合(Set)

### 💡 概念讲解

**集合(Set)** 是一个不允许重复元素的容器，长度可以动态变化。

你有没有想过，如果需要存储学生的学号，并且要确保没有重复的学号，该怎么做？用数组的话，你需要自己检查重复。用 Set，它会自动帮你去重。

在 Java 中，最常用的是 **HashSet**。

### 📝 代码示例

```java
import java.util.HashSet;
import java.util.Set;

public class SetDemo {
    public static void main(String[] args) {
        // 创建一个 Set（泛型<String>表示这个 Set 只能存字符串）
        Set<String> studentIds = new HashSet<>();
        
        // 添加元素
        studentIds.add("S001");
        studentIds.add("S002");
        studentIds.add("S003");
        studentIds.add("S001");  // 重复的元素不会被添加
        
        System.out.println("学号总数: " + studentIds.size());  // 输出: 3（不是4）
        
        // 检查是否包含某个元素
        if (studentIds.contains("S002")) {
            System.out.println("找到学号 S002");
        }
        
        // 遍历 Set
        System.out.println("\n所有学号:");
        for (String id : studentIds) {
            System.out.println(id);
        }
        
        // 删除元素
        studentIds.remove("S002");
        System.out.println("\n删除后的学号总数: " + studentIds.size());  // 输出: 2
    }
}
```

::: tip 提示
Set 中的元素是无序的，遍历时的顺序可能和添加顺序不同。如果需要有序，可以使用 **LinkedHashSet**。
:::

### ✅ 验证方法

运行代码，你会看到类似输出（顺序可能不同）：

```
学号总数: 3
找到学号 S002

所有学号:
S001
S002
S003

删除后的学号总数: 2
```

### 💪 练习题

**练习 1**：创建一个 Set 存储水果名称，添加几个水果（包括重复的），然后输出最终有多少种不同的水果。

```java
import java.util.HashSet;
import java.util.Set;

public class FruitSet {
    public static void main(String[] args) {
        Set<String> fruits = new HashSet<>();
        
        // 你的代码：添加水果（包括重复的）
        // 例如：苹果、香蕉、苹果、橙子、香蕉
        
        // 输出不同水果的数量
    }
}
```

**练习 2**：从 Set 中删除所有以 "S" 开头的学号。

### 📌 小结

- Set 自动去重，不允许存储重复元素
- 使用 `add()` 添加元素
- 使用 `contains()` 检查元素是否存在
- 使用 `remove()` 删除元素
- 使用 `size()` 获取元素数量
- Set 中的元素通常是无序的

---

## 映射(Map)

### 💡 概念讲解

**映射(Map)** 存储的是键值对(Key-Value Pair)，就像一个字典：通过"单词"（键）查找"释义"（值）。

比如，你想存储学生的学号和姓名：
- 学号 "S001" 对应 "张三"
- 学号 "S002" 对应 "李四"

每个键只能出现一次，但不同的键可以对应相同的值。

在 Java 中，最常用的是 **HashMap**。

### 📝 代码示例

```java
import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
        // 创建一个 Map（键是 String，值也是 String）
        Map<String, String> students = new HashMap<>();
        
        // 添加键值对
        students.put("S001", "张三");
        students.put("S002", "李四");
        students.put("S003", "王五");
        
        // 通过键获取值
        String name = students.get("S002");
        System.out.println("学号 S002 的学生是: " + name);  // 输出: 李四
        
        // 检查是否包含某个键
        if (students.containsKey("S001")) {
            System.out.println("找到学号 S001");
        }
        
        // 检查是否包含某个值
        if (students.containsValue("王五")) {
            System.out.println("找到学生王五");
        }
        
        // 获取所有学生数量
        System.out.println("\n学生总数: " + students.size());
        
        // 遍历 Map 的方式1：遍历键值对
        System.out.println("\n所有学生信息:");
        for (Map.Entry<String, String> entry : students.entrySet()) {
            System.out.println("学号: " + entry.getKey() + ", 姓名: " + entry.getValue());
        }
        
        // 遍历 Map 的方式2：只遍历键
        System.out.println("\n所有学号:");
        for (String id : students.keySet()) {
            System.out.println(id);
        }
        
        // 删除键值对
        students.remove("S002");
        System.out.println("\n删除后的学生总数: " + students.size());
    }
}
```

### ✅ 验证方法

运行代码，你会看到：

```
学号 S002 的学生是: 李四
找到学号 S001
找到学生王五

学生总数: 3

所有学生信息:
学号: S001, 姓名: 张三
学号: S002, 姓名: 李四
学号: S003, 姓名: 王五

所有学号:
S001
S002
S003

删除后的学生总数: 2
```

### 💪 练习题

**练习 1**：创建一个 Map 存储商品名称和价格，然后计算所有商品的总价。

```java
import java.util.HashMap;
import java.util.Map;

public class ShoppingCart {
    public static void main(String[] args) {
        Map<String, Double> products = new HashMap<>();
        
        // 你的代码：添加商品和价格
        // 例如：苹果 5.5, 香蕉 3.2, 橙子 4.8
        
        // 计算总价
    }
}
```

**练习 2**：创建一个 Map 存储学生姓名和考试成绩，找出成绩最高的学生。

```java
import java.util.HashMap;
import java.util.Map;

public class TopStudent {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("张三", 85);
        scores.put("李四", 92);
        scores.put("王五", 78);
        
        // 你的代码：找出最高分和对应的学生姓名
    }
}
```

### 📌 小结

- Map 存储键值对，每个键是唯一的
- 使用 `put(key, value)` 添加或更新键值对
- 使用 `get(key)` 获取值
- 使用 `containsKey()` 检查键是否存在
- 使用 `containsValue()` 检查值是否存在
- 使用 `remove(key)` 删除键值对
- 使用 `entrySet()` 遍历所有键值对

---

## 三种集合的对比

| 特性 | 数组(Array) | 集合(Set) | 映射(Map) |
|------|------------|-----------|-----------|
| 长度 | 固定 | 可变 | 可变 |
| 重复 | 允许 | 不允许 | 键不允许重复 |
| 访问方式 | 索引 | 遍历 | 键 |
| 使用场景 | 固定数量的数据 | 需要去重的数据 | 需要快速查找的键值对 |

::: tip 提示
- 如果数据量固定，使用**数组**
- 如果需要自动去重，使用**Set**
- 如果需要通过某个标识快速查找数据，使用**Map**
:::

---

## 综合练习

创建一个简单的学生管理系统：

```java
import java.util.HashMap;
import java.util.Map;

public class StudentManager {
    public static void main(String[] args) {
        // 存储学号和姓名
        Map<String, String> studentNames = new HashMap<>();
        studentNames.put("S001", "张三");
        studentNames.put("S002", "李四");
        studentNames.put("S003", "王五");
        
        // 存储学号和成绩
        Map<String, Integer> studentScores = new HashMap<>();
        studentScores.put("S001", 85);
        studentScores.put("S002", 92);
        studentScores.put("S003", 78);
        
        // 任务1：输出所有学生的姓名和成绩
        System.out.println("所有学生信息:");
        for (String id : studentNames.keySet()) {
            String name = studentNames.get(id);
            int score = studentScores.get(id);
            System.out.println(name + " (学号: " + id + "): " + score + "分");
        }
        
        // 任务2：计算平均分
        // 你的代码
        
        // 任务3：找出不及格（低于60分）的学生
        // 你的代码
    }
}
```

::: danger 警告
使用 Map 时，如果 `get()` 一个不存在的键，会返回 `null`。在使用返回值之前，最好先用 `containsKey()` 检查。
:::