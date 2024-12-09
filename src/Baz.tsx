import {useId} from "react";

export const Baz = () => {
  const id = useId();

  return <div>
    <label htmlFor={id}>Some label</label>
    <input type="text" id={id}/>
  </div>
}