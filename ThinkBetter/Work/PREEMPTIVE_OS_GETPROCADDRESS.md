#SQLServer/2008 #SQLServer 

### 背景
	This will happen if you use user transaction when calling sp_send_dbmail. Do not call sp_send_dbmail with in user transaction.If you open a transaction and send a mail with some attachment in first connection and dont commit . Open a second connection and send a mail using sp_send_dbmail it will not be queued and wait till the first connection commits.You will also see preemptive_os_getprocaddress wait for second connection



## 处理过程
```sql
--查看等待状态
select * 
from sys.dm_os_wait_stats 
where wait_type = 'PREEMPTIVE_OS_GETPROCADDRESS' 
or wait_type = 'MSQL_XP'

--查看执行等待时间
declare @WaitTime bigint
select @WaitTime = wait_time_ms from sys.dm_os_wait_stats where wait_type = 'MSQL_XP'
select @WaitTime - wait_time_ms from sys.dm_os_wait_stats where wait_type = 'PREEMPTIVE_OS_GETPROCADDRESS'

--查看相关扩展存储过程
sp_helpextendedproc 


--从内存卸载特定的扩展存储过程dll
DBCC xpstar (FREE);
```
![[Pasted image 20220923094923.png]]


解决方法：
sqlserver explorer 工具查看
![[Pasted image 20220923104256.png]]

click module button 
![[Pasted image 20220923104356.png]]


kill 3436  session 之后
SELECT * FROM sys.dm_os_tasks where session_id IS NOT NULL 
查询锁死状态，不能显示。 数据库状态监视器也无法显示。

重启服务，报相关域管理员错误。
重启机器，服务恢复。






#### 参考
sys.dm_os_loaded_modules 
[为什么 PREEMPTIVE_OS_GETPROCADRESS 显示大量累积？](https://learn.microsoft.com/en-us/archive/blogs/psssql/why-does-preemptive_os_getprocaddress-show-a-large-accumulation)
[DBCC ddlname](https://learn.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-dllname-free-transact-sql?view=sql-server-ver16)

据说可以解决
[I got issue resolved by killing spid initiated by extended stored procedure](https://www.sqlservercentral.com/forums/topic/unable-to-kill-transaction-in-msdb)
https://www.sqlteam.com/forums/topic.asp?TOPIC_ID=90515

