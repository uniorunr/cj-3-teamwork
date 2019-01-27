import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import SwitchLangItem from '../../presentetion/SwitchLangItem/SwitchLangItem';
import './SwitchLang.css';

const SwitchLang = ({ lang, onChange }) => {
  const langName = ['ru', 'en', 'by'];

  return (
    <div className="switch-container">
      {langName.map(item => (
        <SwitchLangItem
          key={uniqid()}
          active={lang === item ? 'active-radio' : ''}
          id={item}
          onChange={onChange}
          checked={lang === item}
        />
      ))}
    </div>
  );
};

SwitchLang.propTypes = {
  lang: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SwitchLang;
