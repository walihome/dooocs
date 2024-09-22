---
title: Python 字符串格式化
order: 10
description: 如果您使用的是 Python 3.6 及以上版本，推荐使用 f-字符串来格式化字符串。
---
# 字符串格式化
  
> 来自 [Python 3 文档](https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting)

## 操作符

> 更推荐使用字符串字面量
> 对于新代码，强烈推荐使用 [str.format](#strformat) 或 [格式化字符串字面量](#formatted-string-literals-or-f-strings) (Python 3.6+) 而不是操作符。

```python
>>> name = 'Pete'
>>> 'Hello %s' % name
# "Hello Pete"
```

我们可以使用 `%d` 格式说明符将 int 值转换为字符串：

```python
>>> num = 5
>>> 'I have %d apples' % num
# "I have 5 apples"
```

## str.format

Python 3 引入了一种新的字符串格式化方式，后来被回移植到 Python 2.7。这使得字符串格式化的语法更加规范。

```python
>>> name = 'John'
>>> age = 20

>>> "Hello I'm {}, my age is {}".format(name, age)
# "Hello I'm John, my age is 20"

>>> "Hello I'm {0}, my age is {1}".format(name, age)
# "Hello I'm John, my age is 20"
```
## 格式化字符串字面量或f-Strings

如果您使用的是Python 3.6+，推荐使用字符串`f-Strings`来格式化字符串。

来自[Python 3文档](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)

格式化字符串字面量或f-string是以`f`或`F`为前缀的字符串字面量。这些字符串可以包含替换字段，这些字段是由花括号{}分隔的表达式。虽然其他字符串字面量总是具有恒定值，但格式化字符串实际上是在运行时计算的表达式。

```python
>>> name = 'Elizabeth'
>>> f'Hello {name}!'
# 'Hello Elizabeth!'
```

它甚至可以进行内联运算：

```python
>>> a = 5
>>> b = 10
>>> f'Five plus ten is {a + b} and not {2 * (a + b)}.'
# 'Five plus ten is 15 and not 30.'
```

### 多行 f-Strings

```python
>>> name = 'Robert'
>>> messages = 12
>>> (
... f'Hi, {name}. '
... f'You have {messages} unread messages'
... )
# 'Hi, Robert. You have 12 unread messages'
```

### `=` 指定符

这将打印表达式及其值：

```python
>>> from datetime import datetime
>>> now = datetime.now().strftime("%b/%d/%Y - %H:%M:%S")
>>> f'date and time: {now=}'
# "date and time: now='Nov/14/2022 - 20:50:01'"
```

### 添加空格或字符

```python
>>> f"{name.upper() = :-^20}"
#  'name.upper()  -------ROBERT-------'

>>> f"{name.upper() = :^20}"
# 'name.upper()        ROBERT       '

>>>f"{name.upper() = :20}"
# 'name.upper()  ROBERT'
```
## 数字格式化

添加千位分隔符

```python
>>> a = 10000000
>>> f"{a:,}"
# '10,000,000'
```

四舍五入

```python
>>> a = 3.1415926
>>> f"{a:.2f}"
# '3.14'
```

显示为百分比

```python
>>> a = 0.816562
>>> f"{a:.2%}"
# '81.66%'
```
### 数字格式化表

| 数字        | 格式    | 输出      | 描述                                         |
| ----------- | ------- | --------- | -------------------------------------------- |
| 3.1415926   | :.2f    | 3.14      | 格式化为2位小数的浮点数                      |
| 3.1415926   | :+.2f   | +3.14     | 格式化为带符号的2位小数的浮点数              |
| -1          | :+.2f   | -1.00     | 格式化为带符号的2位小数的浮点数              |
| 2.71828     | :.0f    | 3         | 格式化为无小数位的浮点数                     |
| 4           | :0>2d   | 04        | 用零填充数字（左填充，宽度为2）              |
| 4           | :x<4d   | 4xxx      | 用x填充数字（右填充，宽度为4）               |
| 10          | :x<4d   | 10xx      | 用x填充数字（右填充，宽度为4）               |
| 1000000     | :,      | 1,000,000 | 用逗号分隔的数字格式                         |
| 0.35        | :.2%    | 35.00%    | 格式化为百分比                               |
| 1000000000  | :.2e    | 1.00e+09  | 指数表示法                                   |
| 11          | :11d    | 11        | 右对齐（默认，宽度为10）                     |
| 11          | :<11d   | 11        | 左对齐（宽度为10）                           |
| 11          | :^11d   | 11        | 居中对齐（宽度为10）                         |

## 模板字符串

一种更简单且功能较弱的机制，但在处理用户生成的字符串时推荐使用。由于其复杂性较低，模板字符串是更安全的选择。

```python
>>> from string import Template
>>> name = 'Elizabeth'
>>> t = Template('Hey $name!')
>>> t.substitute(name=name)
# 'Hey Elizabeth!'
```
