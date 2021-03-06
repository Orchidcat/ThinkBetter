#SQLServer  #SQLServer/2016 #SQLServer/Hekaton


### In-Memory OLTP

SQL Server In-Memory OLTP能够创建和使用经过内存优化的表，并高效地管理这些表，从而为OLTP工作负载提供性能优化。使用真正的**多版本乐观并发控制**访问它们，在处理期间**不需要锁或锁存**。所有In-Memory OLTP内存优化表必须**至少有一个索引，所有访问都是通过索引进行的**。内存中OLTP内存优化的表可以在与基于磁盘的表相同的事务中引用，只有一些限制。**本地编译的存储过程是访问内存优化表和性能业务逻辑计算的最快方式**。

### 前提条件
- 服务器进程需要支持 **cmpxchg16b** 指令集，现代的64位处理器都支持，但虚拟环境 virtualbox 目前还不支持。
- 使用兼容级别为 130 （将会自动更新统计信息以及并行计划）
- 数据库开启 MEMORY_OPTIMIZED_ELEVATE_TO_SNAPSHOT


### 创建过程
```sql
--创建数据库
USE Master;
GO CREATE DATABASE IMDB ON PRIMARY (NAME = IMDB_data, FILENAME = 'C:\HKData\IMDB_data.mdf'), FILEGROUP IMDB_mod_FG CONTAINS MEMORY_OPTIMIZED_DATA (NAME = IMDB_mod, FILENAME = 'C:\HKData\IMDB_mod');

--为现有数据库添加 MEMORY_OPTIMIZED_DATA 文件组
ALTER DATABASE AdventureWorks2016 ADD FILEGROUP AW_mod_FG CONTAINS MEMORY_OPTIMIZED_DATA; GO 
ALTER DATABASE AdventureWorks2016 ADD FILE (NAME='AW_mod', FILENAME='C:\HKData\AW_mod') TO FILEGROUP AW_mod_FG; 
GO
```

### Best Practice 
#### Index Tuning
- 统计信息和重编译
	- In-Memory OLTP 并不对单独的列进行修改计数; 有一个对每个索引的修改计数来触发自动更新统计信息.阈值与基于磁盘的表一致.
	- 更新统计信息将会触发一个内部的重编译,但是**内部编译存储过程不会被重新编译**.(_只有删除并重新创建该存储过程才会获取新的执行计划_)
	- DBCC SHOW_STATISTICS 不会显示任何内存优化表的信息
- Guide Line
	- 首先建议在内存优化表上建立范围索引,如果要进一步提高lookup和insert性能,建议创建 hash索引
	- 对bucket 进行客观估计; 该数值最少应该等于在索引键列中唯一的值数量.
	- 每一个bucket都会使用内存,太多的bucket将浪费内存.而太少的bucket将会造成hash碰撞.从而会印象效率.太多的bucket相较于太少的而言更加有利.
	- 对有很低基数的列,创建 范围索引将比hash 索引更好.
	- 列存储索引通常是为了混合事务进程(分析负载等)
	- 外键列上创建索引 (这将减少对该表的扫描)
	- hash索引没有扫描顺序 （ 
		- 如果需要获取范围的数据，或者需要排序后的数据，hash索引通常不起作用；也就是说 **hash索引只针对等于操作**。）
		- 如果不是所有的列在筛选条件中，hash索引也不会被使用
	- 范围索引不能被反向排序扫描
	- 成本估计相同下，优化器会优先使用hash索引，其次是范围索引
	- 在查询处理期间不会多次访问同一行。基于磁盘的表上，使用 spooling 操作符来进行确保不会重复访问行。但对内存优化表来说，这不是必需的。在存储引擎中包含有状态ID，行版本中存储了该ID，如果同样的状态再次被计数，即可知道是否已经重复。
	- 在 #SQLServer/2016 中，若没有可用索引，将会在 varheap memory中对内存优化表进行表扫描。 （可进行并行扫描）




- 找出所有具有内存优化表的数据库
```sql
EXEC sp_MSforeachdb 'USE ? IF EXISTS (SELECT 1 FROM sys.filegroups FG JOIN sys.database_files F ON FG.data_space_id = F.data_space_id WHERE FG.type = ''FX'' AND F.type = 2) PRINT ''?'' + '' can contain memory-optimized tables.'' '; 
GO
```