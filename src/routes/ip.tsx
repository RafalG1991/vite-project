import { createFileRoute } from '@tanstack/react-router'

function IP () {
  const { ip } = Route.useLoaderData()

  return (
    <div>
      <h1>Your IP:</h1>
      <h2>{ip}</h2>
    </div>
  )
}

export const Route = createFileRoute('/ip')({
  component: IP,
  loader: async () => {
    const response = await fetch('https://api.ipify.org?format=json')
    return response.json() as Promise<{ ip: string }>
  },
})
