import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_wrapper/people/')({
  component: () => <div>Hello /_wrapper/people/!</div>,
})
