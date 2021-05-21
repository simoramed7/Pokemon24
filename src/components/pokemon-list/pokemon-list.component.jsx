import React from 'react';
import Pokemon from '../pokemon/pokemon.component';


import './pokemon-list.styles.css';

const PokemonList = props => {
 
  return (
    <div className='card-list' data-testid="PokemonList">
    {
    props.pokemons.map( (pokemon,idx) => (
      <Pokemon key={idx} pokemon={pokemon} />
    )
    )}
  </div>
  )
};

export default PokemonList;