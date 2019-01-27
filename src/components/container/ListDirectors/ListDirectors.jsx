import React from 'react';
import ru from '../../../config/ru.json';
import './ListDirectors.css';
import TimeLine from './Timeline/TimeLine';

const ListDirectors = () => {
  const {
    timeline: { life },
  } = ru.main.content[0];
  return (
    <div className="list-container">
      <div className="sidebar" />
      <div className="scroll-timeline">
        <TimeLine content={life} />
      </div>
    </div>
  );
};

export default ListDirectors;
