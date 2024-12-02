#reef #珊瑚 #Coral #RaspberryPi

预算 < RMB 600 < 50hr（8hr）

[Fetching Title#8ger](https://youtu.be/0lguyj1sFS8)
![[Pasted image 20241202140510.png]]


STEP:
- 网站编写
	- 读取sqlite数据，一定时间进行刷新（时间间隔可以后期设置）
	- 低温/高温/回温短信和电子邮件提醒
	- 每周发送电子邮件，列出需要进行哪些类型的维护
	- 循环显示一些漂亮的珊瑚图片
	- 可以通过**pi上安装android模拟器**来控制已经有软件支持的各种无线设备。
- rpi安装使用测试
	- 时钟对准RTC(`sudo timedatectl set-ntp True` ; 检查结果`timedatectl status` ;如果出现警告，你可能也必须跑`sudo timedatectl set-local-rtc true`)
	- ![[Pasted image 20241202155232.png]]
- 电路连接，AC转DC


### 需要完成的资源获取

#task 
**硬件**
- [x] Raspberry Pi 选型（[[rpi zero 2w]])，采购 ✅ 2024-11-29  ￥170.75
- [x] 硬件配件（杜邦线，OK线，面包板等） ✅ 2024-11-29    ￥16.7
- [ ] 传感器采购
	- [ ] 温度计（测试用）
- [ ] 被谈及的硬件
	- [ ] PCA9685
	- [ ] [MCP3008](https://gpiozero.readthedocs.io/en/latest/api_spi.html#gpiozero.MCP3008)
	- [ ] 继电器
	- [ ] MCP23017或 MCP23008  可以扩展GPIO的扩展板
	- [ ] ds18b20 测温模块

**软件**
- [ ] [[RPI OS]]下载 （bullseye版本选择）
- [ ] sqlite
- [ ] Node-red
- [ ] [[Flask]] 🛫 2024-11-28 
- [ ] Micropython
- [ ] Thonny
- [ ] pycharm
- [ ] [2. Basic Recipes — gpiozero 2.0.1 Documentation](https://gpiozero.readthedocs.io/en/latest/recipes.html)
- [ ] css grid [CSS Grid 网格布局教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)





需要解决的软件技术问题
- [ ] #python 将数据保存在sqlite中，并将数据推送到云端（云端的选择）




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
