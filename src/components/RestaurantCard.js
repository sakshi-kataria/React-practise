 {/* Style can be given using a javascript object. */}
const StyleCard = {
    backgroundColor:"#f0f0f0",
}
const RestaurantCard = ({restData})=> {   
    const {name, cuisines,avgRating, costForTwo, cloudinaryImageId}= restData || {};
    return(
        <>
            {/* Style can be given using a javascript object. */}
            <div className='w-[200px] m-2.5 p-2.5 h-[350px] hover:cursor-pointer hover:border hover:border-solid' style={StyleCard}>
                <img
                    className='w-[200px] h-32' 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                />
                <h3>{name}</h3>
                {cuisines?.join(", ")}
                <h4>{avgRating}</h4>
                {costForTwo}
            </div>
        </>
)};

// high order component 
// input - RestaurantCard => output- RestaurantCard with aggregatedDiscountInfo. 
export const withDiscountInfo = (RestaurantCard) => {
    return (props)=>{
        return (<div>
            <label className=" absolute bg-black text-white m-1 p-1 rounded-l-lg ">Discounted</label>
            <RestaurantCard {...props}/>
        </div>)
    }
}

export default RestaurantCard;