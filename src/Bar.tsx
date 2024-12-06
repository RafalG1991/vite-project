type BarProps = {
  value: string;
}

export const Bar = ({value}: BarProps) => {
  let val = 0;
  for(let i = 0; i < 1000000; i++) {
    val += val;
  }

  return (
    <h1>{value}</h1>
  )
}