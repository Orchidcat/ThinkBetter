#SQLServer/2008 #SQLServer/Error



SQL Server is terminating because of fatal exception 80000003. This error may be caused by an unhandled Win32 or C++ exception, or by an access violation encountered during exception handling. Check the SQL error log for any related stack dumps or messages. This exception forces SQL Server to shutdown. To recover from this error, restart the server (unless SQLAgent is configured to auto restart).



“致命异常 80000003”错误通常是由堆损坏引起的。但是，由于 SQL Server 不从其堆中分配内存，这意味着损坏的根本原因是其他原因。

排查方向：
1. 第三方模块的作用。
   SELECT * FROM sys.dm_os_loaded_modules WHERE company <> 'Microsoft Corporation';
   GO
2. 第三方驱动程序的链接服务器，以及可以在 SQL Server 中加载的任何其他 DLL



#### 参考
查看文件路径：SQL Server Configuration Manager -  properties - Advanced - dump directory