import {InferType, object, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, TextField} from "@mui/material";
import {Modal} from "../Modal.tsx";
import {ModalPortal} from "../ModalPortal.tsx";
import {InfoCard} from "../components/InfoCard/InfoCard.tsx";
import {Title} from "../components/InfoCard/components/Title";
import {Description} from "../components/InfoCard/components/Description/Description.tsx";

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
    <>
      <Modal>Modal</Modal>
      <ModalPortal>ModalPortal</ModalPortal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField type="text" {...register('login')} />
        <TextField type="password" {...register('password')} />
        <Button type="submit">Submit</Button>
      </form>
      <InfoCard item={{title:"title", description:"Some description", label:"Button label"}}>
        <Title />
        <Description />
        <Button />
      </InfoCard>
      <InfoCard item={{description:"Some description"}}>
        <Description />
      </InfoCard>
      <InfoCard item={{title:"title"}} >
        <Title />
      </InfoCard>
    </>
  )
}