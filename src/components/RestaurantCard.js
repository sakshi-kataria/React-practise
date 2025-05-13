 {/* Style can be given using a javascript object. */}
const StyleCard = {
    backgroundColor:"#f0f0f0",
}
const RestaurantCard = ({restData})=> {   
    const {name, cuisine,star, time, image}= restData;
    return(
        <>
            {/* Style can be given using a javascript object. */}
            <div className='restaurant-card' style={StyleCard}>
                <img
                    className='restaurant-logo' 
                    src={image}
                />
                <h3>{name}</h3>
                <h4>{cuisine.join(", ")}</h4>
                <h4>{star}</h4>
                <h4>{time}</h4>
            </div>
        </>
)};

export default RestaurantCard;