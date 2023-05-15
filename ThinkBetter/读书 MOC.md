### 读书

```ad-note
生命太短暂，不能花在那些不值得阅读的内容上面。

就算你是一个很爱读书的人，活到70岁最多大概能阅读15000本书，这只占世界最大图书馆美国国会图书馆3800万册藏书的0.04%。

我们一生中能够阅读的书籍其实很少。因此，关键技能不是多读，而是跳过那些不值得读的内容
```

[[如何阅读]]



**想要阅读的list**
```dataview
list startDate+author + rating  from #UnReadBook 
```



```dataview
table type as "描述" ,file.cday from #Book 
sort startDate desc
```


```dataview
table desc as "描述", date as "开始日期" from #articles 
sort date desc
```


```dataview
table type as "描述", Date as "开始日期" from #Speeches 
```