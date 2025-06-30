# PB的编译过程

- cebuild.bat
	- sysgen.bat
		- cesysgen.bat  
		- 编译BSP(采用的bsp是Emulator，会编译目录%WINCEROOT%\Platform\Emulator目录下三个子目录KERNEL、DRIVERS、GWE中的源码文件)
		- txt2ucde.exe
		- nmake.exe
		- makeimg.exe
		- fmerge.exe
		- regcomp.exe
		- res2exe.exe
		- romimage.exe
		- build.exe


**cesysgen.bat** 
负责在*.wce文件中搜索用户选择的特征，然后形成一系列环境变量。之后PB会显示这些变量，下面几个步骤就是显示收集的变量。   产生SYSGEN变量。每个SYSGEN变量对应一个特征.产生CE_MODULE、COREDLL_COMPONENTS、FILESYS_COMPONENTS、DEVICE_COMPONENTS、GWE_COMPONENTS、DCOM_MODULES、FONTS_COMPONENTS等环境变量。其中每个环境变量包含某一个特征具体的内容。从环境变量名称就可以看出来是哪种特征。

对_DEPTREES环境变量指定的每个目录分别执行sysgen.bat批处理。DEPTREES这个变量的值是一些目录名（例如DCOM、IE、SERVERS、DIRECTX、WCESHELLFE等），这些目录名位于%WINCEROOT%\public。如果安装PB v4.1时默认安装路径，那么此目录路径为C:\WINCE410\Public。


清除_FLATRELEASEDIR环境变量指定的目录下的所有文件、子目录。假如我们定制的平台路径为C:\Emulator，那么这个环境变量的值为C:\Emulator\RelDir\Emulator_X86Release。   
复制%PROJECTROOT%\所有文件到_FLATRELEASEDIR。   
根据本地地区环境变量，寻找所有与本地语言相关的*.str文件复制到_FLATRELEASEDIR中。.str文件中包含了字符串资源，将字符串与ID关联。在_FLATRELEASEDIR目录下你可以看到以地区码为目录名的子目录。   
处理NLS（国家语言支持）数据。   
执行fmerge.exe。合并所有*.bib文件为一个文件ce.bib，合并所有*.reg文件为一个文件reginit.ini。   
执行cebuild.bat批处理文件。   
执行fmerge.exe。合并所有*.db文件为一个文件initdb.int，合并所有*.dat文件为一个文件initobj.dat。   
运行regcomp.exe压缩reginit.ini。   
运行txt2ucde.exe。将整个CE平台涉及到的所有字符串转成unicode码。   
运行res2exe.exe。将所有*.dll,*.exe,*.cpl文件中的资源更新。资源更新部分主要和语言相关。   
运行Romimage.exe。将所有文件合并压缩成一个文件nk.bin（默认文件名）。


参考 https://www.cnblogs.com/wenziqi/archive/2010/08/23/1806197.html