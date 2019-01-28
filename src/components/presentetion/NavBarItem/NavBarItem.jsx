import React from 'react';
import PropTypes from 'prop-types';
import './NavBarItem.css';

const NavBarItem = ({
  id, active, name, onClick,
}) => (
  <li className={active}>
    <a href={`#${id}`} id={id} onClick={onClick}>
      {name}
    </a>
  </li>
);

NavBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavBarItem;
