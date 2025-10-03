---
title: 基础运算
category: c++
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 基础运算

编程的核心之一就是让计算机帮我们做计算。在这一章,你将学会如何在Python中进行各种运算操作。

## 赋值(Assignment)

### 💡 概念说明

赋值就是给一个变量(Variable)存储一个值。使用等号 `=` 来完成赋值操作。

### 📝 代码示例

```python{1-3}
age = 25
name = "Alice"
price = 19.99
```

运行后不会显示任何内容,但Python已经把这些值存储在变量中了。

::: tip 提示
等号 `=` 在编程中表示"赋值",而不是数学中的"等于"。
:::

### 💪 练习题

1. 创建一个变量 `score`,赋值为 100
2. 创建一个变量 `city`,赋值为你所在的城市名称

::: details 查看答案
```python
score = 100
city = "Beijing"
```
:::

## 数学运算(Arithmetic Operations)

### 💡 概念说明

Python支持常见的数学运算:
- 加法 `+`
- 减法 `-`
- 乘法 `*`
- 除法 `/`
- 求余 `%` (计算除法的余数)

### 📝 代码示例

```python{1-5,8-9}
# 基础运算
result1 = 10 + 5      # 加法
result2 = 20 - 8      # 减法
result3 = 6 * 7       # 乘法
result4 = 15 / 3      # 除法

# 求余运算
remainder = 17 % 5    # 17除以5余2
print(remainder)
```

运行结果:
```
2
```

::: warning 注意
除法 `/` 的结果总是小数(浮点数),即使能整除。例如 `10 / 5` 结果是 `2.0` 而不是 `2`。
:::

### 💪 练习题

1. 计算 `(50 + 30) * 2` 的结果,存储在变量 `total` 中
2. 计算 `23 % 4` 的结果并打印出来

::: details 查看答案
```python
total = (50 + 30) * 2
print(total)  # 输出: 160

result = 23 % 4
print(result)  # 输出: 3
```
:::

## 比较运算(Comparison Operations)

### 💡 概念说明

比较运算用于比较两个值,结果是 `True`(真)或 `False`(假):
- 相等 `==`
- 不相等 `!=`
- 大于 `>`
- 小于 `<`
- 大于等于 `>=`
- 小于等于 `<=`

### 📝 代码示例

```python{1-6}
print(10 == 10)    # 判断是否相等
print(5 > 3)       # 判断5是否大于3
print(8 < 2)       # 判断8是否小于2
print(7 >= 7)      # 判断7是否大于等于7
print(10 != 5)     # 判断10是否不等于5
print("cat" == "dog")  # 文本也可以比较
```

运行结果:
```
True
True
False
True
True
False
```

::: danger 警告
判断相等用 `==` (两个等号),不是 `=` (一个等号)。`=` 是赋值操作。
:::

### 💪 练习题

1. 判断 `15` 是否大于 `20`,打印结果
2. 判断你的年龄是否大于等于 `18`,打印结果

::: details 查看答案
```python
print(15 > 20)      # False

age = 25
print(age >= 18)    # True
```
:::

## 逻辑运算(Logical Operations)

### 💡 概念说明

逻辑运算用于组合多个条件:
- `and` (且): 两个条件都为True时,结果才是True
- `or` (或): 只要有一个条件为True,结果就是True
- `not` (非): 反转结果,True变False,False变True

### 📝 代码示例

```python{2,5,8}
# and运算 - 两个条件都要满足
print(True and True)      # True
print(True and False)     # False

# or运算 - 满足任意一个条件即可
print(True or False)      # True
print(False or False)     # False

# not运算 - 取反
print(not True)           # False
print(not False)          # True
```

实际应用示例:

```python{1-4}
age = 20
has_ticket = True
# 判断是否可以进场:年龄大于18且有票
can_enter = age > 18 and has_ticket
print(can_enter)  # True
```

运行结果:
```
True
```

### 💪 练习题

1. 判断一个数字是否在10到20之间(包含10和20)
2. 判断一个数字是否小于0或大于100

::: details 查看答案
```python
num = 15
# 方法:数字要大于等于10 并且 小于等于20
in_range = num >= 10 and num <= 20
print(in_range)  # True

num2 = 50
# 方法:数字小于0 或者 大于100
out_range = num2 < 0 or num2 > 100
print(out_range)  # False
```
:::

## 📌 小结

- **赋值**: 使用 `=` 给变量存储值
- **数学运算**: 加 `+`、减 `-`、乘 `*`、除 `/`、求余 `%`
- **比较运算**: 相等 `==`、大于 `>`、小于 `<` 等,结果是 `True` 或 `False`
- **逻辑运算**: `and`(且)、`or`(或)、`not`(非) 用于组合多个条件