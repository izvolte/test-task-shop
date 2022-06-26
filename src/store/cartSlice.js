import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		add: (state, action) => {
			if(!state.cart.find((product) => product.id === action.payload)){
				state.cart = [...state.cart, {
					id: action.payload,
					amount: 1
				}]
			}
		},
		remove: (state, action) => {
			state.cart = state.filter(({id}) => id !== action.payload)
		},
	},
})

export const { add, remove } = cartSlice.actions

export const selectCart = (state) => state.cart.cart

export default cartSlice.reducer
