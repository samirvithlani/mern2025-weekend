import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            console.log(action)
            state.cart.push(action.payload)
            //action --> type
            //actoin ==> payload
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer