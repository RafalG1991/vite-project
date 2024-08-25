import {ReactNode} from "react";
import styles from './Wrapper.module.scss';

type PropWithChildren = {
  children: ReactNode;
}

export const Wrapper = ({children}: PropWithChildren) => {
  return <div className={styles.wrapper}>
    {children}
  </div>
}