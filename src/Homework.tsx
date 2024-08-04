import {useEffect, useState} from "react";

interface Pokemon {
  abilities: {ability: {name: string}}[],
  base_experience: string,
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
      <button onClick={() => setName('pikachu')}>Pikachu</button>
      <button onClick={() => setName('bulbasaur')}>Bulbasaur</button>
      <button onClick={() => setName('charizard')}>Charizard</button>
      <h1>{pokemon?.name}</h1>
      <p>experience: {pokemon?.base_experience}</p>
      <p>Abilities:</p>
      {pokemon?.abilities ?
        pokemon?.abilities.map(ab => <p key={ab.ability.name}>{ab.ability.name}</p>)
      : null}
      {pokemon?.sprites ?
        <img src={pokemon?.sprites.front_default} alt=""/>
      : null}
    </>
  )
}

export {Homework};