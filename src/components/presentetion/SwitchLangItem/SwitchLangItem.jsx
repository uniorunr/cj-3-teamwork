import React from 'react';
import PropTypes from 'prop-types';
import './SwitchLangItem.css';

const SwitchLangItem = (props) => {
  const {
    active, id, onChange, checked,
  } = props;
  return (
    <label className={`switch-item-${id} ${active}`} htmlFor={id}>
      <input type="radio" name="radio" id={id} onChange={onChange} checked={checked} />
      {id}
    </label>
  );
};

SwitchLangItem.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default SwitchLangItem;
