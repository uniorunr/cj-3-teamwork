import React, { Component } from 'react';
import uniqid from 'uniqid';
import SwitchLangItem from '../../presentetion/SwitchLangItem/SwitchLangItem';
import './SwitchLang.css';

class SwitchLang extends Component {
  state = {
    flag: 'ru',
  }

  handChange = (e) => {
    const { id } = e.target;
    this.setState({
      flag: id,
    });
  };

  render() {
    const lang = ['ru', 'en', 'be'];
    const { flag } = this.state;
    return (
      <div className="switch-container">
        {lang.map(item => (
          <SwitchLangItem
            key={uniqid()}
            active={flag === item ? 'red' : ''}
            id={item}
            onChange={this.handChange}
            checked={flag === item}
          />
        ))}
      </div>
    );
  }
}

export default SwitchLang;
