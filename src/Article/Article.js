import React from "react";

export default function Article({
  id, source, author, title, description, url, urlToImage, publishedAt, content}) {
  return (
    <div className='article'>
      <h2>{title}</h2>
      <img src={urlToImage} />
      <p>{publishedAt}</p>
      <p>{content}</p>
      <p>{source}</p>
    </div>
  )
}