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

## 💡 什么是数组(Array)

数组是一个**容器(Container)**,可以存储多个**相同类型(Same Type)**的数据。

想象一下:
- 你有 5 个苹果,需要一个篮子来装 → 这个篮子就是数组
- 你想记录班级 30 个同学的成绩 → 用数组存储这 30 个数字

数组的三个关键特点:
- **固定长度**:创建时就确定能装多少个元素
- **相同类型**:只能装同一种数据(都是整数或都是字符串)
- **有序排列**:每个位置有编号,从 0 开始

## 创建数组

### 📝 基本语法

创建数组需要三步:声明 → 分配空间 → 赋值

```java{1,4,7}
// 方式1:分步创建
int[] scores;              // 声明一个整数数组
scores = new int[3];       // 分配空间,可以装3个整数
scores[0] = 85;            // 给第1个位置赋值

// 方式2:创建时直接赋值
int[] ages = {18, 20, 22}; // 一步完成
```

::: tip 提示
- `int[]` 表示"整数数组类型"
- `new int[3]` 表示创建一个能装 3 个整数的数组
- 大括号 `{}` 方式更简洁,适合已知所有数据的情况
:::

### 💻 完整示例

```java{5-6,9-10}
public class ArrayDemo {
    public static void main(String[] args) {
        
        // 创建一个装3个学生年龄的数组
        int[] ages = new int[3];
        System.out.println("数组创建成功,长度是:" + ages.length);
        
        // 创建时直接填入数据
        String[] names = {"张三", "李四", "王五"};
        System.out.println("学生姓名数组创建成功,长度是:" + names.length);
    }
}
```

**运行结果:**
```
数组创建成功,长度是:3
学生姓名数组创建成功,长度是:3
```

::: warning 注意
数组创建后长度不能改变。如果 `new int[3]`,就永远只能装 3 个整数。
:::

## 数组的读取

### 💡 索引(Index)概念

数组中每个位置都有一个编号,这个编号叫**索引(Index)**。

**关键规则:索引从 0 开始!**

```
数组: ["苹果", "香蕉", "橙子"]
索引:    0       1       2
```

### 📝 读取语法

使用 `数组名[索引]` 来读取指定位置的元素:

```java{4-6}
public class ReadArray {
    public static void main(String[] args) {
        String[] fruits = {"苹果", "香蕉", "橙子"};
        
        System.out.println("第1个水果是:" + fruits[0]);  // 苹果
        System.out.println("第2个水果是:" + fruits[1]);  // 香蕉
        System.out.println("第3个水果是:" + fruits[2]);  // 橙子
    }
}
```

**运行结果:**
```
第1个水果是:苹果
第2个水果是:香蕉
第3个水果是:橙子
```

::: danger 警告
索引不能超出范围! 如果数组长度是 3,索引只能是 0、1、2。使用 `fruits[3]` 会报错。
:::

## 数组的修改

### 📝 修改语法

使用 `数组名[索引] = 新值` 来修改指定位置的元素:

```java{6,9}
public class ModifyArray {
    public static void main(String[] args) {
        int[] scores = {85, 90, 78};
        
        System.out.println("修改前,第1个成绩:" + scores[0]);
        scores[0] = 95;  // 把第1个成绩改为95
        System.out.println("修改后,第1个成绩:" + scores[0]);
        
        scores[2] = scores[2] + 10;  // 把第3个成绩加10分
        System.out.println("加分后,第3个成绩:" + scores[2]);
    }
}
```

**运行结果:**
```
修改前,第1个成绩:85
修改后,第1个成绩:95
加分后,第3个成绩:88
```

## 遍历数组

### 💡 什么是遍历(Traverse)

遍历就是**依次访问数组中的每一个元素**。

### 📝 使用循环遍历

```java{5-7}
public class TraverseArray {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("索引" + i + "的值是:" + numbers[i]);
        }
    }
}
```

**运行结果:**
```
索引0的值是:10
索引1的值是:20
索引2的值是:30
索引3的值是:40
索引4的值是:50
```

::: tip 提示
- `numbers.length` 获取数组长度
- `i < numbers.length` 确保索引不会越界
- 循环变量 `i` 正好可以当作索引使用
:::

## 💪 练习题

### 练习 1:创建并修改数组
创建一个装 4 个整数的数组,初始值为 `{1, 2, 3, 4}`,然后把每个元素都乘以 2,最后打印所有元素。

::: details 查看答案
```java
public class Exercise1 {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4};
        
        // 每个元素乘以2
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] * 2;
        }
        
        // 打印所有元素
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
```
:::

### 练习 2:计算数组总和
创建一个数组 `{10, 20, 30, 40, 50}`,计算所有元素的总和并打印。

::: details 查看答案
```java
public class Exercise2 {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int sum = 0;
        
        for (int i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }
        
        System.out.println("总和是:" + sum);
    }
}
```
:::

## 📌 小结

1. **数组是容器**:用于存储多个相同类型的数据,长度固定
2. **索引从 0 开始**:`数组名[0]` 访问第 1 个元素,`数组名[1]` 访问第 2 个元素
3. **读取和修改**:使用 `数组名[索引]` 来读取或修改指定位置的元素