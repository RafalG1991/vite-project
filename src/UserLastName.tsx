export type UserLastNameProps = {
  lastName: string;
}

export const UserLastName = ({ lastName } : UserLastNameProps) => {
  return <p><strong>Last name:</strong> {lastName}</p>
}