import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import directors from './directors';
import './CardDirector.css';

const KEYS_TO_FILTERS = ['name', 'bpl'];

class CardDirectors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const filterList = directors.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
      <div className="container-list-directors">
        <SearchInput placeholder="Поиск" className="search-input search-list-directors" onChange={this.searchUpdated} />
        {filterList.map(elem => (
          <div key={elem.id} className="container-card-directors">
            <img src={elem.photo} width="300px" alt={elem.name} className="photo-card-director" />
            <p className="name-card-director">{elem.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default CardDirectors;
