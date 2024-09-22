---
title: Python 正则表达式
order: 11
description: 正则表达式（缩写为 regex）是一系列字符，指定文本中的搜索模式，并由字符串搜索算法使用。
---

# 正则表达式

[正则表达式](https://en.wikipedia.org/wiki/Regular_expression)

正则表达式（缩写为 regex）是一系列字符，指定文本中的搜索模式。用于字符串搜索算法中的“查找”或“查找和替换”操作，或用于输入验证。



1. 使用 `import re` 导入正则表达式模块。
2. 使用 `re.compile()` 函数创建一个正则表达式对象。（记得使用原始字符串。）
3. 将要搜索的字符串传递给正则表达式对象的 `search()` 方法。这将返回一个 `Match` 对象。
4. 调用 Match 对象的 `group()` 方法返回实际匹配文本的字符串。

Python 中所有的正则表达式函数都在 re 模块中：

```python
>>> import re
```
## 正则表达式符号

| 符号                     | 匹配内容                                                |
| ------------------------ | ------------------------------------------------------ |
| `?`                      | 前一个分组出现零次或一次。                             |
| `*`                      | 前一个分组出现零次或多次。                             |
| `+`                      | 前一个分组出现一次或多次。                             |
| `{n}`                    | 前一个分组恰好出现 n 次。                              |
| `{n,}`                   | 前一个分组至少出现 n 次。                              |
| `{,m}`                   | 前一个分组最多出现 m 次。                              |
| `{n,m}`                  | 前一个分组至少出现 n 次，至多出现 m 次。               |
| `{n,m}?` 或 `*?` 或 `+?` | 对前一个分组进行非贪婪匹配。                           |
| `^spam`                  | 字符串必须以 spam 开头。                               |
| `spam$`                  | 字符串必须以 spam 结尾。                               |
| `.`                      | 除换行符以外的任何字符。                               |
| `\d`, `\w`, 和 `\s`      | 分别匹配一个数字、一个单词字符或一个空白字符。         |
| `\D`, `\W`, 和 `\S`      | 分别匹配除数字、单词字符或空白字符以外的任何字符。     |
| `[abc]`                  | 匹配方括号内的任意字符（如 a、b、c）。                 |
| `[^abc]`                 | 匹配不在方括号内的任意字符。                           |

## 匹配正则表达式对象

```python
>>> phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')

>>> mo = phone_num_regex.search('My number is 415-555-4242.')

>>> print(f'Phone number found: {mo.group()}')
# Phone number found: 415-555-4242
```

## 使用括号分组

```python
>>> phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
>>> mo = phone_num_regex.search('My number is 415-555-4242.')

>>> mo.group(1)
# '415'

>>> mo.group(2)
# '555-4242'

>>> mo.group(0)
# '415-555-4242'

>>> mo.group()
# '415-555-4242'
```

要一次性获取所有分组，请使用 `groups()` 方法：

```python
>>> mo.groups()
('415', '555-4242')

>>> area_code, main_number = mo.groups()

>>> print(area_code)
415

>>> print(main_number)
555-4242
```

## 使用管道符号进行多组匹配

你可以在任何地方使用 `|` 字符来匹配多个表达式中的一个。

```python
>>> hero_regex = re.compile (r'Batman|Tina Fey')

>>> mo1 = hero_regex.search('Batman and Tina Fey.')
>>> mo1.group()
# 'Batman'

>>> mo2 = hero_regex.search('Tina Fey and Batman.')
>>> mo2.group()
# 'Tina Fey'
```

你也可以使用管道符号来匹配正则表达式中的多个模式之一：

```python
>>> bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
>>> mo = bat_regex.search('Batmobile lost a wheel')

>>> mo.group()
# 'Batmobile'

>>> mo.group(1)
# 'mobile'
```

## 使用问号进行可选匹配

`?` 字符将其前面的分组标记为模式的可选部分。

```python
>>> bat_regex = re.compile(r'Bat(wo)?man')

>>> mo1 = bat_regex.search('The Adventures of Batman')
>>> mo1.group()
# 'Batman'

>>> mo2 = bat_regex.search('The Adventures of Batwoman')
>>> mo2.group()
# 'Batwoman'
```

## 使用星号匹配零次或多次

`*`（星号或星号）表示“匹配零次或多次”。星号前面的分组可以在文本中出现任意次数。

```python
>>> bat_regex = re.compile(r'Bat(wo)*man')
>>> mo1 = bat_regex.search('The Adventures of Batman')
>>> mo1.group()
'Batman'

>>> mo2 = bat_regex.search('The Adventures of Batwoman')
>>> mo2.group()
'Batwoman'

>>> mo3 = bat_regex.search('The Adventures of Batwowowowoman')
>>> mo3.group()
'Batwowowowoman'
```

## 使用加号匹配一个或多个

`+`（或加号）表示匹配一个或多个。加号前面的分组必须至少出现一次：

```python
>>> bat_regex = re.compile(r'Bat(wo)+man')

>>> mo1 = bat_regex.search('The Adventures of Batwoman')
>>> mo1.group()
# 'Batwoman'

>>> mo2 = bat_regex.search('The Adventures of Batwowowowoman')
>>> mo2.group()
# 'Batwowowowoman'

>>> mo3 = bat_regex.search('The Adventures of Batman')
>>> mo3 is None
# True
```
## 使用大括号匹配特定次数的重复

如果你有一个想要重复特定次数的分组，在正则表达式中跟随该分组后面加上大括号中的数字：

```python
>>> ha_regex = re.compile(r'(Ha){3}')

>>> mo1 = ha_regex.search('HaHaHa')
>>> mo1.group()
# 'HaHaHa'

>>> mo2 = ha_regex.search('Ha')
>>> mo2 is None
# True
```

你可以在大括号中指定一个范围，而不是一个数字。例如，正则表达式 (Ha){3,5} 将匹配 'HaHaHa'、'HaHaHaHa' 和 'HaHaHaHaHa'。

```python
>>> ha_regex = re.compile(r'(Ha){2,3}')
>>> mo1 = ha_regex.search('HaHaHaHa')
>>> mo1.group()
# 'HaHaHa'
```

## 贪婪和非贪婪匹配

Python 的正则表达式默认是贪婪的：在模糊情况下，它们会匹配尽可能长的字符串。大括号的非贪婪版本匹配尽可能短的字符串，闭合大括号后面跟一个问号。

```python
>>> greedy_ha_regex = re.compile(r'(Ha){3,5}')

>>> mo1 = greedy_ha_regex.search('HaHaHaHaHa')
>>> mo1.group()
# 'HaHaHaHaHa'

>>> non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
>>> mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
>>> mo2.group()
# 'HaHaHa'
```

## findall() 方法

`findall()` 方法将返回搜索字符串中每个匹配的字符串。

```python
>>> phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # has no groups

>>> phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
# ['415-555-9999', '212-555-0000']
```

## 创建你自己的字符类

你可以使用方括号定义你自己的字符类。例如，字符类 _[aeiouAEIOU]_ 将匹配任何元音字母，包括小写和大写。

```python
>>> vowel_regex = re.compile(r'[aeiouAEIOU]')
>>> vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
# ['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

你也可以通过使用连字符来包含字母或数字的范围。例如，字符类 _[a-zA-Z0-9]_ 将匹配所有小写字母、大写字母和数字。

通过在字符类的开头方括号后面放置一个插入符号 (`^`)，你可以创建一个否定字符类，它将匹配所有不在字符类中的字符：

```python
>>> consonant_regex = re.compile(r'[^aeiouAEIOU]')
>>> consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
# ['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', '
# ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```
## 插入符号和美元符号字符

- 你也可以在正则表达式的开头使用插入符号 `^`，以表示匹配必须出现在搜索文本的开头。

- 同样，你可以在正则表达式的末尾放置一个美元符号 `$`，以表示字符串必须以此正则表达式模式结尾。

- 你可以同时使用 `^` 和 `$`，以表示整个字符串必须匹配正则表达式。

正则表达式字符串 `r'^Hello'` 匹配以 'Hello' 开头的字符串：

```python
>>> begins_with_hello = re.compile(r'^Hello')
>>> begins_with_hello.search('Hello world!')
# <_sre.SRE_Match object; span=(0, 5), match='Hello'>

>>> begins_with_hello.search('He said hello.') is None
# True
```

正则表达式字符串 `r'\d\$'` 匹配以数字字符（0到9）结尾的字符串：

```python
>>> whole_string_is_num = re.compile(r'^\d+$')

>>> whole_string_is_num.search('1234567890')
# <_sre.SRE_Match object; span=(0, 10), match='1234567890'>

>>> whole_string_is_num.search('12345xyz67890') is None
# True

>>> whole_string_is_num.search('12 34567890') is None
# True
```

## 通配符字符

在正则表达式中，`.`（或点）字符将匹配除换行符以外的任何字符：

```python
>>> at_regex = re.compile(r'.at')

>>> at_regex.findall('The cat in the hat sat on the flat mat.')
['cat', 'hat', 'sat', 'lat', 'mat']
```

## 使用点星匹配所有内容

```python
>>> name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

>>> mo = name_regex.search('First Name: Al Last Name: Sweigart')
>>> mo.group(1)
# 'Al'

>>> mo.group(2)
'Sweigart'
```

`.*` 使用贪婪模式：它总是会尝试匹配尽可能多的文本。要以非贪婪方式匹配任何和所有文本，请使用点、星号和问号（`.*?`）。问号告诉 Python 以非贪婪方式进行匹配：

```python
>>> non_greedy_regex = re.compile(r'<.*?>')
>>> mo = non_greedy_regex.search('<To serve man> for dinner.>')
>>> mo.group()
# '<To serve man>'

>>> greedy_regex = re.compile(r'<.*>')
>>> mo = greedy_regex.search('<To serve man> for dinner.>')
>>> mo.group()
# '<To serve man> for dinner.>'
```

## 使用点字符匹配换行符

点星将匹配除换行符以外的所有内容。通过将 `re.DOTALL` 作为第二个参数传递给 `re.compile()`，可以使点字符匹配所有字符，包括换行符：

```python
>>> no_newline_regex = re.compile('.*')
>>> no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
# 'Serve the public trust.'

>>> newline_regex = re.compile('.*', re.DOTALL)
>>> newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
# 'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

## 不区分大小写匹配

要使正则表达式不区分大小写，可以将 `re.IGNORECASE` 或 `re.I` 作为第二个参数传递给 `re.compile()`：

```python
>>> robocop = re.compile(r'robocop', re.I)

>>> robocop.search('Robocop is part man, part machine, all cop.').group()
# 'Robocop'

>>> robocop.search('ROBOCOP protects the innocent.').group()
# 'ROBOCOP'

>>> robocop.search('Al, why does your programming book talk about robocop so much?').group()
# 'robocop'
```

## 使用 sub() 方法替换字符串

正则表达式对象的 `sub()` 方法接受两个参数：

1. 第一个参数是用于替换任何匹配项的字符串。
1. 第二个参数是正则表达式的字符串。

`sub()` 方法返回一个应用了替换的字符串：

```python
>>> names_regex = re.compile(r'Agent \w+')

>>> names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
# 'CENSORED gave the secret documents to CENSORED.'
```

## 管理复杂的正则表达式

要告诉 `re.compile()` 函数忽略正则表达式字符串中的空格和注释，可以通过将变量 `re.VERBOSE` 作为第二个参数传递给 `re.compile()` 来启用“详细模式”。

现在，不再需要像这样难以阅读的正则表达式：

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

你可以像这样将正则表达式分成多行并添加注释：

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # area code
    (\s|-|\.)?                    # separator
    \d{3}                         # first 3 digits
    (\s|-|\.)                     # separator
    \d{4}                         # last 4 digits
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extension
    )''', re.VERBOSE)
```
