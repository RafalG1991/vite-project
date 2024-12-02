import {ReactNode} from "react";

export type ModalProps = {
  children: ReactNode;
}

export const Modal = ({children}: ModalProps) => {
  return (
    <div>
      {children}
    </div>
  )
}