
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, index}) =>{
    const {itemCards, title, } = data || {};
    // const [showItems, setShowItem] = useState(false);
    const onAccordionClick =()=>{
        if(showItems){
            setShowIndex(-1)    
        }else{
            setShowIndex(index);
        }
        
    }
    return  <div key={title}>
        {/* Accordion header */}
        <div className="shadow-xl pl-4 py-1 ">
            <div className="flex justify-between my-1.5 mr-6 " onClick={onAccordionClick}>
                <span className="text-xl font-bold  text-gray-700" >{title} [{itemCards?.length}]</span>
                <span>⬇</span>
            </div>
            {showItems && <ItemList itemCards={itemCards}/>}
        </div>
    </div>
}
export default RestaurantCategory;