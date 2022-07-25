## DataWindow
datawindow是一个对象的集合。
源码由下述组成：
- 版本信息  
	- release 9;
- DataWindow属性
	- datawindow(...)
- 带属性
	- header(...)
	- summary(...)
	- footer(...)
	- detail(...)
- 源码定义
	- table(...)
- 对象定义
	- text(...)
	- column(...)
	- line(...)
- HTML/XML属性
	- htmltable(...)
		xhtmlgen() cssgen(sessionspecific="0" )
		xmlgen(inline="0" )
		xsltgen()
		jsgen()
		export.xml(headgroups="1" includewhitespace="0" metadatatype=0 savemetadata=0 )
		import.xml()
		export.pdf(method=0 distill.custompostscript="0" xslfop.print="0" )
		export.xhtml()

使用Modify()针对对象进行修改。

