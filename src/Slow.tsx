import {useState, useTransition} from "react";

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
  const [isPending, startTransition] = useTransition();

  const getData = () => {
    setCounter(prev => prev+1);
    startTransition(() => {
      setElements(randomize());
    });
  }

  return (
    <>
      <h1>{counter}</h1>
      {isPending ? <ul>
        {elements.map(el => <li key={el.id}>{el.label}</li>)}
      </ul> : <h2>Loading...</h2>}
      <button onClick={getData}>Get data</button>
    </>
  )

}