import React from "react";
import { PokemonWithPower } from "./API";

let tableRender = 0;
const PokemonTable: React.FunctionComponent<{pokemons: PokemonWithPower[]}> = ({ pokemons }) => {
  console.log(`tableRender: ${tableRender++}`);

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Type</td>
          <td colSpan={6}>Stats</td>
          <td>Power</td>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon: PokemonWithPower) => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>{pokemon.name}</td>
            <td>{pokemon.type.join(",")}</td>
            <td>{pokemon.hp}</td>
            <td>{pokemon.attack}</td>
            <td>{pokemon.defense}</td>
            <td>{pokemon.special_attack}</td>
            <td>{pokemon.special_defense}</td>
            <td>{pokemon.speed}</td>
            <td>{pokemon.power}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

const MemoedPokemonTable = React.memo(PokemonTable);

export default MemoedPokemonTable;