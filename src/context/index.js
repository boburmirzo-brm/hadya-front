import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./heart";

export const store = configureStore({
  reducer: {
    heart: heartSlice,
  },
});
