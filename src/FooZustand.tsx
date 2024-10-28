import {useFooStore} from "./store/useFooStore.ts";

export const FooZustand = () => {
  const { value , setValue} = useFooStore();

  const setRandomValue = () => {
    setValue(Math.round(Math.random() * 100));
  }

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={setRandomValue}>Set random value</button>
    </div>
  )
}