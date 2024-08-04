import {useEffect, useState} from "react";

interface Pokemon {
  abilities: {ability: {name: string}}[],
  baseExperience: string,
  name: string,
  sprites: {front_default: string},
}

const Homework = () => {
  const [name, setName] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const getPokemon = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemon(data);
  }

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <>
      <h1>{pokemon?.name}</h1>
      <p>experience: {pokemon?.baseExperience}</p>
      <p>Abilities:</p>
      {pokemon?.abilities.map(ab => <p>ab.name</p>)}
      <img src={pokemon?.sprites.front_default} alt=""/>
    </>
  )
}