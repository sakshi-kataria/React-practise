import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react';
import ShimmerUI from './shimmer';
import { Link } from 'react-router-dom';
// import resList from '../Utils/mockDATA'

const BodyComponent = ()=>{
    const [listOfRestaurants, setListOfRestaurants] =useState([]);
    const [filteredRestaurants, setFilteredRestaurants] =useState([]);

    const [searchText, setSearchText] =useState("");

    const filterButtonClick = ()=>{
        const filteredRestaurants=listOfRestaurants.filter(res=>res.avgRating>4);
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
    return listOfRestaurants.length===0 ?<ShimmerUI/> : <div className='body-container'>
            <div className='filter'>
                <div className='search-container'>
                    <input type="text" className='search-input' value={searchText} onChange={onSearchChange}></input>
                    <button className='search-button' onClick={onSearchButton}>Search</button>
                </div>
                <button onClick={filterButtonClick} className='filter-btn'>Top Rated Restaurant</button>
            </div>
            <div className='Restaurant-container'>
                {/* Restaurant Card component*/}
                {filteredRestaurants.map((restData)=>{
                    const data = restData?.info
                    return <Link className='restaurant-link' to={"/restaurant/"+ data.id} key={data.id}>
                        <RestaurantCard  restData={data}/></Link>
                    })}
            </div>
    </div>
}

export default BodyComponent;