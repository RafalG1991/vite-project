import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ip')({
  component: () => <div>Hello /ip!</div>,
})
