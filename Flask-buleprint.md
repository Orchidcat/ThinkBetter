#flask #python 

Flask Blueprint 实际上并不是一个应用程序。它需要在应用程序中注册后才能运行。在应用程序中注册 Flask Blueprint 时，实际上是在用 Blueprint 的内容**扩展应用程序。**

**它们记录稍后在应用程序上注册时要执行的操作**

```python 
from flask import Blueprint

example_blueprint = Blueprint('example_blueprint', __name__)
#example_blueprint 蓝图名称
```