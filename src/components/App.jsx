import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './container/NavBar/NavBar';
import Home from './container/Home/Home';

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = () => (
  <Router>
    <div className="wrapper">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default App;
