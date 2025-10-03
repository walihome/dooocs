---
title: 数组
category: php
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # 数组

## 什么是数组(Array)

数组是一个可以存储多个值的容器。想象一下,你有一个收纳盒,可以按顺序放入多个物品,每个物品都有一个位置编号。

```php
<?php
// 创建一个存储水果的数组
$fruits = ["apple", "banana", "orange"];

// 创建一个存储数字的数组
$numbers = [10, 20, 30, 40];

// 创建一个空数组
$empty = [];
?>
```

::: tip 提示
数组的位置编号从 0 开始,第一个元素的位置是 0,第二个是 1,以此类推。
:::

## 创建数组的方式

### 方式一:使用方括号[]

```php{3-4}
<?php
// 直接列出所有元素
$colors = ["red", "green", "blue"];
echo $colors[0];  // 输出: red
?>
```

### 方式二:使用array()函数

```php{3-4}
<?php
// 使用 array() 函数创建
$colors = array("red", "green", "blue");
echo $colors[1];  // 输出: green
?>
```

::: tip 提示
推荐使用方括号 `[]`,写起来更简洁。
:::

## 读取数组元素

通过位置编号(索引 Index)来获取数组中的值:

```php{4-6}
<?php
$fruits = ["apple", "banana", "orange", "grape"];

echo $fruits[0];  // 输出: apple
echo $fruits[2];  // 输出: orange
echo $fruits[3];  // 输出: grape
?>
```

**运行结果:**
```
applebananaorangegrape
```

::: warning 注意
如果访问不存在的位置,比如 `$fruits[10]`,会出现错误提示。
:::

## 修改数组元素

通过位置编号给数组元素重新赋值:

```php{4,7}
<?php
$fruits = ["apple", "banana", "orange"];

$fruits[1] = "mango";  // 把第2个位置的值改为 mango

echo $fruits[0];  // 输出: apple
echo $fruits[1];  // 输出: mango
?>
```

## 添加新元素

### 方式一:指定位置添加

```php{4}
<?php
$fruits = ["apple", "banana"];

$fruits[2] = "orange";  // 在位置2添加新元素
echo $fruits[2];  // 输出: orange
?>
```

### 方式二:添加到末尾

```php{4-5}
<?php
$fruits = ["apple", "banana"];

$fruits[] = "orange";  // 自动添加到末尾
$fruits[] = "grape";   // 再添加一个到末尾

echo $fruits[2];  // 输出: orange
echo $fruits[3];  // 输出: grape
?>
```

## 查看数组的所有内容

使用 `print_r()` 函数可以查看数组的完整结构:

```php{4}
<?php
$fruits = ["apple", "banana", "orange"];

print_r($fruits);
?>
```

**运行结果:**
```
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
)
```

::: tip 提示
`print_r()` 主要用于调试,帮助你了解数组里有什么内容。
:::

## 完整实践示例

```php{3-4,7,10,13-14}
<?php
// 创建一个班级学生名单
$students = ["张三", "李四", "王五"];
print_r($students);

// 读取第一个学生的名字
echo $students[0];  // 输出: 张三

// 修改第二个学生的名字
$students[1] = "李明";

// 添加新学生
$students[] = "赵六";
$students[] = "钱七";

// 查看修改后的名单
print_r($students);
?>
```

**运行结果:**
```
Array
(
    [0] => 张三
    [1] => 李四
    [2] => 王五
)
张三
Array
(
    [0] => 张三
    [1] => 李明
    [2] => 王五
    [3] => 赵六
    [4] => 钱七
)
```

## 💪 练习题

### 练习1:创建并修改数组
创建一个包含3种商品名称的数组,然后修改第2个商品的名称,最后添加一个新商品。

<details>
<summary>点击查看答案</summary>

```php
<?php
// 创建商品数组
$products = ["手机", "电脑", "平板"];

// 修改第2个商品
$products[1] = "笔记本电脑";

// 添加新商品
$products[] = "耳机";

// 查看结果
print_r($products);
?>
```

</details>

### 练习2:读取指定位置的值
创建一个包含5个数字的数组,分别输出第1个、第3个和第5个数字。

<details>
<summary>点击查看答案</summary>

```php
<?php
$numbers = [100, 200, 300, 400, 500];

echo $numbers[0];  // 输出: 100
echo $numbers[2];  // 输出: 300
echo $numbers[4];  // 输出: 500
?>
```

</details>

## 📌 小结

- 数组使用 `[]` 创建,可以存储多个值
- 数组的位置编号从 0 开始
- 使用 `$数组名[位置]` 读取或修改元素
- 使用 `$数组名[] = 值` 可以添加新元素到末尾
- `print_r()` 可以查看数组的完整内容