import React from "react";

export default function ArticleFull({
  id, source, author, title, urlToImage, publishedAt, content}){
  return (
    <article className=" article full-article">
      <h2>{title}</h2>
      <img src={urlToImage} />
      <p>{author}</p>
      <p>{publishedAt}</p>
      <p>{content}</p>
      <p>{source}</p>
    </article>
  )
}