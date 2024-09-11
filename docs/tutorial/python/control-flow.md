---
title: Python 流程控制
order: 3
description: 流程控制是指单个语句、指令或函数调用被执行或评估的顺序。Python程序的流程控制由条件语句、循环和函数调用来调节。
---


# Python流程控制(Control Flow)  
  控制流是指单个语句、指令或函数调用被执行或评估的顺序。Python程序的控制流由条件语句、循环和函数调用来调节。
  


## 比较运算符

| 运算符 | 含义                  |
| ------ | --------------------- |
| `==`   | 等于                  |
| `!=`   | 不等于                |
| `<`    | 小于                  |
| `>`    | 大于                  |
| `<=`   | 小于或等于            |
| `>=`   | 大于或等于            |

这些运算符根据你提供的值来评估为True或False。

示例：

```python
>>> 42 == 42
True

>>> 40 == 42
False

>>> 'hello' == 'hello'
True

>>> 'hello' == 'Hello'
False

>>> 'dog' != 'cat'
True

>>> 42 == 42.0
True

>>> 42 == '42'
False
```

## 布尔运算符

有三个布尔运算符：`and`，`or`，和 `not`。
按优先级顺序，从高到低依次是 `not`，`and` 和 `or`。

`and` 运算符的 _真值_ 表：

| 表达式            | 评估结果   |
| ----------------- | ------------ |
| `True and True`   | `True`       |
| `True and False`  | `False`      |
| `False and True`  | `False`      |
| `False and False` | `False`      |

`or` 运算符的 _真值_ 表：

| 表达式           | 评估结果   |
| ---------------- | ------------ |
| `True or True`   | `True`       |
| `True or False`  | `True`       |
| `False or True`  | `True`       |
| `False or False` | `False`      |

`not` 运算符的 _真值_ 表：

| 表达式  | 评估结果   |
| ----------- | ------------ |
| `not True`  | `False`      |
| `not False` | `True`       |

## 混合运算符

你可以混合使用布尔运算符和比较运算符：

```python
>>> (4 < 5) and (5 < 6)
True

>>> (4 < 5) and (9 < 6)
False

>>> (1 == 2) or (2 == 2)
True
```

此外，你可以在一个表达式中混合使用多个布尔运算符和比较运算符：

```python
>>> 2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
True
>>> # 在下面的语句中，3 < 4 和 5 > 5 首先执行，结果为 False
>>> # 然后 5 > 4 返回 True，所以 True 或 False 的结果是 True
>>> 5 > 4 or 3 < 4 and 5 > 5
True
>>> # 现在括号内的语句首先执行，所以 True 和 False 返回 False。
>>> (5 > 4 or 3 < 4) and 5 > 5
False
```

## if 语句

`if` 语句会评估一个表达式，如果该表达式为 `True`，则执行以下缩进的代码：

```python
>>> name = 'Debora'

>>> if name == 'Debora':
...    print('Hi, Debora')
...
# Hi, Debora

>>> if name != 'George':
...    print('You are not George')
...
# You are not George
```

`else` 语句仅在 `if` 和所有 `elif` 表达式的结果都为 `False` 时执行：

```python
>>> name = 'Debora'

>>> if name == 'George':
...    print('Hi, George.')
... else:
...    print('You are not George')
...
# You are not George
```

只有在 `if` 语句表达式为 `False` 时，才会评估和执行 `elif` 语句：

```python
>>> name = 'George'

>>> if name == 'Debora':
...    print('Hi Debora!')
... elif name == 'George':
...    print('Hi George!')
...
# Hi George!
```

the `elif` and `else` parts are optional.

```python
>>> name = 'Antony'

>>> if name == 'Debora':
...    print('Hi Debora!')
... elif name == 'George':
...    print('Hi George!')
... else:
...    print('Who are you?')
...
# Who are you?
```

## 三元条件运算符

许多编程语言都有三元运算符，它定义了一个条件表达式。最常见的用法是简洁地进行条件赋值语句。换句话说，它提供了一行代码来评估条件为真时的第一个表达式，否则评估第二个表达式。

```
<expression1> if <condition> else <expression2>
```

Example:

```python
>>> age = 15

>>> # this if statement:
>>> if age < 18:
...    print('kid')
... else:
...    print('adult')
...
# output: kid

>>> # 等价于这个三元运算符：
>>> print('kid' if age < 18 else 'adult')
# output: kid
```

三元运算符可以链接：

```python
>>> age = 15

>>> # 这个三元运算符：
>>> print('kid' if age < 13 else 'teen' if age < 18 else 'adult')

>>> # 等价于这个 if 语句：
>>> if age < 18:
...     if age < 13:
...         print('kid')
...     else:
...         print('teen')
... else:
...     print('adult')
...
# 输出: teen
```

## Switch-Case 语句


  
    Switch-Case 语句
  
  在计算机编程语言中，switch 语句是一种选择控制机制，用于通过搜索和映射来改变程序执行的控制流，从而允许变量或表达式的值发生变化。

