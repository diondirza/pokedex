import {
  getAllPokemon,
  getPokemonDetail,
  getAllPokemonTypes,
  getPokemonTypeDetail,
} from './repository';

describe('repository', () => {
  it('should get result from getAllPokemon via PokeAPI', () => {
    return getAllPokemon()
      .then((data) => expect(data).toBeDefined());
  });

  it('should get result from getPokemonDetail via PokeAPI', () => {
    const pokemonName = 'pikachu';
    return getPokemonDetail(pokemonName)
      .then((data) => expect(data).toBeDefined());
  });

  it('should get result from getAllPokemonTypes via PokeAPI', () => {
    return getAllPokemonTypes()
      .then((data) => expect(data).toBeDefined());
  });

  it('should get result from getPokemonTypeDetail via PokeAPI', () => {
    const pokemonType = 'lighting';
    return getPokemonTypeDetail(pokemonType)
      .then((data) => expect(data).toBeDefined());
  });
});
