import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './container/NavBar/NavBar';
import Home from './container/Home/Home';
import './App.css';

const About = () => <h2>About</h2>;

const App = () => (
  <Router>
    <div className="wrapper">
      <NavBar />
      <div className="main-container">
        <Route path="/" exact component={Home} />
        <Route path="/list/" component={About} />
      </div>
    </div>
  </Router>
);

export default App;
