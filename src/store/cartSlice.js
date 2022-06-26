import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		add: (state, {payload}) => {
			if(!state.cart.find((product) => product.id === payload.id)){
				state.cart = [...state.cart, {
					...payload,
					amount: 1
				}]
			}
		},
		remove: (state, {payload}) => {
			state.cart = state.cart.filter(({id}) => id !== payload)
		},
		changeAmount: (state, {payload: {id, amount}}) => {
			state.cart = state.cart.map((product) => product.id === id ? {...product, amount} : product)
		},
		resetCart: (state) => {
			state.cart = []
		}
	},
})

export const { add, remove, resetCart, changeAmount } = cartSlice.actions

export const selectCart = (state) => state.cart.cart

export default cartSlice.reducer