Switch-Case 语句，或称为**结构化模式匹配**，首次引入是在2020年通过 [PEP 622](https://peps.python.org/pep-0622/)，并在2022年9月随 **Python 3.10** 正式发布。

官方教程
  
  
  [PEP 636](https://peps.python.org/pep-0636/) 提供了 Python 模式匹配或 Switch-Case 语句的官方教程。
  


### 匹配单个值

```python
>>> response_code = 201
>>> match response_code:
...     case 200:
...         print("OK")
...     case 201:
...         print("Created")
...     case 300:
...         print("Multiple Choices")
...     case 307:
...         print("Temporary Redirect")
...     case 404:
...         print("404 Not Found")
...     case 500:
...         print("Internal Server Error")
...     case 502:
...         print("502 Bad Gateway")
...
# Created
```

### 匹配多个值

在这个例子中，管道字符 (`|` 或 `or`) 允许 python 为两个或多个情况返回相同的响应。

```python
>>> response_code = 502
>>> match response_code:
...     case 200 | 201:
...         print("OK")
...     case 300 | 307:
...         print("Redirect")
...     case 400 | 401:
...         print("Bad Request")
...     case 500 | 502:
...         print("Internal Server Error")
...
# Internal Server Error
```

### 匹配可迭代对象的长度

```python
>>> today_responses = [200, 300, 404, 500]
>>> match today_responses:
...     case [a]:
...             print(f"One response today: {a}")
...     case [a, b]:
...             print(f"Two responses today: {a} and {b}")
...     case [a, b, *rest]:
...             print(f"All responses: {a}, {b}, {rest}")
...
# All responses: 200, 300, [404, 500]
```

### 默认值

下划线符号 (`_`) 用于定义默认情况：

```python
>>> response_code = 800
>>> match response_code:
...     case 200 | 201:
...         print("OK")
...     case 300 | 307:
...         print("Redirect")
...     case 400 | 401:
...         print("Bad Request")
...     case 500 | 502:
...         print("Internal Server Error")
...     case _:
...         print("Invalid Code")
...
# Invalid Code
```

### 匹配内置类

```python
>>> response_code = "300"
>>> match response_code:
...     case int():
...             print('Code is a number')
...     case str():
...             print('Code is a string')
...     case _:
...             print('Code is neither a string nor a number')
...
# Code is a string
```

### 保护匹配-Case 语句

```python
>>> response_code = 300
>>> match response_code:
...     case int():
...             if response_code > 99 and response_code < 500:
...                 print('Code is a valid number')
...     case _:
...             print('Code is an invalid number')
...
# Code is a valid number
```

## while 循环语句

`while` 语句用于在表达式为 `True` 时重复执行：

```python
>>> spam = 0
>>> while spam < 5:
...     print('Hello, world.')
...     spam = spam + 1
...
# Hello, world.
# Hello, world.
# Hello, world.
# Hello, world.
# Hello, world.
```

## break 语句

如果执行达到 `break` 语句，它立即退出 `while` 循环的子句：

```python
>>> while True:
...     name = input('Please type your name: ')
...     if name == 'your name':
...         break
...
>>> print('Thank you!')
# Please type your name: your name
# Thank you!
```

## continue 语句

当程序执行达到 `continue` 语句时，程序执行立即跳回循环的开始。

```python
>>> while True:
...     name = input('Who are you? ')
...     if name != 'Joe':
...         continue
...     password = input('Password? (It is a fish.): ')
...     if password == 'swordfish':
...         break
...
>>> print('Access granted.')
# Who are you? Charles
# Who are you? Debora
# Who are you? Joe
# Password? (It is a fish.): swordfish
# Access granted.
```

## for 循环

`for` 循环遍历 `list`, `tuple`, `dictionary`, `set` 或 `string`:

```python
>>> pets = ['Bella', 'Milo', 'Loki']
>>> for pet in pets:
...     print(pet)
...
# Bella
# Milo
# Loki
```

## range() 函数

`range()` 函数返回一个数字序列。它从 0 开始，每次递增 1，并在指定数字之前停止：

```python
>>> for i in range(5):
...     print(f'Will stop at 5! or 4? ({i})')
...
# Will stop at 5! or 4? (0)
# Will stop at 5! or 4? (1)
# Will stop at 5! or 4? (2)
# Will stop at 5! or 4? (3)
# Will stop at 5! or 4? (4)
```

`range()` 函数还可以修改其 3 个默认参数。前两个将是 `start` 和 `stop` 值，第三个将是 `step` 参数。步长是每次迭代后变量增加的量。

```python
# range(start, stop, step)
>>> for i in range(0, 10, 2):
...    print(i)
...
# 0
# 2
# 4
# 6
# 8
```

你可以使用负数作为 `step` 参数，使 `for` 循环向下计数而不是向上计数。

```python
>>> for i in range(5, -1, -1):
...     print(i)
...
# 5
# 4
# 3
# 2
# 1
# 0
```

## for else 语句

这允许在循环完全执行时指定一个语句。仅当 `break` 条件可以在循环中发生时才使用：

```python
>>> for i in [1, 2, 3, 4, 5]:
...    if i == 3:
...        break
... else:
...    print("only executed when no item is equal to 3")
```

## 使用 sys.exit() 结束程序

`exit()` 函数允许退出 Python。

```python
>>> import sys

>>> while True:
...     feedback = input('Type exit to exit: ')
...     if feedback == 'exit':
...         print(f'You typed {feedback}.')
...         sys.exit()
...
# Type exit to exit: open
# Type exit to exit: close
# Type exit to exit: exit
# You typed exit
```
