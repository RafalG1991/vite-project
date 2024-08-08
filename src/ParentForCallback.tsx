import {ChildWithFunction} from "./ChildWithFunction.tsx";

export const ParentForCallback = () => {
  const foo = () => {
    console.log("Hello World!");
  }

  return <ChildWithFunction callback={foo} />
}