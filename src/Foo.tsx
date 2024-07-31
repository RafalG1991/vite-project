type Props = {
  elements: {
    id: number,
    value: number,
  }[]
}

const Foo = (props: Props) => {
  return (
    <ul>
      {props.elements.map(el => (
        <li>{el.id} - {el.value}</li>
      ))}
    </ul>
  )
}

export { Foo };