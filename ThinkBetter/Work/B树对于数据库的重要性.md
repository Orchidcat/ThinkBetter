#SQLServer 

B 树解决了一个根本性问题：当磁盘访问速度比内存访问慢数千倍时，如何高效地查找磁盘上的数据。


### 磁盘上的二叉搜索树

**磁盘速度比内存慢 100 到 100,000 倍。**

内存中的二叉树
![[Pasted image 20251128085125.png|300]]

查找一个键需要 O(log₂ n) 次比较。
对于 100 万条记录，平衡二叉搜索树的高度为 log₂(1,000,000) ≈ 20。也就是说，需要进行 20 次比较才能找到任何一条记录。在内存中大约是0.002毫秒。

但这在磁盘上操作就是灾难；

磁盘IO





参考：
[B-Trees: Why Every Database Uses Them - by Mehmet Gökçe](https://mehmetgoekce.substack.com/p/b-trees-why-every-database-uses-them)


