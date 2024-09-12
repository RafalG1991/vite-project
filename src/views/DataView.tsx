import {useLoaderData} from "react-router-dom";

export const DataView = () => {
  const data = useLoaderData() as string;

  return (
    <div>
      <h1>Data</h1>
      <p>{data}</p>
    </div>
  )
}