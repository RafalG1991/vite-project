import {createSlice} from "@reduxjs/toolkit";

export type IpState = {
  value: string;
}

const initialState: IpState = {
  value: '',
}

export const ipSlice = createSlice({
  name: 'ip',
  initialState,
  extraReducers: {

  }
});