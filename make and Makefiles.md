#Git 

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
















