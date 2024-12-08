import {useState} from "react";

export const Slow = () => {
  const [elements, setElements] = useState<{label: string, id: number}[]>([]);

  return (
    <ul>
      {elements.map(el => <li key={el.id}>{el.label}</li>)}
    </ul>
  )

}