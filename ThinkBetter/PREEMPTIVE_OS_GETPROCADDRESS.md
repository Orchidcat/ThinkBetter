#SQLServer/2008 

### 背景
	This will happen if you use user transaction when calling sp_send_dbmail. Do not call sp_send_dbmail with in user transaction.If you open a transaction and send a mail with some attachment in first connection and dont commit . Open a second connection and send a mail using sp_send_dbmail it will not be queued and wait till the first connection commits.You will also see preemptive_os_getprocaddress wait for second connection

## 处理过程
```sql
--查看等待状态
select * 
from sys.dm_os_wait_stats 
where wait_type = 'PREEMPTIVE_OS_GETPROCADDRESS' 
or wait_type = 'MSQL_XP'



```