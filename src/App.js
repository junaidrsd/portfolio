import React from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/projects';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__text" ><h3>Representing</h3></div>
      <div className="page">
        <Projects />
      </div>
    </div>
  );
}

export default App;
