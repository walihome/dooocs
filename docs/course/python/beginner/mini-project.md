---
title: 动手实践
category: python
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 动手实践

恭喜你!你已经掌握了 Python 编程中最常用的核心内容。这些基础知识——**变量(Variable)**、**数据类型(Data Type)**、**条件判断(Conditional)**、**循环(Loop)**和**函数(Function)**——构成了 90% 日常编程工作的基础。

但是,光看懂代码还不够。根据费曼学习法,只有当你能**独立完成一个真实需求**时,才算真正学会。现在,让我们通过一个实际项目来巩固所学知识。

## 🎯 实战项目:个人记账小助手

我们要开发一个简单的记账程序,它能够:
- 记录每笔收入和支出
- 计算总余额
- 显示所有交易记录

这个项目会用到你学过的所有知识点。

## 💡 需求分析

在动手写代码之前,先思考一下:
- 需要用什么数据结构存储交易记录?(列表!)
- 如何区分收入和支出?(条件判断!)
- 怎么让用户持续输入直到想退出?(循环!)
- 如何让代码更清晰易读?(函数!)

## 📝 完整代码实现

```python{1-3,8-18,23-31,36-45}
# 个人记账小助手

# 存储所有交易记录
transactions = []

# 添加交易记录的函数
def add_transaction():
    print("\n--- 记录一笔交易 ---")
    description = input("请输入交易描述: ")
    amount = float(input("请输入金额: "))
    transaction_type = input("收入还是支出? (输入'收入'或'支出'): ")
    
    if transaction_type == "收入":
        transactions.append({"描述": description, "金额": amount, "类型": "收入"})
    elif transaction_type == "支出":
        transactions.append({"描述": description, "金额": -amount, "类型": "支出"})
    else:
        print("输入错误!请输入'收入'或'支出'")

# 查看所有记录的函数
def show_transactions():
    print("\n--- 所有交易记录 ---")
    if len(transactions) == 0:
        print("还没有任何记录")
    else:
        for i in range(len(transactions)):
            t = transactions[i]
            print(f"{i+1}. {t['描述']} - {t['类型']}: {abs(t['金额'])}元")

# 计算余额的函数
def calculate_balance():
    total = 0
    for t in transactions:
        total += t["金额"]
    print(f"\n当前余额: {total}元")

# 主程序
while True:
    print("\n=== 记账小助手 ===")
    print("1. 添加交易")
    print("2. 查看记录")
    print("3. 查看余额")
    print("4. 退出")
    
    choice = input("请选择操作(1-4): ")
    
    if choice == "1":
        add_transaction()
    elif choice == "2":
        show_transactions()
    elif choice == "3":
        calculate_balance()
    elif choice == "4":
        print("感谢使用!再见!")
        break
    else:
        print("无效选择,请重新输入")
```

## 🎮 运行效果

当你运行这个程序时,会看到这样的交互:

```bash
=== 记账小助手 ===
1. 添加交易
2. 查看记录
3. 查看余额
4. 退出
请选择操作(1-4): 1

--- 记录一笔交易 ---
请输入交易描述: 工资
请输入金额: 5000
收入还是支出? (输入'收入'或'支出'): 收入

=== 记账小助手 ===
1. 添加交易
2. 查看记录
3. 查看余额
4. 退出
请选择操作(1-4): 1

--- 记录一笔交易 ---
请输入交易描述: 午餐
请输入金额: 30
收入还是支出? (输入'收入'或'支出'): 支出

=== 记账小助手 ===
1. 添加交易
2. 查看记录
3. 查看余额
4. 退出
请选择操作(1-4): 3

当前余额: 4970.0元
```

## 💪 练习任务

### 任务1:添加删除功能

为程序添加删除交易记录的功能。提示:可以让用户输入要删除的记录编号。

::: details 参考答案
```python{2-10}
def delete_transaction():
    show_transactions()
    if len(transactions) == 0:
        return
    
    index = int(input("请输入要删除的记录编号: ")) - 1
    if 0 <= index < len(transactions):
        transactions.pop(index)
        print("删除成功!")
    else:
        print("无效的编号")

# 在主程序的菜单中添加:
# print("5. 删除记录")
# 并在 choice 判断中添加对应的 elif 分支
```
:::

### 任务2:统计收支情况

添加一个功能,分别统计总收入和总支出。

::: details 参考答案
```python{2-11}
def show_summary():
    income = 0
    expense = 0
    for t in transactions:
        if t["金额"] > 0:
            income += t["金额"]
        else:
            expense += abs(t["金额"])
    
    print(f"\n总收入: {income}元")
    print(f"总支出: {expense}元")
    print(f"余额: {income - expense}元")
```
:::

## 📌 小结

通过这个实战项目,你完成了:
- ✅ 使用**列表(List)**和**字典(Dictionary)**存储结构化数据
- ✅ 用**函数(Function)**组织代码,让程序结构更清晰
- ✅ 通过**while 循环**实现持续交互,用**for 循环**遍历数据
- ✅ 运用**条件判断(if-elif-else)**处理不同的用户选择

::: tip 🎉 你已经是真正的程序员了!
这个小项目虽然简单,但它包含了真实软件的核心要素:数据存储、用户交互、逻辑处理。接下来的进阶内容,都是在这个基础上的延伸和优化。继续保持这种动手实践的学习方式,你会进步得更快!
:::