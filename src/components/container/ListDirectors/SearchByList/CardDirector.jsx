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
  };

  render() {
    const { directors, headline, onClick } = this.props;
    const { searchTerm } = this.state;
    const filterList = directors.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
    return (
      <div className="container-list-directors">
        <SearchInput
          placeholder={headline}
          className="search-input search-list-directors"
          onChange={this.searchUpdated}
        />
        <div className="directors-container">
          {filterList.map(elem => (
            <div key={uniqid()} className="card-directors-item">
              <img src={elem.photo} alt={elem.name} />
              <button
                type="submit"
                className="name-card-director"
                onClick={onClick}
                value={elem.name}
              >
                {elem.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CardDirectors.propTypes = {
  headline: PropTypes.string.isRequired,
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
  onClick: PropTypes.func.isRequired,
};

CardDirectors.defaultProps = {
  directors: 'directors',
};

export default CardDirectors;
