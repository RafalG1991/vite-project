type PropsType = {
  value: number[];
}

export const MemoChild = ({value}: PropsType) => {
  return <p>{value.join()}</p>
}