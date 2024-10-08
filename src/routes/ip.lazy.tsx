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
  loader: async () => {
    const response = await fetch('https://api.ipify.org?format=json')
    return response.json() as Promise<{ ip: string }>
  },
})
