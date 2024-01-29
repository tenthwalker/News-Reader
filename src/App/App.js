import { v4 as uuid } from "uuid";
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../Error/Error.js';
import './App.css';

function App() {
  const newId = uuid();
  const abbId = newId.slice(0, 8);


  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
