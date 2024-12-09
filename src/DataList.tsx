export type DataListProps = {
  items: string[];
}

export const DataList = ({ items }: DataListProps) => {
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}