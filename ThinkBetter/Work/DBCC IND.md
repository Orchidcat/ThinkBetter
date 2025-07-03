#SQLServer/Internal  #SQLServer 


前期获取页面内容的操作，可见[[DBCC PAGE]]

要知道给定表的记录存储在哪些页面上，就需要使用DBCC IND

DBCC IND （database，object，indexid）

可以将输出过滤到特定索引；0 表示堆，1 表示聚集索引。
如果要查看特定非聚集索引的页面，请输入该索引的 ID。如果使用 -1 `IndexID`，我们将获得与指定对象相关的任何索引的所有页面的列表。


```SQL
DBCC IND (AdventureWorks2008R2, 'Person.Person, 1);|
```

检查`Person.Person`SQL Server 2008 R2`AdventureWorks`数据库中的表，后面是结果的前五行（您的输出可能会有所不同，具体取决于版本）。


![[Pasted image 20250604104102.png]]

`PageType`每一列都详细说明了页面的类型。
例如，
`PageType`10 是一个分配结构页，也称为 **IAM 页**，我将在下一节中介绍它。
`PageType` 2是**索引页**，`
`PageType` 1是**数据页**。

