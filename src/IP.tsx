import {Route} from "./routes/ip.tsx";

export function IP () {
  const { ip } = Route.useLoaderData()

  return (
    <div>
      <h1>Your IP:</h1>
      <h2>{ip}</h2>
    </div>
  )
}