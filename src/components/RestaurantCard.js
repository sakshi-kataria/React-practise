import { useContext } from "react";
import UserContext from "../Utils/userContext";

 {/* Style can be given using a javascript object. */}
const StyleCard = {
    backgroundColor:"#f0f0f0",
}
const RestaurantCard = ({restData})=> {   
    const {loggedInUser}= useContext(UserContext)
    const {name, cuisines,avgRating, costForTwo, cloudinaryImageId}= restData || {};
    return(
        <>
            {/* Style can be given using a javascript object. */}
            <div data-testid={"restaurantCard " + name} className=' w-[200px] m-2.5 p-2.5 h-[380px] rounded-4xl hover:cursor-pointer ' style={StyleCard}>
                <img
                    className='w-[200px] h-32 rounded-4xl' 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                />
                <h3>{name}</h3>
                {cuisines?.join(", ")}
                <h4>{avgRating}</h4>
                {costForTwo}
                <div className="gap-1">user:{loggedInUser}</div>
            </div>
        </>
)};

// high order component 
// input - RestaurantCard => output- RestaurantCard with aggregatedDiscountInfo. 
export const withDiscountInfo = (RestaurantCard) => {
    return (props)=>{
        return (<div>
            <label className="absolute bg-black text-white py-1 m-2 px-2 rounded-4xl text-xs">Discounted</label>
            <RestaurantCard {...props}/>
        </div>)
    }
}

export default RestaurantCard;