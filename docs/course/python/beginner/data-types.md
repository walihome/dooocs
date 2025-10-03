---
title: 数据类型
category: python
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 数据类型

当你在 Python 中写下 `age = 18` 时,Python 需要知道这个 `18` 是一个数字,还是一段文本?这就是数据类型的作用——它告诉 Python 如何理解和处理你的数据。

## 整数(Integer)

### 💡 概念说明

**整数(Integer)** 就是没有小数部分的数字,可以是正数、负数或零。

### 📝 代码示例

```python{1-4}
age = 18                    # 正整数
temperature = -5            # 负整数
score = 0                   # 零

print(age)                  # 输出: 18
print(temperature)          # 输出: -5
print(type(age))           # 输出: <class 'int'>
```

::: tip 提示
`type()` 函数可以帮你查看数据的类型,`int` 就是 integer(整数)的缩写。
:::

### 💪 练习题

**练习 1**: 创建一个变量存储你的出生年份,并打印出来。

<details>
<summary>点击查看答案</summary>

```python
birth_year = 2000
print(birth_year)
print(type(birth_year))
```

</details>

**练习 2**: 尝试创建一个负数,比如欠款金额,并查看它的类型。

<details>
<summary>点击查看答案</summary>

```python
debt = -1000
print(debt)
print(type(debt))           # 输出: <class 'int'>
```

</details>

## 浮点数(Float)

### 💡 概念说明

**浮点数(Float)** 就是带小数点的数字,用于表示更精确的数值。

### 📝 代码示例

```python{1-3}
height = 1.75               # 身高(米)
price = 99.99               # 价格
pi = 3.14159                # 圆周率

print(height)               # 输出: 1.75
print(type(price))         # 输出: <class 'float'>
```

::: warning 注意
即使是 `5.0`,Python 也会把它当作浮点数,而不是整数。
:::

```python{1-2}
num1 = 5                    # 这是整数
num2 = 5.0                  # 这是浮点数

print(type(num1))          # 输出: <class 'int'>
print(type(num2))          # 输出: <class 'float'>
```

### 💪 练习题

**练习 1**: 创建一个变量存储你的体重(带小数),并打印类型。

<details>
<summary>点击查看答案</summary>

```python
weight = 65.5
print(weight)
print(type(weight))         # 输出: <class 'float'>
```

</details>

**练习 2**: 你有没有想过,整数和浮点数能一起运算吗?试试 `10 + 3.5` 会得到什么类型?

<details>
<summary>点击查看答案</summary>

```python
result = 10 + 3.5
print(result)               # 输出: 13.5
print(type(result))        # 输出: <class 'float'>
# 整数和浮点数运算,结果是浮点数
```

</details>

## 字符串(String)

### 💡 概念说明

**字符串(String)** 是用引号包起来的文本内容,可以是单引号 `'` 或双引号 `"`。

### 📝 代码示例

```python{1-4}
name = "Alice"              # 双引号
city = 'Beijing'            # 单引号
message = "Hello, World!"   # 包含标点符号
number_text = "123"         # 看起来是数字,但用引号包着就是字符串

print(name)                 # 输出: Alice
print(type(message))       # 输出: <class 'str'>
```

::: tip 提示
`str` 是 string(字符串)的缩写。单引号和双引号效果相同,但如果文本里有引号,就需要注意配对。
:::

```python{1-2}
sentence1 = "He said 'Hello'"      # 外面用双引号,里面可以用单引号
sentence2 = 'She said "Hi"'        # 外面用单引号,里面可以用双引号

print(sentence1)            # 输出: He said 'Hello'
print(sentence2)            # 输出: She said "Hi"
```

### 💪 练习题

**练习 1**: 创建一个变量存储你的名字,并打印出来。

<details>
<summary>点击查看答案</summary>

```python
my_name = "张三"
print(my_name)
print(type(my_name))        # 输出: <class 'str'>
```

</details>

**练习 2**: 字符串 `"123"` 和整数 `123` 有什么区别?试试看它们能直接相加吗?

<details>
<summary>点击查看答案</summary>

```python
text_num = "123"
real_num = 123

print(type(text_num))       # 输出: <class 'str'>
print(type(real_num))       # 输出: <class 'int'>

# text_num + real_num        # 这会报错!字符串和数字不能直接相加
print(text_num + "456")     # 输出: 123456 (字符串拼接)
print(real_num + 456)       # 输出: 579 (数字相加)
```

</details>

## 布尔值(Boolean)

### 💡 概念说明

**布尔值(Boolean)** 只有两个值:`True`(真)和 `False`(假),用于表示"是"或"否"的判断。

::: warning 注意
`True` 和 `False` 的首字母必须大写,这是 Python 的规定。
:::

### 📝 代码示例

```python{1-2}
is_student = True           # 是学生
is_raining = False          # 没下雨

print(is_student)           # 输出: True
print(type(is_raining))    # 输出: <class 'bool'>
```

布尔值通常用于条件判断:

```python{1-2}
age = 18
is_adult = age >= 18        # 判断是否成年

print(is_adult)             # 输出: True
print(type(is_adult))      # 输出: <class 'bool'>
```

### 💪 练习题

**练习 1**: 创建一个变量判断 10 是否大于 5,并打印结果。

<details>
<summary>点击查看答案</summary>

```python
result = 10 > 5
print(result)               # 输出: True
print(type(result))        # 输出: <class 'bool'>
```

</details>

**练习 2**: 试试看 `5 == 5` 和 `5 = 5` 有什么区别?

<details>
<summary>点击查看答案</summary>

```python
result = 5 == 5             # == 是比较是否相等
print(result)               # 输出: True

# num = 5 = 5               # 这会报错!= 是赋值,不是比较
num = 5                     # 正确的赋值
print(num)
```

</details>

## 📌 小结

- **整数(int)**:没有小数点的数字,如 `18`、`-5`
- **浮点数(float)**:带小数点的数字,如 `3.14`、`99.99`
- **字符串(str)**:用引号包起来的文本,如 `"Hello"`、`'Python'`
- **布尔值(bool)**:只有 `True` 或 `False` 两个值

现在你可以用 `type()` 函数检查任何数据的类型,这会帮助你理解 Python 如何处理不同的数据。