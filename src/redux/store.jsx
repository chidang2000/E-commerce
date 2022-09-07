import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./productModal/productModalSlice";
import cartItemsSlice from "./shopping-cart/cartItemsSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlice,
  },
});
