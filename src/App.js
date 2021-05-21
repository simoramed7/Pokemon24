import React, { Component } from 'react';

import PokemonList from './components/pokemon-list/pokemon-list.component';
import SearchBox  from './components/searchbox/searchbox.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
      .then(response => response.json())
      .then(pokeball => this.setState({ pokemons: pokeball.results }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1> Pokemon </h1>
        <h3> Gotta catch'em all </h3>
        <SearchBox onSearchChange={this.onSearchChange} />
        <PokemonList pokemons={filteredPokemons} />
      </div>
    );
  }
}

export default App;
