import {useUserContext} from "./context/useUserContext.ts";

export const UserDetails = () => {
  const {user} = useUserContext();

  if(!user) return null;

  const {name, lastName, age} = user;

  return <div>
    <small>{name} {lastName} is {age} years old.</small>
  </div>
}