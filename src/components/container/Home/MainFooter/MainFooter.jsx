import React from 'react';
import PropTypes from 'prop-types';
import DeveloperItem from '../../../presentetion/DeveloperItem/DeveloperItem';
import './MainFooter.css';

const MainFooter = ({ teams }) => (
  <div className="main-footer">
    <h2>Команда разработчиков</h2>
    <div className="developer-container">
      {teams.map(user => (
        <DeveloperItem
          key={`${user.name}`}
          img={user.img ? user.img : 'https://cdn0.iconfinder.com/data/icons/Hand_Drawn_Web_Icon_Set/128/user.png'}
          name={user.name}
        />
      ))}
    </div>
  </div>
);

MainFooter.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

MainFooter.defaultProps = {
  teams: 'teams',
};

export default MainFooter;
