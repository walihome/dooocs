# 基础查询语法

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