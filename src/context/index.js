import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./heart";
import cartSlice from './cart'
import {productApi} from "./productApi"

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware),
});
