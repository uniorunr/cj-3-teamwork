import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MainContent from './MainContent/MainContent';
import MainFooter from './MainFooter/MainFooter';
import './Home.css';

const Home = ({ teams }) => (
  <Fragment>
    <MainContent />
    <MainFooter teams={teams} />
  </Fragment>
);

Home.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

Home.defaultProps = {
  teams: 'teams',
};

export default Home;
