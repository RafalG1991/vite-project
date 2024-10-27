import {useGetIpAddressQuery} from "./slices/ipRtkSlice.ts";

export const MyIpAddress = () => {
  const { data, isLoading, isFetching } = useGetIpAddressQuery();

  if(isLoading || isFetching) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Your ip address: { data?.ip || 'NO IP ADDRESS' }</h1>
    </div>
  )
}