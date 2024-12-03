import styles from './styles.module.scss';

export type InfoCardProps = {
  title: string;
  description: string;
  label: string;
}

export const InfoCard = ({title, description, label}: InfoCardProps) => {
  return (
    <div className={styles.infoBox}>
      <p className={styles.title}>{title}</p>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <button className={styles.button}>{label}</button>
      </div>
    </div>
  )
}