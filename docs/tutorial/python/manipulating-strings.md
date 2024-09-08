---
title: Python 字符串操作
order: 9
description: split() 方法将字符串分割
---
# 字符串操作

## 转义字符

通过键入反斜杠 `\` 后跟要插入的字符来创建转义字符。

| 转义字符         | 显示为                |
| ---------------- | -------------------- |
| `\'`             | 单引号               |
| `\"`             | 双引号               |
| `\t`             | 制表符               |
| `\n`             | 换行符               |
| `\\`             | 反斜杠               |
| `\b`             | 退格符               |
| `\ooo`           | 八进制值             |
| `\r`             | 回车符               |

```python
>>> print("Hello there!\nHow are you?\nI\'m doing fine.")
# Hello there!
# How are you?
# I'm doing fine.
```

## 原始字符串

原始字符串完全忽略所有转义字符，并打印出字符串中出现的任何反斜杠。

```python
>>> print(r"Hello there!\nHow are you?\nI\'m doing fine.")
# Hello there!\nHow are you?\nI\'m doing fine.
```
## 多行字符串

```python
>>> print(
... """Dear Alice,
...
... Eve's cat has been arrested for catnapping,
... cat burglary, and extortion.
...
... Sincerely,
... Bob"""
... )

# Dear Alice,

# Eve's cat has been arrested for catnapping,
# cat burglary, and extortion.

# Sincerely,
# Bob
```

## 索引和切片字符串

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

### Indexing

```python
>>> spam = 'Hello world!'

>>> spam[0]
# 'H'

>>> spam[4]
# 'o'

>>> spam[-1]
# '!'
```

### Slicing

```python
>>> spam = 'Hello world!'

>>> spam[0:5]
# 'Hello'

>>> spam[:5]
# 'Hello'

>>> spam[6:]
# 'world!'

>>> spam[6:-1]
# 'world'

>>> spam[:-1]
# 'Hello world'

>>> spam[::-1]
# '!dlrow olleH'

>>> fizz = spam[0:5]
>>> fizz
# 'Hello'
```

## in 和 not in 操作符

```python
>>> 'Hello' in 'Hello World'
# True

>>> 'Hello' in 'Hello'
# True

>>> 'HELLO' in 'Hello World'
# False

>>> '' in 'spam'
# True

>>> 'cats' not in 'cats and dogs'
# False
```

## upper()、lower() 和 title()

将字符串转换为大写、小写和标题格式：

```python
>>> greet = 'Hello world!'
>>> greet.upper()
# 'HELLO WORLD!'

>>> greet.lower()
# 'hello world!'

>>> greet.title()
# 'Hello World!'
```

## isupper() 和 islower() 方法

在判断字符串是否为大写或小写后返回 `True` 或 `False`：

```python
>>> spam = 'Hello world!'
>>> spam.islower()
# False

>>> spam.isupper()
# False

>>> 'HELLO'.isupper()
# True

>>> 'abc12345'.islower()
# True

>>> '12345'.islower()
# False

>>> '12345'.isupper()
# False
```

## isX 字符串方法

| 方法        | 描述                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| isalpha()   | 如果字符串只包含字母，则返回 `True`。                                                                                           |
| isalnum()   | 如果字符串只包含字母和数字，则返回 `True`。                                                                                     |
| isdecimal() | 如果字符串只包含数字，则返回 `True`。                                                                                           |
| isspace()   | 如果字符串只包含空格、制表符和换行符，则返回 `True`。                                                                           |
| istitle()   | 如果字符串只包含以大写字母开头且后续字符均为小写字母的单词，则返回 `True`。                                                     |

## startswith() 和 endswith()

```python
>>> 'Hello world!'.startswith('Hello')
# True

>>> 'Hello world!'.endswith('world!')
# True

>>> 'abc123'.startswith('abcdef')
# False

>>> 'abc123'.endswith('12')
# False

>>> 'Hello world!'.startswith('Hello world!')
# True

>>> 'Hello world!'.endswith('Hello world!')
# True
```

## join() and split()

### join()

```python
>>> ''.join(['My', 'name', 'is', 'Simon'])
'MynameisSimon'

>>> ', '.join(['cats', 'rats', 'bats'])
# 'cats, rats, bats'

>>> ' '.join(['My', 'name', 'is', 'Simon'])
# 'My name is Simon'

>>> 'ABC'.join(['My', 'name', 'is', 'Simon'])
# 'MyABCnameABCisABCSimon'
```

### split()
`split()` 方法将一个 `字符串` 分割成一个 `列表`。默认情况下，它会使用空格来分隔项目，但你也可以设置其他字符来分隔项目：

```python
>>> 'My name is Simon'.split()
# ['My', 'name', 'is', 'Simon']

>>> 'MyABCnameABCisABCSimon'.split('ABC')
# ['My', 'name', 'is', 'Simon']

>>> 'My name is Simon'.split('m')
# ['My na', 'e is Si', 'on']

>>> ' My  name is  Simon'.split()
# ['My', 'name', 'is', 'Simon']

>>> ' My  name is  Simon'.split(' ')
# ['', 'My', '', 'name', 'is', '', 'Simon']
```

## Justifying text with rjust(), ljust() and center()

```python
>>> 'Hello'.rjust(10)
# '     Hello'

>>> 'Hello'.rjust(20)
# '               Hello'

>>> 'Hello World'.rjust(20)
# '         Hello World'

>>> 'Hello'.ljust(10)
# 'Hello     '

>>> 'Hello'.center(20)
# '       Hello       '
```

`rjust()` 和 `ljust()` 的第二个可选参数将指定一个填充字符，而不是空格字符：

```python
>>> 'Hello'.rjust(20, '*')
# '***************Hello'

>>> 'Hello'.ljust(20, '-')
# 'Hello---------------'

>>> 'Hello'.center(20, '=')
# '=======Hello========'
```

## 使用 strip()、rstrip() 和 lstrip() 删除空白字符

```python
>>> spam = '    Hello World     '
>>> spam.strip()
# 'Hello World'

>>> spam.lstrip()
# 'Hello World     '

>>> spam.rstrip()
# '    Hello World'

>>> spam = 'SpamSpamBaconSpamEggsSpamSpam'
>>> spam.strip('ampS')
# 'BaconSpamEggs'
```

## 计数方法

计算字符串中出现的给定字符或子字符串的次数。可以选择提供开始和结束索引。

```python
>>> sentence = 'one sheep two sheep three sheep four'
>>> sentence.count('sheep')
# 3

>>> sentence.count('e')
# 9

>>> sentence.count('e', 6)
# 8
# returns count of e after 'one sh' i.e 6 chars since beginning of string

>>> sentence.count('e', 7)
# 7
```
## 替换方法

将所有出现的子字符串替换为另一个子字符串。可以选择提供第三个参数来限制替换的次数。返回一个新的字符串。

```python
>>> text = "Hello, world!"
>>> text.replace("world", "planet")
# 'Hello, planet!'

>>> fruits = "apple, banana, cherry, apple"
>>> fruits.replace("apple", "orange", 1)
# 'orange, banana, cherry, apple'

>>> sentence = "I like apples, Apples are my favorite fruit"
>>> sentence.replace("apples", "oranges")
# 'I like oranges, Apples are my favorite fruit'
```
