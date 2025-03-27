import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const isInCart = state.value.findIndex(item => item.id == action.payload.id)

            if(isInCart >= 0) {
                state.value = [...state.value].map(item => {
                    if(item.id == action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
            } else {
                state.value = [...state.value, {...action.payload, quantity: 1}]
            }
        },
        deleteProduct: (state, action) => {
            state.value = state.value.filter(item => item.id != action.payload.id)
        },
        clearCart: (state) => {
            state.value = []
        },
    }
})

export const { addProduct, deleteProduct, clearCart } = cartSlice.actions
export default cartSlice.reducer