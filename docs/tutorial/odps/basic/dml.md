---
title: DML示例
colla: true
order: 50
head:
  - - meta
    - name: odps dml dooocs dml示例
      content: odps dml
---
# DML示例
## 创建一张表
```sql
create table if not exists adm_xx_dd
(
    test   bigint comment '测试1'
    ,test2 bigint comment '测试2'
)
partitioned by
(
    dt string comment '日期分区'
)
lifecycle 60;
```
