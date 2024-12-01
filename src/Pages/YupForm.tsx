import {object, string} from "yup";

const loginSchema = object({
  login: string().required().min(5),
  password: string().required().min(5),
})

export const YupForm = () => {
  return null;
}