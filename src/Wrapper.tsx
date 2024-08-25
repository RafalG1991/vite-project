import {ReactNode} from "react";
import './Wrapper.scss';

type PropWithChildren = {
  children: ReactNode;
}

export const Wrapper = ({children}: PropWithChildren) => {
  return <div className="wrapper">
    {children}
  </div>
}