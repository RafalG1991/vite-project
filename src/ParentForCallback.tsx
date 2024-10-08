import {ChildWithFunction} from "./ChildWithFunction.tsx";
import {useCallback, useEffect, useState} from "react";

export const ParentForCallback = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevState => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const foo = useCallback(() => {
    console.log("Hello World!");
  }, []);

  return <div>
    <ChildWithFunction callback={foo} />
    <p>Counter: {counter}</p>
  </div>
}