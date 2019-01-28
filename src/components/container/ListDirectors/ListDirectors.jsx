import React from 'react';
import PropTypes from 'prop-types';
import './ListDirectors.css';
import TimeLine from './Timeline/TimeLine';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import VideoOverlay from './VideoOverlay/VideoOverlay';
import GeoWidget from './GeoWidget/GeoWidget';
import SearchByList from './SearchByList/CardDirector';

const ListDirectors = ({ lang }) => {
  const {
    name,
    place,
    photo,
    description,
    timeline: {
      life, work, photos, video,
    },
  } = lang.main.content[0];

  const DirectorInfo = () => (
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

  return (
    <div className="list-container">
      <div className="sidebar">
        <SearchByList directors={lang.main.content} />
      </div>
      <div className="scroll-timeline">
        <DirectorInfo />
        <TimeLine content={life} />
        <PhotoGallery images={photos} />
        <TimeLine content={work} />
        <VideoOverlay video={video} />
        <GeoWidget mapSource={place} name={name} />
      </div>
    </div>
  );
};

ListDirectors.propTypes = {
  lang: PropTypes.instanceOf(Object).isRequired,
};

export default ListDirectors;
