import {memo} from "react";

type PropsType = {
  value: number[];
}

const heavyCalculations = () => {
  console.log("HEAVY CALC STARTED");
  for(let i=0; i<1000000000; i++) {}
  console.log("HEAVY CALC ENDED");
  return 1;
}

export const MemoChild = memo(({value}: PropsType) => {
  const calcValue = heavyCalculations();

  return <div>
    <p>{value.join()}</p>
    <p>Calc value: {calcValue}</p>
  </div>
})