import {getRouteApi} from "@tanstack/react-router";

const IpRoute = getRouteApi('/ip');

export function IP () {
  const { ip } = IpRoute.useLoaderData()

  return (
    <div>
      <h1>Your IP:</h1>
      <h2>{ip}</h2>
    </div>
  )
}