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
        <li key={el.id}>{el.id} - {el.value}</li>
      ))}
    </ul>
  )
}

export { Foo };