import {SingleUser} from "./types/user.ts";

export type UsersListProps = {
  users: SingleUser[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <ul>
      {users.map(user => <li></li>)}
    </ul>
  )
}