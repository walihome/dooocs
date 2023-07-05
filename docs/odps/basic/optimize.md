# 性能优化

修改每个 Map Worker 的输入数据量，即输入文件的分片大小，从而间接控制每个 Map 阶段下 Worker 的数量
``` sql
SET odps.stage.mapper.split.size=1024;
```


数据倾斜
Join
MapJoin - 使用 MAPJOIN 缓存小表

``` sql
SELECT /*+ MAPJOIN(B) */ *
FROM A JOIN B
ON A.key = B.key
;
```
Join 空值 - 给空值随机数
``` sql
SELECT *
FROM A JOIN B
ON COALESCE(A.key, RAND() * 9999) = B.key
;
```