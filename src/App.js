import React from 'react';
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/Header'
import BodyComponent from './components/Body'

const AppLayout = () =>{
    return (<div className='app'>
        {/* header */}
        <HeaderComponent />
        {/* body */}
        <BodyComponent/>
        {/* footer */}
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);