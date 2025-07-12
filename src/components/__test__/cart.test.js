import RestaurantMenu from '../RestaurantMenu';
import Cart from '../Cart';

import Header from '../Header';

import {act} from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../mocks/mockRestaurantMenu.json'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../Utils/appStore';
import '@testing-library/jest-dom';
global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    }) 
})
test("should render the restaurant menu component",async()=>{
    await act(async()=>render(<Provider store={appStore}>
        <BrowserRouter>
            <RestaurantMenu/>
            <Header />
            <Cart />
        </BrowserRouter>
    </Provider>));
    const accordionHeader = screen.getByText("Cheese Burst - 3 New Flavours [22]");
    fireEvent.click(accordionHeader);
    const restaurantMenuItem= screen.getAllByTestId("restaurantMenuItem")
    expect(restaurantMenuItem.length).toBe(22);
    
    const addBtn= screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("restaurantMenuItem").length).toBe(24);
    
    fireEvent.click(screen.getByText("Clear cart"));
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("restaurantMenuItem").length).toBe(22);
})