import {useEffect, useState} from "react";

export const useCounter = (startingValue: number, delay: number) => {
  const [counter, setCounter] = useState(startingValue);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, delay);

    return () => {
      clearInterval(counterInterval);
    }
  }, [counter])

  return {
    counter,
  }
}