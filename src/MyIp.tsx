import {useFooStore} from "./store/useFooStore.ts";
import {useShallow} from "zustand/react/shallow";

export const MyIp = () => {
  const [ip, fetchMyIp] = useFooStore(useShallow(state => [state.ip, state.fetchMyIp]));

  return (
    <div>
      <p>My IP: {ip}</p>
      <button onClick={fetchMyIp}>Fetch my IP</button>
    </div>
  )
}