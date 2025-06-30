
import ShimmerUI from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../Utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
  const {restaurantId}= useParams();
  const restaurantInfo = useRestaurantInfo(restaurantId);
  const {name, cuisines=[],costForTwoMessage} = restaurantInfo?.data?.cards[2].card?.card?.info || {};
  const itemCategoryCards = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    data => data?.card?.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  return (
    restaurantInfo === null ?
      <ShimmerUI/> :
     <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <div className="text-6xl font-bold text-gray-800 mb-4">{name}</div>
      <div className="text-2xl text-gray-600 mb-6">{cuisines.join(", ")} — {costForTwoMessage}</div>
      <div className="text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Menu</div>
      <ul className="space-y-6">
        {itemCategoryCards?.map(card => {
          const data = card?.card?.card;
          return <RestaurantCategory key={data?.title} data={data}/>
        })}
      </ul>
</div>

  )
}

export default RestaurantMenu
