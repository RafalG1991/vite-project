import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "../slices/productSlice.ts";
import {productsReducer} from "../slices/productsSlice.ts";

export const store = configureStore({
  devTools: false,
  reducer: {
    product: productReducer,
    products: productsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;