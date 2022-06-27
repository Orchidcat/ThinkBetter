---
author: 何柳
tags: ['MOC']
---
[[+Home]]



```dataview
table type as "评价",
dateformat(file.cday, "yyyy-MM-dd") as "创建日期"
from #Book 
where dateformat(file.cday,"yyyy")="2022"
sort file.ctime DESC
```


