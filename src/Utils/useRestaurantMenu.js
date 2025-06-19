import { useEffect, useState } from 'react';
import {menuAPIUrl} from './constants'

const useRestaurantMenu=(restaurantId)=>{
    const [restaurantInfo, setRestaurantInfo] = useState([]);
    const fetchData = async()=>{
        const data = await fetch(menuAPIUrl+restaurantId);
        const json= await data.json();
        setRestaurantInfo(json) 
    }
    useEffect(()=>{
        fetchData();
    },[]);
   return restaurantInfo;
}
export default useRestaurantMenu;