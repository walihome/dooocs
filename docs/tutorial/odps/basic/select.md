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

## 表基础操作

### 增加行记录

```sql
insert overwrite table  adm_ap_table partition (dt = '20230203')
values (18828422, 1545, 17489828, 1542,  18, 0, 0, 0, 0)
;
```

### 增加表字段
```sql

alter table tabl3_name add columns 
( risk_type bigint comment "风险类型"
,detail bigint comment "详情"
,max_time datetime  comment "最近时间" 
);
```

### 删除列
```sql
alter table  drop columns risk , risk_and_unsign , risk_and_peer_pay;
```

### 修改列
```sql
alter table  change unsign_in_1d_cnt unsign_in_1d_cnt bigint;
```
