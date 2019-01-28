import React from 'react';
import PropTypes from 'prop-types';
import TimeLine from './Timeline/TimeLine';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import VideoOverlay from './VideoOverlay/VideoOverlay';
import GeoWidget from './GeoWidget/GeoWidget';
import DirectorInfo from './DirectorInfo/DirectorInfo';
import './InfoContainer.css';

const InfoContainer = ({ director, lang, onClick }) => {
  const {
    biographyH, worksH, photoH, videoH, placeH,
  } = lang.headlines;

  const {
    name,
    place,
    photo,
    description,
    timeline: {
      life, work, photos, video,
    },
  } = director;

  return (
    <div className="scroll-timeline">
      <button className="btn-close" type="submit" onClick={onClick}>X</button>
      <DirectorInfo photo={photo} name={name} description={description} />
      <TimeLine content={life} headline={biographyH} />
      <PhotoGallery images={photos} headline={photoH} />
      <TimeLine content={work} headline={worksH} />
      <VideoOverlay video={video} headline={videoH} />
      <GeoWidget mapSource={place} name={name} headline={placeH} />
    </div>
  );
};

InfoContainer.propTypes = {
  director: PropTypes.instanceOf(Object).isRequired,
  lang: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default InfoContainer;
