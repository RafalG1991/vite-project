import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "../slices/productSlice.ts";

export const store = configureStore({
  reducer: {
    product: productReducer,
  }
});


// {
//   product: {
//     price: number,
//     name: string,
//   },
//   products: {
//     list: string[],
//     count: number,
//   },
// }