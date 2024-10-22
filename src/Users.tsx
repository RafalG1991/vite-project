import {useUsers} from "./hooks/useUsers.ts";
import {UsersList} from "./UsersList.tsx";
import {Provider} from "react-redux";
import {store} from "./store";

export const Users = () => {
  const {getUsers} = useUsers();

  const users = getUsers();

  return <Provider store={store}>
    <UsersList users={users} />
  </Provider>
}