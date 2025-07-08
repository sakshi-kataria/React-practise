import {LOGO_URL} from '../Utils/constants'
import {useState,useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';
import UserContext from '../Utils/userContext';
import { useSelector } from 'react-redux';
export const HeaderComponent =()=>{
    const [buttonName, setButtonName]= useState("log In");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    useEffect(()=>{
        // console.log("login button name changed:", buttonName);
    },
    [buttonName])
    const onLogInButton =()=>{
        buttonName==="log In" ? setButtonName("log out"): setButtonName("log In")
    }
    // subscribing the store
    const cartItems = useSelector((store)=>store.cart.ItemList);
    return (<div className='fixed z-[1000] m-[-10] shadow-2xl flex w-full justify-between bg-gray-100 border border-gray-100 rounded-4xl'>
            <img className='w-26 rounded-4xl p-2' src={LOGO_URL} />
            <div className="flex place-items-center">
                <ul className='flex text-xl font-medium list-none text-green-700 gap-6'>
                    <li>
                        online Status: {onlineStatus ? "✅" : "🔴"  }
                    </li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li className='font-bold'><Link to='/cart'>Cart ({cartItems.length} items)</Link></li>

                    <button className='px-5 cursor-pointer mr-5' onClick={onLogInButton}>{buttonName}</button>
                    <li className='pr-10 text-black  font-semibold'>User:{data.loggedInUser}</li>
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