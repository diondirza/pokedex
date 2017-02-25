import React, { PropTypes } from 'react';
import Screen from './Screen';
import Detail from './Detail';

function Info({ data, loading }) {
  return (
    <section className="pokedex-info">
      <Screen id={data ? data.id : 0} loading={loading} />
      <Detail data={data ? data : null} />
    </section>
  );
}

Info.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};

Info.defaultProps = {
  data: null,
  loading: false,
};

export default Info;
