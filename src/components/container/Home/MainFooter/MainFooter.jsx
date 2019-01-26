import React from 'react';
import DeveloperItem from '../../../presentetion/DeveloperItem/DeveloperItem';
import './MainFooter.css';

const MainFooter = () => (
  <div className="main-footer">
    <h2>Команда разработчиков</h2>
    <div className="developer-container">
      {
        [1, 2, 3, 4].map(a => <DeveloperItem key={`${a}`} />)
      }
    </div>
  </div>
);

export default MainFooter;
