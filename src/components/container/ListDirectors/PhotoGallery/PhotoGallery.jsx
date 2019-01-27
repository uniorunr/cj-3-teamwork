import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './PhotoGallery.css';

class PhotoGallery extends Component {
  state = {
    currentImage: 0,
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious = () => {
    this.setState(state => ({
      currentImage: state.currentImage - 1,
    }));
  }

  gotoNext = () => {
    this.setState(state => ({
      currentImage: state.currentImage + 1,
    }));
  }

  render() {
    const { images } = this.props;
    const { currentImage, lightboxIsOpen } = this.state;
    return (
      <div className="photo-gallery-container">
        <Gallery
          photos={images}
          onClick={this.openLightbox}
        />
        <Lightbox
          images={images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={lightboxIsOpen}
        />
      </div>
    );
  }
}


PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  ),
};

PhotoGallery.defaultProps = {
  images: 'teams',
};

export default PhotoGallery;
