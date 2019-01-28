import React from 'react';
import PropTypes from 'prop-types';
import './DirectorInfo.css';

const DirectorInfo = ({ photo, name, description }) => (
  <div className="director-info-list--wrapper">
    <div className="director-info-list-img">
      <img src={photo} alt={name} />
    </div>
    <div className="director-info-list-description">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
);

DirectorInfo.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DirectorInfo;
