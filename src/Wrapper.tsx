import {ReactNode, useState} from "react";
import styles from './Wrapper.module.scss';
import clsx from "clsx";

type PropWithChildren = {
  children: ReactNode;
}

export const Wrapper = ({children}: PropWithChildren) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(prevState => !prevState);
  }

  return <div className={clsx(styles.wrapper, {[styles.isActive]: isActive})} onClick={toggleActive}>
    {children}
  </div>
}