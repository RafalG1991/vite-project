import styles from './styles.module.scss';
import {Title} from "./components/Title/Title.tsx";

export type InfoCardProps = {
  item: {
    title?: string;
    description?: string;
    label?: string;
  }
}

export const InfoCard = ({
  item: {
    title, description, label
  }
}: InfoCardProps) => {
  return (
    <div className={styles.infoBox}>

    </div>
  )
}