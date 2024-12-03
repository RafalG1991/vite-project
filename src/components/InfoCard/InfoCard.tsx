import styles from './styles.module.scss';
import {ReactNode} from "react";

export type InfoCardProps = {
  children: ReactNode;
}

export const InfoCard = ({children}: InfoCardProps) => {
  return (
    <div className={styles.infoBox}>
      {children}
    </div>
  )
}