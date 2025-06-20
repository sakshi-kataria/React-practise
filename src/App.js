import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header'
import BodyComponent from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery'
const Grocery =lazy(()=>import('./components/Grocery'));
const AppLayout = () =>{
    return (<div className='app'>
        {/* header */}
        <HeaderComponent />
        <Outlet />
        {/* footer */}
    </div>)
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
                element: <About/>
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
            }
        ],
        errorElement:<Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


