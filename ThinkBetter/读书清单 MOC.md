


## Reading
```dataview
table dateformat(startDate, "yyyy-MM-dd") as "开始日"
from #Book/Reading
sort startDate ASC
```





## 2022


```dataview
table rating as "评价",
dateformat(file.cday, "yyyy-MM-dd") as "创建日期",
dateformat(endDate, "yyyy-MM-dd") as "阅读完成日"
from #Book 
where dateformat(file.cday,"yyyy")="2022"
sort rating DESC
```


## 2021
## 2020