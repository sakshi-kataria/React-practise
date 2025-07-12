import { createSlice, current } from "@reduxjs/toolkit";

// slice
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        ItemList:[]
    },
    reducers:{
        addItem:(state,action)=>{
            // mutating the state
            state.ItemList.push(action.payload);
        },
        removeItem:(state)=>{
            state.ItemList.pop();
        },
        // original state =["pizza"]
        clearCart:(state)=>{
            // This does not modify the original state. original state =["pizza"] is different than state =[]
            state.ItemList.length =0;
            //state =[];
        }
    }
});
export const {addItem,clearCart,removeItem} = cartSlice.actions
export default cartSlice.reducer;
