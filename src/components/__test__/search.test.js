import { fireEvent, render, screen } from "@testing-library/react";
import BodyComponent from "../Body";
import MOCK_DATA from '../mocks/resListDataMock.json'
import {act} from 'react'
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { cleanup } from "@testing-library/react";
global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it ("should search rest list for ice cream text input", async()=>{
    await act(async()=>render(<BrowserRouter><BodyComponent/></BrowserRouter>));
    const searchBtn = screen.getByRole("button", {name:"Search"});
    expect(searchBtn).toBeInTheDocument();
    let cards = screen.getAllByTestId(/restaurantCard/);
    expect(cards.length).toBe(20); // cards length before the search 

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"biryani"}})
    fireEvent.click(searchBtn);
    cards = screen.getAllByTestId(/restaurantCard/);
    expect(cards.length).toBe(1); // cards length after the search 
})

it ("should filtered top rated restaurant", async()=>{
    await act(async()=>{render(<BrowserRouter><BodyComponent/></BrowserRouter>)});
    let cards = screen.getAllByTestId(/restaurantCard/);
    expect(cards.length).toBe(20); // cards length before the search 

    const topRatedRestaurantBtn = screen.getByRole('button', {name:"Top Rated Restaurant"});
    expect(topRatedRestaurantBtn).toBeInTheDocument();
    fireEvent.click(topRatedRestaurantBtn);

    const cardsAfterFilter = await screen.getAllByTestId(/restaurantCard/);
    expect(cardsAfterFilter.length).toBe(8); // cards length after the search
});