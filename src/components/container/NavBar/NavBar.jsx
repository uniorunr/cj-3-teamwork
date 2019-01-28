import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from '../../presentetion/NavBarItem/NavBarItem';
import './NavBar.css';

const NavBar = ({ lang, active, onClick }) => (
  <div className="navbar-container">
    <nav>
      <ul>
        <NavBarItem
          id="home"
          active={active ? 'active' : 'not-active'}
          name={lang.navbar.home}
          onClick={onClick}
        />
        <NavBarItem
          id="list"
          active={active ? 'not-active' : 'active'}
          name={lang.navbar.list}
          onClick={onClick}
        />
      </ul>
    </nav>
  </div>
);

NavBar.propTypes = {
  lang: PropTypes.instanceOf(Object).isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavBar;
