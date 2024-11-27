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
      <input {...register('password')} />
      <button type="submit" disabled={!isValid}>Log in</button>
    </form>
  )
}