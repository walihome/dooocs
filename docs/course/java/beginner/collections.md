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

你有没有想过,如果要存储一个班级所有学生的成绩,用变量一个个定义太麻烦了。集合就是用来存储一组数据的容器,就像一个可以自动扩容的盒子。

Java 中最常用的集合有三种:
- **数组(Array)**: 固定大小的容器
- **Set**: 不允许重复的集合
- **Map**: 键值对形式存储数据

## 数组(Array)

### 📝 代码示例

```java
public class ArrayDemo {
    public static void main(String[] args) {
        // 创建一个可以存储 5 个整数的数组
        int[] scores = new int[5];
        
        // 给数组赋值(索引从 0 开始)
        scores[0] = 85;
        scores[1] = 92;
        scores[2] = 78;
        scores[3] = 95;
        scores[4] = 88;
        
        // 读取数组中的值
        System.out.println("第一个学生的成绩: " + scores[0]);
        System.out.println("数组长度: " + scores.length);
        
        // 遍历数组
        for (int i = 0; i < scores.length; i++) {
            System.out.println("学生 " + (i + 1) + " 的成绩: " + scores[i]);
        }
    }
}
```

::: tip 快捷创建方式
如果你已经知道要存储的值,可以这样创建:
```java
int[] scores = {85, 92, 78, 95, 88};
```
:::

### ✅ 验证方法

运行上面的代码,你会看到:
```
第一个学生的成绩: 85
数组长度: 5
学生 1 的成绩: 85
学生 2 的成绩: 92
学生 3 的成绩: 78
学生 4 的成绩: 95
学生 5 的成绩: 88
```

### 💪 练习题

1. 创建一个数组存储 7 天的气温,打印出最高温度
2. 创建一个字符串数组存储 3 个城市名称,依次打印
3. 计算数组中所有数字的平均值

## Set

### 📝 代码示例

```java
import java.util.HashSet;
import java.util.Set;

public class SetDemo {
    public static void main(String[] args) {
        // 创建一个 Set
        Set<String> fruits = new HashSet<>();
        
        // 添加元素
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("apple");  // 重复元素不会被添加
        
        System.out.println("水果种类数量: " + fruits.size());
        System.out.println("所有水果: " + fruits);
        
        // 检查是否包含某个元素
        if (fruits.contains("apple")) {
            System.out.println("有苹果");
        }
        
        // 遍历 Set
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

::: warning 注意
Set 中的元素没有固定顺序,打印出来的顺序可能和添加顺序不同。
:::

### ✅ 验证方法

运行代码,你会看到类似这样的输出:
```
水果种类数量: 2
所有水果: [banana, apple]
有苹果
banana
apple
```

### 💪 练习题

1. 创建一个 Set 存储 5 个数字,尝试添加重复的数字,观察结果
2. 使用 `remove()` 方法从 Set 中删除一个元素
3. 创建一个 Set 存储学生姓名,确保没有重复名字

## Map

### 📝 代码示例

```java
import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
        // 创建一个 Map,键是学生姓名,值是成绩
        Map<String, Integer> studentScores = new HashMap<>();
        
        // 添加键值对
        studentScores.put("Zhang San", 85);
        studentScores.put("Li Si", 92);
        studentScores.put("Wang Wu", 78);
        
        // 获取某个键对应的值
        int score = studentScores.get("Li Si");
        System.out.println("Li Si 的成绩: " + score);
        
        // 检查是否包含某个键
        if (studentScores.containsKey("Zhang San")) {
            System.out.println("找到 Zhang San 的成绩");
        }
        
        // 遍历 Map
        for (String name : studentScores.keySet()) {
            System.out.println(name + " 的成绩是 " + studentScores.get(name));
        }
    }
}
```

::: tip 理解 Map
Map 就像一个字典,你用"单词"(键 Key)去查找"释义"(值 Value)。键必须是唯一的,但值可以重复。
:::

### ✅ 验证方法

运行代码,输出类似:
```
Li Si 的成绩: 92
找到 Zhang San 的成绩
Zhang San 的成绩是 85
Li Si 的成绩是 92
Wang Wu 的成绩是 78
```

### 💪 练习题

1. 创建一个 Map 存储水果名称和价格,打印所有水果的价格
2. 修改 Map 中某个学生的成绩(提示: 再次使用 `put()` 方法)
3. 使用 `size()` 方法获取 Map 中有多少个键值对

## 📌 小结

- **数组(Array)** 大小固定,通过索引访问元素,索引从 0 开始
- **Set** 不允许重复元素,适合存储唯一值的场景
- **Map** 存储键值对,通过键快速查找值,键不能重复