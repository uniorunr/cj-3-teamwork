import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './PhotoGallery.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState(state => ({
      currentImage: state.currentImage - 1,
    }));
  }

  gotoNext() {
    this.setState(state => ({
      currentImage: state.currentImage + 1,
    }));
  }

  render() {
    const { images, title } = this.props;
    const { currentImage, lightboxIsOpen } = this.state;
    return (
      <div className="photo-gallery-container">
        <h2 className="photo-gallery-header">{title}</h2>
        <Gallery photos={images} onClick={this.openLightbox} />
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
  images: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};

export default PhotoGallery;
