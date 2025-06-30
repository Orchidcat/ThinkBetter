#flask #python 

参考 [Modular Applications with Blueprints — Flask Documentation (3.1.x)](https://flask.palletsprojects.com/en/stable/blueprints/)


样例
[Use a Flask Blueprint to Architect Your Applications – Real Python](https://realpython.com/flask-blueprint/)

Flask Blueprint 实际上并不是一个应用程序。它需要在应用程序中注册后才能运行。在应用程序中注册 Flask Blueprint 时，实际上是在用 Blueprint 的内容**扩展应用程序。**

**它们记录稍后在应用程序上注册时要执行的操作**

```python 
from flask import Blueprint

example_blueprint = Blueprint('example_blueprint', __name__)  #第一个参数example_blueprint 蓝图名称


```

`__name__` 是蓝图导入名称，flask利用这个导入名称进行定位蓝图的资源，其它可以使用的参数还有：
- static_folder：可以找到蓝图静态文件的文件夹
- static_url_path：提供静态文件的 URL
- template_folder：包含蓝图模板的文件夹
- url_prefix：添加到所有蓝图 URL 前面的路径
- 子域：此蓝图的路由默认匹配的子域
- url_defaults：[此](https://realpython.com/courses/dictionaries-python/)Blueprint 的视图将接收的默认值字典
- root_path：蓝图的根目录路径，默认值从蓝图的导入名称中获取

请注意，除此以外`root_path`，所有路径都是相对于蓝图的目录的。

`Blueprint`对象还提供了其他你可能觉得有用的方法：

- **.errorhandler()**注册错误处理函数
- **.before_request()**在每次请求之前执行一个操作
- **.after_request()**在每个请求后执行一个操作
- **.app_template_filter()**在应用程序级别注册模板过滤器



