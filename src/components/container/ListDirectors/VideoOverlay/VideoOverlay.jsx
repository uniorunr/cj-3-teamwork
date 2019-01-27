import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import PropTypes from 'prop-types';
import 'react-modal-video/css/modal-video.min.css';
import './VideoOverlay.css';

class VideoOverlay extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { video } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="video-overlay-wrapper">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={video[0]}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button className="video-play-button" type="button" onClick={this.openModal}>Просмотреть видео</button>
      </div>
    );
  }
}

VideoOverlay.propTypes = {
  video: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

VideoOverlay.defaultProps = {
  video: 'video',
};

export default VideoOverlay;
