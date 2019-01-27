import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MainContent from './MainContent/MainContent';
import MainFooter from './MainFooter/MainFooter';
import './Home.css';

const Home = ({ teams, index, lang }) => (
  <Fragment>
    <MainContent index={index} lang={lang} />
    <MainFooter teams={teams} lang={lang} />
  </Fragment>
);

Home.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
  lang: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

Home.defaultProps = {
  teams: 'teams',
};

export default Home;
