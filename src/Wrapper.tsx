import {ReactNode} from "react";
import styles from './Wrapper.module.scss';
import clsx from "clsx";

type PropWithChildren = {
  children: ReactNode;
}

export const Wrapper = ({children}: PropWithChildren) => {
  return <div className={clsx(styles.wrapper)}>
    {children}
  </div>
}