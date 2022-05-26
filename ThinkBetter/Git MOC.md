
参考阅读 https://backlog.com/git-tutorial/cn/intro/intro1_1.html


# 版本控制软件（VCS)
- 集中式版本控制（CVC）- Subversion
- 分布式版本控制（DVCS）- Git


Git 通过拍摄**快照**来记录项目的每一个变化；
2005年，Linus Torvalds 推出。

常规的创建流程
1. 在**中央服务器**上创建一个[[Repository]]
2. 下载这个[[Repository]]到你的计算机上。在VCS中，该步骤被称为 **cloning**
3. 在本地的[[Repository]]中添加文件，并**Commit** 它们；Git将在你commit时，为这个项目建立一个快照。然后会维护这个快照的历史记录以备后面使用。
4. 上传修改的文件到**中央服务器**
5. 然后就可以下载任何团队成员修改的文件



```dataview
table type as "类型",desc as "简介"
from #Git 
sort type desc
```
