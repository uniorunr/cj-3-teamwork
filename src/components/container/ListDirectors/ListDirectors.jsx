import React from 'react';
import ru from '../../../config/ru.json';
import './ListDirectors.css';
import TimeLine from './Timeline/TimeLine';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import GeoWidget from './GeoWidget/GeoWidget';
import SearchByList from './SearchByList/CardDirector';

const ListDirectors = () => {
  const {
    name,
    place,
    timeline: { life, work, photos },
  } = ru.main.content[0];

  return (
    <div className="list-container">
      <div className="sidebar">
        <SearchByList directors={ru.main.content} />
      </div>
      <div className="scroll-timeline">
        <TimeLine content={life} />
        <PhotoGallery images={photos} />
        <TimeLine content={work} />
        <GeoWidget mapSource={place} name={name} />
      </div>
    </div>
  );
};

export default ListDirectors;
