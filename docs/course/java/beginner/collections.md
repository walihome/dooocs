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

你有没有想过这样一个问题：如果要存储班级里所有同学的姓名，用数组的话需要提前确定班级人数。但万一转来新同学，或者有同学转学了怎么办?这就是我们今天要学习的**集合(Collection)**要解决的问题。

集合就像一个可以自动伸缩的容器，它可以根据需要自动扩大或缩小容量。Java 提供了多种集合类型，每种都有不同的特点和用途。

---

## 数组(Array)

在学习集合之前,我们先来了解**数组(Array)**。虽然数组不属于集合框架,但它是 Java 中最基础的数据结构,理解数组能帮助你更好地理解集合。

### 💡 概念讲解

想象你有一排连续的储物柜,每个柜子都有编号(0、1、2、3...)。数组就像这样一排固定数量的储物柜,创建时必须确定柜子数量,之后不能增加或减少。

**数组的特点:**
- ✅ 访问速度快(通过索引直接定位)
- ✅ 适合存储固定数量的相同类型数据
- ❌ 长度固定,创建后不能改变
- ❌ 插入和删除元素比较麻烦

### 📝 代码示例

```java
public class ArrayExample {
    public static void main(String[] args) {
        // 方式1: 声明并指定长度 declare and specify length
        int[] numbers = new int[5]; // 创建一个可以存放5个整数的数组
        
        // 给数组赋值 assign values
        numbers[0] = 10; // 第一个元素 first element
        numbers[1] = 20;
        numbers[2] = 30;
        numbers[3] = 40;
        numbers[4] = 50;
        
        System.out.println("第一个元素: " + numbers[0]); // 输出: 10
        System.out.println("数组长度: " + numbers.length); // 输出: 5
        
        // 方式2: 声明并初始化 declare and initialize
        String[] fruits = {"苹果", "香蕉", "橙子"};
        
        // 遍历数组 traverse array
        System.out.println("所有水果:");
        for (int i = 0; i < fruits.length; i++) {
            System.out.println((i + 1) + ". " + fruits[i]);
        }
        
        // 增强for循环 enhanced for loop
        System.out.println("\n使用增强for循环:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
    }
}
```

### ✅ 验证方法

运行上面的代码,你应该看到:
```
第一个元素: 10
数组长度: 5
所有水果:
1. 苹果
2. 香蕉
3. 橙子

使用增强for循环:
- 苹果
- 香蕉
- 橙子
```

::: warning 注意
数组的索引从 0 开始!如果数组长度是 5,有效索引是 0-4。访问 `numbers[5]` 会导致 `ArrayIndexOutOfBoundsException` 错误。
:::

### 💪 练习题

1. 创建一个长度为 7 的整数数组,存储一周每天的气温(随便填几个数字),然后计算平均气温
2. 创建一个字符串数组存储你最喜欢的 5 本书名,用增强 for 循环输出它们
3. 尝试访问数组的第 10 个元素(假设数组只有 5 个元素),观察会发生什么错误

### 📌 小结

- 数组是**固定长度**的数据结构,创建时必须指定大小
- 数组索引从 **0** 开始
- 使用 `array.length` 获取数组长度
- 可以用普通 for 循环或增强 for 循环遍历数组
- 访问超出范围的索引会抛出 `ArrayIndexOutOfBoundsException`

---

## ArrayList - 可变长度的列表

### 💡 概念讲解

如果说数组是固定数量的储物柜,那么 **ArrayList** 就像一个魔法储物柜,可以自动增加柜子数量!

想象你在整理图书馆的书籍。用数组的话,你需要提前知道有多少本书。但用 ArrayList,你可以一本本往里放,它会自动扩容,非常方便。

**ArrayList 的特点:**
- ✅ 长度可变,自动扩容
- ✅ 可以动态添加和删除元素
- ✅ 按顺序存储,可以通过索引访问
- ❌ 只能存储对象类型(不能直接存 int,要用 Integer)

### 📝 代码示例

