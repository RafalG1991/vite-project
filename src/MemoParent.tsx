import {useMemo, useState} from "react";
import {MemoChild} from "./MemoChild.tsx";

export const MemoParent = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(prevState => prevState + 1);
  }

  const arr = useMemo(() => [1,2,3], []);

  return <div>
    <button onClick={inc}>Add +1</button>
    <p>Counter: {counter}</p>
    <MemoChild value={arr}/>
  </div>
}