import React, { useState, useEffect } from 'react';
import './App.css';
import fakeData from '../MockData.js';
import Main from '../Main/Main.js'

function App() {
  const [isExp, setExp] = useState([]);
  const [isChrono, setChrono] = useState(true);
  const [articles, setArticles] = useState([]);
  const url = 'https://newsapi.org/v2/top-headlines?';

  function getArticles() {
    const response = fakeData.articles
    console.log(response)
    setArticles(response)
  }  

  function toggleSort() {
    console.log("toggle")
    console.log(isChrono)
    console.log(articles, "inside toggle articles")
    if (isChrono) {
      setChrono(false)
      const trueTime = articles.sort((a, b)=> {
        return new Date(a.publishedAt)- new Date(b.publishedAt)
      })
      console.log(trueTime, "trueTime")
      setArticles(trueTime)
    } else {
      setChrono(true)
      const reverseTime = articles.sort((a, b)=> {
        return new Date(b.publishedAt)- new Date(a.publishedAt)
      })
      console.log(reverseTime, "reverseTime")
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
        <Main articles={articles} isExp={isExp} toggleExp={toggleExp}/>
      </main>
    </div>
  );
}

export default App;
