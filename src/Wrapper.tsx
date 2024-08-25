import {ReactNode} from "react";

type PropWithChildren = {
  children: ReactNode;
}

export const Wrapper = ({children}: PropWithChildren) => {
  return <div>
    {children}
  </div>
}