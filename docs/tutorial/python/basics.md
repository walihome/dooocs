---
title: Python 基础
order: 1
description: The basics of python. We all need to start somewhere, so how about doing it here.
---


# Python 基础


我们都需要从某个地方开始，那么不如就从这里开始吧。

来自 [Python 3 教程](https://docs.python.org/3/tutorial/index.html)

Python 是一种易学且功能强大的编程语言 [...] 

Python 优雅的语法和动态类型，再加上它的解释性质，使其成为脚本编写和快速应用开发的理想语言。



## 数学运算符

从**最高**到**最低**的优先级：

| 运算符      | 操作            | 示例            |
| --------- | ----------------- | --------------- |
| \*\*      | 指数          | `2 ** 3 = 8`    |
| %         | 取模/取余          | `22 % 8 = 6`    |
| //        | 整数除法          | `22 // 8 = 2`   |
| /         | 除法          | `22 / 8 = 2.75` |
| \*        | 乘法          | `3 * 3 = 9`     |
| -         | 减法          | `5 - 2 = 3`     |
| +         | 加法          | `2 + 2 = 4`     |

示例表达式：

```python
>>> 2 + 3 * 6
# 20

>>> (2 + 3) * 6
# 30

>>> 2 ** 8
#256

>>> 23 // 7
# 3

>>> 23 % 7
# 2

>>> (5 - 1) * ((7 + 1) / (3 - 1))
# 16.0
```

## 增强赋值运算符

| 运算符    | 等价       |
| ----------- | ---------------- |
| `var += 1`  | `var = var + 1`  |
| `var -= 1`  | `var = var - 1`  |
| `var *= 1`  | `var = var * 1`  |
| `var /= 1`  | `var = var / 1`  |
| `var //= 1` | `var = var // 1` |
| `var %= 1`  | `var = var % 1`  |
| `var **= 1` | `var = var ** 1` |

示例：

```python
>>> greeting = 'Hello'
>>> greeting += ' world!'
>>> greeting
# 'Hello world!'

>>> number = 1
>>> number += 1
>>> number
# 2

>>> my_list = ['item']
>>> my_list *= 3
>>> my_list
# ['item', 'item', 'item']
```

## 海象运算符

海象运算符允许在表达式中分配变量，同时返回变量的值

示例：

```python
>>> print(my_var:="Hello World!")
# 'Hello world!'

>>> my_var="Yes"
>>> print(my_var)
# 'Yes'

>>> print(my_var:="Hello")
# 'Hello'
```

海象运算符，或**赋值表达式运算符**，最初在2018年通过[PEP 572](https://peps.python.org/pep-0572/)引入，然后在2019年10月正式发布为**Python 3.8**。


  
> 语法语义和示例
  
[PEP 572](https://peps.python.org/pep-0572/) 提供了海象运算符的语法、语义和示例。
  


## 数据类型

| 数据类型              | 示例                                  |
| ---------------------- | ----------------------------------------- |
| Integers               | `-2, -1, 0, 1, 2, 3, 4, 5`                |
| Floating-point numbers | `-1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25` |
| Strings                | `'a', 'aa', 'aaa', 'Hello!', '11 cats'`   |

## 连接和复制

字符串连接：

```python
>>> 'Alice' 'Bob'
# 'AliceBob'
```

字符串复制：

```python
>>> 'Alice' * 5
# 'AliceAliceAliceAliceAlice'
```

## 变量

你可以命名一个变量，只要它遵循以下规则：

1. 它只能是一个单词。

```python
>>> # bad
>>> my variable = 'Hello'

>>> # good
>>> var = 'Hello'
```

2. 它只能使用字母、数字和下划线（`_`）字符。

```python
>>> # bad
>>> %$@variable = 'Hello'

>>> # good
>>> my_var = 'Hello'

>>> # good
>>> my_var_2 = 'Hello'
```

3. 它不能以数字开头。

```python
>>> # this wont work
>>> 23_var = 'hello'
```

4. 以下划线（`_`）开头的变量名被认为是“无用的”。

```python
>>> # _spam should not be used again in the code
>>> _spam = 'Hello'
```

## 注释

行内注释：

```python
# This is a comment
```

多行注释：

```python
# This is a
# multiline comment
```

代码注释：

```python
a = 1  # initialization
```

请注意，注释前后的两个空格。

函数文档字符串：

```python
def foo():
    """
    This is a function docstring
    You can also use:
    ''' Function Docstring '''
    """
```

## The print() 函数
`print()` 函数会输出它所接收的参数值。它可以处理多个参数、浮点数和字符串。字符串会在没有引号的情况下打印，并且在各个项目之间插入一个空格，这样你可以很好地格式化内容：

```python
>>> print('Hello world!')
# Hello world!

>>> a = 1
>>> print('Hello world!', a)
# Hello world! 1
```

### end 关键字

关键字参数 `end` 可以用来避免输出后的换行，或者用不同的字符串结束输出：

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
>>> for word in phrase:
...     print(word, end='-')
...
# printed-with-a-dash-in-between-
```

### sep 关键字

关键字参数 `sep` 可以用来指定如何分隔对象，如果有多个对象：

```python
print('cats', 'dogs', 'mice', sep=',')
# cats,dogs,mice
```

## input() 函数

`input()` 函数从用户那里获取输入并将其转换为字符串：

```python
>>> print('What is your name?')   # ask for their name
>>> my_name = input()
>>> print('Hi, {}'.format(my_name))
# What is your name?
# Martha
# Hi, Martha
```

`input()` 函数还可以设置一个默认消息，而不使用 `print()`：

```python
>>> my_name = input('What is your name? ')  # default message
>>> print('Hi, {}'.format(my_name))
# What is your name? Martha
# Hi, Martha
```

也可以使用格式化字符串来避免使用 .format：

```python
>>> my_name = input('What is your name? ')  # default message
>>> print(f'Hi, {my_name}')
# What is your name? Martha
# Hi, Martha
```


## len() 函数

返回字符串、列表、字典等的长度：

```python
>>> len('hello')
# 5

>>> len(['cat', 3, 'dog'])
# 3
```

> 测试空值
    测试空值，如字符串、列表、字典等，不应使用 `len`，而应直接使用布尔评估。

测试空值的示例：

```python
>>> a = [1, 2, 3]

# bad
>>> if len(a) > 0:  # evaluates to True
...     print("the list is not empty!")
...
# the list is not empty!

# good
>>> if a: # evaluates to True
...     print("the list is not empty!")
...
# the list is not empty!
```
## str()、int() 和 float() 函数

这些函数允许你改变变量的类型。例如，你可以将 `integer` 或 `float` 转换为 `string`：

```python
>>> str(29)
# '29'

>>> str(-3.14)
# '-3.14'
```

或者从 `string` 转换为 `integer` 或 `float`：

```python
>>> int('11')
# 11

>>> float('3.14')
# 3.14
```
