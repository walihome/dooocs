---
title: 开发环境搭建
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

你有没有想过这样的问题:当你需要存储多个学生的成绩时,用数组可以做到;但如果你需要快速查找某个学生的成绩,或者确保学生名单里没有重复的名字,数组就显得力不从心了。这就是为什么 Java 提供了更强大的**集合(Collection)**工具。

在这一章,你将学习三种最常用的数据存储方式:数组(Array)、Set 和 Map。它们各有特点,适用于不同的场景。

---

## 数组(Array)

### 💡 概念讲解

想象你有一排储物柜,每个柜子都有编号(0、1、2、3...),每个柜子只能放一种类型的物品(比如都放书,或者都放鞋)。**数组(Array)**就是这样一个固定大小、有序的容器。

**数组的特点:**
- **固定长度**:创建时就确定大小,之后不能改变
- **类型统一**:只能存储同一种类型的数据
- **通过索引访问**:使用编号(索引 Index)快速获取元素
- **索引从 0 开始**:第一个元素的编号是 0,第二个是 1,以此类推

**什么时候用数组?**
- 你事先知道要存储多少个数据
- 需要通过位置快速访问某个元素
- 数据量不会频繁变化

### 📝 代码示例

#### 示例 1: 创建和使用数组

```java
public class ArrayExample {
    public static void main(String[] args) {
        // 方式1: 声明并指定大小 declare array with size
        int[] scores = new int[5]; // 创建一个可以存储5个整数的数组
        
        // 给数组赋值 assign values to array
        scores[0] = 85;  // 第一个学生的分数
        scores[1] = 92;
        scores[2] = 78;
        scores[3] = 95;
        scores[4] = 88;
        
        // 访问数组元素 access array element
        System.out.println("第一个学生的分数: " + scores[0]);
        System.out.println("第三个学生的分数: " + scores[2]);
        
        // 方式2: 创建时直接初始化 initialize array with values
        String[] names = {"张三", "李四", "王五", "赵六"};
        
        // 获取数组长度 get array length
        System.out.println("学生总数: " + names.length);
        
        // 遍历数组 traverse array
        System.out.println("\n所有学生名单:");
        for (int i = 0; i < names.length; i++) {
            System.out.println("学生 " + (i + 1) + ": " + names[i]);
        }
    }
}
```

#### 示例 2: 使用增强型 for 循环

```java
public class ArrayLoop {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        // 增强型 for 循环(for-each loop)
        // 读作: "对于 numbers 中的每一个 number"
        System.out.println("使用 for-each 循环:");
        for (int number : numbers) {
            System.out.println(number);
        }
        
        // 计算数组元素的总和 calculate sum
        int sum = 0;
        for (int number : numbers) {
            sum += number;  // sum = sum + number
        }
        System.out.println("总和: " + sum);
        System.out.println("平均值: " + (sum / numbers.length));
    }
}
```

::: warning 常见错误
**数组越界(ArrayIndexOutOfBoundsException)**
```java
int[] arr = {1, 2, 3};
System.out.println(arr[3]); // 错误! 数组只有索引 0, 1, 2
```
数组的最大索引是 `length - 1`,访问不存在的索引会导致程序崩溃。
:::

### ✅ 验证方法

将上面的代码保存为 `ArrayExample.java`,运行后你应该看到:

```
第一个学生的分数: 85
第三个学生的分数: 78
学生总数: 4

所有学生名单:
学生 1: 张三
学生 2: 李四
学生 3: 王五
学生 4: 赵六
```

### 💪 练习题

1. **基础练习**: 创建一个包含 7 个整数的数组,存储一周的气温,然后计算并输出平均气温。

2. **进阶练习**: 创建一个字符串数组存储 5 个城市名称,使用循环找出名字最长的城市。

3. **挑战练习**: 编写代码将数组 `{5, 2, 8, 1, 9}` 中的元素倒序输出(不创建新数组)。

### 📌 小结

