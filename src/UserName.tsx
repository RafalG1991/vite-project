import {useUserContext} from "./context/useUserContext.ts";

export const UserName = () => {
  const {user} = useUserContext();

  if(!user) return null;

  const {name} = user;

  return <p><strong>First name:</strong> {name}</p>
}