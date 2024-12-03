import styles from "./styles.module.scss";

export type TitleProps = {
  title: string;
}

export const Title = ({title}: TitleProps) => {
  return (
    <p className={styles.title}>{title}</p>
  )
}