import {useForm} from "./hooks/useForm.ts";
import {FormEvent, useState} from "react";
import {Field} from "./Field.tsx";
import {Checkbox} from "./Checkbox.tsx";

type FormValues = {
  login: string;
  password: string;
  acceptRules: boolean;
}

type FormErrors = {
  [key in keyof FormValues]: string[];
}

export const Form = () => {
  const [form, handleChange] = useForm<FormValues>({
    login: '',
    password: '',
    acceptRules: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
    login: [],
    password: [],
    acceptRules: [],
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);

    const newErrors: FormErrors = {
      login: [],
      password: [],
      acceptRules: [],
    }

    if(!login) {
      newErrors.login.push("This field is required!");
    }
    if(login.length < 3) {
      newErrors.login.push("Login must have at least 3 characters!");
    }
    if(!password) {
      newErrors.password.push("This field is required!");
    }
    if(password.length < 8) {
      newErrors.password.push("Password must have at least 8 characters!");
    }
    if(!acceptRules) {
      newErrors.acceptRules.push("Rules must be accepted!");
    }

    setErrors(newErrors);
  }

  const {login,acceptRules,password} = form;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="login" label="Login" type="text" onChange={handleChange} value={login} errors={errors.login}/>
      <Field name="password" label="Password" type="password" onChange={handleChange} value={password} errors={errors.password}/>
      <Checkbox name="acceptRules" label="I accepted the rules" onChange={handleChange} checked={acceptRules} errors={errors.acceptRules}/>
      <button type="submit">Submit</button>
    </form>
  )
}