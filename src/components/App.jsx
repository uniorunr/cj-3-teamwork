import React, { Component } from 'react';
import _ from 'lodash';
import NavBar from './container/NavBar/NavBar';
import Home from './container/Home/Home';
import ListDirectors from './container/ListDirectors/ListDirectors';
import SwitchLang from './container/SwitchLang/SwitchLang';
import './App.css';
import ru from '../config/ru.json';
import en from '../config/en.json';
import by from '../config/by.json';

class App extends Component {
  state = {
    teams: [{ name: 'rick42morty' }, { name: 'uniorunr' }, { name: 'Frol8612' }, { name: 'loori-r' }],
    index: 0,
    lang: { ru, en, by },
    id: 'ru',
    active: true,
    idNav: 'home',
  };

  componentDidMount = async () => {
    const { teams } = this.state;
    await _.forEach(teams, async (user, i) => {
      await this.fetchUser(user.name, i);
    });

    this.setState({
      index: _.random(0, 4),
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

  handChange = (e) => {
    const { id } = e.target;
    this.setState({
      id,
    });
  };

  handlerClickActive = (e) => {
    const { active, idNav } = this.state;
    const targetId = e.target.id;
    if (targetId !== idNav) {
      this.setState({
        active: !active,
        idNav: targetId,
      });
    }
  };

  render() {
    const {
      teams, index, lang, id, active,
    } = this.state;
    return (
      <div className="wrapper">
        <NavBar lang={lang[id]} active={active} onClick={this.handlerClickActive} />
        <div className="main-container">
          {
            active ? <Home teams={teams} index={index} lang={lang[id]} />
              : <ListDirectors lang={lang[id]} />}
        </div>
        <SwitchLang lang={id} onChange={this.handChange} />
      </div>
    );
  }
}

export default App;
