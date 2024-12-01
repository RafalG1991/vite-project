import {InferType, object, string} from "yup";
import {useForm} from "react-hook-form";

const loginSchema = object({
  login: string().required().min(5),
  password: string().required().min(5),
})

type LoginData = InferType<typeof loginSchema>;

export const YupForm = () => {
  const { register } = useForm();

  return (
    <form>
      <input type="text"/>
      <input type="password"/>
    </form>
  )
}