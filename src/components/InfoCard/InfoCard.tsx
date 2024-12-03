import styles from './styles.module.scss';
import {Title} from "./components/Title/Title.tsx";
import {ReactNode} from "react";

export type InfoCardProps = {
  children: ReactNode;
  item: {
    title?: string;
    description?: string;
    label?: string;
  }
}

export const InfoCard = ({
  children,
  item: {
    title, description, label
  }
}: InfoCardProps) => {
  return (
    <div className={styles.infoBox}>
      {children}
    </div>
  )
}