#SQLServer  #SQLServer/2016 #SQLServer/Hekaton


### In-Memory OLTP
### Best Practice 
#### Index Tuning
- 统计信息和重编译
	- In-Memory OLTP 并不对单独的列进行修改计数; 有一个对每个索引的修改计数来触发自动更新统计信息.阈值与基于磁盘的表一致.
	- 更新统计信息将会触发一个内部

