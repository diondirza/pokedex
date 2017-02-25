import React, { PropTypes } from 'react';
import Screen from './Screen';
import Detail from './Detail';

function Info({ data }) {
  let id = 0;
  let pokemonData = null;

  if (data) {
    id = data.id;
    pokemonData = data;
  }

  return (
    <section className="pokedex-info">
      <Screen id={id} />
      <Detail data={pokemonData} />
    </section>
  );
}

Info.propTypes = {
  data: PropTypes.object,
};

Info.defaultProps = {
  data: null,
};

export default Info;
