import {useLoaderData} from "react-router-dom";

export const AwaitedData = () => {
  const data = useLoaderData();

  console.log("Awaited data", data);

  return (
    <h1>Awaited data</h1>
  )
}