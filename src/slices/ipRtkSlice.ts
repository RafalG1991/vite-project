import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

type IpAddress = {
  ip: string;
}

export const ipRtkSlice = createApi({
  reducerPath: 'ipApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.ipify.org'}),
  endpoints: (builder) => ({
    getIpAddress: builder.query<IpAddress, void>({
      query: () => '?format=json',
    })
  }),
});