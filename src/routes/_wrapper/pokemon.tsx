import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_wrapper/pokemon')({
  component: () => <div>Hello /_wrapper/pokemon!</div>,
})
