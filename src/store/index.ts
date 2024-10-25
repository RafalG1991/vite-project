import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "../slices/productSlice.ts";
import {productsReducer} from "../slices/productsSlice.ts";
import {ipReducer} from "../slices/ipSlice.ts";
import {ipRtkSlice} from "../slices/ipRtkSlice.ts";

export const store = configureStore({
  devTools: false,
  reducer: {
    product: productReducer,
    products: productsReducer,
    ip: ipReducer,
    [ipRtkSlice.reducerPath]: ipRtkSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ipRtkSlice.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;