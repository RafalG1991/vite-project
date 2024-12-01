import {InferType, object, string} from "yup";
import {useForm} from "react-hook-form";

const loginSchema = object({
  login: string().required().min(5),
  password: string().required().min(5),
})

type LoginData = InferType<typeof loginSchema>;

export const YupForm = () => {
  const { register , handleSubmit } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('login')}/>
      <input type="password" {...register('login')}/>
      <button type="submit">Submit</button>
    </form>
  )
}