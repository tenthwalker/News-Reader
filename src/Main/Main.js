import React, { useState, useEffect } from 'react';
import ArticlePre from '../Article/ArticlePre.js';
import { v4 as uuid } from "uuid";

export default function Main({articles}) {
  const articleList = articles.map((article) => (
    <ArticlePre
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
    />
  ));

  return (
    <section className='article-list'>
      {articleList}
    </section>
  )
}