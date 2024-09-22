---
title: Python 文件和目录路径
order: 12
description: 在Python中有两个主要的模块用于路径操作。一个是os.path模块，另一个是pathlib模块。
---


# 处理文件和目录路径

在Python中，有两个主要的模块用于路径操作。
一个是 `os.path` 模块，另一个是 `pathlib` 模块。

```
os.path VS pathlib
```
  
> `pathlib` 模块在Python 3.4中添加，提供了一种面向对象的方式来处理文件系统路径。

## Linux 和 Windows 路径

在 Windows 上，路径使用反斜杠 (`\`) 作为文件夹名称之间的分隔符。在 macOS、Linux 和 BSDs 等基于 Unix 的操作系统上，正斜杠 (`/`) 用作路径分隔符。如果您的代码需要在不同平台上运行，连接路径可能会很麻烦。

幸运的是，Python 提供了简单的方法来处理这个问题。我们将展示如何处理 `os.path.join` 和 `pathlib.Path.joinpath`。

在 Windows 上使用 `os.path.join`：

```python
>>> import os

>>> os.path.join('usr', 'bin', 'spam')
# 'usr\\bin\\spam'
```

在 \*nix 系统上使用 `pathlib`：

```python
>>> from pathlib import Path

>>> print(Path('usr').joinpath('bin').joinpath('spam'))
# usr/bin/spam
```

`pathlib` 还提供了一个使用 `/` 操作符来连接路径的快捷方式：

```python
>>> from pathlib import Path

>>> print(Path('usr') / 'bin' / 'spam')
# usr/bin/spam
```

注意，Windows 和基于 Unix 的操作系统之间的路径分隔符是不同的，这就是为什么你要使用上述方法之一来连接路径，而不是通过添加字符串来连接路径。

连接路径在你需要在同一目录下创建不同文件路径时非常有用。

Using `os.path.join` on Windows:

```python
>>> my_files = ['accounts.txt', 'details.csv', 'invite.docx']

>>> for filename in my_files:
...     print(os.path.join('C:\\Users\\asweigart', filename))
...
# C:\Users\asweigart\accounts.txt
# C:\Users\asweigart\details.csv
# C:\Users\asweigart\invite.docx
```

在 \*nix 系统上使用 `pathlib`：

```python
>>> my_files = ['accounts.txt', 'details.csv', 'invite.docx']
>>> home = Path.home()
>>> for filename in my_files:
...     print(home / filename)
...
# /home/asweigart/accounts.txt
# /home/asweigart/details.csv
# /home/asweigart/invite.docx
```

## 当前工作目录

在 Windows 上使用 `os`：

```python
>>> import os

>>> os.getcwd()
# 'C:\\Python34'
>>> os.chdir('C:\\Windows\\System32')

>>> os.getcwd()
# 'C:\\Windows\\System32'
```

在 \*nix 系统上使用 `pathlib`：

```python
>>> from pathlib import Path
>>> from os import chdir

>>> print(Path.cwd())
# /home/asweigart

>>> chdir('/usr/lib/python3.6')
>>> print(Path.cwd())
# /usr/lib/python3.6
```

## 创建新文件夹

在 Windows 上使用 `os`：

```python
>>> import os
>>> os.makedirs('C:\\delicious\\walnut\\waffles')
```

Using `pathlib` on \*nix:

```python
>>> from pathlib import Path
>>> cwd = Path.cwd()
>>> (cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
#   File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
#     self._accessor.mkdir(self, mode)
#   File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
#     return strfunc(str(pathobj), *args)
# FileNotFoundError: [Errno 2] No such file or directory: '/home/asweigart/delicious/walnut/waffles'
```

哦不，我们遇到了一个严重的错误！原因是 'delicious' 目录不存在，所以我们不能在其下创建 'walnut' 和 'waffles' 目录。要解决这个问题，请执行以下操作：

```python
>>> from pathlib import Path
>>> cwd = Path.cwd()
>>> (cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

一切都很好 :)

## 绝对路径 vs. 相对路径

有两种指定文件路径的方法。

- **绝对路径**，总是以根文件夹开始
- **相对路径**，相对于程序的当前工作目录

还有点 (`.`) 和点点 (`..`) 文件夹。这些不是真正的文件夹，而是可以在路径中使用的特殊名称。单个句点（“点”）表示“此目录”的简写。两个句点（“点点”）表示“父文件夹”。

### 处理绝对路径

查看路径是否为绝对路径：

在 \*nix 上使用 `os.path`：

```python
>>> import os
>>> os.path.isabs('/')
# True

>>> os.path.isabs('..')
# False
```

在 \*nix 上使用 `pathlib`：

```python
>>> from pathlib import Path
>>> Path('/').is_absolute()
# True

>>> Path('..').is_absolute()
# False
```

你可以使用 `os.path` 和 `pathlib` 提取绝对路径

在 \*nix 上使用 `os.path`：

```python
>>> import os
>>> os.getcwd()
'/home/asweigart'

>>> os.path.abspath('..')
'/home'
```

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path
print(Path.cwd())
# /home/asweigart

print(Path('..').resolve())
# /home
```

### 处理相对路径

你可以从一个起始路径获取到另一个路径的相对路径。

在 \*nix 上使用 `os.path`：

```python
>>> import os
>>> os.path.relpath('/etc/passwd', '/')
# 'etc/passwd'
```

在 \*nix 上使用 `pathlib`：

```python
>>> from pathlib import Path
>>> print(Path('/etc/passwd').relative_to('/'))
# etc/passwd
```

## 路径和文件有效性

### 检查文件/目录是否存在

在 \*nix 上使用 `os.path`：

```python
>>> import os

>>> os.path.exists('.')
# True

>>> os.path.exists('setup.py')
# True

>>> os.path.exists('/etc')
# True

>>> os.path.exists('nonexistentfile')
# False
```

在 \*nix 上使用 `pathlib`：

```python
from pathlib import Path

>>> Path('.').exists()
# True

>>> Path('setup.py').exists()
# True

>>> Path('/etc').exists()
# True

>>> Path('nonexistentfile').exists()
# False
```
### 检查路径是否是文件

在 \*nix 上使用 `os.path`：

```python
>>> import os

>>> os.path.isfile('setup.py')
# True

>>> os.path.isfile('/home')
# False

>>> os.path.isfile('nonexistentfile')
# False
```

在 \*nix 上使用 `pathlib`：

```python
>>> from pathlib import Path

>>> Path('setup.py').is_file()
# True

>>> Path('/home').is_file()
# False

>>> Path('nonexistentfile').is_file()
# False
```

### 检查路径是否是目录

在 \*nix 上使用 `os.path`：

```python
>>> import os

>>> os.path.isdir('/')
# True

>>> os.path.isdir('setup.py')
# False

>>> os.path.isdir('/spam')
# False
```

在 \*nix 上使用 `pathlib`：

```python
>>> from pathlib import Path

>>> Path('/').is_dir()
# True

>>> Path('setup.py').is_dir()
# False

>>> Path('/spam').is_dir()
# False
```

## 获取文件的大小（以字节为单位）

在 Windows 上使用 `os.path`：

```python
>>> import os

>>> os.path.getsize('C:\\Windows\\System32\\calc.exe')
# 776192
```

在 \*nix 上使用 `pathlib`：

```python
>>> from pathlib import Path

>>> stat = Path('/bin/python3.6').stat()
>>> print(stat) # stat contains some other information about the file as well
# os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
# --snip--
# st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)

>>> print(stat.st_size) # size in bytes
# 10024
```

## 列出目录

在 Windows 上使用 `os.listdir` 列出目录内容：

```python
>>> import os

>>> os.listdir('C:\\Windows\\System32')
# ['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
# --snip--
# 'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

使用 `pathlib` 列出 \*nix 上的目录内容：

```python
>>> from pathlib import Path

>>> for f in Path('/usr/bin').iterdir():
...     print(f)
...
# ...
# /usr/bin/tiff2rgba
# /usr/bin/iconv
# /usr/bin/ldd
# /usr/bin/cache_restore
# /usr/bin/udiskie
# /usr/bin/unix2dos
# /usr/bin/t1reencode
# /usr/bin/epstopdf
# /usr/bin/idle3
# ...
```

## 目录文件大小

> **警告**
> 
> 目录本身也有大小！因此，您可能需要使用上面讨论的方法来检查路径是文件还是目录。

在 Windows 上使用 `os.path.getsize()` 和 `os.listdir()` 一起使用：

```python
>>> import os
>>> total_size = 0

>>> for filename in os.listdir('C:\\Windows\\System32'):
...     total_size = total_size + os.path.getsize(os.path.join('C:\\Windows\\System32', filename))
...
>>> print(total_size)
# 1117846456
```

在 \*nix 上使用 `pathlib`：

```python
>>> from pathlib import Path

>>> total_size = 0
>>> for sub_path in Path('/usr/bin').iterdir():
...     total_size += sub_path.stat().st_size
...
>>> print(total_size)
# 1903178911
```

## 复制文件和文件夹

`shutil` 模块提供了复制文件以及整个文件夹的功能。

```python
>>> import shutil, os

>>> os.chdir('C:\\')
>>> shutil.copy('C:\\spam.txt', 'C:\\delicious')
# C:\\delicious\\spam.txt'

>>> shutil.copy('eggs.txt', 'C:\\delicious\\eggs2.txt')
# 'C:\\delicious\\eggs2.txt'
```

虽然 `shutil.copy()` 会复制单个文件，但 `shutil.copytree()` 会复制整个文件夹及其包含的所有文件和文件夹：

```python
>>> import shutil, os

>>> os.chdir('C:\\')
>>> shutil.copytree('C:\\bacon', 'C:\\bacon_backup')
# 'C:\\bacon_backup'
```

## 移动和重命名

```python
>>> import shutil

>>> shutil.move('C:\\bacon.txt', 'C:\\eggs')
# 'C:\\eggs\\bacon.txt'
```

目标路径也可以指定文件名。在以下示例中，源文件被移动并重命名：

```python
>>> shutil.move('C:\\bacon.txt', 'C:\\eggs\\new_bacon.txt')
# 'C:\\eggs\\new_bacon.txt'
```

如果没有 eggs 文件夹，那么 `move()` 会将 bacon.txt 重命名为名为 eggs 的文件：

```python
>>> shutil.move('C:\\bacon.txt', 'C:\\eggs')
# 'C:\\eggs'
```
## 删除文件和文件夹

- 调用 `os.unlink(path)` 或 `Path.unlink()` 将删除指定路径的文件。

- 调用 `os.rmdir(path)` 或 `Path.rmdir()` 将删除指定路径的文件夹。该文件夹必须为空文件夹。

- 调用 `shutil.rmtree(path)` 将删除指定路径的文件夹及其包含的所有文件和文件夹。

## 遍历目录树

```python
>>> import os
>>>
>>> for folder_name, subfolders, filenames in os.walk('C:\\delicious'):
...     print(f'The current folder is {folder_name}')
...     for subfolder in subfolders:
...         print('SUBFOLDER OF {folder_name}: {subfolder}')
...     for filename in filenames:
...         print('FILE INSIDE {folder_name}: filename{filename}')
...     print('')
...
# The current folder is C:\delicious
# SUBFOLDER OF C:\delicious: cats
# SUBFOLDER OF C:\delicious: walnut
# FILE INSIDE C:\delicious: spam.txt

# The current folder is C:\delicious\cats
# FILE INSIDE C:\delicious\cats: catnames.txt
# FILE INSIDE C:\delicious\cats: zophie.jpg

# The current folder is C:\delicious\walnut
# SUBFOLDER OF C:\delicious\walnut: waffles

# The current folder is C:\delicious\walnut\waffles
# FILE INSIDE C:\delicious\walnut\waffles: butter.txt
```


  
Pathlib 模块 vs Os 模块
  
> `pathlib` 提供了比上述列出的更多功能，比如获取文件名、获取文件扩展名、无需手动打开即可读取/写入文件等。参见 [官方文档](https://docs.python.org/3/library/pathlib.html)
