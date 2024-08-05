import {ChangeEvent, FormEvent, useState} from "react";

type FormData = {
  login: {value: string};
}

export const App = () => {
  const [login, setLogin] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login } = e.target as typeof e.target & FormData;
    console.log(login.value);
  }

  console.log(login);
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" value={login} onChange={handleChange} />
      <button type="submit">Submit!</button>
    </form>
  )
}