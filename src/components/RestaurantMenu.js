
import ShimmerUI from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../Utils/useRestaurantMenu'
const RestaurantMenu = () => {
  const {restaurantId}= useParams();
  const restaurantInfo = useRestaurantInfo(restaurantId);
  const {name, cuisines=[],costForTwoMessage} = restaurantInfo?.data?.cards[2].card?.card?.info || {};
  const menuCards =restaurantInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards || [];
  console.log(restaurantId);

  return (
    restaurantInfo === null ?
      <ShimmerUI/> :
      <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}-{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {menuCards.map(card=>{
            const {name,id,defaultPrice,price, imageId,description,ratings: {aggregatedRating:{rating}}} = card?.card?.info;
            return <li key={id}>{name}- Rs. {(defaultPrice || price)/100}</li>
          })}
        </ul>
        
      </div>
  )
}

export default RestaurantMenu
