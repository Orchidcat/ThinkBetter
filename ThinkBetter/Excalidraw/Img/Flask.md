

python --version
python -m venv env  --创建虚拟环境
env\Scripts\activate --激活虚拟环境
	deactivate 可以退出 
	pip install flask -- 安装flask

#### 程序发现机制
设置系统环境变量 `FLASK_APP` 来告诉 Flask 你要启动哪个程序（export FLASK_APP=hello.py）；
Flask 通过读取这个环境变量值对应的模块寻找要运行的程序实例，你可以把它设置成下面这些值：

- 模块名
- Python 导入路径
- 文件目录路径

#### 两个环境变量
`FLASK_APP` 和 `FLASK_DEBUG`；
`FLASK_DEBUG`用来开启调试模式（debug mode）。调试模式开启后，当程序出错，浏览器页面上会显示错误信息；代码出现变动后，**程序会自动重载**。
(env) $ flask run --debug  
需要版本>2.3



不用每次打开新的终端会话都要设置环境变量
(env) $ pip install python-dotenv
当 python-dotenv 安装后，Flask 会从项目根目录的 .flaskenv 和 .env 文件读取环境变量并设置。
![[Pasted image 20241128131721.png|300x150]]

## 模板
### jinja2
把包含变量和运算逻辑的 HTML 或其他格式的文本叫做**模板**
执行这些变量替换和逻辑计算工作的过程被称为**渲染**
$ mkdir templates

三种常用的**定界符**：
- `{{ ... }}` 用来标记变量。
- `{% ... %}` 用来标记语句，比如 if 语句，for 语句等。
- `{# ... #}` 用来写注释。
模板中使用的变量需要在渲染的时候传递进去

Jinja2 提供了一些过滤器:  {{ 变量|过滤器 }}  
 [https://jinja.palletsprojects.com/en/3.0.x/templates/#builtin-filters](https://jinja.palletsprojects.com/en/3.0.x/templates/#builtin-filters) 查看所有可用的过滤器。
 
使用 `render_template()` 函数可以把模板渲染出来，必须传入的参数为模板文件名（相对于 templates 根目录的文件路径）


## 静态文件

### 生成静态URL
文件的 URL 可以通过 Flask 提供的 `url_for()` 函数来生成
假如我们在 static 文件夹的根目录下面放了一个 foo.jpg 文件，下面的调用可以获取它的 URL：
```html
<img src="{{ url_for('static', filename='foo.jpg') }}">
```
花括号部分的调用会返回 `/static/foo.jpg`


引入favicon
```html
<head> ... <link rel="icon" href="{{ url_for('static', filename='favicon.ico') }}"> </head>
```


添加css
```html
<head>
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}" type="text/css">
```


- 如果你对 CSS 很头疼，可以借助前端框架来完善页面样式，比如 [Bootstrap](https://getbootstrap.com/)、[Semantic-UI](http://semantic-ui.com/)、[Foundation](https://foundation.zurb.com/) 等。它们提供了大量的 CSS 定义和动态效果，使用起来非常简单。
- 扩展 [Bootstrap-Flask](https://github.com/helloflask/bootstrap-flask) 可以简化在 Flask 项目里使用 Bootstrap 的步骤。



### 操作sqlite 数据库
(env) $ pip install flask-sqlalchemy==2.5.1 sqlalchemy==1.4.47

**初始化**
```flask
from flask_sqlalchemy import SQLAlchemy # 导入扩展类 
app = Flask(__name__) 
db = SQLAlchemy(app) # 初始化扩展，传入程序实例 app
```
**设置数据库URI**
为了设置 Flask、扩展或是我们程序本身的一些行为，我们需要设置和定义一些配置变量。Flask 提供了一个统一的接口来写入和获取这些配置变量：`Flask.config` 字典。配置变量的名称必须使用大写，写入配置的语句一般会放到扩展类实例化语句之前。

下面写入了一个 `SQLALCHEMY_DATABASE_URI` 变量来告诉 SQLAlchemy 数据库连接地址：
```flask
import os 
# ... 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////' + os.path.join(app.root_path, 'data.db')
```
数据库文件一般放到项目根目录即可，`app.root_path` 返回程序实例所在模块的路径（目前来说，即项目根目录），我们使用它来构建文件路径。数据库文件的名称和后缀你可以自由定义，一般会使用 .db、.sqlite 和 .sqlite3 作为后缀。


**创建数据库模型**
```python
class User(db.Model): # 表名将会是 user（自动生成，小写处理） 
	id = db.Column(db.Integer, primary_key=True) # 主键 
	name = db.Column(db.String(20)) # 名字 
	
class Movie(db.Model): # 表名将会是 
	movie id = db.Column(db.Integer, primary_key=True) # 主键 
	title = db.Column(db.String(60)) # 电影标题 
	year = db.Column(db.String(4)) # 电影年份
```
模型类的编写有一些限制：

- 模型类要声明继承 `db.Model`。
- 每一个类属性（字段）要实例化 `db.Column`，传入的参数为字段的类型，下面的表格列出了常用的字段类。
- 在 `db.Column()` 中添加额外的选项（参数）可以对字段进行设置。比如，`primary_key` 设置当前字段是否为主键。除此之外，常用的选项还有 `nullable`（布尔值，是否允许为空值）、`index`（布尔值，是否设置索引）、`unique`（布尔值，是否允许重复值）、`default`（设置默认值）等。

增删改查操作 [第 5 章：数据库 - Flask 入门教程](https://tutorial.helloflask.com/database/)



