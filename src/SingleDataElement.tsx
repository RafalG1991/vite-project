type SingleElement = {
  id: string;
  name: string;
  value: number;
}

export type SingleDataElementProps = {
  item: SingleElement;
}

export const SingleDataElement = ({ item }: SingleDataElementProps) => {
  return (
    <h2>{item.value}</h2>
  )
}