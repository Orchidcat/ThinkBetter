---
author: 
tags:
  - Book
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
instanceof指令判断对象是否是某个类的实例（或者对象的类是否实现了某个接口），并把结果推入操作数栈。


### ch07
方法调用分两类：静态方法和实例方法。静态方法通过类来调用，实例方法则通过对象引用来调用。静态方法是静态绑定的，也就是说，最终调用的是哪个方法在编译期就已经确定。实例方法则支持动态绑定，最终要调用哪个方法可能要推迟到运行期才能知道。

实现的角度，分为3类：没有实现（抽象方法），java语言实现，本地语言实现（c，c++)


### ch08

普通的类从class文件中加载，但是数组类由Java虚拟机在运行时生成。
数组的类名是左方括号（\[）+数组元素的类型描述符；数组的类型描述符就是类名本身。
创建数组的方式和创建普通对象的方式不同。普通对象由new指令创建，然后由构造函数初始化。基本类型数组由newarray指令创建；引用类型数组由anewarray指令创建；另外还有一个专门的multianewarray指令用于创建多维数组。

### ch09

OpenJDK类库中的本地方法是用JNI(Java Native Interface)
先实现一个本地方法注册表，用来注册和查找本地方法。

[反射](<反射（reflection）是指在运行时动态地获取类的信息、访问对象属性和方法的机制。
反射可以让程序在运行时动态地操作类和对象，而不需要在编译时确定这些操作。

反射通过Java语言提供的java.lang.reflect包中的类和接口来实现。使用反射，可以在运行时获取一个类的类名、属性、方法、构造函数等信息，并且可以通过这些信息来创建对象、调用方法、修改属性等。

反射在某些场景下非常有用，比如在框架开发、动态代理、测试框架、代码生成等领域都有广泛的应用。但是，反射也会带来一些性能上的损失和代码可读性的下降，因此需要谨慎使用。

在Java语言中，有两种方式可以获得类对象引用：使用类字面值和调用对象的getClass（）方法。

自动拆装箱，就是为了将原始类型值自动的装换成对应的对象。


### ch10
异常可以分为两类：Checked异常和Unchecked异常
Unchecked异常包括java.lang.RuntimeException、java.lang.Error以及它们的子类，其他异常都是Checked异常
所有异常都最终继承自java.lang.Throwable
如果一个方法有可能导致Checked异常抛出，则该方法要么需要捕获该异常并妥善处理，要么必须把该异常列在自己的throws子句中，否则无法通过编译。Unchecked异常没有这个限制。

异常可以由Java虚拟机抛出，也可以由Java代码抛出。

异常是通过`throw`关键字抛出。

构造函数都调用了超类java.lang.Throwable的构造函数。Throwable的构造函数又调用了fillInStackTrace（）方法记录Java虚拟机栈信息
```java
// java.lang.Throwable
public synchronized Throwable fillInStackTrace() {
   if (stackTrace != null ||
      backtrace != null /* Out of protocol state */ ) {
      fillInStackTrace(0);
      stackTrace = UNASSIGNED_STACK;
   }
   return this;
}
```

fillInStackTrace（）是用Java写的，必须借助另外一个本地方法才能访问Java虚拟机栈，这个方法就是重载后的fillInStackTrace（int）
```java
private native Throwable fillInStackTrace(int dummy);
```

要想抛出异常，Java虚拟机必须实现这个本地方法.














