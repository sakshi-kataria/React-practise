import { useSelector,useDispatch } from "react-redux";
import ItemList from './ItemList'
import { clearCart } from "../Utils/cartSlice";

const Cart= ()=>{
    const cartItem = useSelector((store)=>store?.cart?.ItemList);
    const dispatch = useDispatch();
    const onClearCART = () =>{
        dispatch(clearCart());
    }
    return <div className="text-center">
            <h1 className="font-bold">Cart</h1>
                <button className="p-2 ml-20 m-2 bg-green-600 text-white rounded-lg block"
                onClick={onClearCART}
                >Clear cart</button>
                <div className="w-6/12 inline-block items-center">
                    <ItemList itemCards={cartItem}/>
                </div>
        </div>
}
export default Cart