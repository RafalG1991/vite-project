import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "../slices/productSlice.ts";
import {productsReducer} from "../slices/productsSlice.ts";
import {ipReducer} from "../slices/ipSlice.ts";

export const store = configureStore({
  devTools: false,
  reducer: {
    product: productReducer,
    products: productsReducer,
    ip: ipReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;