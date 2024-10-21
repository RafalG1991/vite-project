export const UserDetails = () => {
  const {name, lastName, age} = user;

  return <div>
    <small>{name} {lastName} is {age} years old.</small>
  </div>
}