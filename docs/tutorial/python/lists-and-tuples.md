---
title: Python 列表和元组
order: 5
description: 在Python中，列表是用于存储数据集合的4种数据类型之一。
---


# Python 列表


列表是Python中用于存储数据集合的4种数据类型之一。

```python
['John', 'Peter', 'Debora', 'Charles']
```

## 使用索引获取值

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']

>>> furniture[0]
# 'table'

>>> furniture[1]
# 'chair'

>>> furniture[2]
# 'rack'

>>> furniture[3]
# 'shelf'
```

## 负索引

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']

>>> furniture[-1]
# 'shelf'

>>> furniture[-3]
# 'chair'

>>> f'The {furniture[-1]} is bigger than the {furniture[-3]}'
# 'The shelf is bigger than the chair'
```

## 使用切片获取子列表

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']

>>> furniture[0:4]
# ['table', 'chair', 'rack', 'shelf']

>>> furniture[1:3]
# ['chair', 'rack']

>>> furniture[0:-1]
# ['table', 'chair', 'rack']

>>> furniture[:2]
# ['table', 'chair']

>>> furniture[1:]
# ['chair', 'rack', 'shelf']

>>> furniture[:]
# ['table', 'chair', 'rack', 'shelf']
```

切片整个列表将执行复制：

```python
>>> spam2 = spam[:]
# ['cat', 'bat', 'rat', 'elephant']

>>> spam.append('dog')
>>> spam
# ['cat', 'bat', 'rat', 'elephant', 'dog']

>>> spam2
# ['cat', 'bat', 'rat', 'elephant']
```

## 获取列表长度

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> len(furniture)
# 4
```

## 使用索引更改值

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']

>>> furniture[0] = 'desk'
>>> furniture
# ['desk', 'chair', 'rack', 'shelf']

>>> furniture[2] = furniture[1]
>>> furniture
# ['desk', 'chair', 'chair', 'shelf']

>>> furniture[-1] = 'bed'
>>> furniture
# ['desk', 'chair', 'chair', 'bed']
```

## 连接和复制

```python
>>> [1, 2, 3] + ['A', 'B', 'C']
# [1, 2, 3, 'A', 'B', 'C']

>>> ['X', 'Y', 'Z'] * 3
# ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']

>>> my_list = [1, 2, 3]
>>> my_list = my_list + ['A', 'B', 'C']
>>> my_list
# [1, 2, 3, 'A', 'B', 'C']
```

## 使用 for 循环遍历列表

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']

>>> for item in furniture:
...     print(item)
# table
# chair
# rack
# shelf
```

## 在循环中使用 enumerate() 获取索引

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']

>>> for index, item in enumerate(furniture):
...     print(f'index: {index} - item: {item}')
# index: 0 - item: table
# index: 1 - item: chair
# index: 2 - item: rack
# index: 3 - item: shelf
```

## 使用 zip() 循环遍历多个列表

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> price = [100, 50, 80, 40]

>>> for item, amount in zip(furniture, price):
...     print(f'The {item} costs ${amount}')
# The table costs $100
# The chair costs $50
# The rack costs $80
# The shelf costs $40
```

## in 和 not in 运算符

```python
>>> 'rack' in ['table', 'chair', 'rack', 'shelf']
# True

>>> 'bed' in ['table', 'chair', 'rack', 'shelf']
# False

>>> 'bed' not in furniture
# True

>>> 'rack' not in furniture
# False
```

## 多重赋值技巧

多重赋值技巧是一种快捷方式，它允许你在一行代码中将多个变量分配给列表中的值。所以，你不必这样做：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> table = furniture[0]
>>> chair = furniture[1]
>>> rack = furniture[2]
>>> shelf = furniture[3]
```

你可以这样写：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> table, chair, rack, shelf = furniture

>>> table
# 'table'

>>> chair
# 'chair'

>>> rack
# 'rack'

>>> shelf
# 'shelf'
```

多重赋值技巧也可以用于交换两个变量的值：

```python
>>> a, b = 'table', 'chair'
>>> a, b = b, a
>>> print(a)
# chair

>>> print(b)
# table
```

## index 方法

`index` 方法允许你通过传递其名称来查找值的索引：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> furniture.index('chair')
# 1
```

## 添加值

### append()

`append` 将一个元素添加到 `list` 的末尾：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> furniture.append('bed')
>>> furniture
# ['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert` 将一个元素添加到 `list` 的给定位置：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> furniture.insert(1, 'bed')
>>> furniture
# ['table', 'bed', 'chair', 'rack', 'shelf']
```

## 删除值

### del()

`del` 使用索引删除一个项目：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> del furniture[2]
>>> furniture
# ['table', 'chair', 'shelf']

>>> del furniture[2]
>>> furniture
# ['table', 'chair']
```

### remove()

`remove` 使用实际值删除一个项目：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> furniture.remove('chair')
>>> furniture
# ['table', 'rack', 'shelf']
```

> 删除重复的项
> 如果值在列表中多次出现，则仅删除第一次出现的值。


### pop()

默认情况下，`pop` 将删除并返回列表的最后一项。你还可以传递元素的索引作为可选参数：

```python
>>> animals = ['cat', 'bat', 'rat', 'elephant']

>>> animals.pop()
'elephant'

>>> animals
['cat', 'bat', 'rat']

>>> animals.pop(0)
'cat'

>>> animals
['bat', 'rat']
```

## 使用 sort() 排序

```python
>>> numbers = [2, 5, 3.14, 1, -7]
>>> numbers.sort()
>>> numbers
# [-7, 1, 2, 3.14, 5]

furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
# ['chair', 'rack', 'shelf', 'table']
```

你可以传递 `True` 作为 `reverse` 关键字参数，以使 `sort()` 按相反顺序排序：

```python
>>> furniture.sort(reverse=True)
>>> furniture
# ['table', 'shelf', 'rack', 'chair']
```

如果需要按常规字母顺序排序，请在 `sort()` 方法调用中传递 `str.lower` 作为 `key` 关键字参数：

```python
>>> letters = ['a', 'z', 'A', 'Z']
>>> letters.sort(key=str.lower)
>>> letters
# ['a', 'A', 'z', 'Z']
```

你可以使用内置函数 `sorted` 返回一个新的列表：

```python
>>> furniture = ['table', 'chair', 'rack', 'shelf']
>>> sorted(furniture)
# ['chair', 'rack', 'shelf', 'table']
```

## 元组数据类型


  
    [元组与列表的区别](https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each)
  
    元组和列表的主要区别在于，<code>元组</code>是<i>不可变</i>对象，而<code>列表</code>是<i>可变</i>的。这意味着元组不能被更改，而列表可以被修改。元组比列表更节省内存。


```python
>>> furniture = ('table', 'chair', 'rack', 'shelf')

>>> furniture[0]
# 'table'

>>> furniture[1:3]
# ('chair', 'rack')

>>> len(furniture)
# 4
```

元组与列表的主要区别在于，元组，与字符串一样，是不可变的。

## 在 list() 和 tuple() 之间转换

```python
>>> tuple(['cat', 'dog', 5])
# ('cat', 'dog', 5)

>>> list(('cat', 'dog', 5))
# ['cat', 'dog', 5]

>>> list('hello')
# ['h', 'e', 'l', 'l', 'o']
```
