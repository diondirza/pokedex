import React, { PropTypes } from 'react';
import Item from './Item';

function List({ data, onClick, onScroll }) {
  return (
    <section className="pokedex-list" onScroll={onScroll}>
      <ul>
      {
        data ? data.map((obj, idx) =>
          <Item key={idx} data={obj} onClick={onClick} />
        ) : null
      }
      </ul>
    </section>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onScroll: PropTypes.func,
};

List.defaultProps = {
  onScroll: () => {},
}

export default List;
