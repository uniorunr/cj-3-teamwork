import React, { Component } from 'react';
import NavBarItem from '../../presentetion/NavBarItem/NavBarItem';
import ru from '../../../config/ru.json';
import './NavBar.css';

class NavBar extends Component {
  state = {
    active: true,
    id: 'home',
  };

  handlerClickActive = (e) => {
    const { active, id } = this.state;
    const targetId = e.target.id;
    if (targetId !== id) {
      this.setState({
        active: !active,
        id: targetId,
      });
    }
  };

  render() {
    const { active } = this.state;
    return (
      <div className="navbar-container">
        <nav>
          <ul>
            <NavBarItem
              id="home"
              active={active ? 'active' : 'not-active'}
              hash="/"
              name={ru.navbar.home}
              onClick={this.handlerClickActive}
            />
            <NavBarItem
              id="list"
              active={active ? 'not-active' : 'active'}
              hash="/list"
              name={ru.navbar.list}
              onClick={this.handlerClickActive}
            />
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
