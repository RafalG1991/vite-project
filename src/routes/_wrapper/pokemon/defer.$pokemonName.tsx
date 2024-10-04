import { createFileRoute, Await } from '@tanstack/react-router'
import {getDeferredPokemon} from './-loaders'
import {Suspense} from "react";

const SingleDeferredPokemon = () => {
  const { deferredResponse } = Route.useLoaderData()

  return (
    <Suspense fallback="Loading data...">
      <Await promise={deferredResponse}>
        {({name, weight}) => (
          <div>
            <p>Pokemon name: {name}</p>
            <p>Pokemon weight: {weight}</p>
          </div>
        )}
      </Await>
    </Suspense>
  )
}

export const Route = createFileRoute('/_wrapper/pokemon/defer/$pokemonName')({
  loader: ({ params}) => getDeferredPokemon(params.pokemonName),
  component: SingleDeferredPokemon,
})
