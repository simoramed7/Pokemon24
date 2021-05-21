import React from 'react';
import ReactDOM from 'react-dom';
import {render,fireEvent,cleanup} from "@testing-library/react";
import Pokemon from './pokemon.component';

afterEach(()=>
{cleanup();}
)

describe("renders pokemon component without crushing",()=>{

    it("renders pokemon component",()=>{
        const div = document.createElement("div");
        const mockPokemon = {name:'name1',url:'urlTest'};
        ReactDOM.render(<Pokemon pokemon={mockPokemon}/>,div);
    });

    it("should map through an array",()=>{
        const mockPokemon = {name:'name1',url:"url1"};
        const {getByTestId}=render (<Pokemon pokemon={mockPokemon}/>);
        const component = getByTestId("Pokemon");
        expect(component).toBeInTheDocument();
        expect(component).toHaveTextContent('name1')
    });

    it("shows details",()=>{
        const mockPokemon = {name:'name1',url:"url1"};
        const {getByTestId}=render (<Pokemon pokemon={mockPokemon}/>);
        const component = getByTestId("Pokemon");
        expect(component).toHaveTextContent('More');
    });

    it("switches card with img",()=>{
        const mockPokemon = {name:'name1',url:"url1"};
        const {getByTestId}=render (<Pokemon pokemon={mockPokemon}/>);
        const component = getByTestId("Pokemon");
        const img = getByTestId("moreData");
        fireEvent.click(img);
        expect(component).toHaveTextContent('[x] Back');
    });

    it("switches card with name",()=>{
        const mockPokemon = {name:'name1',url:"url1"};
        const {getByTestId}=render (<Pokemon pokemon={mockPokemon}/>);
        const component = getByTestId("Pokemon");
        const img = getByTestId("moreData2");
        fireEvent.click(img);
        expect(component).toHaveTextContent('[x] Back');
    });

    it("switches card with button",()=>{
        const mockPokemon = {name:'name1',url:"url1"};
        const {getByTestId}=render (<Pokemon pokemon={mockPokemon}/>);
        const component = getByTestId("Pokemon");
        const btn = getByTestId("moreData3");
        fireEvent.click(btn);
        expect(component).toHaveTextContent('[x] Back');
    });


})