import {InferType, object, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, TextField} from "@mui/material";

const loginSchema = object({
  login: string().required().min(5),
  password: string().required().min(5),
})

type LoginData = InferType<typeof loginSchema>;

export const YupForm = () => {
  const { register , handleSubmit } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField type="text" {...register('login')} />
      <TextField type="password" {...register('password')} />
      <Button type="submit">Submit</Button>
    </form>
  )
}