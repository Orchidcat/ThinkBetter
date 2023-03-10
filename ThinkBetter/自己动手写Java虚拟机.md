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
	- 常量池
🧰 javap 可以反编译class文件，查看内容。






