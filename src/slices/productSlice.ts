import {createSlice} from "@reduxjs/toolkit";

export type ProductState = {
  price: number;
  name: string;
}

const initialState: ProductState = {
    price: 0,
    name: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  }
})