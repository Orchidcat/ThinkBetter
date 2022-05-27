#SQLServer/2000
1. New data types were added (BIGINT, SQL_VARIANT, TABLE)
2. Instead of and for Triggers were introduced as advancement to the DDL.
3. Cascading referential integrity.
4. XML support
5. User defined functions and partition views.
6. Indexed Views (Allowing index on views with computed columns).


#SQLServer/2005
1. Enhancement in TOP clause with “WITH TIES” option.
2. Data Manipulation Commands (DML) and OUTPUT clause to get INSERTED and DELETED values
3. The PIVOT and UNPIVOT operators.
4. Exception Handling with TRY/CATCH block
5. Ranking functions
6. Common Table Expressions (CTE)
7. Common Language Runtime (Integration of .NET languages to build objects like stored procedures, triggers,
functions etc.)
8. Service Broker (Handling message between a sender and receiver in a loosely coupled manner)
9. Data Encryption (Native capabilities to support encryption of data stored in user defined databases)
10. SMTP mail
11. HTTP endpoints (Creation of endpoints using simple T-SQL statement exposing an object to be accessed over
the internet)
12. Multiple Active Result Sets (MARS).This allows a persistent database connection from a single client to have
more than one active request per connection.
13. SQL Server Integration Services (Will be used as a primary ETL (Extraction, Transformation and Loading) Tool
14. Enhancements in Analysis Services and Reporting Services.
15. Table and index partitioning. Allows partitioning of tables and indexes based on partition boundaries as
specified by a PARTITION FUNCTION with individual partitions mapped to file groups via a PARTITION
SCHEME.



#SQLServer/2008
1. Enhancement in existing DATE and TIME Data Types
2. New functions like – SYSUTCDATETIME() and SYSDATETIMEOFFSET()
3. Spare Columns – To save a significant amount of disk space.
4. Large User Defined Types (up to 2 GB in size)
5. Introduced a new feature to pass a table datatype into stored procedures and functions
6. New MERGE command for INSERT, UPDATE and DELETE operations
7. New HierarchyID datatype
8. Spatial datatypes - To represent the physical location and shape of any geometric object.
9. Faster queries and reporting with GROUPING SETS - An extension to the GROUP BY clause.
10. Enhancement to FILESTREAM storage option


#SQLServer/2008R2
1. PowerPivot – For processing large data sets.
2. Report Builder 3.0
3. Cloud ready
4. StreamInsight
5. Master Data Services
6. SharePoint Integration
7. DACPAC (Data-tier Application Component Packages)
8. Enhancement in other features of SQL Server 2008


#SQLServer/2012
1. Column store indexes - reduces I/O and memory utilization on large queries.
2. Pagination - pagination can be done by using “OFFSET” and “FETCH’ commands.
3. Contained database – Great feature for periodic data migrations.
4. AlwaysOn Availability Groups
5. Windows Server Core Support
6. User-Defined Server Roles
7. Big Data Support
8. PowerView
9. SQL Azure Enhancements
10. Tabular Model (SSAS)
11. DQS Data quality services
12. File Table - an enhancement to the FILESTREAM feature which was introduced in 2008.
13. Enhancement in Error Handling including THROW statement
14. Improvement to SQL Server Management Studio Debugging a. SQL Server 2012 introduces more options to
control breakpoints. b. Improvements to debug-mode windows
c. Enhancement in IntelliSense - like Inserting Code Snippets.



#SQLServer/2014
1. In-Memory OLTP Engine – Improves performance up to 20 times.
2. AlwaysOn Enhancements
3. Buffer Pool Extension
4. Hybrid Cloud Features
5. Enhancement in Column store Indexes (like Updatable Column store Indexes)
6. Query Handling Enhancements (like parallel SELECT INTO)
7. Power BI for Office 365 Integration
8. Delayed durability
9. Enhancements for Database Backups


#SQLServer/2016
1. Always Encrypted - Always Encrypted is designed to protect data at rest or in motion.
2. Real-time Operational Analytics
3. PolyBase into SQL Server
4. Native JSON Support
5. Query Store
6. Enhancements to AlwaysOn
7. Enhanced In-Memory OLTP
8. Multiple TempDB Database Files
9. Stretch Database
10. Row Level Security
11. In-Memory Enhancements

#SQLServer/2016  #TSQL
1. TRUNCATE TABLE with PARTITION
2. DROP IF EXISTS
3. STRING_SPLIT and STRING_ESCAPE Functions
4. ALTER TABLE can now alter many columns while the table remains online, using WITH (ONLINE = ON | OFF).
5. MAXDOP for DBCC CHECKDB, DBCC CHECKTABLE and DBCC CHECKFILEGROUP
6. ALTER DATABASE SET AUTOGROW_SINGLE_FILE
7. ALTER DATABASE SET AUTOGROW_ALL_FILES
8. COMPRESS and DECOMPRESS Functions
9. FORMATMESSAGE Statement
10. 2016 introduces 8 more properties with SERVERPROPERTY
a. InstanceDefaultDataPath
b. InstanceDefaultLogPath
c. ProductBuild
d. ProductBuildType
e. ProductMajorVersion
f. ProductMinorVersion
g. ProductUpdateLevel
h. ProductUpdateReference


#SQLServer/2017

#SQLServer/2019

#SQLServer/2022
## 性能改进

SQL Server 2022 中有两个值得注意的新性能特性。首先，我们有一个称为智能查询处理的新特性集。此功能使 SQL Server 能够构建更好的执行计划和可能的多个执行计划，其性能取决于运行时提供的参数值。

旧版本的 SQL Server 会经常为查询使用单个执行计划，尽管运行时参数值仅针对查询的第一次执行进行了优化，从而确保查询的所有后续运行都表现不佳。

其次，Microsoft 对 Query Store 进行了急需的改进。例如，现在为所有新数据库启用了查询存储。另一个很酷的功能是查询存储现在可以帮助解决与 MAXDOP（最大并行度）设置、内存授予和基数估计器相关的性能问题，使用反馈周期来适应和改进查询执行计划。最后，查询存储现在支持可用性组 (AG) 只读副本，并直接在查询存储中启用查询提示，以提高查询的性能，而无需进行实际的代码更改。

## 高可用性和连接改进

SQL Server 2022 中的高可用性通过允许您在本地 SQL Server 和 Azure SQL 托管实例 (MI) 之间快速轻松地创建分布式 AG 以用作灾难恢复备份服务器或用作只读副本报告工作量。您还可以手动故障转移到 MI 并只需单击几下即可再次返回到本地 SQL Server。（请注意，分布式 AG 与标准 AG 不同。先决条件和功能可能会有所不同。）

SQL Server 2022 和 Azure Synapse Analytics 之间建立的另一个连接称为 Azure Synapse Link，它允许 SQL Server 2022 自动将 SQL Server 中发生的数据更改直接提供给 Azure Synapse Analytics，而无需创建新的主要 ETL 管道。

## 安全和治理改进

还记得所有关于区块链的炒作吗？虽然我从来都不是这项技术的粉丝，但它确实为特定应用程序提供了有用的功能。输入 SQL Server 分类帐。新功能使用“区块链”技术随着时间的推移创建不可变的数据修改跟踪记录。这可以保护数据不被篡改，这对于某些情况和用例很有用，并且还为内部和外部审计提供了优势。最后，在之前的文章中，我描述了一个名为 Azure Purview 的新治理工具 ( [www.dbta.com/Columns/SQL-Server-Drill-Down/Introducing-Azure-Purview-Microsofts-Next-Generation-of-Data-Governance -145167.aspx](http://www.dbta.com/Columns/SQL-Server-Drill-Down/Introducing-Azure-Purview-Microsofts-Next-Generation-of-Data-Governance-145167.aspx)）。Microsoft 已将其初始功能集扩展到更广泛的数据治理平台。Purview 现在提供与 SQL Server 和 Azure SQL 的更紧密集成，以便您可以自动扫描 SQL Server 以捕获元数据、使用通用分类器标签和标记（例如 PII 数据或 HIPAA 数据）对数据进行分类，以及配置和控制特定的访问权限和特权从单个 Azure Purview 控制台到 SQL Server。

立即观看 Microsoft Ignite 会议或 PASS 数据社区峰会的视频，深入了解。并通过申请加入私人预览版来试驾新版本。