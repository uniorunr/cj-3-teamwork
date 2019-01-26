import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBarItem.css';

const NavBarItem = ({
  id, active, hash, name, onClick,
}) => (
  <li className={active}>
    <Link id={id} to={hash} onClick={onClick}>{name}</Link>
  </li>
);

NavBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavBarItem;