- 数组是**固定长度**的数据容器
- 索引从 **0** 开始,最大索引是 `length - 1`
- 使用 `数组名[索引]` 访问元素
- `for-each` 循环适合遍历整个数组
- 数组创建后大小不可改变

---

## Set 集合

### 💡 概念讲解

还记得学校班级的学号吗?每个学生的学号都是唯一的,不会有两个学生的学号相同。**Set**就像一个自动去重的名单,它会确保里面的每个元素都是独一无二的。

**Set 的特点:**
- **元素唯一**:自动忽略重复的元素
- **无序**:不保证元素的存储顺序(HashSet)
- **大小可变**:可以随时添加或删除元素
- **不能通过索引访问**:没有像数组那样的 `[0]、[1]` 访问方式

**什么时候用 Set?**
- 需要确保数据不重复(如用户名、身份证号)
- 不关心元素的顺序
- 需要快速判断某个元素是否存在

::: tip 提示
Java 中最常用的 Set 实现是 **HashSet**。如果你需要元素按顺序排列,可以使用 **TreeSet**(会自动排序)。
:::

### 📝 代码示例

#### 示例 1: HashSet 基本用法

```java
import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        // 创建一个 Set create a HashSet
        Set<String> fruits = new HashSet<>();
        
        // 添加元素 add elements
        fruits.add("苹果");
        fruits.add("香蕉");
        fruits.add("橙子");
        fruits.add("苹果");  // 重复元素,不会被添加
        
        // 输出 Set 的大小 print size
        System.out.println("水果种类数量: " + fruits.size()); // 输出 3,不是 4
        
        // 检查元素是否存在 check if element exists
        if (fruits.contains("苹果")) {
            System.out.println("有苹果!");
        }
        
        // 遍历 Set traverse Set
        System.out.println("\n所有水果:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        // 删除元素 remove element
        fruits.remove("香蕉");
        System.out.println("\n删除香蕉后的数量: " + fruits.size());
    }
}
```

#### 示例 2: Set 的实际应用 - 去重

```java
import java.util.HashSet;
import java.util.Set;
import java.util.Arrays;

public class SetRemoveDuplicate {
    public static void main(String[] args) {
        // 原始数据包含重复 original data with duplicates
        String[] names = {"张三", "李四", "张三", "王五", "李四", "赵六"};
        
        System.out.println("原始数据: " + Arrays.toString(names));
        
        // 使用 Set 去重 remove duplicates using Set
        Set<String> uniqueNames = new HashSet<>();
        for (String name : names) {
            uniqueNames.add(name);
        }
        
        System.out.println("\n去重后的结果:");
        for (String name : uniqueNames) {
            System.out.println(name);
        }
        
        System.out.println("\n原始数量: " + names.length);
        System.out.println("去重后数量: " + uniqueNames.size());
    }
}
```

::: warning 注意
Set 不保证元素的顺序!每次运行程序,输出的顺序可能不同。如果需要保持插入顺序,使用 **LinkedHashSet**。
:::

### ✅ 验证方法

运行 `SetExample.java`,你应该看到类似这样的输出(顺序可能不同):

```
水果种类数量: 3
有苹果!

所有水果:
- 橙子
- 苹果
- 香蕉

删除香蕉后的数量: 2
```

注意"苹果"虽然添加了两次,但 Set 中只有一个。

### 💪 练习题

1. **基础练习**: 创建一个 HashSet 存储 10 个整数(包括一些重复的),然后输出实际存储的元素个数。

2. **进阶练习**: 编写代码判断两个 Set 是否有共同元素,输出所有共同的元素。

3. **挑战练习**: 创建一个程序,输入一段文字,统计其中有多少个不同的单词(提示:先用 `split()` 分割字符串)。

### 📌 小结

- **Set** 自动确保元素唯一性
- **HashSet** 最常用,元素无序
- 使用 `add()` 添加元素,`remove()` 删除元素
- 使用 `contains()` 检查元素是否存在
- Set 适合需要**去重**的场景

---

## Map 集合

### 💡 概念讲解

