import { createFileRoute } from '@tanstack/react-router'

const NotFound = () => {
  return (
    <h1>Not found!</h1>
  )
}

export const Route = createFileRoute('/$')({
  component: NotFound,
})
