import {useUsers} from "./hooks/useUsers.ts";
import {UsersList} from "./UsersList.tsx";

export const Users = () => {
  const {getUsers} = useUsers();

  const users = getUsers();

  return <UsersList users={users} />
}