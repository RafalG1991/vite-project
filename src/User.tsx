import {UserMainData} from "./UserMainData.tsx";
import {UserDetails} from "./UserDetails.tsx";

export const User = () => {
  return (
    <li key={user.id}>
      <UserMainData />
      <UserDetails />
    </li>
  )
}