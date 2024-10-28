import {useFooStore} from "./store/useFooStore.ts";
import {useShallow} from "zustand/react/shallow";

export const FooZustand = () => {
  const { value , setValue} = useFooStore(useShallow(state => ({value: state.value, setValue: state.setValue})));

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