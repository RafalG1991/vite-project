import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_wrapper/pokemon/defer/$pokemonName')({
  component: () => <div>Hello /_wrapper/pokemon/defer/$pokemonName!</div>,
})
