import { useContext } from "react";
import UserContext from "../Utils/userContext";

import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
const ItemList = (props)=>{
    const {itemCards} = props
    const {loggedInUser} = useContext(UserContext)
    const dispatch =useDispatch();
    const onAddButtonClick =(card)=>{
        // dispatch an action and return object {payload:"DOSA"}
        dispatch(addItem(card))
    }
  {/* Accordion body */}
    return <div> 
        {itemCards?.map(card => {
        const { name, id, defaultPrice, price, imageId, description, ratings: { aggregatedRating: { rating } = {} } = {} } = card?.card?.info;
        const img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId;
        return (
            <li key={id} className="bg-white rounded-lg p-4 border border-gray-200 flex justify-between">
            <div className="flex-1">
                <div className="text-lg font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-500 mt-1">{description}</div>
                <div className="mt-2 text-blue-700 font-semibold">₹ {(defaultPrice || price) / 100}</div>
                {rating && <div className="text-sm text-green-600 mt-1">⭐ {rating}</div>}
                <div className="text-sm text-gray-500">user: {loggedInUser} </div>
            </div>
            <div>
                <button className="absolute bg-black text-white mx-8 p-2 rounded-4xl text-xs"
                onClick={()=>onAddButtonClick(card)}>Add +</button>
                {imageId && <img src={img} alt={name} className="w-24 h-24 rounded-lg" />}
            </div>
            
            </li>
        );
        })}
    </div>
};
export default ItemList;