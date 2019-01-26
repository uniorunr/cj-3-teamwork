import React from 'react';
import ru from '../../../../config/ru.json';
import './MainContent.css';

const MainContent = () => {
  const {
    name,
    description,
    foto,
    title,
    text,
  } = ru.main.content[0];

  return (
    <div className="main-content">
      <div className="main-director-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="main-director-info">
        <h2>{name}</h2>
        <img src={foto} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MainContent;
