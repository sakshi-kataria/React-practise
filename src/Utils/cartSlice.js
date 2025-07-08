import { createSlice } from "@reduxjs/toolkit";

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
        clearCart:(state)=>{
            state.ItemList.length =0;
        }
    }
});
export const {addItem,clearCart,removeItem} = cartSlice.actions
export default cartSlice.reducer;
