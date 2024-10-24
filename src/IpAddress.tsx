import {useSelector} from "react-redux";
import {RootState} from "./store";

export const IpAddress = () => {
  const {value, error, loading} = useSelector((state: RootState) => state.ip);

  if(loading) return <h1>Loading ip address...</h1>
  if(error) return <h1>{error}</h1>

  return (
    <div>
      <h1>Your IP address:</h1>
      <h2>{value}</h2>
    </div>
  )
}