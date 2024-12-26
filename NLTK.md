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





