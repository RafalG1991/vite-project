import { createFileRoute } from '@tanstack/react-router'
import {getPokemon} from "./-loaders";

const SinglePokemon = () => {
  const {name, weight} = Route.useLoaderData();
  return (
    <div>
      <p>Pokemon name: {name}</p>
      <p>Pokemon weight: {weight}</p>
    </div>
  )
}

export const Route = createFileRoute('/_wrapper/pokemon/$pokemonName')({
  loader: ({params}) => getPokemon(params.pokemonName),
  component: SinglePokemon,
})
