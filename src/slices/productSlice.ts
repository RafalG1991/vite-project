import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  }
})