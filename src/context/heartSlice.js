import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist-item")) || [],
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addToHeart: (state, action) => {
      let index = state.value.findIndex((i) => i.name === action.payload.name);
      if (index < 0) {
        state.value = [...state.value, action.payload];
        localStorage.setItem("wishlist-item", JSON.stringify(state.value));
      }
    },
    removeFromHeart: (state, action) => {
      state.value = state.value.filter((i) => i.name !== action.payload.name);
      localStorage.setItem("wishlist-item", JSON.stringify(state.value));
    },
  },
});

export const { addToHeart, removeFromHeart } = heartSlice.actions;
export default heartSlice.reducer;
