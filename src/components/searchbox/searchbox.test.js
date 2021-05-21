import {render,fireEvent,cleanup} from "@testing-library/react";
import SearchBox from './searchbox.component';

afterEach(()=>
{cleanup();}
)

it("searchBoxrenders",()=>{
    const {getByTestId} = render(<SearchBox />);
    const input = getByTestId("searchPokemon");
    expect(input).toBeTruthy();
});

describe("onChangeInput",()=>{
    it("onChange",()=>{
        const {getByTestId}=render (<SearchBox />);
        const input = getByTestId("searchPokemon");
        fireEvent.change(input,{target:{value : "This is a test"}});
        expect(input.value).toBe("This is a test");
    })
})