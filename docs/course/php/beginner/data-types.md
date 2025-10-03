---
title: 数据类型
category: php
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # 数据类型

## 💡 什么是数据类型

在PHP中,数据类型(Data Type)就是告诉计算机"这是什么样的数据"。就像你在超市购物时,苹果、矿泉水、笔记本是不同类型的商品,在编程中,数字、文字、真假也是不同类型的数据。

PHP中有几种基本数据类型:
- **整数(Integer)** - 完整的数字,如 1, 100, -5
- **浮点数(Float)** - 带小数点的数字,如 3.14, -0.5
- **字符串(String)** - 文字内容,如 "hello"
- **布尔值(Boolean)** - 只有真或假两个值

## 整数(Integer)

### 📝 代码示例

创建一个名为 `integer_demo.php` 的文件:

```php{3-6}
<?php
// 定义整数变量
$age = 25;
$temperature = -10;
$score = 0;
$population = 1000000;

// 输出整数
echo $age;          // 输出: 25
echo "\n";          // 换行
echo $temperature;  // 输出: -10
?>
```

**运行结果:**
```
25
-10
```

::: tip 提示
整数可以是正数、负数或零,但不能有小数点。
:::

### 💪 练习题

**练习1:** 创建三个变量,分别存储你的年龄、你家的楼层数、今天的温度(整数),然后输出它们。

<details>
<summary>点击查看答案</summary>

```php
<?php
$myAge = 18;
$floor = 5;
$todayTemperature = 22;

echo $myAge;
echo "\n";
echo $floor;
echo "\n";
echo $todayTemperature;
?>
```

</details>

## 浮点数(Float)

### 📝 代码示例

创建一个名为 `float_demo.php` 的文件:

```php{3-5}
<?php
// 定义浮点数变量
$price = 19.99;
$height = 1.75;
$pi = 3.14159;

// 输出浮点数
echo $price;   // 输出: 19.99
echo "\n";
echo $height;  // 输出: 1.75
?>
```

**运行结果:**
```
19.99
1.75
```

::: warning 注意
浮点数的小数点必须用英文句号(.)而不是逗号(,)。
:::

### 💪 练习题

**练习1:** 创建变量存储商品价格 99.5、你的身高(米)、圆周率 3.14,并输出。

<details>
<summary>点击查看答案</summary>

```php
<?php
$productPrice = 99.5;
$myHeight = 1.68;
$pi = 3.14;

echo $productPrice;
echo "\n";
echo $myHeight;
echo "\n";
echo $pi;
?>
```

</details>

## 字符串(String)

### 📝 代码示例

创建一个名为 `string_demo.php` 的文件:

```php{3-6}
<?php
// 定义字符串变量(使用双引号)
$name = "张三";
$greeting = "你好,世界!";
$email = "test@example.com";
$empty = "";  // 空字符串也是字符串

// 输出字符串
echo $name;      // 输出: 张三
echo "\n";
echo $greeting;  // 输出: 你好,世界!
echo "\n";

// 使用单引号
$city = '北京';
echo $city;      // 输出: 北京
?>
```

**运行结果:**
```
张三
你好,世界!
北京
```

::: tip 提示
字符串必须用引号包裹,可以用双引号 `"..."` 或单引号 `'...'`。
:::

### 💪 练习题

**练习1:** 创建变量存储你的姓名、你喜欢的一本书名、你的邮箱,并输出。

<details>
<summary>点击查看答案</summary>

```php
<?php
$myName = "李四";
$favoriteBook = "三体";
$myEmail = "lisi@example.com";

echo $myName;
echo "\n";
echo $favoriteBook;
echo "\n";
echo $myEmail;
?>
```

</details>

## 布尔值(Boolean)

### 📝 代码示例

创建一个名为 `boolean_demo.php` 的文件:

```php{3-5}
<?php
// 定义布尔值变量
$isStudent = true;   // 真
$hasLicense = false; // 假
$isAdult = true;

// 输出布尔值
echo $isStudent;     // 输出: 1 (true显示为1)
echo "\n";
echo $hasLicense;    // 输出: (false不显示内容)
echo "\n";

// 使用var_dump查看布尔值
var_dump($isStudent);  // 输出: bool(true)
var_dump($hasLicense); // 输出: bool(false)
?>
```

**运行结果:**
```
1

bool(true)
bool(false)
```

::: warning 注意
- `true` 和 `false` 不需要引号
- 直接 `echo` 布尔值时,`true` 显示为 `1`,`false` 不显示任何内容
- 使用 `var_dump()` 可以清楚看到布尔值
:::

### 💪 练习题

**练习1:** 创建三个布尔值变量:是否下雨(false)、是否是周末(true)、是否完成作业(true),用 `var_dump()` 输出。

<details>
<summary>点击查看答案</summary>

```php
<?php
$isRaining = false;
$isWeekend = true;
$homeworkDone = true;

var_dump($isRaining);
var_dump($isWeekend);
var_dump($homeworkDone);
?>
```

</details>

## 查看变量类型

### 📝 代码示例

```php{9-12}
<?php
// 定义不同类型的变量
$number = 100;
$price = 9.99;
$name = "Alice";
$isActive = true;

// 使用var_dump查看类型和值
var_dump($number);   // int(100)
var_dump($price);    // float(9.99)
var_dump($name);     // string(5) "Alice"
var_dump($isActive); // bool(true)
?>
```

**运行结果:**
```
int(100)
float(9.99)
string(5) "Alice"
bool(true)
```

## 📌 小结

- **整数(Integer)**: 没有小数点的数字,如 `25`, `-10`
- **浮点数(Float)**: 有小数点的数字,如 `19.99`, `3.14`
- **字符串(String)**: 用引号包裹的文字,如 `"hello"`, `'world'`
- **布尔值(Boolean)**: 只有 `true` 或 `false` 两个值
- 使用 `var_dump()` 可以查看变量的类型和值