import styles from "./styles.module.scss";

export type ButtonProps = {
  label: string;
}

export const Button = ({label}: ButtonProps) => {
  return (
    <button className={styles.button}>{label}</button>
  )
}