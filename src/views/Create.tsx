import {useActionData} from "react-router-dom";

export const Create = () => {
  const data = useActionData();

  if(typeof data !== 'string') return <p>Not correct data!</p>

  return <h1>Data: {data}</h1>
}