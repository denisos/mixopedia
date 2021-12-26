export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export interface PokemonWithPower extends Pokemon {
  power: number;
}

export async function getAll(): Promise<Pokemon[]> {
  const res = await fetch('/pokemon.json');
  return await res.json();
}

export async function getAllByName(search: string): Promise<Pokemon[]> {
  const lcSearch = search.toLowerCase();
  const data = await getAll();
  return data.filter(({ name }) => name.toLowerCase().includes(lcSearch))
}
