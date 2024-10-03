import { createFileRoute } from '@tanstack/react-router'
import {getPokemon} from "./-loaders";

type PokemonSearch = {
  page: number;
  pageSize: number;
  filters: string[];
}

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
  pendingComponent: () => <h1>Loading pokemon...</h1>
})
