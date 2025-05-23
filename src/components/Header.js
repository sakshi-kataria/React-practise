import {LOGO_URL} from '../Utils/constants'
import {useState,useEffect} from 'react'

export const HeaderComponent =()=>{
    const [buttonName, setButtonName]= useState("log In")
    useEffect(()=>{
        console.log("login button name changed:", buttonName);
    },
    [buttonName])
    const onLogInButton =()=>{
        buttonName==="log In" ? setButtonName("log out"): setButtonName("log In")
    }
    return (<div className='header'>
        <img className='logo-container' src={LOGO_URL}/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About us</li>
                <button className='log-in' onClick={onLogInButton}>{buttonName}</button>
            </ul>
        </div>
    </div>)
}

export default HeaderComponent;


//
// const onLogInButton =(e)=>{
//     if(e.target.value==="log in"){
//         setButtonName("log out")
//     }else{
//         setButtonName("log in")

//     }

// }