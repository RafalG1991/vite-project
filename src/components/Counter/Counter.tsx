import {useState} from "react";

type CounterProps = {
  initialValue?: number;
}

export const Counter = ({initialValue}: CounterProps) => {
  const [counter, setCounter] = useState(initialValue || 0);

  const increment = () => {
    setCounter(prev => prev + 1);
  }

  return (
    <div>
      <h1 data-testid='counter-value'>{counter}</h1>
      <button data-testid='counter-button' onClick={increment}>Increment</button>
    </div>
  )
}