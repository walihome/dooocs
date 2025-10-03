---
title: 函数与方法
category: php
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # 函数与方法

## 💡 什么是函数(Function)

函数就像一个"任务打包盒"——你把一段经常要做的事情装进这个盒子里,需要时就直接叫它的名字,它就会帮你完成任务。

比如说,你每天都要计算商品总价(单价 × 数量),与其每次都写一遍计算公式,不如把这个计算过程打包成一个函数,用的时候直接调用就行。

## 创建你的第一个函数

### 📝 基础语法

```php{1,3}
function 函数名() {
    // 要执行的代码
}
```

让我们创建一个打招呼的函数:

```php{1-3,6}
<?php
function sayHello() {
    echo "你好,欢迎学习 PHP!";
}

sayHello(); // 调用函数
?>
```

**运行结果:**
```
你好,欢迎学习 PHP!
```

::: tip 提示
函数名遵循变量命名规则,但不需要加 `$` 符号。推荐使用驼峰命名法,如 `calculatePrice`、`getUserName`。
:::

## 带参数(Parameter)的函数

如果你想让函数更灵活,可以给它传递参数:

```php{1,6}
<?php
function greet($name) {
    echo "你好, " . $name . "!";
}

greet("小明"); // 传入参数
greet("小红");
?>
```

**运行结果:**
```
你好, 小明!
你好, 小红!
```

### 📝 多个参数示例

```php{1,6-7}
<?php
function calculateTotal($price, $quantity) {
    echo "总价: " . ($price * $quantity) . " 元";
}

calculateTotal(50, 3);  // 50元 × 3个
calculateTotal(120, 2); // 120元 × 2个
?>
```

**运行结果:**
```
总价: 150 元
总价: 240 元
```

## 返回值(Return Value)

函数可以把计算结果"还给你",而不是直接输出:

```php{2,6-7}
<?php
function add($a, $b) {
    return $a + $b; // 返回计算结果
}

$result = add(10, 20); // 接收返回值
echo "结果是: " . $result;
?>
```

**运行结果:**
```
结果是: 30
```

::: warning 注意
`return` 后面的代码不会执行,函数会立即结束并返回结果。
:::

### 📝 实用示例:价格计算器

```php{1-4,7-8}
<?php
function calculateDiscount($price, $discountRate) {
    $finalPrice = $price * (1 - $discountRate);
    return $finalPrice;
}

$originalPrice = 100;
$afterDiscount = calculateDiscount($originalPrice, 0.2); // 8折

echo "原价: {$originalPrice} 元<br>";
echo "折后价: {$afterDiscount} 元";
?>
```

**运行结果:**
```
原价: 100 元
折后价: 80 元
```

## 默认参数(Default Parameter)

你可以给参数设置默认值:

```php{1,5-6}
<?php
function makeGreeting($name, $time = "早上") {
    echo "{$time}好, {$name}!<br>";
}

makeGreeting("小明");           // 使用默认值"早上"
makeGreeting("小红", "下午");   // 自定义时间
?>
```

**运行结果:**
```
早上好, 小明!
下午好, 小红!
```

## 💪 练习题

### 练习 1: 创建温度转换函数
创建一个函数,将摄氏度转换为华氏度(公式: 华氏度 = 摄氏度 × 1.8 + 32)

::: details 查看答案
```php
<?php
function celsiusToFahrenheit($celsius) {
    return $celsius * 1.8 + 32;
}

echo "25°C = " . celsiusToFahrenheit(25) . "°F<br>";
echo "0°C = " . celsiusToFahrenheit(0) . "°F";
?>
```
**运行结果:**
```
25°C = 77°F
0°C = 32°F
```
:::

### 练习 2: 创建会员折扣计算器
创建一个函数,根据会员等级计算折扣后价格:
- 普通会员: 9折
- VIP会员: 8折
- SVIP会员: 7折

::: details 查看答案
```php
<?php
function getMemberPrice($price, $level = "普通") {
    if ($level == "普通") {
        return $price * 0.9;
    } elseif ($level == "VIP") {
        return $price * 0.8;
    } elseif ($level == "SVIP") {
        return $price * 0.7;
    }
    return $price;
}

echo "普通会员价: " . getMemberPrice(100) . " 元<br>";
echo "VIP会员价: " . getMemberPrice(100, "VIP") . " 元<br>";
echo "SVIP会员价: " . getMemberPrice(100, "SVIP") . " 元";
?>
```
**运行结果:**
```
普通会员价: 90 元
VIP会员价: 80 元
SVIP会员价: 70 元
```
:::

## 📌 小结

- **函数定义**: 使用 `function` 关键字创建可重复使用的代码块
- **参数传递**: 让函数接收外部数据,增强灵活性
- **返回值**: 使用 `return` 将结果返回给调用者,便于后续处理