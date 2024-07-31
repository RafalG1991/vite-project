interface Props {
  name: string;
}

const Hello = (props: Props) => {
  return (
    <h1>Hello {props.name}</h1>
  )
}

export { Hello };