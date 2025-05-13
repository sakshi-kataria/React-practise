import {LOGO_URL} from '../Utils/constants'
export const HeaderComponent =()=>{
    return (<div className='header'>
        <img className='logo-container' src={LOGO_URL}/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About us</li>
            </ul>
        </div>
    </div>)
}

export default HeaderComponent;