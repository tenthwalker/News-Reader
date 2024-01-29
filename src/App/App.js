import React, { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main.js'

function App() {
  const [isExp, setExp] = useState([]);
  const [isChrono, setChrono] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const url = 'https://newsapi.org/v2/top-headlines?country=us';

  function getArticles() {
    fetch(url, {
      headers: {
        'X-Api-Key': '671cec5e971f4bfba51e71e563b6c10e'
      }
    })
    .then(response => response.json())
    .then(data => setArticles(data.articles))
    .catch(error => 
      {
        console.error("There was a problem with the fetch operation:", error)
        setError('There was an error with the fetch')
        alert(`Server Error: ${error.message}`)
      })
  }  

  function toggleSort() {
    if (isChrono) {
      setChrono(false)
      const trueTime = articles.sort((a, b)=> {
        return new Date(a.publishedAt)- new Date(b.publishedAt)
      })
      setArticles(trueTime)
    } else {
      setChrono(true)
      const reverseTime = articles.sort((a, b)=> {
        return new Date(b.publishedAt)- new Date(a.publishedAt)
      })
      setArticles(reverseTime)
    }
    return articles
  }

  function toggleExp(selectedArt) {
    const isInList = isExp.find(article => article.title === selectedArt.title)
    isInList ? handleCollapse(selectedArt) : handleExpand(selectedArt);
    return isInList
  }

  function handleCollapse(selectedArt) {
    function shrinkExp() {
      if(isExp.length === 1){
        setExp([]);
      } else {
        const filteredArticles = isExp.filter(article => article.title !== selectedArt.title); 
        setExp(filteredArticles);
      }
    }
    shrinkExp();
  };

  function handleExpand(selectedArt) {
    function showMore() {
      const checkArt = isExp.find(article => article.title === selectedArt.title);
      if(checkArt === undefined) {
        selectedArt.exp = true;
        setExp([...isExp, selectedArt]);
        return isExp;
      };
    }; 
    showMore();
    return isExp;
  }

  useEffect(() => {
    getArticles()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>News Reader</h1>
        <button onClick={() => toggleSort()}>{isChrono ? "sort oldest to newest" : "sort newest to oldest"}</button>
      </header>
      <main>
        {error && <h2>No news is good news, right? Try again in a bit.</h2>}
        <Main articles={articles} isExp={isExp} toggleExp={toggleExp}/>
      </main>
    </div>
  );
}

export default App;
