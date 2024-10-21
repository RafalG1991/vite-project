import {useContext} from "react";
import {UserContext} from "./UserContext.tsx";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if(!context) throw new Error('You must provide a UserContext to use useUserContext');

  return context;
}