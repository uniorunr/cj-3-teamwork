import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import './CardDirector.css';

const KEYS_TO_FILTERS = ['name', 'bpl', 'description'];

class CardDirectors extends Component {
  state = {
    searchTerm: '',
  };

  searchUpdated = (term) => {
    this.setState({ searchTerm: term });
  }

  render() {
    const { directors } = this.props;
    const { searchTerm } = this.state;
    const filterList = directors.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
    return (
      <div className="container-list-directors">
        <SearchInput placeholder="Поиск" className="search-input search-list-directors" onChange={this.searchUpdated} />
        {filterList.map(elem => (
          <div key={uniqid()} className="container-card-directors">
            <img src={elem.photo} alt={elem.name} />
            <h2 className="name-card-director">{elem.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}

CardDirectors.propTypes = {
  directors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      photo: PropTypes.string,
      place: PropTypes.string,
      bpl: PropTypes.string,
      timline: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string,
          title: PropTypes.string,
        }),
      ),
    }),
  ),
};

CardDirectors.defaultProps = {
  directors: 'directors',
};

export default CardDirectors;
