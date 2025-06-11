
## 阅读与书籍


```ad-help
当我们阅读时，另一个人替我们思考；我们只是重复了他的思维过程；
——叔本华（德国）


```


```ad-note
任何重要的书，应该立即读两遍。只有知道了结尾才能真正理解开头；

生命太短暂，不能花在那些不值得阅读的内容上面。

就算你是一个很爱读书的人，活到70岁最多大概能阅读15000本书，这只占世界最大图书馆美国国会图书馆3800万册藏书的0.04%。

我们一生中能够阅读的书籍其实很少。因此，关键技能不是多读，而是跳过那些不值得读的内容
```


>[!column]
>>
>> ## 阅读方法
>> [[如何阅读的方法]]
>> [[Books]]
>> [[心智模型 TOC]]
>> [[一句话的玩味]]
>> [[一张有趣的图]]
>> [[反直觉]]
>> [[写点儿啥]]
>> [[写作]]
>> [[OB插件]]
>
>> ## ⛏️ 正在读
>> ```dataview
list from #Book/Reading  
sort file.cday.year desc,file.cday.month desc,file.cday.day desc

```

>> 
>
>> ## 😎 Life OS
>> [[基本Q]] [[NotToDo]] [[养生之道]]
>> [[愿望清单]]
>> [[中医]]
>> [[事件timing]]







### [[如何阅读的方法]]


### 书荒的列表
[Site Unreachable](https://sive.rs/book) 
[Naval's Recommended Reading — Almanack of Naval Ravikant](https://www.navalmanack.com/navals-recommended-reading)



写书之人，多为学者，而非真正意义上那些伟人；不能指望从学者的解释性和介绍性的作品中学到先贤的品质。应该去翻阅真正从事这项事业的人的作品，去了解该领域的原著，读那些真正践行古典主义价值观的英雄留下的作品；比如毛泽东、塞内加、恺撒或马可·奥勒留



**正在读**
```dataview
list from #Book/Reading  
sort file.cday.year desc,file.cday.month desc,file.cday.day desc
```

**想要阅读的list**
```dataview
list startDate+author + rating  from #UnReadBook 
sort file.cday.year desc,file.cday.month desc,file.cday.day desc
```


**2025**
____
```dataview
table without id link(file.link,default(file.aliases[0],file.name)) as "书名",type as "描述" ,file.cday.month as "月" from #Book 
where file.cday.year=2025
sort file.cday.year desc,file.cday.month desc,file.cday.day desc
```


```dataview
list rows.file.link
from #Book or #reading or #Book/Reading
flatten file.cday.year+"年"+length(rows) as yy
where file.cday.year < date(today).year
group by yy
sort yy desc
```





```dataview
table file.cday.year as "年",file.cday.month as "月" from #Speeches 
```