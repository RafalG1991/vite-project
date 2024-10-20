import {SingleUser} from "./types/user.ts";
import {UserMainData} from "./UserMainData.tsx";
import {UserDetails} from "./UserDetails.tsx";

export type UserProps = {
  user: SingleUser;
}

export const User = ({ user }: UserProps) => {
  return (
    <li key={user.id}>
      <UserMainData user={user}/>
      <UserDetails user={user}/>
    </li>
  )
}