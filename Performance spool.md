
由**优化器**添加的惰性spool，用于降低嵌套循环链接的预估成本。

- lazy Table Spool
- lazy Index Spool
- lazy Row Count Spool


nested loop join 有两种执行计划；将具有外部引用的种类称为 **apply**，将具有连接运算符本身的连接谓词的类型称为 **nested loops join** 。这种区别在于_执行计划运算符_，而不是 T-SQL 查询语法。