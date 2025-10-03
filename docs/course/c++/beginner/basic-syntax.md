---
title: 基本语法
category: c++
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 基本语法

在Python中,我们需要掌握四个最基础的操作:存储数据、显示数据、添加说明和调试程序。让我们逐个来学习。

## 定义变量(Variable)

💡 **概念说明**

变量就像一个带标签的盒子,用来存储数据。你给盒子起个名字,就能随时使用里面的内容。

### 📝 代码示例

```python{1-3}
name = "张三"
age = 25
price = 99.9
```

**运行说明**: 这段代码运行后不会显示任何内容,但数据已经存储好了。

::: tip 命名建议
- 使用英文字母、数字和下划线
- 不能以数字开头
- 建议使用有意义的英文单词:`user_name` 比 `a` 更容易理解
:::

### 💪 练习题

**练习1**: 创建三个变量,分别存储你的姓名、年龄和所在城市

<details>
<summary>查看答案</summary>

```python
my_name = "李四"
my_age = 20
city = "北京"
```

</details>

## 输出变量

💡 **概念说明**

使用`print()`函数(Function)可以将变量的内容显示在屏幕上。

### 📝 代码示例

```python{4-5}
name = "张三"
age = 25

print(name)
print(age)
```

**运行结果**:
```
张三
25
```

你也可以一次输出多个变量:

```python{4}
name = "张三"
age = 25

print("姓名:", name, "年龄:", age)
```

**运行结果**:
```
姓名: 张三 年龄: 25
```

### 💪 练习题

**练习2**: 输出练习1中创建的三个变量

<details>
<summary>查看答案</summary>

```python
my_name = "李四"
my_age = 20
city = "北京"

print("我叫", my_name, "今年", my_age, "岁,住在", city)
```

</details>

## 增加注释(Comment)

💡 **概念说明**

注释是写给人看的说明文字,程序运行时会自动忽略。就像给代码写的备忘录。

### 📝 代码示例

```python{1,4,7-9}
# 这是单行注释,用井号开头

name = "张三"  # 也可以写在代码后面

age = 25

"""
这是多行注释
可以写很多行说明
"""
print(name, age)
```

**运行结果**:
```
张三 25
```

::: tip 什么时候需要注释?
- 解释复杂的逻辑
- 说明某个数字的含义(如 `tax_rate = 0.13  # 增值税率`)
- 暂时不想运行某段代码时,在前面加`#`
:::

### 💪 练习题

**练习3**: 为你的代码添加注释,说明每个变量的用途

<details>
<summary>查看答案</summary>

```python
# 存储用户的基本信息
my_name = "李四"  # 用户姓名
my_age = 20       # 用户年龄
city = "北京"     # 所在城市

# 输出用户信息
print("我叫", my_name, "今年", my_age, "岁,住在", city)
```

</details>

## 日志打印

💡 **概念说明**

`print()`就是最基本的日志打印方式,帮助你查看程序运行过程中的数据变化。

### 📝 代码示例

```python{7,10,13}
# 计算商品总价
price = 100
quantity = 3

# 打印初始值
print("单价:", price)
print("数量:", quantity)

# 计算总价
total = price * quantity
print("总价:", total)

# 应用折扣
discount = 0.9
final_price = total * discount
print("折后价:", final_price)
```

**运行结果**:
```
单价: 100
数量: 3
总价: 300
折后价: 270.0
```

::: warning 调试技巧
当程序结果不对时,在关键位置添加`print()`,检查每一步的数据是否正确。
:::

### 💪 练习题

**练习4**: 编写一个程序,计算矩形面积(长×宽),并用`print()`显示每一步的值

<details>
<summary>查看答案</summary>

```python
# 定义矩形的长和宽
length = 10
width = 5
print("长度:", length)
print("宽度:", width)

# 计算面积
area = length * width
print("面积:", area)
```

</details>

## 📌 小结

- **变量**: 使用`=`存储数据,如`name = "张三"`
- **输出**: 使用`print()`显示内容
- **注释**: 使用`#`添加单行说明,使用`""" """`添加多行说明
- **调试**: 通过`print()`查看程序运行中的数据状态