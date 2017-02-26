const getAllPokemon = (offset = 0) =>
  fetch(`//pokeapi.salestock.net:8000/api/v2/pokemon/?offset=${offset*30}&limit=30`)
    .then((res) => {
      if (res.ok) return res.json();
      return null;
    })
    .catch(err => console.error(err));

const getPokemonDetail = (id) =>
  fetch(`//pokeapi.salestock.net:8000/api/v2/pokemon/${id}`)
    .then((res) => {
      if (res.ok) return res.json();
      return null;
    })
    .catch(err => console.error(err));

const getAllPokemonTypes = () =>
  fetch('//pokeapi.salestock.net:8000/api/v2/type/')
    .then((res) => {
      if (res.ok) return res.json();
      return null;
    })
    .catch(err => console.error(err));

const getPokemonTypeDetail = (name) =>
  fetch(`//pokeapi.salestock.net:8000/api/v2/type/${name}/`)
    .then((res) => {
      if (res.ok) return res.json();
      return null;
    })
    .catch(err => console.error(err));

export {
  getAllPokemon,
  getPokemonDetail,
  getAllPokemonTypes,
  getPokemonTypeDetail,
};
