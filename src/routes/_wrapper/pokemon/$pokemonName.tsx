import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_wrapper/pokemon/$pokemonName')({
  component: () => <div>Hello /_wrapper/pokemon/$pokemonName!</div>,
})
