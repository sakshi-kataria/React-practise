import {render, screen, fireEvent} from '@testing-library/react';
import HeaderComponent from '../Header';
import {Provider} from 'react-redux';
import appStore from '../../Utils/appStore'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
test("It should render the header component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name: "log In"})
    expect(loginButton).toBeInTheDocument();
})
test("It should render whether the cart items are zero or not",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent/>
        </Provider>
    </BrowserRouter>);
    const cartItem = screen.getByText("Cart (0 items)");
    expect(cartItem).toBeInTheDocument();
})

test("It should render whether the cart item is there or not",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent/>
        </Provider>
    </BrowserRouter>);
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})


test("It should change the login button to the logout button on click of button",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent/>
        </Provider>
    </BrowserRouter>);
    const logInButton = screen.getByText("log In");
    fireEvent.click(logInButton);
    const logOutButton = screen.getByText("log out");
    expect(logOutButton).toBeInTheDocument();
});

