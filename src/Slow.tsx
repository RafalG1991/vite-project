import {useState} from "react";

const randomize = () => {
  const elements = [];

  for(let i=0; i <= 1000; i++) {
    elements.push({label: `element - ${i}`, id: i});
  }
}

export const Slow = () => {
  const [elements, setElements] = useState<{label: string, id: number}[]>([]);

  return (
    <ul>
      {elements.map(el => <li key={el.id}>{el.label}</li>)}
    </ul>
  )

}