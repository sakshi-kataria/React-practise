import {LOGO_URL} from '../Utils/constants'
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';
export const HeaderComponent =()=>{
    const [buttonName, setButtonName]= useState("log In");
    const onlineStatus = useOnlineStatus();
    useEffect(()=>{
        // console.log("login button name changed:", buttonName);
    },
    [buttonName])
    const onLogInButton =()=>{
        buttonName==="log In" ? setButtonName("log out"): setButtonName("log In")
    }
    return (<div className='flex justify-between border-1 border-black-600 m-2 sm:bg-green-50'>
        <img className='w-26' src={LOGO_URL}/>
        <div className="flex place-items-center">
            <ul className='flex text-xl font-medium list-none text-green-700 space-x-6'>
                <li>
                    online Status: {onlineStatus ? "✅" : "🔴"  }
                </li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/grocery'>Grocery</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <button className='px-5 cursor-pointer mr-5' onClick={onLogInButton}>{buttonName}</button>
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