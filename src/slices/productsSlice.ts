import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productSlice} from "./productSlice.ts";

export type ProductsState = {
    list: string[];
    count: number;
}

const initialState: ProductsState = {
  list: [],
  count: 0,
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    }
  }
});

export const {addProduct} = productsSlice.actions;
export const productsReducer = productSlice.reducer;