你有没有用过字典?你查"apple"这个单词,字典会告诉你它的意思是"苹果"。**Map**就像一本字典,它存储的是**键值对(Key-Value Pair)**,每个"键(Key)"对应一个"值(Value)"。

**Map 的特点:**
- **键值对存储**:数据以 `key → value` 的形式存储
- **键唯一**:每个键只能出现一次(就像字典里不会有两个"apple"词条)
- **值可重复**:不同的键可以对应相同的值
- **通过键查找值**:类似数组的索引,但更灵活(键可以是字符串、对象等)

**什么时候用 Map?**
- 需要通过"标识"快速查找数据(如学号→学生信息)
- 数据有明确的对应关系(如单词→释义、身份证号→姓名)
- 需要统计或分组数据

::: tip 提示
Java 中最常用的 Map 实现是 **HashMap**。如果需要键按顺序排列,使用 **TreeMap**。
:::

### 📝 代码示例

#### 示例 1: HashMap 基本用法

```java
import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        // 创建 Map: 学号 → 姓名 create HashMap: student ID → name
        Map<String, String> students = new HashMap<>();
        
        // 添加键值对 add key-value pairs
        students.put("001", "张三");
        students.put("002", "李四");
        students.put("003", "王五");
        
        // 通过键获取值 get value by key
        String name = students.get("002");
        System.out.println("学号 002 的学生是: " + name);
        
        // 检查键是否存在 check if key exists
        if (students.containsKey("001")) {
            System.out.println("找到学号 001");
        }
        
        // 检查值是否存在 check if value exists
        if (students.containsValue("王五")) {
            System.out.println("班上有学生叫王五");
        }
        
        // 获取 Map 的大小 get size
        System.out.println("\n学生总数: " + students.size());
        
        // 遍历 Map traverse Map
        System.out.println("\n所有学生:");
        for (String id : students.keySet()) {  // keySet() 获取所有的键
            System.out.println("学号: " + id + ", 姓名: " + students.get(id));
        }
    }
}
```

#### 示例 2: Map 的实际应用 - 统计单词出现次数

```java
import java.util.HashMap;
import java.util.Map;

public class WordCount {
    public static void main(String[] args) {
        String text = "apple banana apple orange banana apple";
        String[] words = text.split(" ");  // 按空格分割字符串 split by space
        
        // 创建 Map 存储: 单词 → 出现次数 word → count
        Map<String, Integer> wordCount = new HashMap<>();
        
        // 统计每个单词的出现次数 count word frequency
        for (String word : words) {
            if (wordCount.containsKey(word)) {
                // 如果单词已存在,次数加1 if word exists, increment count
                int count = wordCount.get(word);
                wordCount.put(word, count + 1);
            } else {
                // 如果单词第一次出现,设置为1 if first occurrence, set to 1
                wordCount.put(word, 1);
            }
        }
        
        // 输出统计结果 print results
        System.out.println("单词出现次数统计:");
        for (String word : wordCount.keySet()) {
            System.out.println(word + ": " + wordCount.get(word) + " 次");
        }
    }
}
```

#### 示例 3: 更简洁的统计方法

```java
import java.util.HashMap;
import java.util.Map;

public class WordCountSimple {
    public static void main(String[] args) {
        String text = "java is fun java is powerful";
        String[] words = text.split(" ");
        
        Map<String, Integer> wordCount = new HashMap<>();
        
        for (String word : words) {
            // getOrDefault: 如果键不存在返回默认值0,否则返回当前值
            // get current count or 0 if not exists, then add 1
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("统计结果: " + wordCount);
    }
}
```

::: tip 提示
`getOrDefault()` 方法很实用:
- 如果键存在,返回对应的值
- 如果键不存在,返回你指定的默认值(这里是 0)

这样可以避免写 if-else 判断,代码更简洁。
:::

### ✅ 验证方法

运行 `WordCount.java`,你应该看到:

```
单词出现次数统计:
orange: 1 次
banana: 2 次
apple: 3 次
```

