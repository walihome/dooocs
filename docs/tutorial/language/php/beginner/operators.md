---
title: 基础运算
category: php
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # 基础运算

编程的核心之一就是处理数据,而运算是处理数据最基本的方式。这一章我们将学习如何让程序进行各种计算和判断。

## 赋值运算(Assignment)

### 💡 概念说明

赋值就是把一个值存储到变量中,使用 `=` 符号。

::: tip 提示
赋值符号 `=` 不是"等于",而是"把右边的值放入左边的变量"
:::

### 📝 代码示例

```php{3-5}
<?php
// 基本赋值
$price = 100;           // 把 100 赋值给 price
$name = "iPhone";       // 把字符串赋值给 name
$isAvailable = true;    // 把布尔值赋值给 isAvailable

echo $price;            // 输出: 100
?>
```

**运行结果**: 屏幕显示 `100`

## 数学运算(Arithmetic Operations)

### 💡 概念说明

PHP 支持五种基本数学运算:
- 加法 `+`
- 减法 `-`
- 乘法 `*`
- 除法 `/`
- 求余 `%` (取余数)

### 📝 代码示例

```php{3-7}
<?php
// 基本数学运算
$sum = 10 + 5;          // 加法: 15
$difference = 10 - 5;   // 减法: 5
$product = 10 * 5;      // 乘法: 50
$quotient = 10 / 5;     // 除法: 2
$remainder = 10 % 3;    // 求余: 1 (10除以3余1)

echo "加法: $sum\n";
echo "减法: $difference\n";
echo "乘法: $product\n";
echo "除法: $quotient\n";
echo "求余: $remainder\n";
?>
```

**运行结果**:
```
加法: 15
减法: 5
乘法: 50
除法: 2
求余: 1
```

::: warning 注意
除法运算时,除数不能为 0,否则会报错
:::

### 实际应用示例

```php{4-6}
<?php
// 计算商品总价
$unitPrice = 29.9;      // 单价
$quantity = 3;          // 数量
$total = $unitPrice * $quantity;  // 总价
$discount = $total * 0.8;         // 打8折

echo "原价: $total 元\n";
echo "折后价: $discount 元";
?>
```

**运行结果**:
```
原价: 89.7 元
折后价: 71.76 元
```

## 比较运算(Comparison Operations)

### 💡 概念说明

比较运算用于判断两个值的关系,结果是布尔值(`true` 或 `false`):
- 相等 `==`
- 不相等 `!=`
- 大于 `>`
- 小于 `<`
- 大于等于 `>=`
- 小于等于 `<=`

### 📝 代码示例

```php{3-8}
<?php
// 比较运算
$a = 10;
$b = 5;

$isEqual = ($a == $b);      // false (10不等于5)
$isGreater = ($a > $b);     // true (10大于5)
$isLess = ($a < $b);        // false (10不小于5)
$isGreaterEqual = ($a >= 10); // true (10大于等于10)

// 使用 var_dump 可以看到布尔值
var_dump($isEqual);         // bool(false)
var_dump($isGreater);       // bool(true)
?>
```

**运行结果**:
```
bool(false)
bool(true)
```

### 实际应用示例

```php{4-5}
<?php
// 判断是否达到免运费标准
$orderAmount = 120;
$freeShippingLimit = 99;
$isFreeShipping = ($orderAmount >= $freeShippingLimit);

if ($isFreeShipping) {
    echo "恭喜!订单满99免运费";
} else {
    echo "还需" . ($freeShippingLimit - $orderAmount) . "元即可免运费";
}
?>
```

**运行结果**: `恭喜!订单满99免运费`

## 逻辑运算(Logical Operations)

### 💡 概念说明

逻辑运算用于组合多个条件:
- `&&` 或 `and` - 并且(两个条件都为真)
- `||` 或 `or` - 或者(至少一个条件为真)
- `!` - 非(取反)

### 📝 代码示例

```php{5-7}
<?php
$age = 25;
$hasLicense = true;

$canDrive = ($age >= 18) && $hasLicense;     // 年满18岁 并且 有驾照
$needsCheck = ($age < 18) || !$hasLicense;   // 未满18岁 或者 没有驾照
$isAdult = $age >= 18;                        // 是否成年

var_dump($canDrive);        // bool(true)
var_dump($needsCheck);      // bool(false)
var_dump($isAdult);         // bool(true)
?>
```

**运行结果**:
```
bool(true)
bool(false)
bool(true)
```

### 实际应用示例

```php{5-6}
<?php
// 判断用户是否可以购买
$userAge = 20;
$accountBalance = 50;
$productPrice = 30;

$canPurchase = ($userAge >= 18) && ($accountBalance >= $productPrice);

if ($canPurchase) {
    echo "可以购买";
} else {
    echo "无法购买";
}
?>
```

**运行结果**: `可以购买`

::: tip 提示
`&&` 和 `and` 功能相同,但 `&&` 优先级更高,建议使用 `&&`
:::

## 💪 练习题

### 练习 1: 计算折扣价

编写代码计算商品打折后的价格:
- 原价 299 元
- 如果会员,打 8 折
- 如果订单满 200 元,再减 20 元

<details>
<summary>点击查看答案</summary>

```php
<?php
$originalPrice = 299;
$isMember = true;
$discountRate = 0.8;

// 计算会员折扣
if ($isMember) {
    $price = $originalPrice * $discountRate;
} else {
    $price = $originalPrice;
}

// 满减优惠
if ($price >= 200) {
    $price = $price - 20;
}

echo "最终价格: $price 元";
// 输出: 最终价格: 219.2 元
?>
```

</details>

### 练习 2: 判断及格状态

编写代码判断学生是否通过考试:
- 总分 100 分
- 60 分及格
- 如果分数 >= 60 并且出勤率 >= 80%,显示"通过"

<details>
<summary>点击查看答案</summary>

```php
<?php
$score = 75;
$attendance = 0.85;  // 85% 出勤率

$isPassed = ($score >= 60) && ($attendance >= 0.8);

if ($isPassed) {
    echo "恭喜通过考试!";
} else {
    echo "未通过考试";
}
// 输出: 恭喜通过考试!
?>
```

</details>

## 📌 小结

1. **赋值运算**使用 `=` 把值存入变量
2. **数学运算**包括 `+` `-` `*` `/` `%` 五种基本操作
3. **比较运算**用于判断大小关系,结果是 `true` 或 `false`
4. **逻辑运算**用 `&&` `||` `!` 组合多个条件