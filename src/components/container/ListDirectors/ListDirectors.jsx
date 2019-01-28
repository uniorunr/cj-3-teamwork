import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListDirectors.css';
import SearchByList from './SearchByList/CardDirector';
import InfoContainer from './InfoContainer/InfoContainer';

class ListDirectors extends Component {
  state = {
    show: true,
    index: null,
  };

  onClick = (e) => {
    const { show } = this.state;
    const {
      lang: {
        main: { content },
      },
    } = this.props;
    const { value } = e.target;
    this.setState({
      show: !show,
      index: content.findIndex(a => a.name === value),
    });
  };

  render() {
    const { lang } = this.props;
    const { search } = lang.headlines;
    const { show, index } = this.state;
    return (
      <div className="list-container">
        {
          show ? (
            <SearchByList
              directors={lang.main.content}
              headline={search}
              onClick={this.onClick}
            />
          ) : (
            <InfoContainer
              director={lang.main.content[index]}
              lang={lang}
              onClick={this.onClick}
            />
          )}
      </div>
    );
  }
}

ListDirectors.propTypes = {
  lang: PropTypes.instanceOf(Object).isRequired,
};

export default ListDirectors;
