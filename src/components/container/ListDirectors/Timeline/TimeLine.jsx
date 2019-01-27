import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const TimeLine = ({ content }) => (
  <Timeline lineColor="#dddddd">
    {
        content.map(item => (
          <TimelineItem
            key={`${uniqid()}`}
            dateInnerStyle={{ background: '#000000', color: '#ffffff' }}
            dateText={`${item.date.charAt(0).toLowerCase()}${item.date.slice(1)}`}
            style={{ color: '#000000' }}
          >
            <h3>{`${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}`}</h3>
          </TimelineItem>
        ))
    }
  </Timeline>
);

TimeLine.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

TimeLine.defaultProps = {
  content: 'teams',
};

export default TimeLine;
