const getAllPokemon = () =>
  fetch('http://pokeapi.salestock.net:8000/api/v2/pokemon/?limit=30')
    .then((res) => {
      if (res.ok) return res.json();
      return null;
    })
    .catch(err => console.error(err));

const getPokemonDetail = (id) =>
  fetch(`http://pokeapi.salestock.net:8000/api/v2/pokemon/${id}`)
    .then((res) => {
      if (res.ok) return res.json();
      return null;
    })
    .catch(err => console.error(err));

export {getAllPokemon, getPokemonDetail};
