import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) =>{
    const {itemCards, title} = props?.data || {};
    const [showItems, setShowItem] = useState(false);
    const onAccordionClick =()=>{
        setShowItem(!showItems);
    }
    return  <div key={title}>
        {/* Accordion header */}
        <div className="shadow-2xl p-4 ">
            <div className="flex justify-between my-4 " onClick={onAccordionClick}>
                <span className="text-2xl font-semibold  text-gray-700" >{title} [{itemCards?.length}]</span>
                <span>⬇</span>
            </div>
            {showItems && <ItemList itemCards={itemCards}/>}
        </div>
    </div>
}
export default RestaurantCategory;