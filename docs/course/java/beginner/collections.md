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

## 💡 什么是集合(Collection)

你有没有想过，如果要存储 100 个学生的成绩，难道要创建 100 个变量吗？集合就是用来解决这个问题的——它可以存储一组相关的数据。

Java 中常用的集合有三种：
- **数组(Array)**：固定大小，可以重复
- **Set**：不固定大小，不能重复
- **Map**：不固定大小，键值对存储

## 数组(Array)

### 💡 概念说明

数组是最基础的集合，特点是：
- 创建时必须指定大小
- 大小不能改变
- 可以存储重复的元素

### 📝 代码示例

```java{3,6,9}
public class ArrayExample {
    public static void main(String[] args) {
        // 创建一个能存储 5 个整数的数组
        int[] scores = new int[5];
        
        // 给数组赋值（索引从 0 开始）
        scores[0] = 85;
        scores[1] = 92;
        scores[2] = 78;
        
        // 读取数组中的值
        System.out.println("第一个成绩: " + scores[0]);
        System.out.println("数组长度: " + scores.length);
    }
}
```

**运行结果：**
```
第一个成绩: 85
数组长度: 5
```

::: tip 提示
数组的索引从 0 开始，所以第一个元素是 `scores[0]`，最后一个元素是 `scores[4]`
:::

### 📝 更简洁的创建方式

```java{2,5}
public class ArrayExample2 {
    public static void main(String[] args) {
        // 创建数组的同时赋值
        String[] names = {"张三", "李四", "王五"};
        
        // 遍历数组
        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]);
        }
    }
}
```

**运行结果：**
```
张三
李四
王五
```

### 💪 练习题

**练习 1**：创建一个存储 7 天温度的数组，并计算平均温度

<details>
<summary>查看答案</summary>

```java
public class TemperatureArray {
    public static void main(String[] args) {
        int[] temperatures = {25, 27, 26, 28, 30, 29, 27};
        
        int sum = 0;
        for (int i = 0; i < temperatures.length; i++) {
            sum += temperatures[i];
        }
        
        double average = (double) sum / temperatures.length;
        System.out.println("平均温度: " + average + "℃");
    }
}
```

</details>

## Set（集合）

### 💡 概念说明

Set 是一种不允许重复元素的集合：
- 大小可以动态改变
- 自动去除重复元素
- 常用的实现类是 **HashSet**

### 📝 代码示例

```java{1,5-6,9,12}
import java.util.HashSet;

public class SetExample {
    public static void main(String[] args) {
        // 创建一个 Set
        HashSet<String> fruits = new HashSet<>();
        
        // 添加元素
        fruits.add("苹果");
        fruits.add("香蕉");
        fruits.add("苹果");  // 重复的元素不会被添加
        
        System.out.println("水果种类: " + fruits);
        System.out.println("总共有 " + fruits.size() + " 种水果");
    }
}
```

**运行结果：**
```
水果种类: [香蕉, 苹果]
总共有 2 种水果
```

::: warning 注意
Set 会自动去除重复元素，所以两次添加"苹果"，最终只会保留一个
:::

### 📝 Set 的常用操作

```java{1,8,11,14}
import java.util.HashSet;

public class SetOperations {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();
        
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        
        // 检查是否包含某个元素
        System.out.println("包含 20? " + numbers.contains(20));
        
        // 删除元素
        numbers.remove(20);
        System.out.println("删除后: " + numbers);
        
        // 遍历 Set
        for (Integer num : numbers) {
            System.out.println(num);
        }
    }
}
```

**运行结果：**
```
包含 20? true
删除后: [10, 30]
10
30
```

### 💪 练习题

**练习 1**：从一组数字中去除重复项并打印

<details>
<summary>查看答案</summary>

```java
import java.util.HashSet;

public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 2, 4, 1, 5};
        HashSet<Integer> uniqueNumbers = new HashSet<>();
        
        for (int num : numbers) {
            uniqueNumbers.add(num);
        }
        
        System.out.println("去重后的数字: " + uniqueNumbers);
    }
}
```

</details>

## Map（映射）

### 💡 概念说明

Map 存储的是**键值对(Key-Value Pair)**：
- 每个键(Key)对应一个值(Value)
- 键不能重复，值可以重复
- 常用的实现类是 **HashMap**

### 📝 代码示例

```java{1,5-6,9-10,13}
import java.util.HashMap;

public class MapExample {
    public static void main(String[] args) {
        // 创建一个 Map（键是学号，值是姓名）
        HashMap<String, String> students = new HashMap<>();
        
        // 添加键值对
        students.put("001", "张三");
        students.put("002", "李四");
        students.put("003", "王五");
        
        // 根据键获取值
        System.out.println("学号 002 的学生: " + students.get("002"));
        System.out.println("总共有 " + students.size() + " 个学生");
    }
}
```

**运行结果：**
```
学号 002 的学生: 李四
总共有 3 个学生
```

### 📝 Map 的常用操作

```java{1,8,11,14,17}
import java.util.HashMap;

public class MapOperations {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();
        
        scores.put("语文", 85);
        scores.put("数学", 92);
        scores.put("英语", 78);
        
        // 检查是否包含某个键
        System.out.println("包含数学成绩? " + scores.containsKey("数学"));
        
        // 修改值（如果键已存在，会覆盖原来的值）
        scores.put("数学", 95);
        
        // 遍历 Map
        for (String subject : scores.keySet()) {
            System.out.println(subject + ": " + scores.get(subject) + "分");
        }
    }
}
```

**运行结果：**
```
包含数学成绩? true
数学: 95分
语文: 85分
英语: 78分
```

::: tip 提示
`put()` 方法如果键已存在，会用新值覆盖旧值
:::

### 💪 练习题

**练习 1**：创建一个学生成绩管理系统，可以添加学生成绩并查询

<details>
<summary>查看答案</summary>

```java
import java.util.HashMap;

public class ScoreManager {
    public static void main(String[] args) {
        HashMap<String, Integer> studentScores = new HashMap<>();
        
        // 添加学生成绩
        studentScores.put("张三", 85);
        studentScores.put("李四", 92);
        studentScores.put("王五", 78);
        
        // 查询指定学生成绩
        String studentName = "李四";
        if (studentScores.containsKey(studentName)) {
            System.out.println(studentName + "的成绩: " + studentScores.get(studentName));
        } else {
            System.out.println("未找到该学生");
        }
        
        // 计算平均分
        int total = 0;
        for (Integer score : studentScores.values()) {
            total += score;
        }
        double average = (double) total / studentScores.size();
        System.out.println("平均分: " + average);
    }
}
```

</details>

## 📌 小结

1. **数组(Array)**：固定大小，适合存储数量已知的数据
2. **Set**：自动去重，适合需要唯一性的场景
3. **Map**：键值对存储，适合需要通过标识符查找数据的场景