import {useRouteError} from "react-router-dom";

export const ErrorView = () => {
  const error = useRouteError() as string;

  return (
    <div>
      <h1>Error!</h1>
      <h2>Something went wrong!</h2>
      <h3>Error: {error}</h3>
    </div>
  )
}