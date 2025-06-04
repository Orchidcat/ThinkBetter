https://www.red-gate.com/simple-talk/databases/sql-server/database-administration-sql-server/sql-server-storage-internals-101/


数据行
行是 SQL Server 数据文件中最小的存储结构。表中的每一行都作为单独的记录存储在磁盘上。不仅表数据以记录形式存储，索引、元数据、数据库启动结构等等也以记录形式存储。不过，我们只讨论最常见、最重要的记录类型，即**数据记录**，它与索引记录的格式相同。


数据记录以某种格式存储`fixedvar` ； 固定长度和可变长度；

固定长度数据类型具有固定的长度，且不会偏离该长度。
可变长度数据类型得长度会根据记录而变化。


![[Pasted image 20250604091155.png]]

1. 状态位A（1个字节）
2. 状态位B（1个字节）
3. 定长部分的长度（2个字节）不包括列数和空位图的 2 个字节
4. 