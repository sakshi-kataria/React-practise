import { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header'
import BodyComponent from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error'
import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Cart from './components/Cart';

import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './Utils/userContext'
import appStore from './Utils/appStore'

// import Grocery from './components/Grocery'
const Grocery =lazy(()=>import('./components/Grocery'));
const AboutUs =lazy(()=>import('./components/About'));

const AppLayout = () =>{
    const [userInfo, setUserName] = useState("");
// authentication code written 
    useEffect(()=>{
        // Suppose we make an api to get userInfo & received in data
        const data = {name:"Sakshi kataria"};
        setUserName(data.name)
    },[])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userInfo, setUserName  }}>
                    <div className='font-serif'>
                        {/* header */}
                        <HeaderComponent />
                        <div className='pt-30'><Outlet/></div>
                        {/* footer */}
                    </div>
            </UserContext.Provider>
        </Provider>
            )
}
const appRouter =createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <BodyComponent />
            },
            {
                path:'/about',
                element: <Suspense fallback={<h1>AboutUs Loading..</h1>}><AboutUs/></Suspense>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/grocery',
                element: <Suspense fallback={<h1>Grocery Loading..</h1>}><Grocery/></Suspense>
            },
            {
                path:'/restaurant/:restaurantId',
                element: <RestaurantMenu/>
            },
            {
                path:'/cart',
                element: <Cart/>
            }
        ],
        errorElement:<Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


