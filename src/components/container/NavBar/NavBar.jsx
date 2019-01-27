import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarItem from '../../presentetion/NavBarItem/NavBarItem';
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
    const { lang } = this.props;
    return (
      <div className="navbar-container">
        <nav>
          <ul>
            <NavBarItem
              id="home"
              active={active ? 'active' : 'not-active'}
              hash="/"
              name={lang.navbar.home}
              onClick={this.handlerClickActive}
            />
            <NavBarItem
              id="list"
              active={active ? 'not-active' : 'active'}
              hash="/list"
              name={lang.navbar.list}
              onClick={this.handlerClickActive}
            />
          </ul>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  lang: PropTypes.instanceOf(Object).isRequired,
};

export default NavBar;
