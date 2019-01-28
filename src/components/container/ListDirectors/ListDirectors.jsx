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

  const {
    biographyH,
    worksH,
    photoH,
    videoH,
    placeH,
  } = lang.headlines;

  return (
    <div className="list-container">
      <div className="sidebar">
        <SearchByList directors={lang.main.content} />
      </div>
      <div className="scroll-timeline">
        <TimeLine content={life} headline={biographyH} />
        <PhotoGallery images={photos} headline={photoH} />
        <TimeLine content={work} headline={worksH} />
        <VideoOverlay video={video} headline={videoH} />
        <GeoWidget mapSource={place} name={name} headline={placeH} />
      </div>
    </div>
  );
};

ListDirectors.propTypes = {
  lang: PropTypes.instanceOf(Object).isRequired,
};

export default ListDirectors;
