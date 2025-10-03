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

当你需要存储多个数据时，数组的长度固定，使用起来不够灵活。Java 提供了集合框架，让你可以更方便地管理数据。集合主要分为三类：

- **List(列表)**：有序、可重复，像一个可变长度的数组
- **Set(集合)**：无序、不可重复，自动去重
- **Map(映射)**：存储键值对，通过 key 快速查找 value

## List - 可变长度的数组

### 💡 概念说明

**ArrayList** 是最常用的 List，它可以动态增长，不需要事先指定大小。

### 📝 代码示例

```java{9,12,15,18}
import java.util.ArrayList;

public class ListExample {
    public static void main(String[] args) {
        // 创建一个存储字符串的 ArrayList
        ArrayList<String> fruits = new ArrayList<>();
        
        // 添加元素
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("orange");
        fruits.add("banana");  // 可以添加重复元素
        
        // 获取元素
        System.out.println(fruits.get(0));  // apple
        
        // 查看大小
        System.out.println(fruits.size());  // 4
        
        // 遍历所有元素
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
```

**运行结果：**
```
apple
4
apple
banana
orange
banana
```

::: tip 提示
`<String>` 表示这个 ArrayList 只能存储字符串类型的数据。你也可以使用 `<Integer>` 存储整数。
:::

### 💪 练习题

1. 创建一个 ArrayList 存储 5 个城市名称，并打印出来
2. 创建一个存储整数的 ArrayList，添加 1-5 这五个数字，然后删除第 3 个元素（提示：使用 `remove(2)`）
3. 创建一个学生姓名列表，判断列表中是否包含 "张三"（提示：使用 `contains()` 方法）

## Set - 自动去重的集合

### 💡 概念说明

**HashSet** 会自动去除重复元素，当你需要确保数据不重复时使用它。

### 📝 代码示例

```java{7,10-11,14,17}
import java.util.HashSet;

public class SetExample {
    public static void main(String[] args) {
        HashSet<String> emails = new HashSet<>();
        
        emails.add("user1@example.com");
        emails.add("user2@example.com");
        emails.add("user1@example.com");  // 重复元素不会被添加
        emails.add("user1@example.com");  // 重复元素不会被添加
        
        // 只会输出 2，重复的被自动去除了
        System.out.println("邮箱数量: " + emails.size());
        
        // 检查是否存在
        if (emails.contains("user1@example.com")) {
            System.out.println("该邮箱已注册");
        }
        
        // 遍历
        for (String email : emails) {
            System.out.println(email);
        }
    }
}
```

**运行结果：**
```
邮箱数量: 2
该邮箱已注册
user1@example.com
user2@example.com
```

::: warning 注意
HashSet 中的元素是无序的，输出顺序可能和添加顺序不一致。
:::

### 💪 练习题

1. 创建一个 HashSet 存储学生 ID，尝试添加重复的 ID 并观察结果
2. 创建一个整数 HashSet，添加 1, 2, 3, 2, 1，打印大小和内容

## Map - 键值对存储

### 💡 概念说明

**HashMap** 存储键值对(key-value)，通过 key 可以快速查找对应的 value。就像字典一样，通过单词(key)查找释义(value)。

### 📝 代码示例

```java{7,10,13,16,19}
import java.util.HashMap;

public class MapExample {
    public static void main(String[] args) {
        // 创建一个存储学生姓名和分数的 HashMap
        HashMap<String, Integer> scores = new HashMap<>();
        
        // 添加键值对
        scores.put("张三", 85);
        scores.put("李四", 92);
        scores.put("王五", 78);
        
        // 通过 key 获取 value
        System.out.println("张三的分数: " + scores.get("张三"));
        
        // 修改分数（使用相同的 key）
        scores.put("张三", 90);
        System.out.println("张三的新分数: " + scores.get("张三"));
        
        // 遍历所有键值对
        for (String name : scores.keySet()) {
            System.out.println(name + ": " + scores.get(name) + "分");
        }
    }
}
```

**运行结果：**
```
张三的分数: 85
张三的新分数: 90
张三: 90分
李四: 92分
王五: 78分
```

### 📝 常用操作示例

```java{5,8,11,14}
HashMap<String, Integer> map = new HashMap<>();

map.put("apple", 5);
// 检查是否包含某个 key
System.out.println(map.containsKey("apple"));  // true

// 检查是否包含某个 value
System.out.println(map.containsValue(5));  // true

// 获取 Map 大小
System.out.println(map.size());  // 1

// 删除键值对
map.remove("apple");
```

::: tip 提示
Map 中的 key 不能重复，如果使用相同的 key 再次 put，会覆盖原来的 value。
:::

### 💪 练习题

1. 创建一个 HashMap 存储 3 个国家和它们的首都，然后打印所有国家名称
2. 创建一个商品价格表(商品名-价格)，添加 5 个商品，计算所有商品的总价格
3. 创建一个电话簿(姓名-电话号码)，查询某个人的电话，如果不存在则提示"未找到"(提示：`get()` 方法在 key 不存在时返回 `null`)

## 📌 小结

- **ArrayList**：当你需要按顺序存储数据，并且数量会变化时使用
- **HashSet**：当你需要确保数据不重复时使用  
- **HashMap**：当你需要通过一个值(key)快速查找另一个值(value)时使用