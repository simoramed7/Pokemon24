import React from 'react';
import ReactDOM from 'react-dom';
import {render,cleanup} from "@testing-library/react";
import PokemonList from './pokemon-list.component';

afterEach(()=>
{cleanup();}
)

describe("renders without crushing",()=>{

    it("renders pokemonList",()=>{
        const div = document.createElement("div");
        const mockPokemons = [];
        ReactDOM.render(<PokemonList pokemons={mockPokemons}> </PokemonList>,div);
    });

    it("should map through an array",()=>{
        const mockPokemons = [{name:"pokemon1",url:"url1"},{name:"pokemon2",url : "url2"}];
        const {getByTestId}=render (<PokemonList pokemons={mockPokemons}/>);
        const component = getByTestId("PokemonList");
        expect(component).toBeInTheDocument();
        expect(component).toHaveTextContent('pokemon1')
    })
})