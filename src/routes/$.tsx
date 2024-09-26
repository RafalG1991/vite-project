import { createFileRoute } from '@tanstack/react-router'

const NotFound = () => {
  const { _splat } = Route.useParams();

  return (
    <div>
      <h1>{_splat}</h1>
      <h2>Not found!</h2>
    </div>
  )
}

export const Route = createFileRoute('/$')({
  component: NotFound,
})
