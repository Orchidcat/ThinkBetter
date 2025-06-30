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



### 分块
用来识别短语

需要创建一个块解析器：
```
grammar = "NP: {<DT>?<JJ>*<NN>}"
chunk_parser = nltk.RegexpParser(grammar)
tree = chunk_parser.parser(原文)
tree.draw() 视觉表现出
```


### 填缝 
分块用于包含模式，而填缝用于排除模式

```python
grammar = """
Chunk: {<.*>+}
       }<JJ>{"""
```

语法的第一条规则是`{<.*>+}`。此规则有向内的花括号 ( `{}`)，因为它用于确定要包含在块中的模式。在本例中，您要包含所有内容：`<.*>+`。

语法的第二条规则是`}<JJ>{`。此规则的花括号朝外 ( `}{`)，因为它用于确定要从块中排除哪些模式。在本例中，您要排除形容词：`<JJ>`。


### 使用命名实体识别 (NER)
**命名实体**是指代特定地点、人物、组织等的名词短语。借助**命名实体识别**，您可以在文本中找到命名实体，还可以确定它们属于哪种命名实体。
```python
nltk.download("maxent_ne_chunker")
nltk.download("words")
tree = nltk.ne_chunk(lotr_pos_tags)
```


- 直接从文本中提取命名实体
```python
def extract_ne(quote):
    words = word_tokenize(quote, language=language)
    tags = nltk.pos_tag(words)
    tree = nltk.ne_chunk(tags, binary=True)
    return set(
        " ".join(i[0] for i in t)
        for t in tree
        if hasattr(t, "label") and t.label() == "NE"
    )

extract_ne(quote)
```


### 获取要分析的文本
```
nltk.download("book")
```

### 色散图
使用**散度图**来查看特定单词出现的次数和出现的位置
```python
text8.dispersion_plot(
    ["woman", "lady", "girl", "gal", "man", "gentleman", "boy", "guy"]
)
```

### 频率分布
检查哪些单词在文本中出现频率最高

```python
from nltk import FreqDist
frequency_distribution = FreqDist(text8)
print(frequency_distribution)

frequency_distribution.most_common(20) 显示前20

meaningful_words = [
    word for word in text8 if word.casefold() not in stop_words
]   //去除停用词

frequency_distribution = FreqDist(meaningful_words) //获取更有意义的词频

frequency_distribution.plot(20, cumulative=True)  //可以转为图表

```


### 寻找搭配

```python
text8.collocations()
```















