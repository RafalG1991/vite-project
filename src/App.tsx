import {FormEvent} from "react";

type FormData = {
  login: {value: string};
}

export const App = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login } = e.target as typeof e.target & FormData;
    console.log(login.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login"/>
      <button type="submit">Submit!</button>
    </form>
  )
}