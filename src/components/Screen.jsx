import React, { PropTypes } from 'react';

function Screen({ data }) {
  let src =  'https://d30y9cdsu7xlg0.cloudfront.net/png/58336-200.png';

  if(data) {
    const id = data.url.split('/')[6];
    src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  return (
    <div className="pokedex-screen">
      <img src={src} alt="selected pokemon" width="100" height="100"/>
    </div>
  )
}

Screen.propTypes = {
  data: PropTypes.object,
}

Screen.defaulProps = {
  data: null,
}

export default Screen;
