import React from 'react';

import './searchbox.styles.css';

const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search pokemon'
    onChange={props.onSearchChange}
    data-testid = 'searchPokemon'
  />
);

export default SearchBox;