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
    timeline: {
      life, work, photos, video,
    },
  } = lang.main.content[0];

  return (
    <div className="list-container">
      <div className="sidebar">
        <SearchByList directors={lang.main.content} />
      </div>
      <div className="scroll-timeline">
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
