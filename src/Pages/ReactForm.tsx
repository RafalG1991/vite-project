import {useForm} from "react-hook-form";

type FormData = {
  login: string;
  password: string;
}

export const ReactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('login')} />
      <input {...register('password')} />
      <button type="submit">Log in</button>
    </form>
  )
}