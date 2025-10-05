---
title: Python 速记表
sidebar: false
single: true
order: 5
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `print("Hello, World!")`,
        language: 'python'
      },
      {
        title: '输入输出',
        code: `# 输出
print("Hello, World!")
print("Name:", name, "Age:", age)
print(f"Hello, {name}")  # f-string
# 输入
name = input("Enter your name: ")
age = int(input("Enter your age: "))`,
        language: 'python'
      },
      {
        title: '注释',
        code: `# 单行注释
"""
多行注释（文档字符串）
可以换行
"""
def function():
    """
    函数文档注释
    Args:
        param: 参数说明
    Returns:
        返回值说明
    """
    pass`,
        language: 'python'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '声明方式',
        code: `x = 10
name = "Alice"
is_valid = True
# 多重赋值
a, b, c = 1, 2, 3
x = y = z = 0
# 解包
first, *rest = [1, 2, 3, 4]`,
        language: 'python'
      },
      {
        title: '作用域',
        code: `global_var = "global"  # 全局作用域
def outer():
    outer_var = "outer"  # 外层函数作用域
    def inner():
        inner_var = "inner"  # 内层函数作用域
        global global_var     # 声明使用全局变量
        nonlocal outer_var    # 声明使用外层变量`,
        language: 'python'
      },
      {
        title: '类型注解',
        description: 'Python 3.5+',
        code: `name: str = "Alice"
age: int = 25
scores: list[int] = [90, 85, 88]
data: dict[str, int] = {"a": 1}
def greet(name: str) -> str:
    return f"Hello, {name}"`,
        language: 'python'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '基本类型',
        code: `# 数字
x = 42              # int
y = 3.14            # float
z = 3 + 4j          # complex
# 字符串
s = "hello"
s = 'world'
s = """multi
line"""
# 布尔
b = True
b = False
# None
n = None`,
        language: 'python'
      },
      {
        title: '复合类型',
        code: `# 列表（可变）
lst = [1, 2, 3]
# 元组（不可变）
tup = (1, 2, 3)
# 字典
dic = {"key": "value"}
# 集合
st = {1, 2, 3}
# 范围
rng = range(10)`,
        language: 'python'
      },
      {
        title: '类型转换',
        code: `int("42")
float("3.14")
str(42)
bool(1)
list("hello")
tuple([1, 2, 3])
dict([("a", 1), ("b", 2)])
set([1, 2, 2, 3])`,
        language: 'python'
      },
      {
        title: '类型检查',
        code: `type(value)
isinstance(value, int)
isinstance(value, (int, float))
# typing 模块
from typing import List, Dict, Optional
def func(x: Optional[int]) -> List[str]:
    pass`,
        language: 'python'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '算术运算符',
        code: `+  -  *  /       # 加减乘除
//               # 整除
%                # 取模
**               # 幂运算`,
        language: 'python'
      },
      {
        title: '比较运算符',
        code: `==  !=           # 相等、不等
>  <  >=  <=     # 大小比较
is  is not       # 身份比较
in  not in       # 成员测试`,
        language: 'python'
      },
      {
        title: '逻辑运算符',
        code: `and  or  not     # 逻辑与、或、非
# 短路求值
result = x and y
result = x or y`,
        language: 'python'
      },
      {
        title: '位运算符',
        code: `&  |  ^  ~       # 按位与、或、异或、非
<<  >>           # 左移、右移`,
        language: 'python'
      },
      {
        title: '赋值运算符',
        code: `=  +=  -=  *=  /=  //=  %=  **=
&=  |=  ^=  <<=  >>=`,
        language: 'python'
      },
      {
        title: '特殊运算符',
        code: `# 海象运算符 (Python 3.8+)
if (n := len(data)) &gt; 10:
    print(f"Large dataset: {n}")
# 解包运算符
*args, **kwargs`,
        language: 'python'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: '字符串格式化',
        code: `name = "Alice"
age = 25
# f-string (Python 3.6+)
msg = f"Name: {name}, Age: {age}"
msg = f"{value:.2f}"  # 格式化
# format()
msg = "Name: {}, Age: {}".format(name, age)
msg = "{0} {1}".format("Hello", "World")
# % 格式化
msg = "Name: %s, Age: %d" % (name, age)`,
        language: 'python'
      },
      {
        title: '字符串方法',
        code: `s.upper()
s.lower()
s.capitalize()
s.title()
s.strip()
s.lstrip()
s.rstrip()
s.split(' ')
s.join(list)
s.replace('old', 'new')
s.find('sub')
s.index('sub')
s.count('sub')
s.startswith('pre')
s.endswith('suf')`,
        language: 'python'
      },
      {
        title: '字符串检查',
        code: `s.isdigit()
s.isalpha()
s.isalnum()
s.isupper()
s.islower()
s.isspace()`,
        language: 'python'
      },
      {
        title: '正则表达式',
        code: `import re
re.match(r'^\\d+', s)
re.search(r'pattern', s)
re.findall(r'\\d+', s)
re.sub(r'old', 'new', s)
re.split(r'\\s+', s)`,
        language: 'python'
      }
    ]
  },
  {
    title: '集合数据结构',
    items: [
      {
        title: '列表基础',
        code: `lst = [1, 2, 3]
lst = list(range(5))
lst.append(4)
lst.insert(0, 0)
lst.extend([5, 6])
lst.remove(2)
lst.pop()
lst.pop(0)
lst.clear()
lst.sort()
lst.reverse()`,
        language: 'python'
      },
      {
        title: '列表推导式',
        code: `# 基本形式
squares = [x**2 for x in range(10)]
# 带条件
evens = [x for x in range(20) if x % 2 == 0]
# 嵌套
matrix = [[i+j for j in range(3)] for i in range(3)]`,
        language: 'python'
      },
      {
        title: '列表操作',
        code: `lst[0]              # 索引
lst[-1]             # 倒数第一个
lst[1:3]            # 切片
lst[::2]            # 步长
lst[::-1]           # 反转
len(lst)
sum(lst)
max(lst)
min(lst)
lst.count(item)
lst.index(item)`,
        language: 'python'
      },
      {
        title: '字典操作',
        code: `d = {"key": "value"}
d = dict(a=1, b=2)
d["key"] = "new"
d.get("key", default)
d.setdefault("key", default)
d.pop("key")
d.update({"k2": "v2"})
d.keys()
d.values()
d.items()`,
        language: 'python'
      },
      {
        title: '集合操作',
        code: `s = {1, 2, 3}
s = set([1, 2, 3])
s.add(4)
s.remove(2)
s.discard(5)  # 不存在也不报错
# 集合运算
s1 | s2       # 并集
s1 & s2       # 交集
s1 - s2       # 差集
s1 ^ s2       # 对称差`,
        language: 'python'
      },
      {
        title: '元组与队列',
        code: `# 元组（不可变）
tup = (1, 2, 3)
a, b, c = tup
# 队列
from collections import deque
q = deque([1, 2, 3])
q.append(4)
q.appendleft(0)
q.pop()
q.popleft()`,
        language: 'python'
      }
    ]
  },
  {
    title: '控制流',
    items: [
      {
        title: 'if / elif / else',
        code: `if condition:
    pass
elif other_condition:
    pass
else:
    pass
# 三元表达式
result = 'yes' if condition else 'no'`,
        language: 'python'
      },
      {
        title: 'match-case',
        description: 'Python 3.10+',
        code: `match value:
    case 1:
        print("one")
    case 2 | 3:
        print("two or three")
    case _:
        print("other")`,
        language: 'python'
      },
      {
        title: 'for 循环',
        code: `for i in range(10):
    print(i)
for item in collection:
    print(item)
for i, item in enumerate(collection):
    print(i, item)
for key, value in dict.items():
    print(key, value)`,
        language: 'python'
      },
      {
        title: 'while 循环',
        code: `while condition:
    pass
# while-else
while condition:
    pass
else:
    print("Loop completed normally")`,
        language: 'python'
      },
      {
        title: '跳转语句',
        code: `break       # 退出循环
continue    # 跳过本次迭代
pass        # 空操作
return value # 返回值`,
        language: 'python'
      }
    ]
  },
  {
    title: '函数',
    items: [
      {
        title: '函数定义',
        code: `def greet(name):
    return f"Hello, {name}"
# Lambda 函数
square = lambda x: x ** 2
add = lambda a, b: a + b`,
        language: 'python'
      },
      {
        title: '参数',
        code: `# 位置参数
def func(a, b):
    pass
# 默认参数
def func(a, b=10):
    pass
# 可变参数
def func(*args, **kwargs):
    pass
# 关键字参数
def func(a, *, b, c):  # b, c 必须用关键字传递
    pass`,
        language: 'python'
      },
      {
        title: '高阶函数',
        code: `def apply(func, value):
    return func(value)
def multiplier(n):
    return lambda x: x * n
# 内置高阶函数
map(func, iterable)
filter(func, iterable)
sorted(iterable, key=func)`,
        language: 'python'
      },
      {
        title: '装饰器',
        code: `def decorator(func):
    def wrapper(*args, **kwargs):
        print("Before")
        result = func(*args, **kwargs)
        print("After")
        return result
    return wrapper
@decorator
def my_function():
    pass`,
        language: 'python'
      },
      {
        title: '生成器',
        code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
# 生成器表达式
gen = (x**2 for x in range(10))`,
        language: 'python'
      }
    ]
  },
  {
    title: '面向对象',
    items: [
      {
        title: '类定义',
        code: `class Person:
    species = "Human"  # 类变量
    def __init__(self, name, age):
        self.name = name  # 实例变量
        self.age = age
    def greet(self):
        return f"Hello, I'm {self.name}"
    @classmethod
    def from_birth_year(cls, name, year):
        return cls(name, 2024 - year)
    @staticmethod
    def is_adult(age):
        return age >= 18`,
        language: 'python'
      },
      {
        title: '继承',
        code: `class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade
    def study(self):
        print(f"{self.name} is studying")`,
        language: 'python'
      },
      {
        title: '特殊方法',
        code: `class MyClass:
    def __init__(self):      # 构造
        pass
    def __str__(self):       # 字符串表示
        return "MyClass"
    def __repr__(self):      # 官方表示
        return "MyClass()"
    def __len__(self):       # len()
        return 0
    def __getitem__(self, key):  # []
        pass
    def __call__(self):      # ()
        pass`,
        language: 'python'
      },
      {
        title: '属性装饰器',
        code: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    @property
    def radius(self):
        return self._radius
    @radius.setter
    def radius(self, value):
        if value &lt; 0:
            raise ValueError("Radius must be positive")
        self._radius = value
    @property
    def area(self):
        return 3.14 * self._radius ** 2`,
        language: 'python'
      },
      {
        title: 'dataclass',
        description: 'Python 3.7+',
        code: `from dataclasses import dataclass
@dataclass
class Person:
    name: str
    age: int
    email: str = ""
    def greet(self):
        return f"Hello, I'm {self.name}"`,
        language: 'python'
      }
    ]
  },
  {
    title: '错误处理',
    items: [
      {
        title: 'try/except/finally',
        code: `try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except (TypeError, ValueError):
    print("Type or Value error")
except Exception as e:
    print(f"Unexpected: {e}")
else:
    print("No exception")
finally:
    print("Always executed")`,
        language: 'python'
      },
      {
        title: '异常类型',
        code: `Exception
ValueError
TypeError
KeyError
IndexError
AttributeError
FileNotFoundError
ZeroDivisionError
ImportError`,
        language: 'python'
      },
      {
        title: '抛出异常',
        code: `raise ValueError("Invalid value")
raise Exception("Something went wrong")
# 自定义异常
class CustomError(Exception):
    pass
raise CustomError("Custom message")`,
        language: 'python'
      },
      {
        title: '上下文管理器',
        code: `# with 语句自动处理资源
with open('file.txt', 'r') as f:
    content = f.read()
# 自定义上下文管理器
class MyContext:
    def __enter__(self):
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        pass`,
        language: 'python'
      }
    ]
  },
  {
    title: '文件操作',
    items: [
      {
        title: '读取文件',
        code: `# 读取全部
with open('file.txt', 'r') as f:
    content = f.read()
# 逐行读取
with open('file.txt', 'r') as f:
    for line in f:
        print(line.strip())
# 读取所有行
lines = f.readlines()`,
        language: 'python'
      },
      {
        title: '写入文件',
        code: `# 覆盖写入
with open('file.txt', 'w') as f:
    f.write('Hello\\n')
# 追加写入
with open('file.txt', 'a') as f:
    f.write('World\\n')
# 写入多行
lines = ['line1\\n', 'line2\\n']
f.writelines(lines)`,
        language: 'python'
      },
      {
        title: '路径操作',
        code: `from pathlib import Path
p = Path('file.txt')
p.exists()
p.is_file()
p.is_dir()
p.read_text()
p.write_text('content')
p.parent
p.name
p.stem
p.suffix`,
        language: 'python'
      },
      {
        title: 'JSON 操作',
        code: `import json
# 序列化
json_str = json.dumps(data)
json_str = json.dumps(data, indent=2)
# 反序列化
data = json.loads(json_str)
# 文件操作
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)
with open('data.json', 'r') as f:
    data = json.load(f)`,
        language: 'python'
      }
    ]
  },
  {
    title: '模块与包',
    items: [
      {
        title: '导入语法',
        code: `import module
import module as alias
from module import function
from module import *
from package.module import Class`,
        language: 'python'
      },
      {
        title: '创建模块',
        code: `# mymodule.py
def my_function():
    pass
PI = 3.14
# 使用
import mymodule
mymodule.my_function()`,
        language: 'python'
      },
      {
        title: '包结构',
        code: `mypackage/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py`,
        language: 'python'
      }
    ]
  },
  {
    title: '并发编程',
    items: [
      {
        title: '多线程',
        code: `import threading
def worker():
    print("Working...")
thread = threading.Thread(target=worker)
thread.start()
thread.join()
# 线程锁
lock = threading.Lock()
with lock:
    # 临界区`,
        language: 'python'
      },
      {
        title: '多进程',
        code: `import multiprocessing
def worker(num):
    print(f"Worker {num}")
if __name__ == '__main__':
    processes = []
    for i in range(5):
        p = multiprocessing.Process(target=worker, args=(i,))
        processes.append(p)
        p.start()
    for p in processes:
        p.join()`,
        language: 'python'
      },
      {
        title: '异步编程',
        code: `import asyncio
async def fetch_data():
    await asyncio.sleep(1)
    return "data"
async def main():
    result = await fetch_data()
    print(result)
asyncio.run(main())`,
        language: 'python'
      }
    ]
  },
  {
    title: '标准库精选',
    items: [
      {
        title: '常用模块',
        code: `os          # 操作系统接口
sys         # 系统相关
re          # 正则表达式
json        # JSON 处理
datetime    # 日期时间
math        # 数学函数
random      # 随机数
collections # 容器类型
itertools   # 迭代工具
functools   # 函数工具`,
        language: 'python'
      },
      {
        title: 'datetime',
        code: `from datetime import datetime, timedelta
now = datetime.now()
today = datetime.today()
formatted = now.strftime('%Y-%m-%d %H:%M:%S')
parsed = datetime.strptime('2024-01-01', '%Y-%m-%d')
# 时间计算
tomorrow = now + timedelta(days=1)`,
        language: 'python'
      },
      {
        title: 'collections',
        code: `from collections import Counter, defaultdict, deque
# 计数器
counter = Counter([1, 1, 2, 3, 3, 3])
# 默认字典
dd = defaultdict(list)
dd['key'].append('value')
# 双端队列
dq = deque([1, 2, 3])`,
        language: 'python'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格 (PEP 8)',
        code: `# 使用 4 空格缩进
# 变量和函数用 snake_case
# 类名用 PascalCase
# 常量用 UPPER_CASE
# 导入顺序：标准库、第三方库、本地模块
import os
import sys
import numpy as np
from mymodule import func`,
        language: 'python'
      },
      {
        title: '性能优化',
        code: `# 使用列表推导式而非循环
squares = [x**2 for x in range(100)]
# 使用生成器节省内存
gen = (x**2 for x in range(1000000))
# 使用集合进行查找
s = set(large_list)
if item in s:  # O(1)`,
        language: 'python'
      },
      {
        title: '常见陷阱',
        code: `# 可变默认参数
def bad(lst=[]):  # 错误
    lst.append(1)
    return lst
def good(lst=None):  # 正确
    if lst is None:
        lst = []
    lst.append(1)
    return lst
# 循环变量泄露
for i in range(3):
    pass
print(i)  # i 仍可访问`,
        language: 'python'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: '包管理器',
        code: `# pip
pip install package
pip install -r requirements.txt
pip freeze &gt; requirements.txt
# poetry
poetry add package
poetry install
# conda
conda install package`,
        language: 'bash'
      },
      {
        title: '虚拟环境',
        code: `# venv
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\\Scripts\\activate     # Windows
# virtualenv
virtualenv venv`,
        language: 'bash'
      },
      {
        title: '测试框架',
        code: `# pytest
pytest
pytest test_module.py
# unittest
python -m unittest discover`,
        language: 'bash'
      },
      {
        title: '代码质量',
        code: `# black (格式化)
black .
# flake8 (语法检查)
flake8 .
# mypy (类型检查)
mypy .
# pylint (代码分析)
pylint module.py`,
        language: 'bash'
      }
    ]
  }
]
</script>

# Python 速记表

<Cheatsheet :sections="cheatsheetData" />
