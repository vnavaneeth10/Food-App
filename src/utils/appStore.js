import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//configStore is provided by redux
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
