#Git 

[GNU make](https://www.gnu.org/software/make/manual/make.html) 

选择编译器，识别要包含的源代码文件集，执行准备步骤以及将代码编译为最终形式的过程成为构建。


### make
make 是一个自动化构建工具。

### Makefile
用来描述其程序的构建过程的文本文件。然后可以使用 make 命令方便地运行 Makefile 中的指令。

```make
target1: prerequisite1
        recipe1

target2: prerequisite2
        recipe2

```

Makefile 包含一系列命名的命令集，可用于在代码库中执行不同的操作。每个命名的命令集称为 makefile 规则，由 makefile 目标、一个或多个可选 makefile 先决条件（或 makefile 依赖项）和 makefile 配方组成。

**Target可以是文件，也可以只是命令配方的名称。当目标纯粹充当一组命令的名称时，它被称为虚假目标。您可以将其视为函数名称。**

#### 执行Makefile Target
默认是执行target1，如果要指定默认 `.DEFAULT_GOAL := target2`  ；或者用 `make <target-name>` 直接运行

`make clean` 将删除之前的构建结果，重新按照当前makefile顺序进行构建。

```ad-info
默认情况下，make 将输出 makefile 中的每个命令。您可以通过在 makefile 本身的每一行之前添加 @ 符号来抑制这种情况。

例如，@echo Compiling source files 行仍将在 shell 上显示“编译源文件”文本，但不会显示 echo 命令本身。
```


### **Git's Original Makefile**
Git 是用C写的。

下面是 Git 的原始 Makefile。它用于调用 gcc C 编译器为原始 7 个 git 命令中的每一个构建二进制可执行文件：
1. init-db
2. update-cache
3. cat-file
4. show-diff
5. write-tree
6. read-tree
7. commit-tree

这个makefile 可以执行3个不同的target
1. make clean
2. make backup: 备份当前目录到一个 tar archive
3. make：执行上面7个git步骤


源码
```make
CFLAGS=-g # The `-g` compiler flag tells gcc to add debug symbols to the executable for use with a debugger.
CC=gcc # Use the `gcc` C compiler.
# Specify the names of all executables to make.
PROG=update-cache show-diff init-db write-tree read-tree commit-tree cat-file
all: $(PROG)
install: $(PROG)
    install $(PROG) $(HOME)/bin/
# Include the following dependencies in the build.
LIBS= -lssl
# Specify which compiled output (.o files) to use for each executable.
init-db: init-db.o
update-cache: update-cache.o read-cache.o
    $(CC) $(CFLAGS) -o update-cache update-cache.o read-cache.o $(LIBS)
show-diff: show-diff.o read-cache.o
    $(CC) $(CFLAGS) -o show-diff show-diff.o read-cache.o $(LIBS)
write-tree: write-tree.o read-cache.o
    $(CC) $(CFLAGS) -o write-tree write-tree.o read-cache.o $(LIBS)
read-tree: read-tree.o read-cache.o
    $(CC) $(CFLAGS) -o read-tree read-tree.o read-cache.o $(LIBS)
commit-tree: commit-tree.o read-cache.o
    $(CC) $(CFLAGS) -o commit-tree commit-tree.o read-cache.o $(LIBS)
cat-file: cat-file.o read-cache.o
    $(CC) $(CFLAGS) -o cat-file cat-file.o read-cache.o $(LIBS)
# Specify which C header files to include in compilation/linking.
read-cache.o: cache.h
show-diff.o: cache.h
# Define the steps to run during the `make clean` command.
clean:
    rm -f *.o $(PROG) temp_git_file_* # Remove these files from the current directory.
# Define the steps to run during the `make backup` command.
backup: clean
    cd .. ; tar czvf babygit.tar.gz baby-git # Backup the current directory into a tar archive.
```

`CFLAGS=-g` 指定编译期间使用的编译器标志（特殊编译器选项）。在这种情况下，-g 标志告诉编译器将调试信息输出到控制台。

`CC=gcc` 标识实际使用的编译器。 GCC 是 GNU 编译器集合。它支持多种编程语言的代码编译，包括 C、C++、Java 等。

第三行定义了一个名为 `PROG` 的构建变量，其中包含我们将要创建的可执行文件的名称。

`LIBS` 变量，这存储了我们想要链接到构建过程中的外部库。在本例中，我们链接 SSL 库，该库允许 Git 访问哈希等加密函数。

`all: $(PROG)` 再没有指定target的情况下，将全部执行。

`make install` 这与 all 目标的启动方式相同，即使用 $(PROG) 指定要编译的可执行文件。但随后它使用 install 命令将这些构建的可执行文件移动到用户主目录中。


```
update-cache: update-cache.o read-cache.o
     $(CC) $(CFLAGS) -o update-cache update-cache.o read-cache.o $(LIBS)
```

第二行被替换为：
gcc -g -o update-cache update-cache.o read-cache.o -lssl



在程序目标之后，有两行指定要链接到每个目标文件 (.o) 的 C 头文件 (.h)。 Baby Git 代码库中唯一的头文件是cache.h，它链接到read-cache.o 和show-diff.o。

C 头文件通常包含函数定义和函数声明，它们将包含在代码库的多个文件中。