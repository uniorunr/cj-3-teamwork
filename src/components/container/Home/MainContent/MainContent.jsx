import React from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';

const MainContent = ({ index, lang }) => {
  const { title, text } = lang.home;
  const { name, description, photo } = lang.main.content[index];

  return (
    <div className="main-content">
      <div className="main-director-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="main-director-info">
        <h2>{name}</h2>
        <img src={photo} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  index: PropTypes.number.isRequired,
  lang: PropTypes.instanceOf(Object).isRequired,
};

export default MainContent;
