#reef #珊瑚 #Coral #RaspberryPi

预算 < RMB 600 < 50hr（20hr）

```dataview
list from [[]] and !outgoing([[]])
```

[Fetching Title#8ger](https://youtu.be/0lguyj1sFS8)
![[Pasted image 20241202140510.png]]

目标：
- 实时获取reef tank当前运行状态数据
- 记录test数据
- 记录reef数据(coral,fish)

一个值得参考的创建软件过程描述 [How to Start and Finish Any Web App Project — Nick Janetakis](https://nickjanetakis.com/blog/how-to-start-and-finish-any-web-app-project)



MVP（最小可行产品）是什么？
- 显示实时温度数据          
	- 2024-12-09 chart.js试用
	- 2024-12-10 需要处理实时的问题，使用flask-socketio；遇到瓶颈，放到后期再进行处理？
	- 2024-12-10 验证是否可以将温度显示跟其他显示集成到一个数据类型中，并将显示统一
		- 需要安装chartjs-plugin-annotation 🆗
		- [Line Chart | chartjs-plugin-annotation](https://www.chartjs.org/chartjs-plugin-annotation/latest/samples/charts/line.html)
		- [Area Chart | Chart.js](https://www.chartjs.org/docs/latest/charts/area.html)
	- 2024-12-11 添加测试数据的添加页面 🆗
	- 2024-12-12 对添加界面增加信息显示（未添加修改以及删除选项）
- 鱼类识别，自动拍照
- 开机自启动程序 [树莓派用服务方式设置开机启动 | 树莓派实验室](https://shumeipai.nxez.com/2017/05/17/raspberry-pi-service-python-script-start-on-boot.html)

- [  ] 测试flask ，在本地作为服务器，ipad进行网址访问  `http://raspberri ip地址:5000/` 
- -  [[如何训练模型的整体步骤]]


STEP:
- 网站编写
	- 读取sqlite数据，一定时间进行刷新（时间间隔可以后期设置）
	- 低温/高温/回温短信和电子邮件提醒
	- 每周发送电子邮件，列出需要进行哪些类型的维护
	- 循环显示一些漂亮的珊瑚图片
	- 可以通过**pi上安装android模拟器**来控制已经有软件支持的各种无线设备。
	- [[颜色选择]]
- rpi安装使用测试
	- 时钟对准RTC(`sudo timedatectl set-ntp True` ; 检查结果`timedatectl status` ;如果出现警告，你可能也必须跑`sudo timedatectl set-local-rtc true`)
	- ![[Pasted image 20241202155232.png]]
- 电路连接，AC转DC


### 需要完成的资源获取

#task 
**硬件**
- [x] Raspberry Pi 选型（[[rpi zero 2w]])，采购 ✅ 2024-11-29  ￥170.75
- [x] 硬件配件（杜邦线，OK线，面包板等） ✅ 2024-11-29    ￥16.7
- [x] 传感器采购 ✅ 2024-12-16
	- [x] 温度计（测试用） ✅ 2024-12-16
- [x] 被谈及的硬件 ✅ 2025-06-30
	- [x] PCA9685 ✅ 2025-06-30
	- [x] [MCP3008](https://gpiozero.readthedocs.io/en/latest/api_spi.html#gpiozero.MCP3008) ✅ 2025-06-30
	- [x] 继电器 ✅ 2025-06-30
	- [x] MCP23017或 MCP23008  可以扩展GPIO的扩展板 ✅ 2025-06-30
	- [x] ds18b20 测温模块 ✅ 2025-06-30
- [x] 获取硬件信息， cat /proc/cpuinfo    cat /sys/firmware/devicetree/model   free -h ✅ 2024-12-16
- [x] `raspinfo`  一句话获取os信息 ✅ 2025-06-30

**软件**  [[代码实现]]
- [x] [[RPI OS]]下载 （bullseye版本选择） ✅ 2024-12-16
- [x] sqlitef ✅ 2024-12-16
- [x] Node-red ✅ 2025-06-30
- [x] [[Flask]] 🛫 2024-11-28 ✅ 2024-12-16
- [x] Micropython ✅ 2025-06-30
- [x] Thonny ✅ 2024-12-16
- [x] pycharm ✅ 2024-12-16
- [x] [2. Basic Recipes — gpiozero 2.0.1 Documentation](https://gpiozero.readthedocs.io/en/latest/recipes.html) ✅ 2025-06-30
- [x] css grid [CSS Grid 网格布局教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html) ✅ 2025-06-30
- [x] 提速工具turbolinks[GitHub - turbolinks/turbolinks: Turbolinks makes navigating your web application faster](https://github.com/turbolinks/turbolinks) ✅ 2025-06-30
- [x] 页面显示加载速度 [topbar by buunguyen](https://buunguyen.github.io/topbar/) ✅ 2025-06-30
- [x] flask 库 ✅ 2025-06-30
	- [x] [Flask-DebugToolbar — Flask-DebugToolbar 0.15.1 documentation](https://flask-debugtoolbar.readthedocs.io/en/latest/) ✅ 2025-06-30
	- [x] [[Flask-buleprint]] ✅ 2025-06-30
	- [ ] flask运行view function前后的过程解释 [Site Unreachable](https://testdriven.io/blog/how-are-requests-processed-in-flask/)
	- [x] flask context  上下文解析；**用于跟踪代码需要执行的数据** [Understanding the Application and Request Contexts in Flask | TestDriven.io](https://testdriven.io/blog/flask-contexts/) ✅ 2025-06-30
	- [x] application 以及 request context [Deep Dive into Flask's Application and Request Contexts | TestDriven.io](https://testdriven.io/blog/flask-contexts-advanced/) ✅ 2025-06-30
	- [x] [flask tips](https://www.patricksoftwareblog.com/flask_tips.html) ✅ 2025-06-30
	- [x] session [Sessions in Flask | TestDriven.io](https://testdriven.io/blog/flask-sessions/) 由于请求是无状态的，需要**一种方法来存储每个请求之间的数据** ✅ 2025-06-30
- [x] WSGI服务器 [Gunicorn - Python WSGI HTTP Server for UNIX](https://gunicorn.org/) ✅ 2025-06-30








需要解决的软件技术问题
- [x] #python 将数据保存在sqlite中，并将数据推送到云端（云端的选择） ✅ 2025-06-30




**前端显示**
使用ipad 利用[VNC](https://apps.apple.com/gb/app/realvnc-viewer-remote-desktop/id352019548)显示pi的输出web页面
- [ ] chart.js
参考[[apex fusion的显示]]
[[很棒的DIY系统01]]
[[很棒的DIY系统02]]
[[很棒的DIY系统03]]
🔴[[很棒的DIY系统04]]
[[有趣的DIY设计]]

可以参考的完整项目 [reef-pi - An opensource reef tank controller based on Raspberry Pi](https://reef-pi.github.io/)


**UI**
温度，PH 
日程（间隔多久进行清洗蛋分，底缸; 控制按钮进行记录;如果按了，就清除，否则一直闪烁）
	嵌入日历中
	[Serving Flask Applications with uWSGI · jdhao's digital space](https://jdhao.github.io/2020/06/13/flask_serving_via_wsgi_server/)
	[GitHub - Kartones/flask-calendar: Simple Python & Flask web-calendar](https://github.com/Kartones/flask-calendar?tab=readme-ov-file)
自动拍照记录
维护界面（各种维护的时间间隔，dosin，skimmer等）

前天显示
9行，3列



[[PH传感器使用相关]]


参考：

- [x] [如何在启动时自动运行python脚本]([How To Autorun A Python Script On Raspberry Pi Boot - Raspberry Pi Spy](https://www.raspberrypi-spy.co.uk/2015/02/how-to-autorun-a-python-script-on-raspberry-pi-boot/)) ✅ 2024-12-02
- [x] [如何在rpi上建立flask网站](https://www.raspberrypi-spy.co.uk/2017/07/create-a-basic-python-web-server-with-flask/) ✅ 2024-12-02


硬件相关参考
- [x] [模拟信号转数字信号 MCP3008](https://www.raspberrypi-spy.co.uk/2013/10/analogue-sensors-on-the-raspberry-pi-using-an-mcp3008/) ✅ 2024-12-02




应用相关的参考：
[Build an IoT-Based Weather Station in Raspberry Pi 4 - The Engineering Projects](https://www.theengineeringprojects.com/2024/01/build-an-iot-based-weather-station-in-raspberry-pi-4.html)
[Aquarium App Created for Reef Tank - YouTube](https://youtu.be/DdM4q2Ocza4)
