#SQLServer/Internal 


前期获取页面内容的操作，可见[[DBCC PAGE]]

要知道给定表的记录存储在哪些页面上，就需要使用DBCC IND

DBCC IND （database，object，indexid）

可以将输出过滤到特定索引；0 表示堆，1 表示聚集索引。
如果要查看特定非聚集索引的页面，请输入该索引的 ID。如果使用 -1 `IndexID`，我们将获得与指定对象相关的任何索引的所有页面的列表。

