import {useUsers} from "./hooks/useUsers.ts";

export const Users = () => {
  const {getUsers} = useUsers();

  const users = getUsers();
}