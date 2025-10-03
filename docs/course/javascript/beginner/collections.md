---
title: 数组
category: javascript
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 集合(Set)

## 💡 什么是集合

集合(Set)是Python中用来存储**不重复**元素的数据类型。你可以把它想象成一个自动去重的容器——往里面放相同的东西,它只会保留一份。

集合主要有两个特点:
- **元素唯一**: 自动去除重复元素
- **无序性**: 不像列表那样按顺序排列

::: tip 集合 vs 列表
列表(List)可以有重复元素,集合(Set)会自动去重。如果你需要存储不重复的数据,集合是更好的选择。
:::

## 创建集合

### 使用花括号创建

```python{1,4,7}
# 创建一个水果集合
fruits = {'apple', 'banana', 'orange'}
print(fruits)
# 输出: {'apple', 'banana', 'orange'}

# 自动去重
numbers = {1, 2, 2, 3, 3, 3}
print(numbers)
# 输出: {1, 2, 3}
```

### 使用set()函数创建

```python{1,4,7,10}
# 从列表创建集合
my_list = [1, 2, 2, 3, 4, 4]
my_set = set(my_list)
print(my_set)  # 输出: {1, 2, 3, 4}

# 从字符串创建集合
text = "hello"
char_set = set(text)
print(char_set)  # 输出: {'h', 'e', 'l', 'o'}

# 创建空集合(注意:{}创建的是字典)
empty_set = set()
print(empty_set)  # 输出: set()
```

::: warning 注意
`{}`创建的是空字典,不是空集合! 要创建空集合必须用`set()`。
:::

## 查看集合元素

### 检查元素是否存在

```python{4,7}
fruits = {'apple', 'banana', 'orange'}

# 使用in关键字
print('apple' in fruits)     # 输出: True
print('grape' in fruits)     # 输出: False

# 使用not in
print('grape' not in fruits) # 输出: True
```

### 获取集合长度

```python{4}
fruits = {'apple', 'banana', 'orange'}

# 使用len()函数
print(len(fruits))  # 输出: 3
```

::: tip 为什么集合不能用索引
集合是无序的,所以不能像列表那样用`fruits[0]`来获取元素。如果你需要按顺序访问元素,应该使用列表(List)。
:::

## 修改集合

### 添加单个元素

```python{4,7}
fruits = {'apple', 'banana'}

# 使用add()添加一个元素
fruits.add('orange')
print(fruits)  # 输出: {'apple', 'banana', 'orange'}

# 添加已存在的元素(不会报错,但也不会重复添加)
fruits.add('apple')
print(fruits)  # 输出: {'apple', 'banana', 'orange'}
```

### 添加多个元素

```python{4,8}
fruits = {'apple', 'banana'}

# 使用update()添加多个元素
fruits.update(['orange', 'grape', 'apple'])
print(fruits)
# 输出: {'apple', 'banana', 'orange', 'grape'}

# 也可以用另一个集合来更新
more_fruits = {'mango', 'kiwi'}
fruits.update(more_fruits)
print(fruits)
# 输出: {'apple', 'banana', 'orange', 'grape', 'mango', 'kiwi'}
```

### 删除元素

```python{4,8,12}
fruits = {'apple', 'banana', 'orange'}

# 使用remove()删除(如果元素不存在会报错)
fruits.remove('banana')
print(fruits)  # 输出: {'apple', 'orange'}

# 使用discard()删除(元素不存在也不会报错)
fruits.discard('grape')  # 不会报错
print(fruits)  # 输出: {'apple', 'orange'}

# 使用pop()随机删除一个元素
removed = fruits.pop()
print(f"删除了: {removed}")
print(fruits)

# 使用clear()清空集合
fruits.clear()
print(fruits)  # 输出: set()
```

::: warning remove() vs discard()
- `remove()`: 删除不存在的元素会报错
- `discard()`: 删除不存在的元素不会报错(更安全)
:::

## 集合运算

### 交集、并集、差集

```python{4,7,10,13}
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# 交集(共同拥有的元素)
print(set1 & set2)  # 输出: {3, 4}

# 并集(所有元素,自动去重)
print(set1 | set2)  # 输出: {1, 2, 3, 4, 5, 6}

# 差集(set1有但set2没有的)
print(set1 - set2)  # 输出: {1, 2}

# 对称差集(不同时存在于两个集合的元素)
print(set1 ^ set2)  # 输出: {1, 2, 5, 6}
```

## 💪 练习题

### 练习1: 去除列表中的重复元素
有一个包含重复数字的列表,请使用集合去除重复元素,然后转回列表。

```python
numbers = [1, 2, 3, 2, 4, 1, 5, 3]
# 你的代码写在这里
```

::: details 查看答案
```python
numbers = [1, 2, 3, 2, 4, 1, 5, 3]

# 转换为集合去重,再转回列表
unique_numbers = list(set(numbers))
print(unique_numbers)  # 输出: [1, 2, 3, 4, 5] (顺序可能不同)
```
:::

### 练习2: 找出两个班级的共同学生
A班和B班各有一些学生,找出同时在两个班的学生。

```python
class_a = {'张三', '李四', '王五', '赵六'}
class_b = {'李四', '王五', '孙七', '周八'}
# 你的代码写在这里
```

::: details 查看答案
```python
class_a = {'张三', '李四', '王五', '赵六'}
class_b = {'李四', '王五', '孙七', '周八'}

# 使用交集找出共同学生
common_students = class_a & class_b
print(f"同时在两个班的学生: {common_students}")
# 输出: 同时在两个班的学生: {'李四', '王五'}

# 也可以用intersection()方法
common_students2 = class_a.intersection(class_b)
print(common_students2)
```
:::

## 📌 小结

- 集合使用`{}`或`set()`创建,会**自动去除重复元素**
- 集合是**无序**的,不能使用索引访问
- 使用`add()`添加单个元素,`update()`添加多个元素
- 使用`remove()`或`discard()`删除元素,后者更安全
- 集合支持交集(`&`)、并集(`|`)、差集(`-`)等运算