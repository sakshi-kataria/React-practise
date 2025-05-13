import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react';
import resList from '../Utils/mockDATA'

const BodyComponent = ()=>{
    const [listOfRestaurants, setListOfRestaurants] =useState(resList);

    const filterButtonClick = ()=>{
        const filteredRestaurants=listOfRestaurants.filter(res=>res.star>4);
        setListOfRestaurants(filteredRestaurants);
    }
    return (
        <div className='body-container'>
            <div className='filter'>
                <button onClick={filterButtonClick} className='filter-btn'>Top Rated Restaurant</button>
            </div>
            <div className='Restaurant-container'>
                {/* Restaurant Card component*/}
                {listOfRestaurants.map((restData)=><RestaurantCard key={restData.id} restData={restData}/>)}
            </div>
        </div>
    )
}

export default BodyComponent;