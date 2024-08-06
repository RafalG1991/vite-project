import {useForm} from "./hooks/useForm.ts";
import React, {FormEvent, useState} from "react";
import {FieldErrors} from "./FieldErrors.tsx";

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
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Login: </label>
        <input type="text" id="login" name="login" value={form.login} onChange={handleChange}/>
        <FieldErrors errors={errors.login}/>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" value={form.password} onChange={handleChange}/>
        <FieldErrors errors={errors.password}/>
      </div>
      <div>
        <label htmlFor="login">Accept the rules</label>
        <input type="checkbox" id="acceptRules" name="acceptRules" checked={form.acceptRules} onChange={handleChange}/>
        <FieldErrors errors={errors.acceptRules}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}