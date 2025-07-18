#SQLServer/Internal #SQLServer 

堆是最简单的数据结构，因为它们只是“一大堆页面”，所有页面都属于同一个对象。一种称为**索引分配映射**(IAM) 的特殊页面类型会跟踪哪些页面属于哪个对象。SQL Server 将 IAM 页面用于堆和索引，但它们对于堆尤其重要，因为它们是查找包含堆数据的页面的唯一机制。本文的主要目标是讨论索引的结构和设计，因此我将仅简要介绍堆。

每个 IAM 页包含一个巨大的位图，可跟踪 511,232 个页面，或大约 4 GB 的数据。为了提高效率，IAM 页并不跟踪单个页面，而是以 8 个页面为一组，称为 **“区”** （ extents ) 。如果堆占用的数据超过 4 GB，SQL Server 会分配另一个 IAM 页，以便跟踪接下来 4 GB 数据中的页面，并在第一个 IAM 页的页头中保留指向下一个 IAM 页的指针。为了扫描堆，SQL Server 只需找到第一个 IAM 页，然后扫描它指向的每个区中的每个页面。

需要记住的一个重要事实是，**堆不保证每个页面内的记录顺序**。SQL Server 会将新记录插入到它想要的任何位置，通常是在具有足够空间的现有页面上，或者在新分配的页面上。

与索引相比，堆在维护方面相当简单，因为无需维护物理顺序。我们无需考虑诸如使用不断增加的键来在插入行时维护顺序之类的因素；SQL Server 只会在其所选页面上的任何合适位置附加记录，而不管键是什么。

然而，仅仅因为堆维护有限，并不意味着堆没有维护问题。为了理解其中的原因，我们需要讨论一下**转发记录**  (**forwarded records**)。

与索引不同，堆没有唯一标识给定记录的键。如果非聚集索引或外键需要指向特定记录，它会使用指向其物理位置的指针（表示为 ( `FileID` `:PageID:SlotID`) ，也称为**RID**或**行标识符**）来实现。例如， ( `1:16:2`) 指向第一个文件（从索引 1 开始）中第 17 页（均从索引 0 开始）的第三个位置。

想象一下，指向记录 () 的指针`1:16:2`存在于 20 个不同的地方，但可能由于某个列值的更新，SQL Server 必须将该记录从第 16 页移出，因为第 16 页已经没有空间容纳它了。这带来了一个有趣的性能问题。

如果 SQL Server 只是将记录移动到新的物理位置，它将不得不在 20 个不同的位置更新该物理指针，这会带来很大的工作量。相反，它会将记录复制到一个新页面，并将原始记录转换为转发存根 ( **forwarding stub)**，这是一个仅占用 9 个字节的小记录，用于存储指向新记录的物理指针。现有的 20 个物理指针将读取转发存根，从而使 SQL Server 能够找到所需的数据。

这种技术使更新更简单、更快捷，但代价是读取时需要进行额外的查找。随着数据修改导致越来越多的记录被转发，磁盘 I/O 会急剧增加，因为 SQL Server 会尝试从整个磁盘读取记录。


```SQL
SELECT o.name ,
       ps.forwarded_record_count
FROM
       sys.dm_db_index_physical_stats(DB_ID('AdventureWorks2008R2'),NULL, NULL,NULL, 'DETAILED') ps
INNER JOIN sys.objects o ON o.object_id = ps.object_id
WHERE forwarded_record_count > 0
```

查找`AdventureWorks`数据库中所有包含转发记录的堆。如果确实存在任何堆（但愿没有），请监视这些值以决定何时发出`ALTER TABLE REBUILD`命令来删除转发记录。
