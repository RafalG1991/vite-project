export type InfoCardProps = {
  title: string;
  description: string;
  label: string;
}

export const InfoCard = ({title, description, label}: InfoCardProps) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <button>{label}</button>
      </div>
    </div>
  )
}