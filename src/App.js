import React from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/projects';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="page">
        <Projects />
      </div>
    </div>
  );
}

export default App;
