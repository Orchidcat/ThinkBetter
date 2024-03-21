### 阅读与书籍

当我们阅读时，另一个人替我们思考；我们只是重复了他的思维过程；
——叔本华（德国）

```ad-note
任何重要的书，应该立即读两遍。只有知道了结尾才能真正理解开头；

生命太短暂，不能花在那些不值得阅读的内容上面。

就算你是一个很爱读书的人，活到70岁最多大概能阅读15000本书，这只占世界最大图书馆美国国会图书馆3800万册藏书的0.04%。

我们一生中能够阅读的书籍其实很少。因此，关键技能不是多读，而是跳过那些不值得读的内容
```

[[如何阅读的方法]]


- [?] question


**想要阅读的list**
```dataview
list startDate+author + rating  from #UnReadBook 
sort file.cday.year desc,file.cday.month desc,file.cday.day desc
```



```dataview
table type as "描述" ,file.cday.month as "月" from #Book 
where file.cday.year=2024
sort file.cday.year desc,file.cday.month desc,file.cday.day desc
```


```dataview
table desc as "描述", file.cday.year as "年",file.cday.month as "月" from #articles 
where file.cday.year=2023
sort file.cday.year desc,file.cday.month desc
```


```dataview
table file.cday.year as "年",file.cday.month as "月" from #Speeches 
```