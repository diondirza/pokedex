import React, { PropTypes } from 'react';
import loadImg from '../../public/loading.gif';

function Screen({ id, loading }) {
  let src =  'https://d30y9cdsu7xlg0.cloudfront.net/png/58336-200.png';

  if(id) {
    src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  return (
    <div className="pokedex-screen">
      <img src={loading ? loadImg : src} alt="selected pokemon" width="100" height="100"/>
    </div>
  );
}

Screen.propTypes = {
  id: PropTypes.number,
  loading: PropTypes.bool,
};

Screen.defaulProps = {
  id: 0,
  loading: false,
};

export default Screen;
