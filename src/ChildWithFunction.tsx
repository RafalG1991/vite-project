type ChildWithFunctionProps = {
  callback: () => void;
}

export const ChildWithFunction = ({callback}: ChildWithFunctionProps) => {
  console.log("RENDER CHILD COMPONENT!!!");
  return <button onClick={callback}>Click me!</button>
}