import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Divider from './components/Divider';
import './App.scss';

function Contact() {
  return (<div>Contact</div>)
}

const RenderProjects = () => (
  <>
    <div className="app__text" ><h3>Representing</h3></div>
    <div className="page">
      <Projects />
      <Divider />
    </div>
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={RenderProjects} />
          <Route path="/contact" component={Contact}/>
          <Route path="/" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
