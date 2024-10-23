import {createSlice} from "@reduxjs/toolkit";

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

  }
})