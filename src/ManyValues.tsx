interface Props {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
}

const ManyValues = (props: Props) => {
  const sum = props.first + props.second + props.third + props.fourth + props.fifth + props.sixth;
  return <h1>Sum is {sum}</h1>
}

export {ManyValues};