
参考 ：[SQLAlchemy - The Database Toolkit for Python](https://www.sqlalchemy.org/)

两部分组成Core ，ORM

**Core**是 SQLAlchemy 作为“数据库工具包”的基础架构。该库提供用于管理数据库连接、与数据库查询和结果交互以及以编程方式构建 SQL 语句的工具。

**ORM**建立在核心之上，提供可选的**对象关系映射**功能。


**ORM**

### engine
此对象充当与特定数据库的连接的中心源，为这些数据库连接提供工厂以及称为连接[池的](https://docs.sqlalchemy.org/en/20/core/pooling.html)保存空间。引擎通常是只为特定数据库服务器创建一次的全局对象，并使用 URL 字符串进行配置，该字符串将描述它应如何连接到数据库主机或后端。

```python
from sqlalchemy import create_engine
engine = create_engine("sqlite+pysqlite:///:memory:", echo=True)
```

数据库类型：sqlite 
链接方言（DBAPI)：pysqlite
路径：///:path  （memory：指代内存）
echo：将其发出的所有 SQL 记录到将写入标准输出的 Python 记录器中


==首次返回 时，它[`create_engine()`](https://docs.sqlalchemy.org/en/20/core/engines.html#sqlalchemy.create_engine "sqlalchemy.create_engine")实际上尚未尝试连接数据库==



### 使用事务和DBAPI 
**session** 用来管理 Engine，强调事务和 SQL 执行模式


```python 
conn  = engine.connect() #获取与数据库的链接
result  = conn.execute(sql)
print(result.all())
```

数据不会自动提交，需要执行下列提交操作
```python 
conn.commit()
```


### 构建 SQL 表达式语言的生命周期[`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.会话")以及它如何与这些构造进行交互。

```python 
session = Session(engine)
session.add(squidward)
session.new #查看被调用的集合

session.flush() #刷新 向数据库发出 SQL 以推出当前的更改集时，该过程称为**刷新**
	session.commit() #在此操作之前会现提交flush


```


















