---
author: 
tags: ['Book']
type: 
startDate: 2023-03-09
endDate: 
rating: 
---

### ch02
如何搜索class文件
- 加载class类之前，就需要加载超类`java.lang.Object`, 
	- 在调用main之前需要先读取参数组，就需要加载`java.lang.String和java.lang.String[]`;
	- 打印到控制台需要加载`java.lang.System`
	- 启动类路径 `jre\lib`, java标准库在这个路径，大部分在 rt.jar中 
	- 扩展类路径 `jre\lib\ext`  自己实现的类，或者第三方类库路径，可通过`-Xbootclasspath`进行修改
	- 用户类路径`CLASSPATH` 也就是`.`，也就是环境变量；通常使用java命令 -classpath(-cp)来修改

### ch03
如何解析class文件 
- oracle 提供了[标准的classfile结构](https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html)
	- 魔数 
	- 版本号
	- 类访问标志（区分私有共有，类还是接口等）
	- 类以及超类索引
	- 接口索引表（给出该类实现的所有接口的名字）
	- 字段和方发表
	- 常量池（实际是一个表，表头给出的大小比实际大1，常量池大小实际为n-1）：包含数字和字符串常量，类和接口名，字段和方法名等。常量可以分为两类：字面值（literal）和符号引用（symbolic reference）除了字面量，其他常量都是通过索引直接或间接指向CONSTANT_Utf8_info常量
	- 属性表
🧰 javap 可以反编译class文件，查看内容。


### ch04
实现运行时数据区（run-time data area）
- 内存区域 = 运行时数据区 
	- 多线程共享区，虚拟机启动时建立好，退出时销毁
		- 类数据 - 存放在 方法区（Method Area）
		- 类实例 - 存放在 堆（Heap）
	- 线程私有区，线程启动时创建，退出时销毁 
		- 各自的PC寄存器（Program Counter)
		- 各自的虚拟机栈（JVM Stack）
			- 栈帧（Stack Frame）构成，帧中保存方法的执行状态：局部变量表（Local Variable）和操作数栈（Operand Stack）
在任一时刻，某一线程肯定是在执行某个方法。这个方法叫作该线程的当前方法；执行该方法的帧叫作线程的当前帧；声明该方法的类叫作当前类。如果当前方法是Java方法，则pc寄存器中存放当前正在执行的Java虚拟机指令的地址，否则，当前方法是本地方法，pc寄存器中的值没有明确定义。
![[Pasted image 20230310090925.png]]

🧰 java提供 -Xms 和 -Xmx 选项来调整堆的初始大小和最大大小；-Xss选项来设置Java虚拟机栈大小

### ch06
方法区 - 运行时数据区的一块逻辑区域，由多个线程共享。
	主要存放从class文件获取的类信息 
	其次存放类变量（当Java虚拟机第一次使用某个类时，它会搜索类路径，找到相应的class文件，然后读取并解析class文件，把相关信息放进方法区）

结构体class.go 存放将要存放进方法区内的类；accessFlags.go 来存放具体标识位的含义。