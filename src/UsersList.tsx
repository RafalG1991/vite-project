import {SingleUser} from "./types/user.ts";
import {User} from "./User.tsx";

export type UsersListProps = {
  users: SingleUser[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <ul>
      {users.map(user => <User user={user} key={user.id}/>)}
    </ul>
  )
}