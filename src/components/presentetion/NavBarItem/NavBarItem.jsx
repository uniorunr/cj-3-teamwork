import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBarItem.scss';

const NavBarItem = ({ hash, name }) => (
  <li>
    <Link to={hash}>{name}</Link>
  </li>
);

NavBarItem.propTypes = {
  hash: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavBarItem;
