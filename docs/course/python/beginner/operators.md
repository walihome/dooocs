---
title: 基础运算
category: python
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 基础运算

编程的本质就是让计算机帮我们处理数据。在这一章,你将学会如何让 Python 进行计算、比较和判断。

## 赋值(Assignment)

**赋值(Assignment)** 就是把一个值存储到变量中,就像给数据贴上标签。

### 📝 代码示例

```python{1,4,7}
age = 25  # 把数字 25 存到变量 age 里

# 可以随时修改变量的值
age = 26  

# 一次性给多个变量赋值
x, y, z = 10, 20, 30
```

**运行结果**:代码执行后不会显示任何内容,但变量已经存储好了值。

::: tip 提示
变量名要有意义,`age` 比 `a` 更容易理解代码的用途。
:::

## 数学运算(Arithmetic Operations)

Python 可以像计算器一样进行数学计算。

### 📝 基本运算符

```python{1-5}
print(10 + 3)   # 加法: 13
print(10 - 3)   # 减法: 7
print(10 * 3)   # 乘法: 30
print(10 / 3)   # 除法: 3.3333...
print(10 % 3)   # 求余: 1 (10除以3余1)

# 实际应用示例
price = 49
quantity = 3
total = price * quantity
print(total)  # 147
```

**运行结果**:
```
13
7
30
3.3333333333333335
1
147
```

::: warning 注意
`/` 除法的结果总是小数,即使能整除。`10 / 5` 的结果是 `2.0` 而不是 `2`。
:::

### 💪 练习题

**练习 1**: 计算一件商品打 8 折后的价格(原价 158 元)。

<details>
<summary>查看答案</summary>

```python
original_price = 158
discount = 0.8
final_price = original_price * discount
print(final_price)  # 126.4
```

</details>

**练习 2**: 判断一个数字是奇数还是偶数(提示:偶数除以 2 余数为 0)。

<details>
<summary>查看答案</summary>

```python
number = 17
remainder = number % 2
print(remainder)  # 1 表示奇数, 0 表示偶数
```

</details>

## 比较运算(Comparison Operations)

**比较运算(Comparison)** 用于判断两个值的大小关系,结果是 `True`(真)或 `False`(假)。

### 📝 比较运算符

```python{1-6}
print(5 == 5)   # 相等: True
print(5 != 3)   # 不等于: True
print(5 > 3)    # 大于: True
print(5 < 3)    # 小于: False
print(5 >= 5)   # 大于或等于: True
print(5 <= 3)   # 小于或等于: False

# 实际应用
age = 18
is_adult = age >= 18
print(is_adult)  # True
```

**运行结果**:
```
True
True
True
False
True
False
True
```

::: warning 注意
判断相等用 `==`(两个等号),不是 `=`(一个等号)。`=` 是赋值,`==` 是比较。
:::

## 逻辑运算(Logical Operations)

**逻辑运算(Logical Operations)** 用于组合多个条件判断。

### 📝 逻辑运算符

- **and**: 两个条件都为真时,结果才为真
- **or**: 只要有一个条件为真,结果就为真
- **not**: 取反,真变假,假变真

```python{1-2,5-6,9}
# and: 必须同时满足
print(True and True)    # True
print(True and False)   # False

# or: 满足其中一个即可
print(True or False)    # True
print(False or False)   # False

# not: 取反
print(not True)         # False

# 实际应用
age = 20
has_id = True
can_enter = age >= 18 and has_id
print(can_enter)  # True
```

**运行结果**:
```
True
False
True
False
False
True
```

### 💪 练习题

**练习**: 判断一个人是否可以享受学生票优惠(年龄在 6-22 岁之间)。

<details>
<summary>查看答案</summary>

```python
age = 19
is_student_age = age >= 6 and age <= 22
print(is_student_age)  # True
```

</details>

## 📌 小结

- **赋值**: 使用 `=` 把值存储到变量中
- **数学运算**: `+` `-` `*` `/` `%` 分别对应加减乘除求余
- **比较运算**: `==` `!=` `>` `<` `>=` `<=` 返回 True 或 False
- **逻辑运算**: `and` 要求同时满足,`or` 满足一个即可,`not` 取反