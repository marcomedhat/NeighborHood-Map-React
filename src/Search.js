import React from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';


const Search = ({ data, filterPlaces, onToggleOpen }) => {
  const { places, showingPlaces } = data;

  return (

    <section className="search-container">

      <h2 className="filter-title" tabIndex="0">
        Filter Search
      </h2>
      <aside className="input-wrapper">
        <Debounce time="300" handler="onChange">
          <input
            type="text"
            placeholder="Type a location name here to filter places"
            aria-label="Type a location name here to filter places"
            onChange={e => filterPlaces(e.target.value)}
          />
        </Debounce>
      </aside>
      <aside className="results">
        <p className="results-summary">
          Showing <strong>{showingPlaces.length}</strong> of <strong>{places.length}</strong> places.
        </p>
        <ul className="results-list" tabIndex="0">
          {
            showingPlaces.map(place =>
              <li
                key={place.id}
                className="result-item"
                tabIndex="0"
                onClick={() => onToggleOpen(place.id, 'open')}
              >
                {place.name}
              </li>
            )
          }
        </ul>
      </aside>
    </section>
  )
};

Search.propTypes = {
  data: PropTypes.object.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  filterPlaces: PropTypes.func.isRequired
};

export default Search;