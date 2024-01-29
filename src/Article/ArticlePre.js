import React from "react";
import { Link } from 'react-router-dom';

export default function ArticlePre({
  id, source, title, description, urlToImage, publishedAt}) {
  return (
    <Link to={`/article/${id}`}>
      <div className='article'>
        <h2>{title}</h2>
        <img src={urlToImage} />
        <p>{publishedAt}</p>
        <p>{description}</p>
        <p>{source}</p>
      </div>
    </Link>
    
  )
}