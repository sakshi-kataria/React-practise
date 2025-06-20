 {/* Style can be given using a javascript object. */}
const StyleCard = {
    backgroundColor:"#f0f0f0",
}
const RestaurantCard = ({restData})=> {   
    const {name, cuisines,avgRating, costForTwo, cloudinaryImageId}= restData;
    return(
        <>
            {/* Style can be given using a javascript object. */}
            <div className='w-[200px] m-2.5 p-2.5 h-80 hover:cursor-pointer hover:border hover:border-solid' style={StyleCard}>
                <img
                    className='w-[200px] h-32' 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                />
                <h3>{name}</h3>
                {cuisines.join(", ")}
                <h4>{avgRating}</h4>
                {costForTwo}
            </div>
        </>
)};

export default RestaurantCard;