

- datamask 
- query Store
- natively compile models(#hekaton)
- JSON
- DBCC HELP ('?');
- service broker
- Encryption
	- certificate
	- database
	- symmetric key
	- passphrase
- phantom read
- FILESTREAM   (貌似已经半死不活了)
- Dynamic SQL Pivot
- Sequences
- TRY/CATCH
- [The Top Feature Requests for SQL Server](https://www.brentozar.com/archive/2022/05/the-top-feature-requests-for-sql-server/)
- [What DBAs Need to Know About Snapshots](https://www.brentozar.com/archive/2022/04/what-dbas-need-to-know-about-snapshots/)
- https://www.sqlskills.com/blogs/glenn/database-compatibility-level-in-sql-server/


[operator list](https://sqlserverfast.com/epr/operator-list/)


[[SQL Server 2000~2016 Evolution]]

SQL Server 目前版本
http://sqlbuilds.ekelmans.com 
https://sqlserverbuilds.blogspot.com/ 

[[NewVersion]]


#SQLServer/性能调优
windows server 上使用**powercfg.cpl** 查看功耗模式，确保实在 _高性能_ 状态下。

#SQLServer/2019  在测试过程中比 #SQLServer/2016 ，大约需要[增加20%的CPU](https://www.brentozar.com/archive/2023/03/is-sql-server-2019-more-cpu-intensive-than-sql-server-2016/)支出。这并不是 `LIGHTWEIGHT_QUERY_PROFILING` 造成的 

#SQLServer/TraceFlag
默认应该启动的TF项目
1117
1118
3023
3226


Azure #Azure

[rowversion/timestamp 跳行问题](https://blog.sqlxdetails.com/rowversion-timestamp-skipping-rows-problem/)


#SQLServer/Tools
https://www.codeproject.com/Articles/1243356/Create-Your-Own-SQL-Server-Management-Studio-SSMS
https://www.codeproject.com/Articles/1377559/How-to-Create-SQL-Server-Management-Studio-18-SSMS
https://statisticsparser.com/   一个将io，time输出信息，进行可视化处理的网站。



#DataBase #SQLServer #MOC 


