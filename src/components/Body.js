import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react';
import ShimmerUI from './shimmer';
import { Link } from 'react-router-dom';
// import resList from '../Utils/mockDATA'
import useOnlineStatus from '../Utils/useOnlineStatus';
const BodyComponent = ()=>{
    const [listOfRestaurants, setListOfRestaurants] =useState([]);
    const [filteredRestaurants, setFilteredRestaurants] =useState([]);

    const [searchText, setSearchText] =useState("");
    const onlineStatus = useOnlineStatus();
    const filterButtonClick = ()=>{
        const filteredRestaurants=listOfRestaurants.filter(res=>res?.info?.avgRating>4);
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
        const restaurants = json?.data?.cards.filter(data=> data.card?.card?.id==="restaurant_grid_listing_v2")[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants)
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(onlineStatus===false) return <h1>Looks like you are offline ! Please check your internet connection.</h1>
    return listOfRestaurants.length===0 ?<ShimmerUI/> : <div>
            <div className='flex m-2.5'>
                <div className='pr-2.5'>
                    <input type="text" className='border-solid border-black border-1 mr-5' value={searchText} onChange={onSearchChange}></input>
                    <button className=' bg-green-200 px-3 rounded-xl' onClick={onSearchButton}>Search</button>
                </div>
                <button onClick={filterButtonClick} className=' bg-green-200 cursor-pointer px-3 rounded-xl'>Top Rated Restaurant</button>
            </div>
            <div className='flex flex-wrap'>
                {/* Restaurant Card component*/}
                {filteredRestaurants.map((restData)=>{
                    const data = restData?.info
                    return <Link to={"/restaurant/"+ data.id} key={data.id}>
                        <RestaurantCard  restData={data}/></Link>
                    })}
            </div>
    </div>
}

export default BodyComponent;