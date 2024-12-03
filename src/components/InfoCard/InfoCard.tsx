import styles from './styles.module.scss';

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
      {title ? <p className={styles.title}>{title}</p> : null}
      <div>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
      <div>
        {label ? <button className={styles.button}>{label}</button> : null}
      </div>
    </div>
  )
}