import React, { useEffect, useState, useMemo  } from "react";
import { Pokemon, PokemonWithPower, getAll, getAllByName } from "./API";
import PokemonTable from './PokemonTable';

import './styles.css';

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

let appRender = 0;

export default function PokemonPowerRankings() {
  console.log(`appRender: ${appRender++}`);

  const [ pokemons, setPokemons ] = useState<Pokemon[]>([]);
  const [ threshold, setThreshold ] = useState(0);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    getAll().then(setPokemons);
  }, []);

  useEffect(() => {
    getAllByName(search).then(setPokemons);
  }, [ search ]);

  // the table was re-rendering when filter by threshold, even tho contents of table were
  //  not chaning
  // trying this won't improve: const MemoedPokemonTable = React.memo(PokemonTable)
  //  React.memo checks for props changes and only rerenders if props change, however our code was
  //  regenerating pokemonsWithPower ever render and because React Memo uses triple equals, then 
  //  the references are different and the table is rerenderd 
  // the solution is to also use: React.useMemo (with React.memo)
  //  to only regenerate (and change) pokemonsWithPower list wref hen pokemons change (not every render)
  //
  // Jack says "useMemo is a weird name" because it puts the emphasis on momoization and thus imples 
  //  performancem but Jack advises when you need to compute a value then think of using useMemo
  //
  const pokemonsWithPower: PokemonWithPower[] = useMemo(
    () => pokemons.map((pokemon: Pokemon) => ({
      ...pokemon,
      power: calculatePower(pokemon)
    })), 
    [pokemons]
  );

  // only recalculate when dependencies change
  const countOverThreshold = useMemo(() => 
    pokemonsWithPower.filter((pokemon) => pokemon.power > threshold).length,
    [threshold, pokemonsWithPower]
  );

  const handleSetThreshold = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(evt.target.value);
    if (!isNaN(val)) {
      setThreshold(val);
    }
  };

  const handleSetSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
  };

  // min
  const min = useMemo(() => 
    pokemonsWithPower.reduce((acc, pokemon) => Math.min(acc, pokemon.power), 50000),
    [ pokemonsWithPower ]
  );

  // max
  const max = useMemo(() => 
    pokemonsWithPower.reduce((acc, pokemon) => Math.max(acc, pokemon.power), 0),
    [ pokemonsWithPower ]
  );

  return (
    <div className="pokemon-power-rankings">
      <h2>Pokemon dependency graph implementation</h2>
      <p>This is a follow along to Jack Herringtons video about using reactjs hooks.
        Using this example Jack shows how we can use hooks to wire up dependencies and make the UI more reactive.
      </p>
      <div className="top-bar">
        <div>Search</div>
        <input type="text" value={search} onChange={handleSetSearch}></input>
        <div>Power threshold</div>
        <input type="text" value={threshold} onChange={handleSetThreshold}></input>
        <div>Count over threshold: {countOverThreshold}</div>
      </div>

      <div className="two-column">
        <PokemonTable pokemons={pokemonsWithPower} />

        <div>
          <div>Min: {min}</div>
          <div>Max: {max}</div>
        </div>
      </div>
    </div>

  );
}