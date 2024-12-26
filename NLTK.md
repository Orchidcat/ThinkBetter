#python #NLP 




NLTK 需要预处理。

### 标记化
这是将非结构化数据转化为结构化的第一步。
可以方便地按单词或句子拆分文本。这样您就可以处理较小的文本片段，这些文本片段即使脱离了其余文本的上下文，仍然相对连贯且有意义

- 按照单词标记
- 按照句子标记（可以分析单词之间的关系并了解更多上下文）

`word_tokenize()` 将文本拆分为单词。
`sent_tokenize()` 将文本拆分为句子。


过滤停用词(in ，is 等)

```python
nltk.download("stopwords")
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
```


可以自己创建更多的停用词 
```python
stop_words = set(stopwords.words("english"))
```


### 词干提取
可将单词简化为词根，即单词的核心部分。例如，“helping”和“helper”这两个词共用一个词根“help”。

NLTK有多个词干提取器
```python
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
```

==词干提取不足和词干提取过度==是词干提取可能出错的两种方式：

1. 当两个相关单词应该被简化为同一个词干但实际上却没有时，就会发生词干不足的情况。这是一种[假阴性](https://en.wikipedia.org/wiki/False_positives_and_false_negatives#False_negative_error)
2. 过度词干化**是指两个不相关的单词被简化为同一个词干，尽管它们不应该如此。这是一种[误报](https://en.wikipedia.org/wiki/False_positives_and_false_negatives#False_negative_error)。

**Snowball**是最新的词干提取器



### 标记词性

`pos_tag()`可以提供单词的词性。

用来查看词性列表
```python
nltk.download('tagsets_json')  
nltk.help.upenn_tagset()
```



### 词形还原
与词干提取形成了，如查字典般的过程

词形还原器



















