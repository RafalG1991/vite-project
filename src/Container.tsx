import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{
  title: string;
}>

const Container = ({children, title}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export { Container };