```java
import java.util.ArrayList; // 导入 ArrayList 类 import ArrayList class

public class ArrayListExample {
    public static void main(String[] args) {
        // 创建一个存储字符串的 ArrayList
        // create an ArrayList to store strings
        ArrayList<String> students = new ArrayList<>();
        
        // 添加元素 add elements
        students.add("张三");
        students.add("李四");
        students.add("王五");
        
        System.out.println("班级人数: " + students.size()); // 输出: 3
        
        // 访问元素 access elements
        System.out.println("第一个学生: " + students.get(0)); // 输出: 张三
        
        // 插入元素 insert element
        students.add(1, "赵六"); // 在索引1的位置插入
        
        // 遍历 ArrayList traverse
        System.out.println("\n所有学生:");
        for (int i = 0; i < students.size(); i++) {
            System.out.println((i + 1) + ". " + students.get(i));
        }
        
        // 使用增强 for 循环 enhanced for loop
        System.out.println("\n使用增强for循环:");
        for (String student : students) {
            System.out.println("- " + student);
        }
        
        // 删除元素 remove element
        students.remove("李四"); // 根据内容删除
        students.remove(0); // 根据索引删除
        
        System.out.println("\n删除后的学生:");
        System.out.println(students);
        
        // 检查是否包含某个元素 check if contains
        boolean hasWangWu = students.contains("王五");
        System.out.println("\n是否有王五: " + hasWangWu);
        
        // 清空 ArrayList clear
        students.clear();
        System.out.println("清空后人数: " + students.size()); // 输出: 0
    }
}
```

### ✅ 验证方法

运行代码,你会看到:
```
班级人数: 3
第一个学生: 张三

所有学生:
1. 张三
2. 赵六
3. 李四
4. 王五

使用增强for循环:
- 张三
- 赵六
- 李四
- 王五

删除后的学生:
[赵六, 王五]

是否有王五: true
清空后人数: 0
```

::: tip 提示
注意 `ArrayList` 使用 `size()` 获取长度,而数组使用 `length` 属性。这是新手容易混淆的地方!
:::

### 存储基本类型

你可能会问:能不能存储数字呢?当然可以,但需要使用**包装类(Wrapper Class)**:

```java
import java.util.ArrayList;

public class NumberListExample {
    public static void main(String[] args) {
        // 存储整数 store integers
        // 使用 Integer 而不是 int
        ArrayList<Integer> scores = new ArrayList<>();
        
        scores.add(85); // Java 会自动把 int 转换为 Integer (自动装箱 autoboxing)
        scores.add(92);
        scores.add(78);
        
        // 计算总分 calculate total
        int total = 0;
        for (int score : scores) { // 自动拆箱 auto-unboxing
            total += score;
        }
        
        double average = total / (double) scores.size();
        System.out.println("平均分: " + average);
    }
}
```

**常用包装类:**
- `int` → `Integer`
- `double` → `Double`
- `boolean` → `Boolean`
- `char` → `Character`

### 💪 练习题

1. 创建一个 ArrayList 存储你最喜欢的 5 首歌曲名称,然后在第 3 个位置插入一首新歌
2. 创建一个存储整数的 ArrayList,添加 10 个数字,然后找出其中的最大值
3. 创建一个学生姓名列表,删除所有姓"张"的学生(提示:可以用 `startsWith()` 方法检查字符串开头)

### 📌 小结

- ArrayList 是**可变长度**的列表,自动扩容
- 使用 `add()` 添加元素,`remove()` 删除元素
- 使用 `get(index)` 访问元素,`size()` 获取长度
- 存储基本类型需要使用包装类(Integer、Double 等)
- 必须先导入:`import java.util.ArrayList;`

---

## Set - 不重复的集合

### 💡 概念讲解

想象你在收集邮票。你不会收集两张完全相同的邮票对吧?**Set** 就是这样一个"去重"的集合,它会自动过滤掉重复的元素。

**Set 的特点:**
- ✅ 自动去重,不允许重复元素
- ✅ 适合需要唯一性的场景(比如用户ID、学号)
- ❌ 没有索引,不能通过位置访问元素
- ❌ 元素没有固定顺序(HashSet)

### 📝 代码示例

```java
import java.util.HashSet; // 导入 HashSet 类
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        // 创建一个 Set 存储标签 tags
        Set<String> tags = new HashSet<>();
        
        // 添加元素 add elements
        tags.add("Java");
        tags.add("编程");
        tags.add("学习");
        tags.add("Java"); // 尝试添加重复元素
        
        System.out.println("标签数量: " + tags.size()); // 输出: 3 (不是4!)
        System.out.println("所有标签: " + tags);
        
        // 检查是否存在 check if exists
        boolean hasJava = tags.contains("Java");
        System.out.println("是否有Java标签: " + hasJava);
        
        // 遍历 Set traverse
        System.out.println("\n遍历所有标签:");
        for (String tag : tags) {
            System.out.println("- " + tag);
        }
        
        // 删除元素 remove element
        tags.remove("学习");
        System.out.println("\n删除后: " + tags);
        
        // 实际应用: 去重
        System.out.println("\n=== 去重示例 ===");
        String[] fruits = {"苹果", "香蕉", "苹果", "橙子", "香蕉", "苹果"};
        
        Set<String> uniqueFruits = new HashSet<>();
        for (String fruit : fruits) {
            uniqueFruits.add(fruit);
        }
        
        System.out.println("原始数组: " + fruits.length + " 个水果");
        System.out.println("去重后: " + uniqueFruits.size() + " 种水果");
        System.out.println("去重结果: " + uniqueFruits);
    }
}
```

