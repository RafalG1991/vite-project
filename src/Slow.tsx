import {useState} from "react";

const randomize = () => {
  const elements: {label: string, id: number}[] = [];

  for(let i=0; i <= 1000; i++) {
    elements.push({label: `element - ${i}`, id: i});
  }

  return elements;
}

export const Slow = () => {
  const [elements, setElements] = useState<{label: string, id: number}[]>([]);
  const [counter, setCounter] = useState(0);

  const getData = () => {
    setCounter(prev => prev+1);
    setElements(randomize());
  }

  return (
    <>
      <h1>{counter}</h1>
      <ul>
        {elements.map(el => <li key={el.id}>{el.label}</li>)}
      </ul>
      <button onClick={getData}>Get data</button>
    </>
  )

}