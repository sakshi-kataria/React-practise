import RestaurantCard,{withDiscountInfo} from './RestaurantCard'
import { useState, useEffect, useContext } from 'react';
import ShimmerUI from './shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';
import isEmpty from 'lodash/isEmpty';
import UserContext from '../Utils/userContext';

const BodyComponent = ()=>{
    const [listOfRestaurants, setListOfRestaurants] =useState([]);
    const [filteredRestaurants, setFilteredRestaurants] =useState([]);
    const [searchText, setSearchText] =useState("");
    const {loggedInUser,setUserName}=useContext(UserContext)
    const onlineStatus = useOnlineStatus();
    const RestaurantCardDiscounted = withDiscountInfo(RestaurantCard);
    const filterButtonClick = ()=>{
        const filteredRestaurants=listOfRestaurants.filter(res=>{ const avgRating = res?.info?.avgRating; return !isNaN(avgRating) && avgRating >= 4.4});
        setFilteredRestaurants(filteredRestaurants);
    }
    const onSearchButton = ()=>{
        // filter the restaurant cards & update the UI
        const filteredRestaurants=listOfRestaurants.filter(res=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredRestaurants);
    }
    const onSearchChange = (e) =>{
        setSearchText(e.target.value)
    }
    const fetchData = async ()=>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9071015&lng=77.6918946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = json?.data?.cards.filter(data=> data.card?.card?.id==="top_brands_for_you")[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants)
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(onlineStatus===false) return <h1>Looks like you are offline ! Please check your internet connection.</h1>
    return listOfRestaurants?.length===0 ?<ShimmerUI/> : <div>
            <div className='flex m-2.5 pl-20 gap-3'>
                <div className=''>
                    <input type="text" className='border-solid border-black border-1' data-testid="searchInput"
                    value={searchText} onChange={onSearchChange}></input>
                    <button className=' bg-green-200 px-3 rounded-xl' onClick={onSearchButton}>Search</button>
                </div>
                <button onClick={filterButtonClick} className=' bg-green-200 cursor-pointer px-3 rounded-xl'>Top Rated Restaurant</button>
                Username: <input className='border-solid border-black border-1' 
                value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
            </div>
            <div className='flex flex-wrap mb-20 mt-5 justify-center'>
                {/* Restaurant Card component*/}
                {filteredRestaurants?.map((restData)=>{
                    const data = restData?.info
                    return <Link to={"/restaurant/"+ data?.id} key={data?.id}>
                        {/* if restaurant has aggregatedDiscountInfoV3 than show discount information label 
                            over the card.
                        */}{isEmpty(data?.aggregatedDiscountInfoV3)?
                        <RestaurantCard restData={data}/>:
                        <RestaurantCardDiscounted  restData={data}/>}
                            
                        </Link>
                    })}
            </div>
    </div>
}

export default BodyComponent;