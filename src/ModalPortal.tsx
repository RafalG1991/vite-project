import {ReactNode} from "react";
import {createPortal} from "react-dom";

export type ModalPortalProps = {
  children: ReactNode;
}

export const ModalPortal = ({children}: ModalPortalProps) => {
  return createPortal(<div>
    {children}
  </div>,
    document.getElementById('portal')!);
}