import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type IpState = {
  value: string;
}

const initialState: IpState = {
  value: '',
}

export const getIpAddress = createAsyncThunk<{ ip: string }>(
  'ip/fetchIpAddress',
  async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    return await response.json() as Promise<{ ip: string }>;
  }
)

export const ipSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase()
  }
});