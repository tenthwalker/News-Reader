import React from "react";
import "./Article.css";

export default function Article({
  id, source, author, title, description, urlToImage, publishedAt, content, isExp, toggleExp}) {
    
    const selectedArt = {
      key: id,
      id: id,
      source: source,
      author: author,
      title: title,
      description: description,
      urlToImage: urlToImage,
      publishedAt: publishedAt,
      content: content,
      exp: isExp?.find(article => article.title === title)
    }

  return (
      <div className='article' >
        <h2>{title}</h2>
        <img src={urlToImage} alt="color photo accompanying news article" />
        <p>{publishedAt}</p>
        {selectedArt.exp ? <p>{content}</p> : <p>{description}</p>}
        <p>{author}</p>
        <p>{source.name}</p>
        <button onClick={() => toggleExp(selectedArt)}>{selectedArt.exp ? "See less" : "See more"}</button>
      </div>
  );
}