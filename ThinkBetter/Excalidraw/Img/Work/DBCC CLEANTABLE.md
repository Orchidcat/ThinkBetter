#SQLServer #DBCC

从表中删除行，并回收删除行使用的空间。
行为与truncate table很相似，但与其不同的是，`DBCC CLEANTABLE`保留表结构，并且**不会重置任何标识列的标识值**。

```sql
DBCC CLEANTABLE ('MyDatabase', 'Customers');
```