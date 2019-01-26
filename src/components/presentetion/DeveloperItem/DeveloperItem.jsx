import React from 'react';
import PropTypes from 'prop-types';
import './DeveloperItem.css';

const DeveloperItem = ({ img, name }) => (
  <div className="developer-item">
    <img src={img} alt={name} />
    <p>{name}</p>
  </div>
);

DeveloperItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeveloperItem;
