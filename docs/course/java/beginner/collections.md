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

在编程世界里,你经常需要管理一组数据。想象你在整理书架:有时你需要按顺序排列书籍(数组 Array),有时你只关心拥有哪些书而不在乎顺序(集合 Set),有时你需要记录每本书的借阅者(映射 Map)。Java 提供了这三种核心的数据管理工具。

## 数组 (Array)

### 💡 概念讲解

**数组(Array)** 就像一个固定长度的收纳盒,每个格子都有编号(从 0 开始)。一旦创建,盒子的格子数量就不能改变。

**为什么需要数组?**
- 当你需要存储多个相同类型的数据时(比如 5 个学生的成绩)
- 当你需要通过编号快速访问数据时

**什么时候用数组?**
- 数据数量固定且已知
- 需要频繁通过位置访问元素

::: tip 提示
数组的索引(Index)从 0 开始!第一个元素是 `array[0]`,第二个是 `array[1]`。这是新手最容易搞混的地方。
:::

### 📝 代码示例

```java
public class ArrayExample {
    public static void main(String[] args) {
        // 方式1: 声明并指定大小 declare and specify size
        int[] scores = new int[5];  // 创建一个可以存放5个整数的数组
        
        // 给数组赋值 assign values
        scores[0] = 85;  // 第1个学生的成绩
        scores[1] = 92;
        scores[2] = 78;
        scores[3] = 95;
        scores[4] = 88;
        
        // 方式2: 声明并初始化 declare and initialize
        String[] names = {"Alice", "Bob", "Charlie", "David", "Eve"};
        
        // 访问数组元素 access array elements
        System.out.println("第一个学生: " + names[0]);  // 输出: Alice
        System.out.println("第一个学生成绩: " + scores[0]);  // 输出: 85
        
        // 获取数组长度 get array length
        System.out.println("学生总数: " + names.length);  // 输出: 5
        
        // 遍历数组 traverse array - 使用for循环
        System.out.println("\n所有学生成绩:");
        for (int i = 0; i < scores.length; i++) {
            System.out.println(names[i] + ": " + scores[i] + "分");
        }
        
        // 增强型for循环 enhanced for loop (更简洁)
        System.out.println("\n使用增强型for循环:");
        for (String name : names) {
            System.out.println("学生: " + name);
        }
    }
}
```

### ✅ 验证方法

1. 将上述代码保存为 `ArrayExample.java`
2. 在命令行中运行:
```bash
javac ArrayExample.java
java ArrayExample
```

**成功的运行结果:**
```
第一个学生: Alice
第一个学生成绩: 85
学生总数: 5

所有学生成绩:
Alice: 85分
Bob: 92分
Charlie: 78分
David: 95分
Eve: 88分

使用增强型for循环:
学生: Alice
学生: Bob
学生: Charlie
学生: David
学生: Eve
```

::: warning 注意
常见错误 - 数组越界(ArrayIndexOutOfBoundsException):
```java
int[] numbers = new int[3];
numbers[3] = 10;  // 错误!数组只有0,1,2三个位置
```
:::

### 💪 练习题

1. **基础练习**: 创建一个包含 7 天温度的数组,计算平均温度
2. **进阶练习**: 创建一个数组,找出其中的最大值和最小值
3. **挑战练习**: 创建两个数组,将它们合并成一个新数组

<details>
<summary>点击查看练习1参考答案</summary>

```java
public class TemperatureAverage {
    public static void main(String[] args) {
        double[] temperatures = {22.5, 24.0, 23.5, 25.0, 26.5, 24.5, 23.0};
        
        double sum = 0;
        for (double temp : temperatures) {
            sum += temp;  // 累加温度 accumulate temperature
        }
        
        double average = sum / temperatures.length;
        System.out.println("本周平均温度: " + average + "°C");
    }
}
```
</details>

## 集合 Set

### 💡 概念讲解

**集合(Set)** 就像一个不允许重复的收纳袋。你往里面放东西时,如果已经有相同的,就会被自动忽略。Set 不关心元素的顺序。

**为什么需要 Set?**
- 自动去除重复数据
- 快速判断某个元素是否存在

**什么时候用 Set?**
- 需要存储唯一值(比如用户ID、标签)
- 不关心元素的顺序
- 需要频繁检查元素是否存在

::: tip 提示
Java 中最常用的 Set 实现是 **HashSet**。它就像一个智能的无序收纳袋。
:::

### 📝 代码示例