### ✅ 验证方法

运行代码,你会看到类似这样的输出(顺序可能不同):
```
标签数量: 3
所有标签: [Java, 编程, 学习]
是否有Java标签: true

遍历所有标签:
- Java
- 编程
- 学习

删除后: [Java, 编程]

=== 去重示例 ===
原始数组: 6 个水果
去重后: 3 种水果
去重结果: [苹果, 香蕉, 橙子]
```

::: warning 注意
HashSet 中元素的顺序是不确定的!你每次运行程序,输出的顺序可能都不一样。如果需要有序的 Set,可以使用 `LinkedHashSet` 或 `TreeSet`。
:::

### 有序的 Set

如果你需要保持元素的顺序,可以使用 **LinkedHashSet**:

```java
import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        // LinkedHashSet 保持插入顺序 maintains insertion order
        Set<String> languages = new LinkedHashSet<>();
        
        languages.add("Java");
        languages.add("Python");
        languages.add("JavaScript");
        languages.add("Java"); // 重复,不会被添加
        
        System.out.println(languages); 
        // 输出: [Java, Python, JavaScript] (顺序固定)
    }
}
```

### 💪 练习题

1. 创建一个 HashSet 存储 10 个整数(包含一些重复的),观察最终有多少个不重复的数字
2. 给定一个字符串数组 `["红色", "蓝色", "红色", "绿色", "蓝色", "黄色"]`,使用 Set 去重并输出
3. 创建两个 Set,分别存储你会的编程语言和你朋友会的编程语言,找出你们都会的语言(提示:使用 `retainAll()` 方法)

### 📌 小结

- Set 是**不允许重复**的集合
- HashSet 是最常用的 Set 实现,元素无序
- 使用 `add()` 添加元素,重复元素会被自动忽略
- 使用 `contains()` 检查元素是否存在
- Set 没有索引,不能用 `get(index)` 访问
- LinkedHashSet 可以保持插入顺序

---

## Map - 键值对映射

### 💡 概念讲解

想象一下字典:你通过"单词"查找"释义"。**Map** 就是这样一个"字典"结构,它存储**键值对(Key-Value Pair)**。

比如存储学生信息:
- 键(Key): 学号 "20230001"
- 值(Value): 姓名 "张三"

**Map 的特点:**
- ✅ 通过键快速查找值
- ✅ 键必须唯一,值可以重复
- ✅ 适合需要建立对应关系的场景
- ❌ 不能存储重复的键(新值会覆盖旧值)

### 📝 代码示例

```java
import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        // 创建一个存储学生成绩的 Map
        // key: 学生姓名(String), value: 成绩(Integer)
        Map<String, Integer> scores = new HashMap<>();
        
        // 添加键值对 put key-value pairs
        scores.put("张三", 85);
        scores.put("李四", 92);
        scores.put("王五", 78);
        
        System.out.println("学生人数: " + scores.size());
        
        // 通过键获取值 get value by key
        int zhangSanScore = scores.get("张三");
        System.out.println("张三的成绩: " + zhangSanScore);
        
        // 更新值 update value
        scores.put("张三", 90); // 用新值覆盖旧值
        System.out.println("更新后张三的成绩: " + scores.get("张三"));
        
        // 检查键是否存在 check if key exists
        boolean hasLiSi = scores.containsKey("李四");
        System.out.println("是否有李四的成绩: " + hasLiSi);
        
        // 检查值是否存在 check if value exists
        boolean hasScore90 = scores.containsValue(90);
        System.out.println("是否有人得了90分: " + hasScore90);
        
        // 遍历 Map - 方式1: 遍历键 traverse keys
        System.out.println("\n=== 所有学生成绩 ===");
        for (String name : scores.keySet()) {
            System.out.println(name + ": " + scores.get(name) + "分");
        }
        
        // 遍历 Map - 方式2: 遍历键值对 traverse entries
        System.out.println("\n=== 使用 Entry 遍历 ===");
        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            String name = entry.getKey();
            int score = entry.getValue();
            System.out.println(name + " -> " + score);
        }
        
        // 删除键值对 remove entry
        scores.remove("王五");
        System.out.println("\n删除后: " + scores);
        
        // 获取不存在的键 get non-existent key
        Integer unknownScore = scores.get("赵六");
        System.out.println("不存在的学生成绩: " + unknownScore); // 输出: null
    }
}
```

