---
title: 基本语法
category: php
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # 基本语法

## 变量(Variable)

💡 **概念说明**

变量就像一个贴了标签的盒子,用来存放数据。PHP中的变量都以 `$` 符号开头。

## 定义变量

### 📝 代码示例

```php{1,2,3,4}
<?php
$name = "张三";
$age = 25;
$price = 99.5;
$isStudent = true;
```

::: tip 提示
- 变量名必须以 `$` 开头
- 等号 `=` 表示"把右边的值放进左边的变量里"
- PHP会自动识别数据类型,不需要你声明
:::

### 💪 练习题

**练习1**: 创建三个变量,分别存储你的姓名、城市和喜欢的数字

<details>
<summary>点击查看答案</summary>

```php
<?php
$myName = "李四";
$myCity = "北京";
$luckyNumber = 8;
```

</details>

**练习2**: 创建一个变量存储商品价格,另一个变量存储数量

<details>
<summary>点击查看答案</summary>

```php
<?php
$productPrice = 29.9;
$quantity = 3;
```

</details>

## 输出变量

### 📝 代码示例

```php{3,4,5}
<?php
$fruit = "苹果";
echo $fruit;
echo "<br>";
echo "我喜欢吃" . $fruit;
```

**运行结果**:
```
苹果
我喜欢吃苹果
```

::: tip 提示
- `echo` 用于输出内容到页面
- `<br>` 是HTML换行标签
- 点号 `.` 用于连接文字和变量
:::

### 💪 练习题

定义变量 `$city = "上海"` 和 `$weather = "晴天"`,输出"上海今天是晴天"

<details>
<summary>点击查看答案</summary>

```php
<?php
$city = "上海";
$weather = "晴天";
echo $city . "今天是" . $weather;
```

</details>

## 注释(Comment)

### 💡 概念说明

注释是给人看的说明文字,程序运行时会被忽略。

### 📝 代码示例

```php{1,4,7-9}
// 这是单行注释,用于简短说明

<?php
$price = 100; // 计算商品价格

/*
这是多行注释
可以写很多行说明
*/
$discount = 0.8;
```

::: warning 注意
注释要写得简洁明了,说明"为什么这样做",而不是"做了什么"
:::

### 💪 练习题

为以下代码添加合适的注释:

```php
<?php
$original = 200;
$rate = 0.7;
$final = $original * $rate;
```

<details>
<summary>点击查看答案</summary>

```php
<?php
// 原价
$original = 200;
// 折扣比例
$rate = 0.7;
// 计算最终价格
$final = $original * $rate;
```

</details>

## 日志打印

### 💡 概念说明

`var_dump()` 用于查看变量的详细信息,包括类型和值,常用于调试代码。

### 📝 代码示例

```php{3,4,5,6}
<?php
$username = "王五";
var_dump($username);

$count = 10;
var_dump($count);
```

**运行结果**:
```
string(6) "王五"
int(10)
```

::: tip 提示
- `string(6)` 表示这是一个字符串,长度为6个字节(中文一个字占3个字节)
- `int(10)` 表示这是一个整数,值为10
:::

### 📝 对比示例

```php{3,4,6,7}
<?php
$score = 85;
// 普通输出
echo $score;

// 详细信息输出
var_dump($score);
```

**运行结果**:
```
85
int(85)
```

### 💪 练习题

使用 `var_dump()` 查看变量 `$price = 99.9` 和 `$isVip = true` 的详细信息

<details>
<summary>点击查看答案</summary>

```php
<?php
$price = 99.9;
$isVip = true;

var_dump($price);
var_dump($isVip);
```

**运行结果**:
```
float(99.9)
bool(true)
```

</details>

## 📌 小结

1. 变量以 `$` 开头,用于存储数据
2. 使用 `echo` 输出内容,用 `.` 连接文字和变量
3. 添加注释让代码更易理解,但不影响程序运行
4. 使用 `var_dump()` 查看变量的类型和值,方便调试