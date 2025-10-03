---
title: 函数与方法
category: python
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 函数与方法

## 💡 什么是函数(Function)

函数就像一个可以重复使用的"工具盒"。你把想要重复执行的代码放进去,需要的时候喊一声它的名字,它就会帮你完成任务。

**为什么需要函数?**
- 避免重复写相同的代码
- 让代码更容易阅读和维护
- 可以随时调用,想用几次就用几次

## 定义函数(Define Function)

### 📝 基本语法

```python{1}
def greet():
    print("你好,欢迎学习Python!")
```

**语法结构:**
- `def` - 告诉Python"我要定义一个函数"
- `greet` - 函数的名字(你可以自己取)
- `()` - 小括号(暂时留空,后面会用到)
- `:` - 冒号,表示函数内容开始
- 缩进的代码 - 函数要执行的具体任务

::: tip 提示
函数定义后不会自动运行,就像你买了一个工具箱但还没打开使用。
:::

### 📝 完整示例

```python{1,5}
def greet():
    print("你好,欢迎学习Python!")

# 调用函数
greet()
```

**运行结果:**
```
你好,欢迎学习Python!
```

## 带参数的函数(Function with Parameters)

### 💡 什么是参数(Parameter)

参数就像函数的"输入口",可以让函数根据不同的输入做不同的事情。

```python{1,5,6}
def greet(name):
    print(f"你好,{name}!")

# 调用时传入不同的名字
greet("小明")
greet("小红")
```

**运行结果:**
```
你好,小明!
你好,小红!
```

### 📝 多个参数示例

```python{1,5}
def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add_numbers(5, 3)
```

**运行结果:**
```
5 + 3 = 8
```

## 返回值(Return Value)

### 💡 为什么需要返回值

有时候我们不只是想让函数打印结果,还想把结果保存下来继续使用。这就需要用到 `return`。

```python{3,6,7}
def add_numbers(a, b):
    result = a + b
    return result

# 把函数的结果保存到变量中
total = add_numbers(10, 20)
print(f"计算结果是: {total}")
```

**运行结果:**
```
计算结果是: 30
```

::: warning 注意
`return` 和 `print` 的区别:
- `print` 只是显示结果,不能保存
- `return` 把结果返回,可以保存到变量中继续使用
:::

### 📝 实用示例

```python{1-3,6-8}
def calculate_total(price, quantity):
    total = price * quantity
    return total

# 计算购物总价
apple_total = calculate_total(5, 10)
banana_total = calculate_total(3, 8)
print(f"苹果总价: {apple_total}元, 香蕉总价: {banana_total}元")
```

**运行结果:**
```
苹果总价: 50元, 香蕉总价: 24元
```

## 方法(Method)

### 💡 函数 vs 方法

**方法(Method)** 是"属于"某个对象的函数。Python中的很多数据类型都自带了一些方法。

```python{2,5}
# 字符串的方法
message = "hello"
print(message.upper())

# 列表的方法
numbers = [3, 1, 2]
numbers.sort()
print(numbers)
```

**运行结果:**
```
HELLO
[1, 2, 3]
```

::: tip 提示
方法的调用方式是: `对象.方法名()`
:::

## 💪 练习题

### 练习 1: 自我介绍函数

创建一个函数,输入姓名和年龄,打印自我介绍。

<details>
<summary>点击查看答案</summary>

```python
def introduce(name, age):
    print(f"我叫{name},今年{age}岁")

introduce("张三", 25)
introduce("李四", 30)
```

**运行结果:**
```
我叫张三,今年25岁
我叫李四,今年30岁
```

</details>

### 练习 2: 计算器函数

创建一个函数,计算两个数字的乘积并返回结果。

<details>
<summary>点击查看答案</summary>

```python
def multiply(x, y):
    return x * y

result1 = multiply(4, 5)
result2 = multiply(7, 8)

print(f"4 × 5 = {result1}")
print(f"7 × 8 = {result2}")
```

**运行结果:**
```
4 × 5 = 20
7 × 8 = 56
```

</details>

## 📌 小结

- **定义函数**: 使用 `def 函数名():` 创建可重复使用的代码块
- **调用函数**: 通过 `函数名()` 来执行函数
- **参数(Parameter)**: 让函数接收输入,使其更灵活
- **返回值(Return)**: 用 `return` 把结果返回,方便后续使用
- **方法(Method)**: 属于对象的函数,通过 `对象.方法名()` 调用