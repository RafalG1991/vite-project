interface Props {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  seventh?: number;
}

const ManyValues = (props: Props) => {
  const {first, second, third, fourth, fifth, sixth, seventh = 7} = props;
  const sum = first + second + third + fourth + fifth + sixth + seventh;
  return <h1>Sum is {sum}</h1>
}

export {ManyValues};