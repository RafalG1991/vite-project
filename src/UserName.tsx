export type UserNameProps = {
  name: string;
}

export const UserName = ({ name }: UserNameProps) => {
  return <p><strong>First name:</strong> {name}</p>
}