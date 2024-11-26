import {useForm} from "react-hook-form";

export const ReactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
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