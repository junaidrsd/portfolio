import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Divider from './components/Divider';
import { createBrowserHistory } from 'history';
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
    <div className="app">
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={RenderProjects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Contact} />
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
