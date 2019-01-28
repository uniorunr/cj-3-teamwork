import React from 'react';
import PropTypes from 'prop-types';
import './DeveloperItem.css';

const DeveloperItem = ({ img, name }) => (
  <div className="developer-item">
    <a href={`https://github.com/${name}`}>
      <img src={img} alt={name} />
    </a>
    <p>{name}</p>
  </div>
);

DeveloperItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeveloperItem;
