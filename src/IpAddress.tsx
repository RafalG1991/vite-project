import {useSelector} from "react-redux";
import {RootState} from "./store";

export const IpAddress = () => {
  const {value, error, loading} = useSelector((state: RootState) => state.ip);

}