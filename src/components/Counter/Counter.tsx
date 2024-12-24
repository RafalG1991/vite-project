import {useState} from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

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