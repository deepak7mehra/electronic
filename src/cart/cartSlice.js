import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   // cart : []
   cart : []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            // payload = newItem
            const item  = state.cart.find(item=>item.name === action.payload.name)
            if (item){
                item.quantity++;
                return
            }

            state.cart.push(action.payload)

        },
        deleteItem(state,action){
            // payload = id
            state.cart = state.cart.filter((item)=> item.name!== action.payload);
        },
        increaseItem(state,action){
            const item  = state.cart.find(item=>item.name === action.payload)
            item.quantity++;
            item.totalPrice =item.quantity*item.unitPrice
        },
        decreaseItem(state,action){
            const item  = state.cart.find(item=>item.name === action.payload)
            item.quantity--;
            item.totalPrice =item.quantity*item.unitPrice
            if (item.quantity==0){
                state.cart = state.cart.filter((item)=> item.name!== action.payload);
            }
        },
        clearCart(state){
            state.cart = []

        }
    }
})

export const {addItem, deleteItem ,increaseItem,decreaseItem,clearCart } = cartSlice.actions
export default cartSlice.reducer
