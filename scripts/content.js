const article = document.querySelector('article')

// `document.querySelector` 如果选择器不匹配任何东西，则可能返回null。
if (article) {
  const text = article.textContent
  const wordMatchRegExp = /[^\s]+/g // 正则表达式用于仅计算<article>元素内的单词。

  const words = text.matchAll(wordMatchRegExp)
  // matchAll返回一个迭代器，转换为数组以获得字数
  const wordCount = [...words].length
  const readingTime = Math.round(wordCount / 200)
  const badge = document.createElement('p')
  // 在文章的标题中使用与发布信息相同的样式
  badge.classList.add('color-secondary-text', 'type--caption')
  badge.textContent = `⏱️ ${readingTime} min read`

  // Support for API reference docs
  const heading = article.querySelector('h1')
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode

  // InsertAdjacentElement()用于在元素后面插入读取时间节点。
  ;(date ?? heading).insertAdjacentElement('afterend', badge)
}
