import React from 'react';
import Article from '../Article/Article.js';
import { v4 as uuid } from "uuid";

export default function Main({articles, isExp, toggleExp}) {
  const articleList = articles.map((article) => (
    <Article
      key={uuid().slice(0, 8)}
      id={uuid().slice(0, 8)}
      source={article.source.name}
      author={article.author}
      title={article.title}
      description={article.description}
      url={article.url}
      urlToImage={article.urlToImage}
      publishedAt={article.publishedAt}
      content={article.content}
      isExp={isExp}
      toggleExp={toggleExp}
    />
  ));

  return (
    <section className='article-list'>
      {articleList}
    </section>
  )
}