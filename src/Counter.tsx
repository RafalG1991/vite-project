import {useCounter} from "./hooks/useCounter.ts";

export const Counter = () => {
  const {counter} = useCounter(0, 1000);

  return (
    <div>
      <p>{counter}</p>
    </div>
  )
}