注意:HashMap 的输出顺序可能与添加顺序不同。

### 💪 练习题

1. **基础练习**: 创建一个 Map 存储 3 个城市及其人口数(如"北京" → 2154),然后查询并输出某个城市的人口。

2. **进阶练习**: 编写程序,输入一串数字(如"1 2 3 2 1 4 1"),统计每个数字出现的次数。

3. **挑战练习**: 创建一个"学生成绩管理系统":
   - 使用 Map 存储学生姓名和成绩
   - 实现添加学生、查询成绩、计算平均分的功能

### 📌 小结

- **Map** 存储**键值对(Key-Value)**关系
- **HashMap** 最常用,键不能重复,值可以重复
- 使用 `put(key, value)` 添加数据
- 使用 `get(key)` 获取数据
- `keySet()` 获取所有的键,用于遍历 Map
- `getOrDefault()` 可以简化代码,避免空值判断

---

## 三种集合的对比

你现在学会了三种数据存储方式,什么时候用哪种呢?

| 特性 | 数组(Array) | Set | Map |
|------|------------|-----|-----|
| **大小** | 固定不变 | 可变 | 可变 |
| **重复元素** | 允许 | 不允许 | 键不重复,值可重复 |
| **访问方式** | 通过索引(0, 1, 2...) | 遍历 | 通过键查找值 |
| **顺序** | 有序 | 无序(HashSet) | 无序(HashMap) |
| **使用场景** | 固定数量数据 | 去重、成员检查 | 键值对关系、查找 |

**快速决策:**
- 数据量固定,需要按位置访问 → **数组**
- 需要确保数据不重复 → **Set**
- 需要通过某个标识快速查找数据 → **Map**

---

## 实战综合练习

现在用你学到的知识完成这个小项目:

**任务**: 创建一个简单的"课程选修系统"
- 使用 **数组** 存储可选课程列表(固定 5 门课)
- 使用 **Set** 存储某个学生已选的课程(不能重复选)
- 使用 **Map** 存储课程代码和课程名称的对应关系

```java
import java.util.*;

public class CourseSystem {
    public static void main(String[] args) {
        // 1. 可选课程列表(数组) available courses (array)
        String[] allCourses = {"JAVA101", "PYTHON101", "WEB101", "DB101", "AI101"};
        
        // 2. 学生已选课程(Set) selected courses (Set)
        Set<String> selectedCourses = new HashSet<>();
        
        // 3. 课程代码→课程名称(Map) course code → course name (Map)
        Map<String, String> courseNames = new HashMap<>();
        courseNames.put("JAVA101", "Java 编程基础");
        courseNames.put("PYTHON101", "Python 入门");
        courseNames.put("WEB101", "Web 开发");
        courseNames.put("DB101", "数据库原理");
        courseNames.put("AI101", "人工智能导论");
        
        // 模拟选课 simulate course selection
        selectedCourses.add("JAVA101");
        selectedCourses.add("WEB101");
        selectedCourses.add("JAVA101");  // 重复选择,会被忽略
        
        // 输出结果 print results
        System.out.println("=== 可选课程列表 ===");
        for (String code : allCourses) {
            System.out.println(code + " - " + courseNames.get(code));
        }
        
        System.out.println("\n=== 已选课程 ===");
        System.out.println("已选课程数: " + selectedCourses.size());
        for (String code : selectedCourses) {
            System.out.println(code + " - " + courseNames.get(code));
        }
    }
}
```

尝试在这个基础上添加新功能:
- 添加退课功能(从 Set 中移除)
- 检查是否选满(Set 大小是否达到上限)
- 列出还未选择的课程

---

恭喜你完成了集合这一章!你现在掌握了 Java 中三种最重要的数据存储方式。记住:
- **数组**适合固定大小的数据
- **Set**用于去重和成员检查
- **Map**用于建立键值对应关系

在实际编程中,你会发现 Set 和 Map 的使用频率甚至超过数组,因为它们更灵活强大。继续练习,尝试在不同场景下选择合适的数据结构!