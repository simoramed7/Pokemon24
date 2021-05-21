import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from "@testing-library/react";
import Details from './details.component';

afterEach(()=>
{cleanup();}
)

describe("renders details component without crushing",()=>{
    it("renders details component",()=>{
        const div = document.createElement("div");
        const mockName = "name1";
        ReactDOM.render(<Details name={mockName}/>,div);
    });

});