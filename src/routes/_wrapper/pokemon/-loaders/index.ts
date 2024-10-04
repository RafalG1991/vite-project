import {Pokemon} from "../../../../types/pokemon.ts";
import {apiCall} from "../../../../utils/apiCall.ts";
import {defer} from "@tanstack/react-router";

export const getPokemon = async (pokemonName: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return response.json() as Promise<Pokemon>;
}

export const getDeferredPokemon = async (pokemonName: string) => {
  const responsePromise = apiCall<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return {
    deferredResponse: defer(responsePromise),
  }
}