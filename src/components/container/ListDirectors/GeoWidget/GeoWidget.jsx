import React from 'react';
import PropTypes from 'prop-types';
import './GeoWidget.css';

const GeoWidget = ({ name, mapSource }) => (
  <div className="geo-widget-container">
    <h2>Место основной деятельности режиссера</h2>
    <iframe title={name} src={mapSource} width="800" height="600" frameBorder="0" allowFullscreen />
  </div>
);

GeoWidget.propTypes = {
  mapSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default GeoWidget;
