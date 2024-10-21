import {UserMainData} from "./UserMainData.tsx";
import {UserDetails} from "./UserDetails.tsx";

export const User = () => {
  return (
    <li>
      <UserMainData />
      <UserDetails />
    </li>
  )
}