import {useState} from "react";

export const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [acceptRules, setAcceptRules] = useState('');

  return (
    <form>
      <label htmlFor="login">Login: </label>
      <input type="text" id="login" name="login" value={login}/>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" name="password" value={password}/>
      <label htmlFor="login">Accept the rules</label>
      <input type="checkbox" id="acceptRules" name="acceptRules" value={acceptRules}/>
    </form>
  )
}