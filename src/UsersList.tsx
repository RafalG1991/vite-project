import {SingleUser} from "./types/user.ts";
import {User} from "./User.tsx";
import {UserContext} from "./context/UserContext.tsx";

export type UsersListProps = {
  users: SingleUser[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <ul>
      {users.map(user => (
        <UserContext.Provider value={{ user }} key={user.id}>
          <User user={user} />
        </UserContext.Provider>
      ))}
    </ul>
  )
}