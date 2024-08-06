import {useForm} from "./hooks/useForm.ts";

type FormValues = {
  login: string;
  password: string;
  acceptRules: boolean;
}

export const Form = () => {
  const [form, handleChange] = useForm<FormValues>({
    login: '',
    password: '',
    acceptRules: false,
  });

  console.log(form);

  return (
    <form>
      <label htmlFor="login">Login: </label>
      <input type="text" id="login" name="login" value={form.login} onChange={handleChange}/>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" name="password" value={form.password} onChange={handleChange}/>
      <label htmlFor="login">Accept the rules</label>
      <input type="checkbox" id="acceptRules" name="acceptRules" checked={form.acceptRules} onChange={handleChange}/>
    </form>
  )
}