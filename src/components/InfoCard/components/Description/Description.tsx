import styles from "./styles.module.scss";

export type DescriptionProps = {
  description: string;
}

export const Description = ({description}: DescriptionProps) => {
  return (
    <p className={styles.description}>{description}</p>
  )
}