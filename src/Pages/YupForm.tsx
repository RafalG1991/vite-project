import {InferType, object, string} from "yup";

const loginSchema = object({
  login: string().required().min(5),
  password: string().required().min(5),
})

type LoginData = InferType<typeof loginSchema>;

export const YupForm = () => {
  return null;
}