import { createFileRoute } from '@tanstack/react-router'
import {getPokemon} from "./-loaders";

export const Route = createFileRoute('/_wrapper/pokemon/$pokemonName')({
  loader: ({params}) => getPokemon(params.pokemonName),
  component: () => <div>Hello /_wrapper/pokemon/$pokemonName!</div>,
})
