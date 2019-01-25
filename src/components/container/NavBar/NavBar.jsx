import React from 'react';
import NavBarItem from '../../presentetion/NavBarItem/NavBarItem';
import './NavBar.scss';

const NavBar = () => (
  <div className="navbar-container">
    <div className="header-logo">
      <h1>Director</h1>
    </div>
    <nav>
      <ul>
        <NavBarItem hash="/" name="Home" />
        <NavBarItem hash="/about" name="About" />
        <NavBarItem hash="/users" name="Users" />
      </ul>
    </nav>
  </div>
);

export default NavBar;
