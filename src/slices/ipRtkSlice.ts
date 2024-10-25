import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const ipRtkSlice = createApi({
  reducerPath: 'ipApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.ipify.org'}),
  endpoints: (builder) => ({
    getIpAddress: builder.query({
      query: () => '?format=json',
    })
  }),
});