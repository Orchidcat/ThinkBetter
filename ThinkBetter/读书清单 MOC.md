---
author: 何柳
tags: ['MOC']
---
[[+Home]]

```dataview
table rating as "评价",
dateformat(file.cday, "yyyy-MM-dd") as "创建日期",
dateformat(endDate, "yyyy-MM-dd") as "阅读完成日"
from #Book 
where dateformat(file.cday,"yyyy")="2022"
sort file.ctime DESC,rating  DESC
```


