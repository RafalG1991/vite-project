import {SingleUser} from "./types/user.ts";

export type UserProps = {
  user: SingleUser;
}

export const User = ({ user }: UserProps) => {
  return (
    <li>
      <UserMainData />
      <UserDetails />
    </li>
  )
}