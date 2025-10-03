---
title: 控制流
category: python
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 控制流

程序需要根据不同情况做出不同的决策，或者重复执行某些操作。这就是控制流(Control Flow)要解决的问题。

## if 语句 - 让程序做判断

### 💡 概念说明

`if` 语句让程序根据条件决定是否执行某段代码。就像生活中的"如果...就..."。

基本形式:
- `if` - 如果条件成立
- `elif` - 否则如果(可选,可多个)
- `else` - 否则(可选)

### 📝 代码示例

```python{1,4,6}
age = 18

if age >= 18:
    print("你可以考驾照了")  // 条件成立时执行
elif age >= 16:
    print("你可以骑电动车")  // 第一个条件不成立,检查这个
else:
    print("你还需要等几年")  // 所有条件都不成立时执行
```

运行结果会显示:`你可以考驾照了`

::: tip 提示
缩进(Indentation)很重要! Python 用缩进表示代码块,通常用 4 个空格或 1 个 Tab。
:::

**多个条件组合:**

```python{3-4}
score = 85

if score >= 60 and score < 90:  // 使用 and 连接两个条件
    print("成绩良好")
```

常用的条件运算符:
- `and` - 并且(两个条件都要满足)
- `or` - 或者(满足其中一个即可)
- `not` - 取反

### 💪 练习题

**练习 1**: 写一个程序判断一个数字是正数、负数还是零。

::: details 点击查看答案
```python
number = -5

if number > 0:
    print("这是正数")
elif number < 0:
    print("这是负数")
else:
    print("这是零")
```
:::

**练习 2**: 判断用户输入的密码是否正确(假设正确密码是 "123456")。

::: details 点击查看答案
```python
password = input("请输入密码: ")

if password == "123456":
    print("密码正确")
else:
    print("密码错误")
```
:::

## for 循环 - 遍历序列

### 💡 概念说明

`for` 循环用于遍历(Iterate)序列中的每个元素,自动处理每一项。

### 📝 代码示例

**遍历列表(List):**

```python{3-4}
fruits = ["苹果", "香蕉", "橙子"]

for fruit in fruits:  // fruit 会依次变成列表中的每个元素
    print(f"我喜欢吃{fruit}")
```

运行结果:
```
我喜欢吃苹果
我喜欢吃香蕉
我喜欢吃橙子
```

**使用 range() 函数:**

```python{1,4}
for i in range(5):  // range(5) 生成 0, 1, 2, 3, 4
    print(f"这是第 {i + 1} 次循环")
    
for i in range(1, 6):  // range(1, 6) 生成 1, 2, 3, 4, 5
    print(i)
```

`range()` 的三种用法:
- `range(5)` - 从 0 到 4
- `range(1, 6)` - 从 1 到 5
- `range(0, 10, 2)` - 从 0 到 9,步长为 2(即 0, 2, 4, 6, 8)

### 💪 练习题

**练习 1**: 计算 1 到 10 的总和。

::: details 点击查看答案
```python
total = 0

for i in range(1, 11):
    total = total + i

print(f"总和是: {total}")
```
:::

**练习 2**: 打印九九乘法表的前 3 行。

::: details 点击查看答案
```python
for i in range(1, 4):
    for j in range(1, 10):
        print(f"{i} × {j} = {i * j}", end="  ")
    print()  // 换行
```
:::

## while 循环 - 条件满足就继续

### 💡 概念说明

`while` 循环在条件为真时持续执行,直到条件变为假。适合不知道要循环多少次的情况。

### 📝 代码示例

**基本用法:**

```python{1,3-5}
count = 0

while count < 5:  // 当 count 小于 5 时持续执行
    print(f"count 的值是: {count}")
    count = count + 1  // 每次循环后 count 加 1
```

运行结果:
```
count 的值是: 0
count 的值是: 1
count 的值是: 2
count 的值是: 3
count 的值是: 4
```

::: warning 注意
如果条件永远为真,会造成无限循环(Infinite Loop)! 确保循环体内有改变条件的代码。
:::

**使用 break 提前退出:**

```python{5-6}
number = 1

while number <= 10:
    print(number)
    if number == 5:
        break  // 遇到 5 就退出循环
    number = number + 1
```

**使用 continue 跳过本次:**

```python{4-5}
number = 0

while number < 5:
    number = number + 1
    if number == 3:
        continue  // 跳过 3,继续下一次循环
    print(number)
```

### 💪 练习题

**练习 1**: 让用户输入密码,最多尝试 3 次,正确就退出。

::: details 点击查看答案
```python
attempts = 0
correct_password = "123456"

while attempts < 3:
    password = input("请输入密码: ")
    if password == correct_password:
        print("登录成功!")
        break
    else:
        attempts = attempts + 1
        print(f"密码错误,还剩 {3 - attempts} 次机会")
```
:::

**练习 2**: 计算从 1 累加到多少时总和会超过 100。

::: details 点击查看答案
```python
total = 0
number = 1

while total <= 100:
    total = total + number
    number = number + 1

print(f"累加到 {number - 1} 时,总和为 {total}")
```
:::

## 📌 小结

- **if 语句**: 根据条件决定是否执行代码,使用 `elif` 和 `else` 处理多种情况
- **for 循环**: 遍历序列或使用 `range()` 重复固定次数,适合已知循环次数的场景
- **while 循环**: 条件为真时持续执行,适合未知循环次数的场景,记得用 `break` 或改变条件避免无限循环