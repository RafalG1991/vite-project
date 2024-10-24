import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type IpState = {
  value: string;
  loading: boolean;
  error: string;
}

const initialState: IpState = {
  value: '',
  loading: false,
  error: '',
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
    builder.addCase(getIpAddress.pending, state => {
      state.loading = true;
      state.error = '';
    })
    builder.addCase(getIpAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload.ip;
    })
    builder.addCase(getIpAddress.rejected, state => {
      state.loading = false;
      state.error = 'Error has occurred!';
    })
  }
});

export const ipReducer = ipSlice.reducer;