```java
import java.util.HashSet;  // 导入HashSet类 import HashSet class
import java.util.Set;      // 导入Set接口 import Set interface

public class SetExample {
    public static void main(String[] args) {
        // 创建一个Set集合 create a Set collection
        Set<String> fruits = new HashSet<>();
        
        // 添加元素 add elements
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("orange");
        fruits.add("apple");  // 重复的元素不会被添加
        
        System.out.println("水果集合: " + fruits);  
        // 输出可能是: [banana, orange, apple] (顺序不确定)
        
        // 检查元素是否存在 check if element exists
        System.out.println("是否有苹果? " + fruits.contains("apple"));  // true
        System.out.println("是否有葡萄? " + fruits.contains("grape"));  // false
        
        // 获取集合大小 get size
        System.out.println("水果种类数: " + fruits.size());  // 3 (不是4!)
        
        // 删除元素 remove element
        fruits.remove("banana");
        System.out.println("删除香蕉后: " + fruits);
        
        // 遍历Set traverse Set
        System.out.println("\n遍历所有水果:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        // 实际应用: 去除重复的学号 remove duplicate student IDs
        Set<Integer> studentIds = new HashSet<>();
        studentIds.add(1001);
        studentIds.add(1002);
        studentIds.add(1001);  // 重复,不会添加
        studentIds.add(1003);
        
        System.out.println("\n学生总数: " + studentIds.size());  // 3
        System.out.println("学号列表: " + studentIds);
    }
}
```

### ✅ 验证方法

运行代码后,你应该看到:
```
水果集合: [banana, orange, apple]
是否有苹果? true
是否有葡萄? false
水果种类数: 3
删除香蕉后: [orange, apple]

遍历所有水果:
- orange
- apple

学生总数: 3
学号列表: [1001, 1002, 1003]
```

::: warning 注意
Set 中元素的输出顺序可能和你添加的顺序不一样!如果需要保持顺序,使用 **LinkedHashSet**。
:::

### 💪 练习题

1. **基础练习**: 创建一个 Set,存储 5 个城市名称(包含重复),观察结果
2. **进阶练习**: 给定一个字符串数组,使用 Set 找出其中有多少个不重复的单词
3. **挑战练习**: 创建两个 Set,找出它们的交集(共同元素)

<details>
<summary>点击查看练习2参考答案</summary>

```java
import java.util.HashSet;
import java.util.Set;

public class UniqueWords {
    public static void main(String[] args) {
        String[] words = {"hello", "world", "hello", "java", "world", "programming"};
        
        Set<String> uniqueWords = new HashSet<>();
        for (String word : words) {
            uniqueWords.add(word);  // 重复的会自动过滤
        }
        
        System.out.println("原始单词数: " + words.length);
        System.out.println("不重复单词数: " + uniqueWords.size());
        System.out.println("不重复单词: " + uniqueWords);
    }
}
```
</details>

## 映射 Map

### 💡 概念讲解

**映射(Map)** 就像一本字典,每个词(键 Key)都对应一个解释(值 Value)。通过词可以快速找到解释。

**为什么需要 Map?**
- 需要建立"一对一"的关系(学号 → 姓名,商品ID → 价格)
- 通过一个值快速查找另一个值

**什么时候用 Map?**
- 需要存储键值对(Key-Value Pair)
- 需要通过某个标识快速查找数据
- 需要统计次数(比如词频统计)

::: tip 提示
Java 中最常用的 Map 实现是 **HashMap**。键(Key)必须是唯一的,但值(Value)可以重复。
:::

### 📝 代码示例

