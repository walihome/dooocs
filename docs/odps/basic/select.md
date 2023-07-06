---
title: odps 基础语法说明
head:
  - - meta
    - name: description
      content: 基础语法说明，查询所有列、排除某列、排除某些列、前缀匹配某些列等
  - - meta
    - name: keywords
      content: odps maxCompute select update insert 排除 排除列 匹配
---
# 基础语法说明

查询表table_name 中所有的列
``` sql
SELECT * FROM table_name;
```

查询表table_name 中除了dt之外所有的列
``` sql
SELECT `(dt)?+.+` FROM table_name;
```

查询表table_name 中除了dt、name之外所有的列
``` sql
SELECT `(dt|name)?+.+` FROM table_name;
```

查询表table_name中，以abc开头所有的列
``` sql
SELECT `abc.*` FROM table_name;
``` 
