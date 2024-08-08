import {memo} from "react";

type ChildWithFunctionProps = {
  callback: () => void;
}

export const ChildWithFunction = memo(({callback}: ChildWithFunctionProps) => {
  console.log("RENDER CHILD COMPONENT!!!");
  return <button onClick={callback}>Click me!</button>
})