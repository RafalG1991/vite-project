import {SingleUser} from "./types/user.ts";

export type UserDetailsProps = {
  user: SingleUser;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
  const {name, lastName, age} = user;

  return <div>
    <small>{name} {lastName} is {age} years old.</small>
  </div>
}