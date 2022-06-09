#SQLServer  #SQLServer/2016 #SQLServer/Hekaton


### In-Memory OLTP
### Best Practice 
#### Index Tuning
- 统计信息和重编译
	- In-Memory OLTP 并不对单独的列进行修改计数; 有一个对每个索引的修改计数来触发自动更新统计信息.阈值与基于磁盘的表一致.
	- 更新统计信息将会触发一个内部的重编译,但是**内部编译存储过程不会被重新编译**.(_只有删除并重新创建该存储过程才会获取新的执行计划_)
	- DBCC SHOW_STATISTICS 不会显示任何内存优化表的信息
- Guide Line
	- 首先建议在内存优化表上建立范围索引,如果要进一步提高lookup和insert性能,建议创建 hash索引
	- 对bucket 进行客观估计; 该数值最少应该等于在索引键列中唯一的值数量.
	- 每一个bucket都会使用内存,太多的bucket将浪费内存.而太少的bucket将会造成hash碰撞.从而会印象效率.太多的bucket相较于太少的而言更加

