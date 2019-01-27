import React, { Component } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './container/NavBar/NavBar';
import Home from './container/Home/Home';
import ListDirectors from './container/ListDirectors/ListDirectors';
import './App.css';

class App extends Component {
  state = {
    teams: [{ name: 'rick42morty' }, { name: 'uniorunr' }, { name: 'Frol8612' }, { name: 'loori-r' }],
  };

  componentDidMount = async () => {
    const { teams } = this.state;
    await _.forEach(teams, async (user, i) => {
      await this.fetchUser(user.name, i);
    });
  };

  fetchUser = async (name, i) => {
    const user = await fetch(`https://api.github.com/search/users?q=${name}`).then(res => res.json());
    if (user.items) {
      this.setState((prevState) => {
        const prev = prevState;
        prev.teams[i].img = user.items[0].avatar_url;
        return prev;
      });
    }
  };

  render() {
    const { teams } = this.state;
    return (
      <Router>
        <div className="wrapper">
          <NavBar />
          <div className="main-container">
            <Route path="/" exact render={() => <Home teams={teams} />} />
            <Route path="/list" component={ListDirectors} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