```java
import java.util.HashMap;  // 导入HashMap类
import java.util.Map;      // 导入Map接口

public class MapExample {
    public static void main(String[] args) {
        // 创建一个Map集合 create a Map collection
        // <键的类型, 值的类型>
        Map<String, Integer> studentScores = new HashMap<>();
        
        // 添加键值对 add key-value pairs
        studentScores.put("Alice", 95);    // 键: Alice, 值: 95
        studentScores.put("Bob", 87);
        studentScores.put("Charlie", 92);
        studentScores.put("Alice", 98);    // 相同的键,值会被更新为98
        
        System.out.println("所有成绩: " + studentScores);
        
        // 获取值 get value by key
        int aliceScore = studentScores.get("Alice");
        System.out.println("Alice的成绩: " + aliceScore);  // 98
        
        // 检查键是否存在 check if key exists
        System.out.println("有Bob的成绩吗? " + studentScores.containsKey("Bob"));  // true
        System.out.println("有David的成绩吗? " + studentScores.containsKey("David"));  // false
        
        // 检查值是否存在 check if value exists
        System.out.println("有人得92分吗? " + studentScores.containsValue(92));  // true
        
        // 获取Map大小 get size
        System.out.println("学生人数: " + studentScores.size());  // 3
        
        // 删除键值对 remove key-value pair
        studentScores.remove("Bob");
        System.out.println("删除Bob后: " + studentScores);
        
        // 遍历Map - 方式1: 遍历键 traverse keys
        System.out.println("\n方式1 - 遍历键:");
        for (String name : studentScores.keySet()) {
            int score = studentScores.get(name);
            System.out.println(name + ": " + score + "分");
        }
        
        // 遍历Map - 方式2: 遍历键值对 traverse entries
        System.out.println("\n方式2 - 遍历键值对:");
        for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + "分");
        }
        
        // 实际应用: 统计单词出现次数 count word frequency
        String[] words = {"apple", "banana", "apple", "orange", "banana", "apple"};
        Map<String, Integer> wordCount = new HashMap<>();
        
        for (String word : words) {
            // getOrDefault: 如果键不存在,返回默认值0
            int count = wordCount.getOrDefault(word, 0);
            wordCount.put(word, count + 1);  // 次数+1
        }
        
        System.out.println("\n单词出现次数:");
        System.out.println(wordCount);
    }
}
```

### ✅ 验证方法

运行代码后,你应该看到:
```
所有成绩: {Alice=98, Bob=87, Charlie=92}
Alice的成绩: 98
有Bob的成绩吗? true
有David的成绩吗? false
有人得92分吗? true
学生人数: 3
删除Bob后: {Alice=98, Charlie=92}

方式1 - 遍历键:
Alice: 98分
Charlie: 92分

方式2 - 遍历键值对:
Alice: 98分
Charlie: 92分

单词出现次数:
{orange=1, banana=2, apple=3}
```

::: danger 警告
如果尝试获取不存在的键,`get()` 方法会返回 `null`,可能导致空指针异常(NullPointerException)!建议使用 `getOrDefault()` 或先用 `containsKey()` 检查。
:::

### 💪 练习题

1. **基础练习**: 创建一个 Map,存储 3 个国家及其首都,并打印所有信息
2. **进阶练习**: 创建一个商品价格表(商品名 → 价格),计算所有商品的总价值
3. **挑战练习**: 给定一个字符串,统计每个字符出现的次数

<details>
<summary>点击查看练习3参考答案</summary>

```java
import java.util.HashMap;
import java.util.Map;

public class CharacterCount {
    public static void main(String[] args) {
        String text = "hello world";
        Map<Character, Integer> charCount = new HashMap<>();
        
        // 遍历字符串中的每个字符 traverse each character
        for (char c : text.toCharArray()) {
            if (c != ' ') {  // 忽略空格 ignore spaces
                int count = charCount.getOrDefault(c, 0);
                charCount.put(c, count + 1);
            }
        }
        
        System.out.println("字符出现次数:");
        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            System.out.println("'" + entry.getKey() + "': " + entry.getValue() + "次");
        }
    }
}
```
</details>

## 📌 三种集合的对比

| 特性 | Array 数组 | Set 集合 | Map 映射 |
|------|-----------|---------|---------|
| **大小** | 固定 | 可变 | 可变 |
| **重复元素** | 允许 | 不允许 | 键不允许,值允许 |
| **顺序** | 有序(按索引) | 无序(HashSet) | 无序(HashMap) |
| **访问方式** | 通过索引 | 遍历 | 通过键 |
| **适用场景** | 数量固定的数据 | 去重、存在性判断 | 键值对关系 |

::: tip 最佳实践
**如何选择集合类型?**
- 需要通过位置访问 → 用 **Array**
- 只关心"有没有",不要重复 → 用 **Set**  
- 需要"通过A找到B" → 用 **Map**
:::

## 📌 小结

1. **数组(Array)** 是固定长度的容器,通过索引(从0开始)访问元素
2. **Set** 自动去除重复元素,适合存储唯一值
3. **Map** 存储键值对关系,通过键快速查找值
4. 所有集合都可以用增强型 for 循环遍历
5. 使用 `import` 语句导入需要的集合类

**关键术语回顾:**
- **索引(Index)**: 数组中元素的位置编号
- **键值对(Key-Value Pair)**: Map 中的数据组织形式
- **遍历(Traverse)**: 访问集合中的每个元素
- **去重(Remove Duplicates)**: 移除重复的元素