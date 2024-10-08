import { createLazyFileRoute } from '@tanstack/react-router'

const IP = () => {
  const { ip } = Route.useLoaderData()

  return (
    <div>
      <h1>Your IP:</h1>
      <h2>{ip}</h2>
    </div>
  )
}

export const Route = createLazyFileRoute('/ip')({
  component: IP,
})
