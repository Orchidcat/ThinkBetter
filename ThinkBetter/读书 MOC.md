---
author: 何柳
tags: ['MOC']
---
[[+Home]]


**读书**
```dataview
table type as "评价",
dateformat(file.cday, "yyyy-MM-dd") as "创建日期"
from #Book 
where dateformat(file.cday,"yyyy")="2022"
sort file.ctime DESC
```
```

**文章**

```dataview
table desc as "评价",
dateformat(file.cday, "yyyy-MM-dd") as "创建日期"
from #articles  
where dateformat(file.cday,"yyyy")="2022"
sort file.ctime DESC
```

**演讲**

```dataview
table desc as "评价",
dateformat(file.cday, "yyyy-MM-dd") as "创建日期"
from #Speeches  
where dateformat(file.cday,"yyyy")="2022"
sort file.ctime DESC
flatten file.name
```

