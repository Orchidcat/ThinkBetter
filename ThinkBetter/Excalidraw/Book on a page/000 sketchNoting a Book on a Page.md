![[Pasted image 20250619132139.png]]

### Summary

[Sketchnoting a Book in Obsidian](https://www.zsolt.blog/2021/07/sketchnoting-book-in-obsidian.html)

渐进式摘要在压缩和保留上下文之间取得平衡。

其基本理念是创建一份简短、可搜索的文档，如果我几年后再拿起它，它能包含足够的上下文，让我想起从阅读那本书中学到的要点。这是一个将一本书整理成迷你摘要或“一页书”的过程，其方式是使压缩过程的每个步骤都易于执行，并且可以在相对较短的时间内完成，分散在不同的时间点，在完成其他工作的同时，只根据信息量的大小进行调整。


### 5层摘要
Tiago 定义了 5 层摘要，每层都易于实现，且只需少量工作。通过逐层叠加，最终实现了文本的高效压缩。这种方法的优点在于，它在整个过程中保持了上下文的完整性，方便以后深入我的文献笔记，甚至在需要时可以查阅书籍。

![[Pasted image 20250619132351.png]]


## 第 0 层 - 原始全文书籍

我在 Obsidian 的 Vault 的 Books/Title-of-the-Book 文件夹下为这本书添加了一个页面。我将这本书放在一个单独的文件夹中，因为在绘制草图的过程中，我会在不同的文件中创建许多图纸，将它们全部整理在一个文件夹中会更整洁。我在这本书的页面上添加了三个链接：“文献笔记”（Literature Notes）、“摘要”（summary）和“一页书”（book on a page)。
![[Pasted image 20250619134727.png]]

![[Pasted image 20250619132655.png]]


## 第 1 层 - 文献笔记

我在 Kindle 上阅读。我的第一层笔记是文本高亮，以及在高亮旁边偶尔添加的个人笔记。我发现 Tiago 的最佳实践建议（高亮显示每个章节标题）非常有帮助，因为这样生成的 Kindle 剪贴内容可以保留书籍的原始结构。这为以后在 Obsidian 中处理剪贴内容提供了背景信息。我对高亮显示的内容非常自由。通常我会高亮显示大约 5-10% 的内容。

读完这本书后，我从 Kindle 下载了“My Clippings.txt”文件，将其重命名为“My Clippings.md”，然后将其放入 Obsidian。然后，我使用一个简单的[Templater脚本将剪辑文件转换为 Markdown 文献笔记。你可以](https://github.com/SilentVoid13/Templater)[在这里](https://github.com/SilentVoid13/Templater/discussions/296)找到我的脚本。

## 第 2 层 - 突出显示的注释

将第一层笔记导入 Obsidian 后，我会通读笔记并标记章节标题（#、## 等）。在第一次通读的过程中，我还会按CTRL+H键突出显示 笔记中我认为比较重要的部分。我不会花太多时间考虑要突出显示哪些内容，而是按照自己的感觉进行。如果受到文本的启发，我也会添加一些速写。我还有一个 Templater 脚本，可以帮助我以尽可能少的阻碍添加速写。你可以[在这里](https://github.com/SilentVoid13/Templater/discussions/297)找到我的 Templater 脚本。

![[Pasted image 20250619132946.png]]



## 第 3 层 - 大胆亮点

第二次浏览文献笔记时，我会重点关注突出显示的文本，并用粗体标记我认为特别重要的关键词或片段。我还会完善草图或添加新的草图。

## 第 4 层 - 简要总结

我使用第三个 Templater 脚本从我的文献笔记中提取高亮文本和草图，创建了一份摘要文档的草稿。我会自己对这份文本进行修改，有时还会对文本进行一些调整，最终确定我的书籍摘要。你可以[在这里找到我的 Templater 脚本，也可以](https://github.com/SilentVoid13/Templater/discussions/294)[在这里](https://www.zsolt.blog/2021/07/book-summary-storyworthy.html)找到我为 Storyworthy 撰写的最终迷你摘要。下图展示了摘要初稿的样子。

![[Pasted image 20250619133011.png]]


## 第 5 层 - Book  on a page

这是整个流程的最后一步。我在这方面经验不多，因为到目前为止我只写过一篇“一页书”的摘要。我通读了我的小摘要，并查看了我的草图。我把所有草图复制到一个 Excalidraw 页面上，并尝试整理它们，删除不必要的文字和绘图，直到我对结果感到满意为止。

![[Pasted image 20250619133304.png]]