


## Reading

```dataview
table rating as "评价",endDate as "阅读完成日"
from #Book/Reading
sort rating DESC
```



## 2022


```dataview
table rating as "评价",
dateformat(file.cday, "yyyy-MM-dd") as "创建日期",
(<dateformat(file.cday, "yyyy-MM-dd")>) as "阅读完成日",
from #Book 
sort rating DESC
```


## 2021
## 2020