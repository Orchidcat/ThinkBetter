


## Reading

```dataview
table rating as "评价",endDate as "阅读完成日"
from #Book/Reading
sort rating DESC
```



## 2022


```dataview
table rating as "评价",endDate as "阅读完成日"
from #Book 
WHERE file.mday = year(today)
sort rating DESC
```


## 2021
## 2020