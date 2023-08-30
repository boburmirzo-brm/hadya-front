import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./heart";
import cartSlice from './cart'
export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice
  },
});
