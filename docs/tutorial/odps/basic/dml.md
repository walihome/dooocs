# ODPS 基础DML实例
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
