import RestaurantCard from './RestaurantCard'

import resList from '../Utils/mockDATA'

const BodyComponent = ()=>{
    return (
        <div className='body-container'>
            <div className='search'>Search</div>
            <div className='Restaurant-container'>
                {/* Restaurant Card component*/}
                {resList.map((restData)=><RestaurantCard key={restData.id} restData={restData}/>)}
            </div>
        </div>
    )
}

export default BodyComponent;