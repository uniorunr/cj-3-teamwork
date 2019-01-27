import React from 'react';
import ru from '../../../config/ru.json';
import './ListDirectors.css';
import TimeLine from './Timeline/TimeLine';
import PhotoGallery from './PhotoGallery/PhotoGallery';

const ListDirectors = () => {
  const {
    name,
    photo,
    timeline: { life, work, photos },
  } = ru.main.content[0];

  return (
    <div className="list-container">
      <div className="sidebar">
        <img src={photo} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="scroll-timeline">
        <TimeLine content={life} />
        <PhotoGallery images={photos} />
        <TimeLine content={work} />
      </div>
    </div>
  );
};

export default ListDirectors;
