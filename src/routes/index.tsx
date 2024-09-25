import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
  return (
    <p>This is Home Page, choose path from menu</p>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
