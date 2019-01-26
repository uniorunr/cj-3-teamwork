import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import PropTypes from 'prop-types';

const TimeLine = ({ content }) => (
  <Timeline lineColor="#dddddd">
    {
        content.items.map(item => (
          <TimelineItem
            key={`${item.date}`}
            dateInnerStyle={{ background: '#000000', color: '#ffffff' }}
            dateText={`${item.date.charAt(0).toLowerCase()}${item.date.slice(1)}`}
            style={{ color: 'black' }}
          >
            <h3>{`${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}`}</h3>
          </TimelineItem>
        ))
    }
  </Timeline>
);

TimeLine.propTypes = {
  content: PropTypes.instanceOf(Object).isRequired,
};

export default TimeLine;
