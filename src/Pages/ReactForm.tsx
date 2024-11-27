import {useForm} from "react-hook-form";

type FormData = {
  login: string;
  password: string;
}

export const ReactForm = () => {
  const { register, handleSubmit, formState: { isValid, errors} } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('login', { required: true, minLength: 3 })} />
      {errors.login && errors.login.type === 'required' ? <p>This field is required</p> : null}
      {errors.login && errors.login.type === 'minLength' ? <p>This field must be at least 3 characters</p> : null}
      <input {...register('password')} />
      <button type="submit" disabled={!isValid}>Log in</button>
    </form>
  )
}