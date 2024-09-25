import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import wishlistSlice from "./slice/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
// const { configureStore } = require("@reduxjs/toolkit");

const cartStore = configureStore({
  reducer: {
    productSlice,
    wishlistSlice,
    cartReducer: cartSlice,
  },
});

export default cartStore;
