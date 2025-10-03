---
title: 数据类型
category: typescript
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 数据类型

在编程世界里,计算机需要知道你给它的信息是什么类型,就像你需要知道手里拿的是苹果还是橘子。Python 有几种基本的数据类型(Data Types),让我们一个个来认识它们。

## 整数(Integer)

### 💡 概念说明

整数就是没有小数点的数字,可以是正数、负数或零。在 Python 中用 `int` 表示。

### 📝 代码示例

```python{1-4}
age = 25                    # 正整数
temperature = -5            # 负整数
score = 0                   # 零
population = 1400000000     # 大数字也可以
```

**运行结果**:这段代码不会显示任何内容,它只是把数据存储在变量中。

让我们用 `print()` 函数看看这些整数:

```python{1,2,5}
year = 2025
print(year)           # 输出: 2025

result = 10 + 20
print(result)         # 输出: 30
```

### 💪 练习题

**练习 1**: 创建一个变量存储你的年龄,然后打印出来。

::: details 查看答案
```python
my_age = 18
print(my_age)
```
:::

**练习 2**: 计算两个整数的和并打印结果。

::: details 查看答案
```python
num1 = 15
num2 = 27
total = num1 + num2
print(total)  # 输出: 42
```
:::

## 浮点数(Float)

### 💡 概念说明

浮点数就是带小数点的数字,用于表示更精确的值。在 Python 中用 `float` 表示。

### 📝 代码示例

```python{1-3}
height = 1.75              # 身高(米)
price = 29.99              # 价格
temperature = -3.5         # 温度
```

你可以对浮点数进行计算:

```python{1-3}
length = 5.5
width = 3.2
area = length * width
print(area)                # 输出: 17.6
```

::: tip 提示
整数和浮点数可以一起计算,结果会是浮点数:
```python
result = 10 + 3.5
print(result)  # 输出: 13.5
```
:::

### 💪 练习题

**练习 1**: 计算一个长方形的面积(长 4.5,宽 2.8)。

::: details 查看答案
```python
length = 4.5
width = 2.8
area = length * width
print(area)  # 输出: 12.6
```
:::

**练习 2**: 计算商品打折后的价格(原价 99.9,折扣 0.8)。

::: details 查看答案
```python
original_price = 99.9
discount = 0.8
final_price = original_price * discount
print(final_price)  # 输出: 79.92
```
:::

## 字符串(String)

### 💡 概念说明

字符串是用引号包起来的文字,可以是单引号 `'` 或双引号 `"`。在 Python 中用 `str` 表示。

### 📝 代码示例

```python{1-3}
name = "张三"
city = 'Beijing'
message = "Hello, World!"
```

字符串可以拼接(连接)在一起:

```python{1-3}
first_name = "李"
last_name = "明"
full_name = first_name + last_name
print(full_name)           # 输出: 李明
```

字符串和数字不能直接拼接,需要转换:

```python{1-2}
age = 25
text = "我今年" + str(age) + "岁"
print(text)                # 输出: 我今年25岁
```

::: warning 注意
单引号和双引号要成对出现,不能混用:
```python
# ✅ 正确
name = "Alice"
city = 'Tokyo'

# ❌ 错误
name = "Alice'
```
:::

### 💪 练习题

**练习 1**: 创建两个字符串变量,分别存储你的姓和名,然后拼接打印。

::: details 查看答案
```python
first = "王"
last = "小明"
full = first + last
print(full)  # 输出: 王小明
```
:::

**练习 2**: 创建一个自我介绍的字符串,包含姓名和年龄。

::: details 查看答案
```python
name = "李华"
age = 20
intro = "大家好,我叫" + name + ",今年" + str(age) + "岁"
print(intro)  # 输出: 大家好,我叫李华,今年20岁
```
:::

## 布尔值(Boolean)

### 💡 概念说明

布尔值只有两个值:`True`(真)和 `False`(假),用于表示是或否、对或错。在 Python 中用 `bool` 表示。

::: danger 警告
`True` 和 `False` 的首字母必须大写,否则会出错!
:::

### 📝 代码示例

```python{1-2}
is_student = True
has_license = False
```

布尔值常用于判断和比较:

```python{1-5}
age = 18
is_adult = age >= 18
print(is_adult)            # 输出: True

print(10 > 5)              # 输出: True
print(3 == 5)              # 输出: False
```

### 💪 练习题

**练习 1**: 判断一个数字是否大于 100。

::: details 查看答案
```python
number = 150
is_large = number > 100
print(is_large)  # 输出: True
```
:::

**练习 2**: 比较两个数字是否相等。

::: details 查看答案
```python
num1 = 50
num2 = 50
are_equal = num1 == num2
print(are_equal)  # 输出: True
```
:::

## 📌 小结

- **整数(int)**:没有小数点的数字,如 `25`、`-10`、`0`
- **浮点数(float)**:带小数点的数字,如 `3.14`、`-2.5`
- **字符串(str)**:用引号包起来的文字,如 `"Hello"`、`'Python'`
- **布尔值(bool)**:只有 `True` 或 `False` 两个值