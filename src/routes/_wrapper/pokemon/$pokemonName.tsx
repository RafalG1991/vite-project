import { createFileRoute } from '@tanstack/react-router'
import {getPokemon} from "./-loaders";

type PokemonSearch = {
  page: number;
  pageSize: number;
  filters: string[];
}

const SinglePokemon = () => {
  const {name, weight} = Route.useLoaderData();
  const {page,pageSize,filters} = Route.useSearch();

  return (
    <div>
      <p>Pokemon name: {name}</p>
      <p>Pokemon weight: {weight}</p>
      <h3>Route params: {page} {pageSize} {filters.join(', ')}</h3>
    </div>
  )
}

export const Route = createFileRoute('/_wrapper/pokemon/$pokemonName')({
  loader: ({params}) => getPokemon(params.pokemonName),
  validateSearch: (search: Record<string, unknown>): PokemonSearch => ({
    page: Number(search?.page ?? 1),
    pageSize: Number(search?.pageSize ?? 100),
    filters: Array.isArray(search?.filters) ? search?.filters.map(filter => filter.toString()) : [],
  }),
  component: SinglePokemon,
  pendingComponent: () => <h1>Loading pokemon...</h1>
})
