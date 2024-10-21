import {useContext} from "react";
import {UserContext} from "./context/UserContext.tsx";

export const UserDetails = () => {
  const {user} = useContext(UserContext);

  if(!user) return null;

  const {name, lastName, age} = user;

  return <div>
    <small>{name} {lastName} is {age} years old.</small>
  </div>
}