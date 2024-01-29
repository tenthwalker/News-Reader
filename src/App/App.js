import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../Error/Error.js';
import './App.css';
import fakeData from '../MockData.js';
import Main from '../Main/Main.js'

function App() {

  const [articles, setArticles] = useState([]);
  const url = 'https://newsapi.org/v2/top-headlines?';

  function getArticles() {
    const response = fakeData.articles
    console.log(response)
    setArticles(response)
  }  

  useEffect(() => {
    getArticles()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Main articles={articles}/>
      </main>
    </div>
  );
}

export default App;
