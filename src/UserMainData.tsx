import {SingleUser} from "./types/user.ts";

export type UserMainDataProps = {
  user: SingleUser;
}

export const UserMainData = ({ user }: UserMainDataProps) => {
  const {name, lastName} = user;

  return <div>
    <UserName name={name}/>
    <UserLastName lastName={lastName}/>
  </div>
}