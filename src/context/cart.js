import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: JSON.parse(localStorage.getItem("hadya-cart")) || []
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let index = state.value.findIndex(i => i._id === action.payload._id);
			if (index < 0) {
				state.value = [...state.value, { ...action.payload, quantity: 1 }];
			} else {
				state.value = state.value.map((item, inx) =>
					inx === index ? { ...item, quantity: item.quantity + 1 } : item
				);
			}
			localStorage.setItem("hadya-cart", JSON.stringify(state.value));
		},
		removeFromCart: (state, action) => {
			state.value = state.value.filter(i => i._id !== action.payload);
			localStorage.setItem("hadya-cart", JSON.stringify(state.value));
		},
		decrementCart: (state, action) => {
			let index = state.value.findIndex(i => i._id === action.payload._id);
			state.value = state.value.map((item, inx) =>
				inx === index ? { ...item, quantity: item.quantity - 1 } : item
			);
		},
		deleteAllCart: (state) => {
			state.value = []
			localStorage.removeItem("hadya-cart");
		}
	}
});

export const { addToCart, removeFromCart, decrementCart, deleteAllCart } = cartSlice.actions;
export default cartSlice.reducer;
