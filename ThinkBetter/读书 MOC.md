### 读书


**想要阅读的list**
```dataview
list startDate+author + rating  from #UnReadBook 
```



```dataview
table type as "描述" ,file.cday from #Book 
sort startDate desc
```


```dataview
table desc as "描述", Date as "开始日期" from #articles 
sort date desc
```


```dataview
table type as "描述", Date as "开始日期" from #Speeches 
```