### ✅ 验证方法

运行代码,输出:
```
学生人数: 3
张三的成绩: 85
更新后张三的成绩: 90
是否有李四的成绩: true
是否有人得了90分: true

=== 所有学生成绩 ===
张三: 90分
李四: 92分
王五: 78分

=== 使用 Entry 遍历 ===
张三 -> 90
李四 -> 92
王五 -> 78

删除后: {张三=90, 李四=92}
不存在的学生成绩: null
```

::: tip 提示
当你用 `get()` 获取一个不存在的键时,返回的是 `null`。在实际开发中,建议先用 `containsKey()` 检查键是否存在,避免空指针错误。
:::

### 实际应用示例

```java
import java.util.HashMap;
import java.util.Map;

public class PhoneBookExample {
    public static void main(String[] args) {
        // 模拟一个简单的通讯录 phone book
        Map<String, String> phoneBook = new HashMap<>();
        
        phoneBook.put("张三", "138-0000-0001");
        phoneBook.put("李四", "138-0000-0002");
        phoneBook.put("王五", "138-0000-0003");
        
        // 查询电话号码 query phone number
        String name = "李四";
        if (phoneBook.containsKey(name)) {
            System.out.println(name + " 的电话: " + phoneBook.get(name));
        } else {
            System.out.println("找不到 " + name + " 的电话");
        }
        
        // 统计单词出现次数 count word frequency
        String text = "Java Java Python JavaScript Python Java";
        String[] words = text.split(" ");
        
        Map<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            // 如果单词已存在,次数+1;否则设为1
            if (wordCount.containsKey(word)) {
                wordCount.put(word, wordCount.get(word) + 1);
            } else {
                wordCount.put(word, 1);
            }
        }
        
        System.out.println("\n单词出现次数:");
        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + "次");
        }
    }
}
```

### 💪 练习题

1. 创建一个 Map 存储 5 个国家及其首都,然后查询"中国"的首都
2. 创建一个 Map 存储商品名称和价格,计算所有商品的总价
3. 给定一个字符串 `"hello world hello java"`,统计每个单词出现的次数(用 Map 实现)

### 📌 小结

- Map 存储**键值对(Key-Value)**,通过键快速查找值
- 使用 `put(key, value)` 添加或更新键值对
- 使用 `get(key)` 获取值,`remove(key)` 删除键值对
- 键必须唯一,重复的键会覆盖旧值
- 使用 `containsKey()` 检查键是否存在
- 遍历时可以用 `keySet()`、`values()` 或 `entrySet()`
- HashMap 是最常用的 Map 实现

---

## 🎯 集合选择指南

面对这么多集合类型,你可能会问:"我该用哪一个?"下面是一个简单的选择指南:

| 需求 | 使用集合 | 原因 |
|------|---------|------|
| 固定数量的数据 | 数组 Array | 性能最好,访问速度快 |
| 可变数量的列表,需要按顺序存储 | ArrayList | 可以动态增删,支持索引访问 |
| 需要自动去重 | HashSet | 不允许重复元素 |
| 需要去重且保持顺序 | LinkedHashSet | 去重 + 保持插入顺序 |
| 需要建立对应关系(如:学号→姓名) | HashMap | 快速通过键查找值 |

::: tip 记忆技巧
- **List**(列表) → 有序,可重复,像购物清单
- **Set**(集) → 无序,不重复,像邮票收藏
- **Map**(映射) → 键值对,像字典
:::

## 🔍 常见错误和解决方案

### 错误 1: 数组越界

```java
int[] numbers = new int[3];
numbers[3] = 10; // ❌ 错误!索引范围是 0-2
```

**解决**: 记住数组索引从 0 开始,长度为 n 的数组,最大索引是 n-1。

### 错误 2: ArrayList 直接存储 int

```java
ArrayList<int> numbers = new ArrayList<>(); // ❌ 编译错误!
```

**解决**: 使用包装类 `ArrayList<Integer>`。

### 错误 3: 遍历时修改集合

```java
ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");

for (String item : list) {
    list.remove(item); // ❌ 可能抛出 ConcurrentModificationException
}
```

**解决**: 使用迭代器(Iterator)或创建副本后再删除。

---

恭喜你!现在你已经掌握了 Java 中最常用的集合类型。这些集合是实际开发中最常用的工具,几乎每个程序都会用到它们。

记住:选择合适的集合类型能让你的代码更高效、更易读。当你不确定用哪个时,ArrayList 和 HashMap 是最安全的选择,它们能应对大部分场景!